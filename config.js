const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port=5000
global.email = 'samsamsun789@gmail.com'
global.github = 'https://chat.whatsapp.com/EZe0MlgU0xo8GXtkCpqS0M'
global.location = 'Lahore PK'
global.gurl = 'https://chat.whatsapp.com/EZe0MlgU0xo8GXtkCpqS0M' // add your username
global.sudo =  '967770500831' || process.env.SUDO  
global.devs = '967770500831';
global.website = 'https://chat.whatsapp.com/EZe0MlgU0xo8GXtkCpqS0M' //wa.me/+967770500831
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname: process.env.BOT_NAME || '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭',
  ownername: 'SuhailTechInfo' || process.env.OWNER_NAME,
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1jeHV5d3lTRzFLTFF3RXBFTEJrK0xnM2pnV3hYR2pUaUxIR3Nrb1JXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGFiaTFId3J2Y2F1NUcwd2Zob3ZPNDZTTis1T0RiSkQ4N0lQY1JZQi9qQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RzZWQUVMdjc2ZWJ2KzZHeklyK2JGTXp1dDJQVWM4RWIvcmtLYzRLWlZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIycVpsVU1nVCtUNWwyeXIrdzZBZFkyT0dtZkEvNUlJeG8yYUZyRWllRW5nPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNVWl0THhKWXoyNkhFdS9oS0xEcWlBSVI3RlZoVTRmcWhrR0JlcnBIMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVUM3k2Vi9MdXpLQUhCallMQlVHb1lHTVg3VEh3ckVnR01aajY4R0d6bFk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYY3V1K21wc1ltUFNZbWVFS3RSZ0lmdVVMNDFJcU1vaDdlOXBuZHBqcVlUR2hvQXUrSERQRkN2Sk5FcjV6ekd6cVFQTkkvSzFlT0d6dUdmZG1NY1VqZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEzLCJhZHZTZWNyZXRLZXkiOiJTK3hCQVdhVTRTcmUwWk9rK0F5UEFHV2JGQi9JRHYrUzFZVUU3bDVZMzRJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcU41czBERUltVWxxSUdHQWc9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkNmczVNTGRERUZON0ZOWEprdE9xakkzVmpKUmd2QzdoT244Z3lNU0ZRbDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFQWFg0YXcvMkVFNkdna2RXMHV1Y2U3eDlDcldIWXRJRUYyTThYUWZVWDlXdFVpWnN2UjdjM3FvVEZETmFZanZteUg0bVVCMUdlY2pmdWJnOVNEa0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyTVl2TTFTY3VIdDNHSHRUVDFwVnFRMkwvVGxzaFQ1Z3JjWWpUc3dXeS8xZkxWU01wcnA1WDE3VHdkL0JKdTNONmM5SzNWVGp2OVByOWRxWmVYRGNnZz09In0sIm1lIjp7ImlkIjoiMjAxMjI3MTc5MTA1OjM4QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIwMTIyNzE3OTEwNTozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRbjdPVEMzUXhCVGV4VFZ5WkxUcW95TjFZeVVZTHd1NFRwL0lNakVoVUpkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjgyMjc4OTIzfQ==',
  author:  process.env.PACK_INFO.split(";")[0] || '', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname:   "\t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ... 💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs... 👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n    -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" || process.env.PACK_INFO.split(";")[1] ,
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake :  '212' || process.env.FAKE_COUNTRY_CODE ,
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || [','],
  warncount : process.env.WARN_COUNT || 1,
  disablepm: process.env.DISABLE_PM || "true",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '•.•:•.•:•:•:•:•:•:•:•☾☼☽•:•.•:•.•:•:•:•:•:•:•\nι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ \n'
	+'•.•:•.•:•:•:•:•:•:•:•☾☼☽•:•.•:•.•:•:•:•:•:•:•\n\n*ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт* \n*Cʀєαтєԃ вყ : ѕυнαιℓ тєᴄʜ*'
	+'\n\nWhatsapp : wa.me/923184474176 \n Subscribe: www.youtube.com/c/SuhailTechInfo'  ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||"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" ,
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'LUFFY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
