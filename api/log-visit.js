let logs = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username = 'زائر مجهول', action, timestamp } = req.body;

    logs.push({ username, action, timestamp });

    res.status(200).json({ status: 'تم تسجيل العملية بنجاح' });
  } else if (req.method === 'GET') {
    res.status(200).json(logs);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
