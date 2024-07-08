const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// 시크릿 키 생성
const secretKey = crypto.randomBytes(64).toString('hex');

// .env 파일 경로 설정
const envFilePath = path.join(__dirname, '.env');

// .env 파일 내용 생성
const envFileContent = `JWT_SECRET=${secretKey}\n`;

// .env 파일에 시크릿 키 저장
fs.writeFileSync(envFilePath, envFileContent, { encoding: 'utf8', flag: 'w' });

console.log(`Secret key generated and saved to ${envFilePath}`);
