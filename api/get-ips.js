let ips = [];  // هنا هنجمع IPs مؤقتًا في الذاكرة (دا مش مثالي للانتاج)

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;

  if (ip && !ips.includes(ip)) {
    ips.push(ip);
  }

  res.status(200).json({ ips });
}
