export default function handler(req, res) {
  const hasil = Math.floor(Math.random() * 6) + 1;
  const emoji = ['⚀','⚁','⚂','⚃','⚄','⚅'][hasil - 1];
  res.json({ hasil, emoji, text: `${emoji} *${hasil}*` });
}
