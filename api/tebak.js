// Stateless tebak angka — state disimpan di client (bot)
export default function handler(req, res) {
  const { action, angka, tebakan } = req.query;

  // Mulai game baru
  if (action === 'start') {
    const jawaban = Math.floor(Math.random() * 100) + 1;
    return res.json({ jawaban, message: 'Game dimulai! Tebak angka 1-100 dalam 7 percobaan.' });
  }

  // Cek tebakan
  if (action === 'guess') {
    const a = parseInt(angka);
    const t = parseInt(tebakan);
    if (isNaN(a) || isNaN(t)) return res.status(400).json({ error: 'Parameter tidak valid' });

    if (t === a) return res.json({ result: 'benar', message: `🎉 Benar! Angkanya ${a}` });
    if (t < a)  return res.json({ result: 'kecil', message: '📈 Terlalu kecil!' });
    return res.json({ result: 'besar', message: '📉 Terlalu besar!' });
  }

  res.status(400).json({ error: 'action harus start atau guess' });
}
