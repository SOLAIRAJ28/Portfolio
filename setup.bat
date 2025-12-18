@echo off
echo ================================
echo Portfolio Website Setup
echo ================================
echo.
echo This script will help you set up your portfolio website.
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✓ Node.js is installed
node --version
echo.

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed!
    echo Please install npm (comes with Node.js)
    echo.
    pause
    exit /b 1
)

echo ✓ npm is installed
npm --version
echo.

echo ================================
echo Installing Dependencies...
echo ================================
echo.
echo This may take a few minutes...
echo.

npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Installation failed!
    echo Please check the error messages above.
    echo.
    pause
    exit /b 1
)

echo.
echo ================================
echo ✓ Installation Complete!
echo ================================
echo.
echo Next Steps:
echo.
echo 1. Edit src\data\portfolio.js with your information
echo 2. Add your images to public\images\
echo 3. Run: npm run dev
echo.
echo For detailed instructions, see GET_STARTED.md
echo.
echo Ready to start? Run: npm run dev
echo.
pause
