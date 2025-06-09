import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'غير معروف';
  const userAgent = req.headers['user-agent'] || 'غير معروف';
  const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' });

  const filePath = path.join(process.cwd(), 'ips.txt');
  const logLine = `${now} - ${ip} - ${userAgent}\n`;

  fs.appendFileSync(filePath, logLine);

  res.status(200).json({ message: 'تم تسجيل الزيارة', ip, userAgent, time: now });
}
