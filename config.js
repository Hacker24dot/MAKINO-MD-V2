const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;


global.Owner = ["447519773574"]; //like 2347080968564 
global.OwnerName =  "Spider";
global.BotName = "♱MAKINO-MD-V2♱♡⃤";
global.packname = "♱MAKINO-MD-V2♱♡⃤";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!


global.sessID = process.env.sessID |{"noiseKey":{"private":{"type":"Buffer","data":"gGRC4LLd4Wxb7Sf3AvV6xQoNGMgCd20UzCCnUe8hgFQ="},"public":{"type":"Buffer","data":"zWXzSiofpLtUgD+ExS3/dXC4gk6RCbENeDD6dv6oV0o="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eI/jyzywjGHuFH8se4uDy7HMoV5da0QkgwrU/1XXQW0="},"public":{"type":"Buffer","data":"BX86y0ljQYZiZWui4EM48QlJsbkHDgKdjHbliUyB5V4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aCNEFZC4FfHs5yYGsXwMrQr1TqyKZmw+rBot1hGAZmI="},"public":{"type":"Buffer","data":"/xOUPUDANIYy7XR/93Jp+FvgJSShgxCmj7HWeVawz10="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"mDCif8HKA9w6WPRKrkrv3HJdVSJe8Cav+unftGmGfmg="},"public":{"type":"Buffer","data":"A2k0V2SgA3s+dvvFfJrvmF6gO4+d2o11SzuYX94HUS0="}},"signature":{"type":"Buffer","data":"TXoe3HuYdEspKXhMOiSuE2iOHfoEZ5dDzNdIJpqwQDogFF2AqYou1fn6qUXwno78LnD/GivA9b0uY1Zr10OZDg=="},"keyId":1},"registrationId":7,"advSecretKey":"zlzL91uclsPwIuScwCxcmOrk7NjZN8mO+6ti2sSM70c=","processedHistoryMessages":[{"key":{"remoteJid":"447519773574@s.whatsapp.net","fromMe":true,"id":"385AD2D05B468AA991111FEE82F6A4AB"},"messageTimestamp":1723849677}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"FPuDxIYWQreNzNaWvhrznw","phoneId":"fcdf3f28-cee9-4fc2-945d-add76d0ffd9c","identityId":{"type":"Buffer","data":"KCK/U8Puf74DFJKTClrQmPYIFUk="},"registered":true,"backupToken":{"type":"Buffer","data":"ygYmCwTCU+/lcgyMWTQ7Dyu5Uls="},"registration":{},"pairingCode":"L6RCZL2Q","me":{"id":"447519773574:70@s.whatsapp.net"},"account":{"details":"CLrNlZwEELy3/7UGGAEgACgA","accountSignatureKey":"5GJb78Dw7xPQkpke3f830W7QTFkVLlnOQr65D7aXeQw=","accountSignature":"9hCtmyWgW87F02pMwluj7JJjkrSlQ0uLE2sfftSKU6HUaRHQ3FfKJTpAiTf0t1ubwf7hKjqcYhAL9LsdPJhmBw==","deviceSignature":"ZO3B6X7jfMWljTZepvtAlIKWyPOZxlipTwU553GQ7JxgAy1fdyXVKqKFCmK/D019oB0kOEjoep711hJk0ycbBA=="},"signalIdentities":[{"identifier":{"name":"447519773574:70@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BeRiW+/A8O8T0JKZHt3/N9Fu0ExZFS5ZzkK+uQ+2l3kM"}}],"platform":"android","lastAccountSyncTimestamp":1723849673,"myAppStateKeyId":"AAAAACoi"}| ``
global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
