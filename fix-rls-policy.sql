-- RLS 정책 수정/재생성 스크립트
-- Supabase SQL Editor에서 실행하세요

-- 기존 정책 모두 삭제
DROP POLICY IF EXISTS "Allow anonymous inserts" ON project_inquiries;
DROP POLICY IF EXISTS "Enable insert for anon" ON project_inquiries;
DROP POLICY IF EXISTS "Enable insert for all" ON project_inquiries;

-- RLS 활성화 확인
ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

-- 새로운 정책 생성 (anon 역할)
CREATE POLICY "Allow anonymous inserts" ON project_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- public 역할에도 허용 (혹시 모를 경우를 대비)
CREATE POLICY "Allow public inserts" ON project_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- 정책 확인
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'project_inquiries';

