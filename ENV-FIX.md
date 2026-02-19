# 환경 변수 문제 해결 가이드

## 문제: 환경 변수가 로드되지 않음

### 해결 방법 1: 파일 위치 확인

`.env.local` 파일이 **프로젝트 루트**에 있어야 합니다:
```
아메리카웹/
  ├── .env.local  ← 여기에 있어야 함
  ├── package.json
  ├── next.config.mjs
  └── app/
```

### 해결 방법 2: 파일 내용 형식 확인

`.env.local` 파일 내용이 정확히 다음과 같아야 합니다:

```env
NEXT_PUBLIC_SUPABASE_URL=https://yirrppsccfgchabzppow.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpcnJwcHNjY2ZnY2hhYnpwcG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MDE5MzAsImV4cCI6MjA4NzA3NzkzMH0.VrRemBjMjwoqhotLmldtTpSRf7Muv-C3tyDAlxL29Ac
```

**주의사항:**
- 각 줄 끝에 공백이나 특수문자 없어야 함
- 따옴표(`"` 또는 `'`) 없이 작성
- `=` 앞뒤에 공백 없어야 함
- 빈 줄이나 주석(`#`)은 괜찮음

### 해결 방법 3: 파일 인코딩 확인

1. VS Code에서 `.env.local` 파일 열기
2. 우측 하단의 인코딩 표시 확인
3. **UTF-8**로 되어 있어야 함
4. 만약 다른 인코딩이면:
   - 우측 하단 클릭 → "Save with Encoding" → "UTF-8" 선택

### 해결 방법 4: 서버 완전 재시작

1. 터미널에서 `Ctrl + C`로 서버 중지
2. **모든 터미널 창 닫기** (확실하게)
3. 새 터미널 열기
4. 프로젝트 폴더로 이동
5. `npm run dev` 실행

### 해결 방법 5: .env 파일로 시도

`.env.local`이 작동하지 않으면 `.env` 파일로 시도:

1. `.env.local` 파일 복사
2. `.env` 파일로 저장 (`.local` 제거)
3. 서버 재시작

### 해결 방법 6: 환경 변수 직접 확인

터미널에서 다음 명령어로 확인:

```bash
# Windows PowerShell
$env:NEXT_PUBLIC_SUPABASE_URL

# Git Bash
echo $NEXT_PUBLIC_SUPABASE_URL
```

값이 나오면 환경 변수는 설정되어 있지만 Next.js가 읽지 못하는 것입니다.

### 해결 방법 7: 임시 테스트 (개발용만)

`app/api/inquiries/route.ts` 파일에서 임시로 하드코딩:

```typescript
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yirrppsccfgchabzppow.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your_key_here';
```

**주의**: 이 방법은 개발용으로만 사용하고, 실제 배포 전에는 제거해야 합니다!

