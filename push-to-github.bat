@echo off
cd /d "%~dp0"
echo ============================================
echo  Enviando o projeto para o GitHub...
echo ============================================
echo.

git init
git remote add origin https://github.com/robertcloud01/My-Portif-lio.git 2>nul
git fetch origin
git symbolic-ref HEAD refs/heads/main
git reset origin/main
git add -A
git commit -m "Redesign landing page: pricing, process, benefits, FAQ, pixel dividers, WhatsApp contact e footer novo"
git push -u origin main

echo.
echo ============================================
echo  Pronto. Copie TODO o texto acima e mande
echo  para o Claude se aparecer algum erro.
echo ============================================
pause
