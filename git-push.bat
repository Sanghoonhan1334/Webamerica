@echo off
cd /d "%~dp0"
git add .
git commit -m "이미지 연결 및 UI 개선: 로고, 팀원 사진, 프로세스 이미지 연결 완료"
git push origin main
