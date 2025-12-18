#!/bin/bash

echo "================================"
echo "Portfolio Website Setup"
echo "================================"
echo ""
echo "This script will help you set up your portfolio website."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    echo ""
    exit 1
fi

echo "✓ Node.js is installed"
node --version
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "ERROR: npm is not installed!"
    echo "Please install npm (comes with Node.js)"
    echo ""
    exit 1
fi

echo "✓ npm is installed"
npm --version
echo ""

echo "================================"
echo "Installing Dependencies..."
echo "================================"
echo ""
echo "This may take a few minutes..."
echo ""

npm install

if [ $? -ne 0 ]; then
    echo ""
    echo "ERROR: Installation failed!"
    echo "Please check the error messages above."
    echo ""
    exit 1
fi

echo ""
echo "================================"
echo "✓ Installation Complete!"
echo "================================"
echo ""
echo "Next Steps:"
echo ""
echo "1. Edit src/data/portfolio.js with your information"
echo "2. Add your images to public/images/"
echo "3. Run: npm run dev"
echo ""
echo "For detailed instructions, see GET_STARTED.md"
echo ""
echo "Ready to start? Run: npm run dev"
echo ""
