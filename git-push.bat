@echo off
chcp 65001 >nul
echo Git 상태 확인 중...
git status
echo.
echo 변경사항 추가 중...
git add .
echo.
echo 커밋 중...
git commit -m "문의 폼 제출 기능 구현 및 Supabase 연동 완료"
echo.
echo 푸시 중...
git push origin main
echo.
echo 완료!
pause

