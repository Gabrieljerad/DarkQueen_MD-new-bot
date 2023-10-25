const { cmd, botpic, Config, tlang,getBuffer, prefix } = require('../lib')
const hrs = new Date().getHours({ timeZone: 'Asia/Karachi' })
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


//---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            desc: "Show Live Time Of Africa",
            category: "Gabby",
	          filename: __filename,
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
var time = new Date().toLocaleString('HI', { timeZone: 'Africa/Nairobi' }).split(' ')[1]
var date = new Date().toLocaleDateString(get_localized_date)
var wish = ''
if (hrs < 12) wish = 'Gabby ⛅'
if (hrs >= 12 && hrs <= 16) wish = 'Gabby🌞'
if (hrs >= 16 && hrs <= 20) wish = 'Gabby'
if (hrs >= 20 && hrs <= 24) wish = 'Gabby🌙'
var am_pm = ''
if (hrs < 12) am_pm = 'ᴀᴍ'
if (hrs >= 12 && hrs <= 24) am_pm = 'G'
const suhail= [777,0,100,500,1000,999,2021]
const q = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
        "orderMessage": {
           "itemCount" : suhail[Math.floor(8*Math.random())],
           "status": 1,
           "surface" : 1,
           "message": `❏ ${Config.botname} ➬ Whatsapp Bot BY Gabby`,
           "orderTitle": "alive",
           "sellerJid": '947658375@s.whatsapp.net' 
        }
      }
}

let timenow =`
┏╼═╾╼═╾╼═╾╼═╾╼═╾╼═╾❋
┃Gabby
┃👋hello ${citel.pushName},
┣❑*${wish}* 
┣❑i am Gabby
┣╼═╾╼═╾╼═╾╼═╾╼═╾●
┣❍ʙᴏᴛ ꜱᴘᴇᴇᴅ: ❲${latensie.toFixed(4)}❳
┣Gabbys awake time: ❲${runtime(process.uptime())}❳
┣❍Gabby: stat online
┣❍muda or time: ❲${time} ${am_pm}❳
┃
┃😊*Gabby bot*😊
┃🎭 *_dm Gabby to get a bot_*🎭
┗╼═╾╼═╾╼═╾╼═╾╼═╾╼═╾❋

`
return await Void.sendMessage(citel.chat, { text:timenow }, { quoted : q } )
  
  
})
