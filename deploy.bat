@echo off
chcp 65001 >nul
git remote add origin https://github.com/Sanghoonhan1334/Webamerica.git 2>nul
git branch -M main
git push -u origin main
pause

