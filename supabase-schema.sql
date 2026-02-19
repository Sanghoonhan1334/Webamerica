-- Supabase에서 실행할 SQL 스크립트
-- Table Editor 또는 SQL Editor에서 실행하세요

-- project_inquiries 테이블 생성
CREATE TABLE IF NOT EXISTS project_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  market TEXT NOT NULL,
  stage TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 추가 (조회 성능 향상)
CREATE INDEX IF NOT EXISTS idx_project_inquiries_created_at ON project_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_email ON project_inquiries(email);

-- Row Level Security (RLS) 설정
ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

-- Anon Key로 INSERT 허용 정책 추가
-- API 라우트에서 Anon Key를 사용하므로 이 정책이 필요합니다
-- 정책이 이미 존재하면 에러가 발생하므로, 먼저 삭제 후 생성
DROP POLICY IF EXISTS "Allow anonymous inserts" ON project_inquiries;

CREATE POLICY "Allow anonymous inserts" ON project_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 참고: 이 정책은 누구나 INSERT할 수 있게 합니다.
-- 보안을 강화하려면 특정 조건을 추가할 수 있습니다 (예: 특정 도메인에서만 접근 등)

