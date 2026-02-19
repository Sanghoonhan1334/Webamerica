import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

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

    // 성공 응답 (이메일 발송은 나중에 추가)
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

