@echo off
git add .
git commit -m "Update contact form to use WhatsApp"
git push
call npm run deploy
