-- 최종 RLS 정책 수정 스크립트
-- Supabase SQL Editor에서 실행하세요

-- 기존 정책 모두 삭제
DROP POLICY IF EXISTS "Allow anonymous inserts" ON project_inquiries;
DROP POLICY IF EXISTS "Allow public inserts" ON project_inquiries;
DROP POLICY IF EXISTS "Enable insert for anon" ON project_inquiries;
DROP POLICY IF EXISTS "Enable insert for all" ON project_inquiries;
DROP POLICY IF EXISTS "Allow all inserts" ON project_inquiries;
DROP POLICY IF EXISTS "Allow authenticated inserts" ON project_inquiries;

-- RLS 활성화 확인
ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

-- 가장 관대한 정책: 모든 역할에 대해 INSERT 허용
-- TO 절을 생략하면 모든 역할에 적용됩니다
CREATE POLICY "Allow all inserts" ON project_inquiries
  FOR INSERT
  WITH CHECK (true);

-- 정책 확인
SELECT 
  policyname,
  roles,
  cmd,
  with_check
FROM pg_policies 
WHERE tablename = 'project_inquiries';

