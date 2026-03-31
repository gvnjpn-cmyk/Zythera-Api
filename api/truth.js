const TRUTHS = [
  'Apa hal paling memalukan yang pernah kamu lakukan?',
  'Siapa crush pertamamu?',
  'Apa kebohongan terbesar yang pernah kamu katakan?',
  'Pernah nangis gara-gara game atau film apa?',
  'Hal apa yang paling kamu sesali dalam hidupmu?',
  'Siapa orang yang paling kamu hindari dan kenapa?',
  'Apa rahasia terbesarmu yang belum pernah kamu ceritakan?',
  'Pernahkah kamu suka sama teman sendiri?',
  'Apa yang biasanya kamu lakukan saat tidak ada yang lihat?',
  'Hal paling bodoh yang pernah kamu lakukan karena suka sama seseorang?',
  'Pernahkah kamu berbohong kepada orang tuamu? Tentang apa?',
  'Apa yang paling kamu takuti tapi malu untuk diakui?',
];

export default function handler(req, res) {
  const pertanyaan = TRUTHS[Math.floor(Math.random() * TRUTHS.length)];
  res.json({ pertanyaan, type: 'truth' });
}
