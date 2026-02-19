# Supabase 설정 가이드

## 1. Supabase 테이블 생성

1. Supabase 대시보드에 로그인
2. 프로젝트 선택
3. 왼쪽 메뉴에서 **SQL Editor** 클릭
4. `supabase-schema.sql` 파일의 내용을 복사하여 실행

또는 Table Editor에서 수동으로 생성:

### 테이블: `project_inquiries`

| 컬럼명 | 타입 | 설정 |
|--------|------|------|
| id | uuid | Primary Key, Default: gen_random_uuid() |
| name | text | NOT NULL |
| email | text | NOT NULL |
| market | text | NOT NULL |
| stage | text | NOT NULL |
| description | text | NOT NULL |
| created_at | timestamptz | Default: NOW() |

**RLS (Row Level Security)**: 활성화
- Anon Key로 INSERT 가능하도록 정책 추가 필요 (supabase-schema.sql에 포함)

## 2. 환경 변수 확인

`.env.local` 파일에 다음 변수가 설정되어 있는지 확인:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

**참고**: 
- `NEXT_PUBLIC_SUPABASE_URL`과 `NEXT_PUBLIC_SUPABASE_ANON_KEY`는 Supabase 대시보드 > Settings > API에서 확인
- **Service Role Key는 필요 없습니다** (Anon Key만 사용)

## 3. 개발 서버 실행 및 테스트

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 후:

1. 페이지 하단의 "프로젝트 문의" 섹션으로 스크롤
2. 폼을 작성하고 제출
3. Supabase 대시보드 > Table Editor > `project_inquiries`에서 데이터 확인

## 4. 문제 해결

### 에러: "relation 'project_inquiries' does not exist"
- SQL 스크립트가 제대로 실행되지 않았습니다. `supabase-schema.sql`을 다시 실행하세요.

### 에러: "new row violates row-level security policy"
- RLS 정책이 제대로 설정되지 않았습니다.
- SQL Editor에서 `supabase-schema.sql` 파일의 RLS 정책 부분을 다시 실행하세요.

### 에러: "Invalid API key"
- 환경 변수가 올바르게 설정되지 않았습니다.
- `.env.local` 파일을 확인하고 개발 서버를 재시작하세요.

