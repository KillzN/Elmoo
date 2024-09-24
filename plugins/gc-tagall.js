let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`
  let teks = `*🎀 𝗕𝗮𝗿𝗯𝗶𝗲 𝘃𝘀 𝗺𝗮𝗹𝗮𝘀 𝘆 𝗮𝘀𝗶́.*\n\n ${oi}\n\n➥ _*𝗕𝗮𝗿𝗯𝗶𝗰𝗶𝘁𝗮 𝗶𝗻𝘃𝗼𝗰𝗮𝗻𝗱𝗼 𝗮 𝗹@𝘀 𝗳𝗹𝗼𝗷@𝘀 𝗹𝗲𝘃𝗮𝗻𝘁𝗲𝗻 𝗰𝘂𝗹𝗼𝘀 𝘃𝗮𝗴𝗼𝘀:*_\n`
  for (let mem of participants) {
  teks += `🥷🏼 @${mem.id.split('@')[0]}\n`}
  teks += `└ *BᴀʀʙɪᴇBᴏᴛ ⇝@xbarbicita.7*`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|putos|animales)$/i
  handler.admin = true
  handler.group = true
  export default handler