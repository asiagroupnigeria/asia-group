#!/bin/bash
# Quick Build Script for PDF Generation

echo "🎨 PDF Publishing Studio - Build Script"
echo "=========================================="
echo ""

# Function to build PDF
build_pdf() {
    local html=$1
    local pdf=$2
    local styles=$3
    
    echo "📘 Building: $pdf"
    prince $html -o $pdf $styles
    
    if [ -f "$pdf" ]; then
        echo "✅ Success: $pdf created"
    else
        echo "❌ Error: Failed to create $pdf"
    fi
    echo ""
}

# Build all PDFs
build_pdf "company-profile.html" "company-profile.pdf" "-s styles-base.css -s styles-profile.css"
build_pdf "product-catalogue.html" "product-catalogue.pdf" "-s styles-base.css -s styles-catalogue.css"
build_pdf "brochure.html" "brochure.pdf" "-s styles-base.css -s styles-brochure.css"
build_pdf "annual-report.html" "annual-report.pdf" "-s styles-base.css -s styles-report.css"

echo "=========================================="
echo "✨ All PDFs generated successfully!"
echo ""
