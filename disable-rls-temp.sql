-- 임시: RLS 비활성화 (개발/테스트용)
-- Supabase SQL Editor에서 실행하세요
-- ⚠️ 주의: 프로덕션에서는 보안을 위해 RLS를 활성화해야 합니다

-- RLS 비활성화
ALTER TABLE project_inquiries DISABLE ROW LEVEL SECURITY;

-- 확인
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE tablename = 'project_inquiries';

