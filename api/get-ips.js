let visits = [];

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
  const userAgent = req.headers['user-agent'] || 'غير معروف';
  const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' });

  if (ip) {
    // نتأكد إن الزيارة دي مش مكررة بنفس الـ IP والوقت بالثواني
    // لكن ممكن نزود كل زيارة مع الوقت عشان نعرف كل دخول
    visits.push({ ip, time: now, userAgent });
  }

  res.status(200).json({ visits });
}
