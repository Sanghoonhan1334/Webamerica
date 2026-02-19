# 환경 변수 디버깅 가이드

## 문제: `.env.local` 파일이 로드되지 않음

### 확인 사항

1. **파일 위치**
   - `.env.local` 파일이 **프로젝트 루트**에 있어야 합니다
   - `package.json`과 같은 위치에 있어야 합니다
   - 경로: `아메리카웹/.env.local`

2. **파일명 확인**
   - 정확히 `.env.local` (앞에 점 포함)
   - `.env.local.txt` 같은 확장자가 있으면 안 됩니다
   - VS Code에서 파일명을 확인하세요

3. **파일 내용 형식**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://yirrppsccfgchabzppow.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
   - 각 줄 끝에 공백 없어야 함
   - 따옴표 없이 작성
   - `=` 앞뒤에 공백 없어야 함

4. **파일 인코딩**
   - VS Code에서 파일 열기
   - 우측 하단의 인코딩 표시 확인
   - **UTF-8**로 되어 있어야 함
   - 다른 인코딩이면: "Save with Encoding" → "UTF-8" 선택

### 해결 방법

#### 방법 1: `.env` 파일로 시도
`.env.local`이 작동하지 않으면 `.env` 파일로 시도:

1. `.env.local` 파일 복사
2. `.env` 파일로 저장 (`.local` 제거)
3. 서버 재시작

#### 방법 2: 파일 재생성
1. 기존 `.env.local` 파일 삭제
2. 새로 생성
3. 내용 입력 (복사-붙여넣기 주의)
4. 서버 재시작

#### 방법 3: Next.js 캐시 삭제
```bash
# .next 폴더 삭제
rm -rf .next

# 또는 Windows에서
rmdir /s .next

# 서버 재시작
npm run dev
```

### 테스트

환경 변수가 로드되는지 확인:

```bash
npm run test-env
```

또는 브라우저에서:
```
http://localhost:3000/api/test-env
```

### 최후의 수단

환경 변수가 계속 로드되지 않으면:
1. `next.config.mjs`에서 직접 설정 (권장하지 않음)
2. 또는 하드코딩 유지 (개발용만)

