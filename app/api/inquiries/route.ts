import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// 환경 변수는 함수 내에서 확인 (안전하게 처리)
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase environment variables are missing');
  }

  // 서버 사이드에서 사용할 때는 auth를 명시적으로 비활성화
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // 환경 변수 디버깅
    console.log('=== 환경 변수 디버깅 ===');
    console.log('NEXT_PUBLIC_SUPABASE_URL 존재:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('NEXT_PUBLIC_SUPABASE_URL 값:', process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30) || 'undefined');
    console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY 존재:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY 값:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 30) || 'undefined');
    
    // Supabase 클라이언트 초기화 (환경 변수 확인 포함)
    let supabase;
    try {
      supabase = getSupabaseClient();
      console.log('✅ Supabase 클라이언트 초기화 완료');
    } catch (envError) {
      console.error('❌ 환경 변수 누락:');
      console.error('  NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ MISSING');
      console.error('  NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ MISSING');
      
      return NextResponse.json(
        { 
          error: '서버 설정 오류가 발생했습니다. 환경 변수를 확인해주세요.',
          details: envError instanceof Error ? envError.message : 'Supabase credentials are missing',
          hint: '.env.local 파일을 확인하고 개발 서버를 재시작하세요.'
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, market, stage, description } = body;

    console.log('Received inquiry:', { name, email, market, stage, description: description?.substring(0, 50) });

    // 필수 필드 검증
    if (!name || !email || !market || !stage || !description) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '유효하지 않은 이메일 주소입니다.' },
        { status: 400 }
      );
    }

    // Supabase에 저장
    console.log('Attempting to insert into Supabase...');
    
    const { data, error } = await supabase
      .from('project_inquiries')
      .insert([
        {
          name,
          email,
          market,
          stage,
          description,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('❌ Supabase 에러 발생:');
      console.error('  Message:', error.message);
      console.error('  Code:', error.code);
      console.error('  Details:', error.details);
      console.error('  Hint:', error.hint);
      
      return NextResponse.json(
        { 
          error: '문의 저장 중 오류가 발생했습니다.', 
          details: error.message,
          code: error.code,
          hint: error.hint || 'Supabase 연결을 확인해주세요.',
        },
        { status: 500 }
      );
    }

    console.log('Successfully inserted inquiry:', data);

    // 알림 이메일 발송 (Resend) — 환경 변수 있을 때만
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL;
    if (resendApiKey && notifyEmail) {
      console.log('📧 알림 이메일 발송 시도 →', notifyEmail.replace(/(.{2}).*(@.*)/, '$1***$2'));
      const resend = new Resend(resendApiKey);
      const createdAt = data?.created_at
        ? new Date(data.created_at).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
        : new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
      const subject = `[웹아메리카] 새 문의: ${market}/${stage} - ${name}`;
      const html = `
        <h2>새 문의가 접수되었습니다</h2>
        <ul>
          <li><strong>이름</strong>: ${name}</li>
          <li><strong>이메일</strong>: ${email}</li>
          <li><strong>시장</strong>: ${market}</li>
          <li><strong>단계</strong>: ${stage}</li>
          <li><strong>요약</strong>:<br/><pre style="white-space:pre-wrap;font-family:inherit;">${description}</pre></li>
          <li><strong>제출 시각</strong>: ${createdAt}</li>
        </ul>
      `;
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: process.env.RESEND_FROM ?? '웹아메리카 <onboarding@resend.dev>',
        to: [notifyEmail],
        subject,
        html,
      });
      if (emailError) {
        console.error('❌ 알림 이메일 발송 실패:', JSON.stringify(emailError, null, 2));
      } else {
        console.log('✅ 알림 이메일 발송 완료, id:', emailData?.id);
      }
    } else {
      if (!resendApiKey) console.warn('⚠️ RESEND_API_KEY 미설정 — 알림 이메일 미발송');
      if (!notifyEmail) console.warn('⚠️ NOTIFY_EMAIL 미설정 — 알림 이메일 미발송');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: '문의가 성공적으로 저장되었습니다.',
        data 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ API 예외 발생:');
    console.error('  Error:', error);
    console.error('  Type:', error instanceof Error ? error.constructor.name : typeof error);
    
    return NextResponse.json(
      { 
        error: '서버 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

