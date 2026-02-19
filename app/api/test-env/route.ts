import { NextResponse } from 'next/server';

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return NextResponse.json({
    hasUrl: !!supabaseUrl,
    urlLength: supabaseUrl?.length || 0,
    urlPreview: supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : 'MISSING',
    hasKey: !!supabaseAnonKey,
    keyLength: supabaseAnonKey?.length || 0,
    keyPreview: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 30)}...` : 'MISSING',
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('SUPABASE')),
  });
}

