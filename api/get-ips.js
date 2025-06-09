// /api/get-ips.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'ips.txt');

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const ips = data.split('\n').filter(ip => ip);
    res.status(200).json({ ips });
  } catch (err) {
    res.status(500).json({ error: 'Cannot read IPs file' });
  }
}
