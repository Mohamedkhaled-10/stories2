// /api/log-ip.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // جلب الـ IP
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // مسار ملف ips.txt داخل مجلد root
  const filePath = path.join(process.cwd(), 'ips.txt');

  // سجل الـ IP في الملف مع سطر جديد
  fs.appendFileSync(filePath, ip + '\n');

  res.status(200).json({ message: 'IP recorded', ip });
}
