import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'ips.txt');

  if (!fs.existsSync(filePath)) {
    return res.status(200).json({ visits: [] });
  }

  const data = fs.readFileSync(filePath, 'utf-8');
  // كل سطر = "التاريخ - IP - UserAgent"
  const visits = data.trim().split('\n').map(line => {
    const [time, ip, ...uaParts] = line.split(' - ');
    const userAgent = uaParts.join(' - '); // لو الـ user-agent فيه "-"

    return { time, ip, userAgent };
  });

  res.status(200).json({ visits });
}
