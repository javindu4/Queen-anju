//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR095Ri9uMVNiMGZvV1poTk8vS0ZCMjlCbmQxQ0xyZDNvN3ByV1UyWTMzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2tnLzY1a0IwWjhDYnhPR3ByaXJnOVlKVnZ6NjBzN2hkd0RJKzRZekpoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUEx3VWVacXJxR0NjYVNjcXVjS1g0YWdadGZpZnZMd0hvb0hMdkM2MUU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSWNmU0tOencvWnVwcGNyZ3hYNEpVRXdDSHVuSmEvWW5kRDRZb29QQzNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDU2tTN0MvMkszbmt2QTBSMndEa1hwZXBlUlVtS0p3RWY0QmJzalZmMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iklwd2tZTDVaZi9wZEQ4dk9Sei9HMGR2eHE1ZmJyV3VNSFJkMlJWbnM4WDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURoSzNUQThMQVE2dzBocVJ3azhBcG9HTjFxeXlPNjlCK1RvQy8xSEpGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2JGVmxuWXh3eWdkSkh0L1ZWcjFlUjNZM2FTK3RqTkJlK0ZlRnZDV1JXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAxRWE5WUZ4ZUpVT3FLeXkyZjE0bmJEY3hsWFhCSVNLNy9FQWpTM3lvOWtyd0tQN3dIU3VTTGdqNTE2OWovbDhISXpXSjNIN2tUUkpGQ2pLZUtiNkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6Iko5VnF5Wkd5RUIrbmJZSFltd0hOdFE3aUdBcFY5cEN6d01GeUMvaER3eEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inl4Q2dsb0hnUjVlUmFtRHJlRTBiRHciLCJwaG9uZUlkIjoiYTgyNmI2YzAtMzg1YS00ZThhLWI2OWQtOTAxMDU1N2Y4ODA5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcwSndldlg5U2IvdGN4TWtlQnRYRTJ3ZTFtdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQcGRvbWhBSGhHYitybC80cXlQaWxxbmMvd0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVZCMjFaRUciLCJtZSI6eyJpZCI6Ijk0NzYzOTA4ODU4OjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjY1Njc3MTU2ODQ0NTA6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtVnYxY1F2Zm5Ud2dZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imh1QVV4NHllUkFrNHdHRG5wblB1RGNRcmV1L0ZEaHRlaFNycUFrVVRKZ2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJoa2RmOFdscko1Skl6NDhwZng0anJLTjJEcnVOZFNmL1JpbHhwVjJCVHRYN1pSYmN0Z2NYZWdWN0dSYlNIckN3bmZZckhqK0phVHNFcW9vYml1QkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvODdSZTJlZ3hzcmxubEs0N2k2Zzh2MGVtc3kra2x0MUJFaHZIeFJyYlJ2b284UHdPbWhJMlM4elBDWTNZaEgrWllsaXNja1lPeEUxaTF3RUkwY1RCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYzOTA4ODU4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWJnRk1lTW5rUUpPTUJnNTZaejdnM0VLM3J2eFE0YlhvVXE2Z0pGRXlZSiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNDAwMjAyLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFzTiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
