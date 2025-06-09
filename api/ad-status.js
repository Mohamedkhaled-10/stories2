let adEnabled = true;  // الحالة الافتراضية

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ enabled: adEnabled });
  } else if (req.method === 'POST') {
    const { enabled } = req.body;
    if (typeof enabled === 'boolean') {
      adEnabled = enabled;
      res.status(200).json({ success: true, enabled });
    } else {
      res.status(400).json({ success: false, message: 'Invalid value' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
