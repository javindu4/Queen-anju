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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dlU1BqUitKaGNhaDJVNjA0TS9PZDY5UUlQY1RDWDhqczhEWU4yZWVVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkEyUWtvcmp5L0c2U2RUNEFUWVlybGNtdzNhdWRIWHMwQjQ3K1kzWm9oUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSEVhWVNobisxUG81eEdKaW1tN3FTdE1kdmhodUJkclZVMDQvb3Frd1VVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOYU53ZGo1MEdrdWNDSnVvVzR1ZTFtSGZadXZ0alZWTi9tYk03enI4QW04PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIQ2lxeWdLRzdmTXNUZ1RmZmZFR0IvMVVCSElqMlhFc3hqdi90WE5kVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpHN0FuOTExdWdmUWRLMHFrTkNpVE5oTjc2NnhHMjFEV2Z6ZVhTWlFReDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZ1WGhTNU5Ga29YUEErNkVVTXZ3dVhOeDY1aUh2Nll4a0tiMFhLTEYxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1VsUWczWjllT0NHK2NUMVZTWU8ya01sa2J6ZVZvYXIrRU9pVHZBRElWST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhSNmZqemhYNm5wRm84NUxnUktpM0tRVDJTcGZGMEFQN0k1bEkxczk1RytKNmNVc3JnL0Y3RXNmTkswaVdWbVhhUWpHdC95VGcyMExNVWNHZmxOSWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6ImRmV0RCUTFZRDUzN0RVRDZ4NTRLZzhNaEVCV2xXUWU0SXlXdkZBK2diN0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImN0ZHhVZllUU2ZlS01zaHFuSmVXM3ciLCJwaG9uZUlkIjoiZmZiNmM3NTktZWE1My00ZDg5LTlmYmEtMmQxYzU0MWU1MTZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl0eFJkdExyd3c2NEdNdmNSRG5CUUxTVERlUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5S3hOT2lvNmlwOEFzeVViMHFQai9JWGFtTXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVlZER1dMM0UiLCJtZSI6eyJpZCI6Ijk0NzAyNjU1NDgwOjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNDA0NzU4MjI5MTU4MzY6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01PNnRPSUJFT3pBMWNJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkQvbUJJM3hPY2FZSjIvM3kzVkZLeCtuaUQ0MjdPK1liVUVneS9rWnIvZ3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhNUGo2dXpCRXlZS0FjZkdQbmkzWmtCd1prR251eWU3NHN3cEFZMGhEa3NHUG5JRnhIajFYcll2QVlIZW9KVmhiQ0Y4bEtKb0dTa2JkWFdUNXlRcUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZejRub21VQml5T2VvdXJQL05FWGZoNUdqTHI3U01TWUN6bzQ5Y29nV1VXaUJuQnZ0SkxaeEIxZGpzOEN2U0VjakpPK20waEUyR1JreE83L0hzUGdoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAyNjU1NDgwOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUS81Z1NOOFRuR21DZHY5OHQxUlNzZnA0ZytOdXp2bUcxQklNdjVHYS80TCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNDI1NzIxLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUE2TyJ9",
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
