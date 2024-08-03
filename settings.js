

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "254728705726"
global.ownername = "🕷 Eliakim🕷"
global.ytname = "🕷 ELIAKIMTECH🕷"
global.socialm = "GitHub: BADBOI-v1"
global.location = "Africa, Kenya,Kapsabet"

global.ownernumber = '254728705726,254728705726,254728705726'  //creator number
global.ownername = '🕷ELIAKIM-TECH🕷' //owner name
global.botname = '🕷 ELIAKIMT-ECH🕷' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'ELIAKIM HACKER\n\nContact: +254728705726'

//console view/theme
global.themeemoji = '🪀'
global.wm = "ELIAKIM HACKER Tech."

//theme link
global.link = 

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//text bug
global.xbugtex = {noiseKey":{"private":{"type":"Buffer","data":"wFv1Cf93MkuJfoMYMsXz5q2lJ/jtQDytKqVEApTB2X0="},"public":{"type":"Buffer","data":"iv0ISoUXni9gnJLpJifnLUbJ1T3pAFstrVKOvFRusBo="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SJJLF77cv46kbN3TM7cDKkLnxz/RYonlbRFUE5NY5ks="},"public":{"type":"Buffer","data":"fg7Ha+7T78faQPxXzoRBWGcRUfbzBEi/iwh9GdUV5VY="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"kDcSjMmFKL8qSb5EfpeNWzW+em8jjNbBFCsNiv0ek14="},"public":{"type":"Buffer","data":"bZxLe6QVZaInz6qDH+VgIZukSlLsaMbeoh4XsfIUQic="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"GH69I8R51J/IhrIwKuPhKiKRgPCvt8QkE9Udsv6RbXc="},"public":{"type":"Buffer","data":"iyJpEcfhvEuhSw8hPyE2l/XlneuTLIie0R7RjIjzkUA="}},"signature":{"type":"Buffer","data":"kayGTwNYW+cApxFlhqjOs5GuvLZLPg6ZkOFH29haHkhR3Emzm7irnVZImMBedv+7mbUNEcdOY5L9hm5zqHczAg=="},"keyId":1},"registrationId":152,"advSecretKey":"GVvGhZxN/ip6PIJ3t0uEI6131pbf90cF9yeVJ7hqffU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"DJyPAPxNTHWFXFUnaf76rQ","phoneId":"37fe1c1f-a551-410a-b15b-64b47291953f","identityId":{"type":"Buffer","data":"w3tUoQB6zxV6NKlXWWRvVKY7nXE="},"registered":true,"backupToken":{"type":"Buffer","data":"jXcLlRmLljQEnrYZ2adIavUlgg0="},"registration":{},"pairingCode":"LJVQB424","me":{"id":"254728705726:45@s.whatsapp.net"},"account":{"details":"CMnr+7kBELWIurUGGAIgACgA","accountSignatureKey":"ydeN+1alw3gZH9FPP1fZbEQv6N4Tn8U4+CGao9nm5gM=","accountSignature":"PlFBpGzv8WDjY3x+v5PMf6AWyo6YmGDDuvcaH2IQ/6oMSfe6a7oOQxr9isS0Fqy8L/3PtLY7L21kGqfair4iCw==","deviceSignature":"5npTjj1noA6BRQ24wwGiL4ht0thOA0IgVfbBvXafd7ws8c0D7w3jCsZzi4RvTxg1A++2GzRapaFzo7Tl+pgUAg=="},"signalIdentities":[{"identifier":{"name":"254728705726:45@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcnXjftWpcN4GR/RTz9X2WxEL+jeE5/FOPghmqPZ5uYD"}}],"platform":"android","lastAccountSyncTimestamp":1722713155,"myAppStateKeyId":"AAAAALkh"}
xtxt: '🚨BADBOI HACKER🚨'
    

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only or by Badboi hacker 😂😁😂',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin or by Badboi hacker 😂😁😂',
    owner: 'This feature can be used by owner only or by Badboi hacker 😂😁😂',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats or by Badboi hacker 😂😁😂',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
