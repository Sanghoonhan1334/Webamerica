@echo off
cd /d "%~dp0"
git add .
git commit -m "문의 폼 제출 기능 구현 및 Supabase 연동 완료"
git push origin main

