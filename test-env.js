// 환경 변수 테스트 스크립트
// node test-env.js 로 실행

require('dotenv').config({ path: '.env.local' });

console.log('=== 환경 변수 테스트 ===');
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing');
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing');

if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.log('URL 값 (처음 30자):', process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 30));
}
if (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.log('KEY 값 (처음 30자):', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 30));
}

