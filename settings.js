//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: නැ 👉👈" //ur yt chanel name
global.socialm = "GitHub: නැ 👉👈" //ur github or insta name
global.location = "Sri lanka ,Matara" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '94782543893' //ur owner number
global.ownername = '🐼 Hashan' //ur owner name
global.websitex = "https://wa.me/qr/P6WADRJOKAFUK1"
global.wagc = "https://wa.me/qr/P6WADRJOKAFUK1"
global.themeemoji = '🐼'
global.wm = "Hashan Bot Inc."
global.botscript = 'https://wa.me/qr/P6WADRJOKAFUK1' //script link
global.packname = "Sticker By"
global.author = "🐼 හසා\n\n+94782543893"
global.creator = "94782543893@s.whatsapp.net"
global.xprefix = ''
global.premium = ["94782543893"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'බෑ බෑ 😒',
    done: '🐼✓',
    error: '😕Error!',
    success: '🐼Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
