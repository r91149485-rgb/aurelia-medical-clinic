@echo off
title Aurelia Medical Clinic - Dev Server
echo ========================================================
echo   Starting Aurelia Medical Clinic Website...
echo   Open your browser at: http://localhost:3000
echo ========================================================
set PATH=C:\Users\Sohan Kabani\.gemini\antigravity\scratch\tools\node;%PATH%
cd /d "C:\Users\Sohan Kabani\.gemini\antigravity\scratch\aurelia-medical-clinic"
npm start
pause
