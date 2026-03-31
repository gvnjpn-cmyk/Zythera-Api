export default function handler(req, res) {
  const hasil = Math.random() < 0.5 ? 'Heads' : 'Tails';
  const emoji = hasil === 'Heads' ? '🪙' : '🔄';
  res.json({ hasil, emoji, text: `${emoji} *${hasil}*` });
}
