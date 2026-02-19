@echo off
chcp 65001 >nul
git init
git add .
git commit -m "Initial commit: 웹아메리카 랜딩 페이지"
git remote add origin https://github.com/Sanghoonhan1334/Webamerica.git
git branch -M main
git push -u origin main

