// 환경 변수 확인 스크립트
// node verify-env.js 로 실행

const fs = require('fs');
const path = require('path');

console.log('=== .env 파일 확인 ===');

// .env 파일 경로
const envPath = path.join(__dirname, '.env');
const envLocalPath = path.join(__dirname, '.env.local');

console.log('현재 디렉토리:', __dirname);
console.log('.env 파일 존재:', fs.existsSync(envPath));
console.log('.env.local 파일 존재:', fs.existsSync(envLocalPath));

if (fs.existsSync(envPath)) {
  console.log('\n.env 파일 내용:');
  const content = fs.readFileSync(envPath, 'utf8');
  console.log(content);
  
  // 각 줄 확인
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (line.trim() && !line.startsWith('#')) {
      console.log(`줄 ${index + 1}: ${line.trim()}`);
    }
  });
}

// dotenv로 로드 시도
try {
  require('dotenv').config({ path: envPath });
  console.log('\n=== dotenv로 로드 후 ===');
  console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing');
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing');
} catch (error) {
  console.error('dotenv 로드 실패:', error.message);
}

