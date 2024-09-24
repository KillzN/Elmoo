const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*NikolBot Te menciona  ✍* ${pesan}`;
  let teks = `*⺀ꨄ 𝐌𝐄𝐍𝐂𝐈𝐎𝐍 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 ꨄ⺀*\n\n ${oi}\n\n➥ _*╭ ⊹✨ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴: *_\n`;
  for (const mem of participants) {
    teks += `┊ᡣ𐭩 @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰───── 𝐍𝐢𝐤𝐨𝐥 𝐁𝐨𝐭 ─────╯`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación|putos)$/i;
handler.admin = true;
handler.group = true;
export default handler;