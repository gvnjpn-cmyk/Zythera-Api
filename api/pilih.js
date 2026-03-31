export default function handler(req, res) {
  const { options } = req.body || req.query;
  if (!options) return res.status(400).json({ error: 'Parameter options diperlukan' });
  const list = (Array.isArray(options) ? options : options.split('/')).map(s => s.trim()).filter(Boolean);
  if (list.length < 2) return res.status(400).json({ error: 'Minimal 2 pilihan' });
  const hasil = list[Math.floor(Math.random() * list.length)];
  res.json({ hasil, total: list.length, pilihan: list });
}
