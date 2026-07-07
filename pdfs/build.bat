@echo off
REM Professional PDF Publishing Studio - Build Script

echo.
echo =========================================
echo PDF Publishing Studio - Build All PDFs
echo =========================================
echo.

REM Check if Prince is installed
where prince >nul 2>nul
if errorlevel 1 (
    echo ERROR: Prince XML not found!
    echo Please install from: https://www.princexml.com/download/
    pause
    exit /b 1
)

setlocal enabledelayedexpansion

set COUNTER=0

REM Build Company Profile
echo.
echo [1] Building Company Profile...
prince company-profile.html -o company-profile.pdf -s styles-base.css -s styles-profile.css
if exist company-profile.pdf (
    echo ✓ Success: company-profile.pdf
    set /a COUNTER+=1
) else (
    echo ✗ Failed: company-profile.pdf
)

REM Build Product Catalogue
echo.
echo [2] Building Product Catalogue...
prince product-catalogue.html -o product-catalogue.pdf -s styles-base.css -s styles-catalogue.css
if exist product-catalogue.pdf (
    echo ✓ Success: product-catalogue.pdf
    set /a COUNTER+=1
) else (
    echo ✗ Failed: product-catalogue.pdf
)

REM Build Brochure
echo.
echo [3] Building Brochure...
prince brochure.html -o brochure.pdf -s styles-base.css -s styles-brochure.css
if exist brochure.pdf (
    echo ✓ Success: brochure.pdf
    set /a COUNTER+=1
) else (
    echo ✗ Failed: brochure.pdf
)

REM Build Annual Report
echo.
echo [4] Building Annual Report...
prince annual-report.html -o annual-report.pdf -s styles-base.css -s styles-report.css
if exist annual-report.pdf (
    echo ✓ Success: annual-report.pdf
    set /a COUNTER+=1
) else (
    echo ✗ Failed: annual-report.pdf
)

echo.
echo =========================================
echo Build Complete: !COUNTER!/4 PDFs Created
echo =========================================
echo.
pause
