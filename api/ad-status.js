let adActive = true; // القيمة الافتراضية

export default function handler(req, res) {
  if (req.method === 'GET') {
    // ترجع الحالة الحالية
    res.status(200).json({ active: adActive });
  } else if (req.method === 'POST') {
    // تغير الحالة بناء على الطلب
    const { active } = req.body;
    if (typeof active === 'boolean') {
      adActive = active;
      res.status(200).json({ active: adActive });
    } else {
      res.status(400).json({ error: 'Invalid active value' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
