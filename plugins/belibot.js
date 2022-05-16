let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :     *Rp 15000*
╠➥ *1 Bulan* :      *Rp 20000*
╠➥ *2 Bulan* :      *Rp 30000*
╠➥ *Permanen* : *Rp 40000*
╠➥ *Owner* :   *Rp 30000*/bln
╠➥ *Nomer Gopay & pulsa* : 
║    > Ke Owner <
╠═〘 PEMBAYARAN 〙 ═
╠➥ Dana Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©1992 Rpg Rull-MD
╠═ Script original by Nurutomo
╠═〘 Rull 〙 ═`.trim(), watermark, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewabot$/i

module.exports = handler
