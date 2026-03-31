const PERTANYAAN = [
  { q: 'Siapakah yang paling rajin di sini?', emoji: '📚' },
  { q: 'Siapakah yang paling sering ghosting?', emoji: '👻' },
  { q: 'Siapakah yang paling drama?', emoji: '🎭' },
  { q: 'Siapakah yang paling gampang baper?', emoji: '😢' },
  { q: 'Siapakah yang paling sering telat?', emoji: '⏰' },
  { q: 'Siapakah yang paling receh?', emoji: '😂' },
  { q: 'Siapakah yang paling setia?', emoji: '💕' },
  { q: 'Siapakah yang paling sering pinjam uang?', emoji: '💸' },
  { q: 'Siapakah yang paling susah bangun pagi?', emoji: '😴' },
  { q: 'Siapakah yang paling sering PHP-in orang?', emoji: '💔' },
];

export default function handler(req, res) {
  const p = PERTANYAAN[Math.floor(Math.random() * PERTANYAAN.length)];
  res.json({ pertanyaan: p.q, emoji: p.emoji });
}
