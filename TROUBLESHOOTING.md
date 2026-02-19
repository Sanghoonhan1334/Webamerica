# 문제 해결 가이드

## 데이터가 저장되지 않는 경우

### 1. 환경 변수 확인

`.env.local` 파일이 프로젝트 루트에 있는지 확인하고, 다음 내용이 정확히 들어가 있는지 확인하세요:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**중요**: 
- `NEXT_PUBLIC_`로 시작하는 변수는 클라이언트에서도 접근 가능합니다
- `SUPABASE_SERVICE_ROLE_KEY`는 서버에서만 사용되므로 `NEXT_PUBLIC_` 접두사가 **없어야** 합니다
- 환경 변수를 변경한 후에는 **반드시 개발 서버를 재시작**해야 합니다

### 2. Supabase 키 확인 방법

1. Supabase 대시보드 접속
2. Settings (⚙️) → API 클릭
3. 다음 정보 확인:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`에 입력
   - **anon public** 키 → `NEXT_PUBLIC_SUPABASE_ANON_KEY`에 입력
   - **service_role** 키 (비밀번호 표시 클릭) → `SUPABASE_SERVICE_ROLE_KEY`에 입력

### 3. 테이블 구조 확인

Supabase Table Editor에서 `project_inquiries` 테이블의 컬럼이 다음과 같이 설정되어 있는지 확인:

- `id` (uuid, Primary Key, Default: gen_random_uuid())
- `name` (text, NOT NULL)
- `email` (text, NOT NULL)
- `market` (text, NOT NULL)
- `stage` (text, NOT NULL)
- `description` (text, NOT NULL)
- `created_at` (timestamptz, Default: NOW())

### 4. 에러 확인 방법

#### 브라우저 콘솔
1. F12 키 누르기
2. Console 탭 클릭
3. 폼 제출 후 에러 메시지 확인

#### 터미널 로그
개발 서버를 실행한 터미널에서 다음 메시지 확인:
- `Supabase error details:` - Supabase 관련 에러
- `API error:` - 일반 API 에러
- `Received inquiry:` - 요청이 도착했는지 확인

### 5. 일반적인 문제들

#### 문제: "relation 'project_inquiries' does not exist"
**해결**: SQL Editor에서 `supabase-schema.sql` 파일의 내용을 다시 실행하세요.

#### 문제: "new row violates row-level security policy"
**해결**: Service Role Key가 올바르게 설정되어 있는지 확인하세요. Service Role Key는 RLS를 우회합니다.

#### 문제: "Invalid API key"
**해결**: 
- 환경 변수가 올바른지 확인
- `.env.local` 파일이 프로젝트 루트에 있는지 확인
- 개발 서버를 재시작

#### 문제: 환경 변수가 읽히지 않음
**해결**: 
1. `.env.local` 파일이 `.gitignore`에 포함되어 있는지 확인 (보안)
2. 파일명이 정확히 `.env.local`인지 확인 (앞에 점 포함)
3. 개발 서버 완전히 종료 후 재시작

### 6. 테스트 방법

터미널에서 다음 명령어로 환경 변수가 제대로 로드되는지 확인:

```bash
# Windows PowerShell
$env:NEXT_PUBLIC_SUPABASE_URL

# 또는 Git Bash
echo $NEXT_PUBLIC_SUPABASE_URL
```

### 7. 수동 테스트

Supabase Table Editor에서 직접 데이터를 추가해보세요:
1. Table Editor → `project_inquiries` 선택
2. "Insert row" 클릭
3. 데이터 입력 후 저장
4. 저장이 되면 테이블은 정상입니다

### 8. API 직접 테스트

브라우저 콘솔에서 다음 코드를 실행해보세요:

```javascript
fetch('/api/inquiries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: '테스트',
    email: 'test@example.com',
    market: '한국 시장',
    stage: '아이디어 단계',
    description: '테스트 설명'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

이렇게 하면 API가 제대로 작동하는지 확인할 수 있습니다.

