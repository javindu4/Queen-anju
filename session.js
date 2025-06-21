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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tLWDdMTmNuYUlmdnBWQ2NrcnZvYUxxVjMwUmE2N004SUxGaGVkSHFVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDNvb3B3TE9wc0RjeGNoaWdTUHZ1MUdLUDlvOEx2dUpEN1Mxd2NmYjhHZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRDdxUjNpazFqUStxQm0yM2tnaHoyTHMvVGJnbUpteXMrSnIxdkVWMFc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPNGEvTW1KL1FNQkgvK1ZOaDhJL25LNnBXaHg4U3Y5cGhrT0Z3V010eXlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldKNTdzVGxSRlBkTFA3ODNONWpOT2dOWXZ1NGpvWHUxbU0vVVRmRUJtR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9HU2dPRWhmazZvVkMrclRvRzEzb2xpTGdLcDRyQnJXY3gwZk45a0xWVnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1AzVlR2REgzNmttcW4rZVFuYW01ZlRsQ2hMM1lmVnJvOVlWeXVremVrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1lleUE3ODEvQU5QV29pTUlFVDU0bXU5QkthSEhuQnFRQ3dPbXo3V3N3OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR5VmQvNy9Lb0JzRFltWUdJOW1rQUhMaDA1RWlKNW5zRXpKWDBuV2ZEYk5WOTNaWThOK1VkVGd6TXYvcjA0OEROM1EwNUcycG5ZcDhTZHdzZncxUENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiI5TGRwZ01oNUZoLzkzZEx4bDBuOFpnV2pQYzh5T1BaYUI0M1RBb1ZVN2dzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzOTA4ODU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJDRTYxNjIyMTdCRDc5NzM5NzFCNjQzNEVDQjYxMjFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA1MDk4NDF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzOTA4ODU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNCRUE3MDA4REU3NTU2OUJGRTRCMUIyMTZGOTIwQzRDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA1MDk4NDF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzOTA4ODU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ5RkVCQkRCRjYzOERDQUY3NTI5OThFODVEMDYyMUFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA1MDk4NDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZvaGtWUHdZUWZLMGhMQUpKTjhOb1EiLCJwaG9uZUlkIjoiNTQyOTU1NzktZDY4Ni00NGNhLWEyOWItYWY5NjY4YjQwMWFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCMThLNFBqTWY1UjM2bmI5U2hvQ01PSVMrND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSkwxTFV1Z1VrZlRIU0ErRjlDdEd4cmxxVnM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQk0xRUFKNTEiLCJtZSI6eyJpZCI6Ijk0NzYzOTA4ODU4OjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjY1Njc3MTU2ODQ0NTA6NEBsaWQiLCJuYW1lIjoiLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGVaK1BzREVJSFMyc0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZmc1azR0bWJnNUQ5LzhlRW5rN1ZxeENtQXZWTk5FdldheXo5RGdmRGhDOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZUZNRUY5TWlVUlUyWGRHUExxeWFoUU1xVnJhdmpGTHVsalBVMG52NmpONTFJbEVJbUtRTVhsQjBkbFExT0FEdjdxbVE4MXNBQTNraVY4VGdvZi9GQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IjJ4NzA4WVFycThQcWRjbTZuS1N3dVJ4ME9BTE5HTXh2VzU5VTNOV1lTc016bUh5SXJCT1QzNll5VGJaUHhjemtXc0Z5bzUrWWJ3b0YrcWpnbTB2TkFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjM5MDg4NTg6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYNE9aT0xabTRPUS9mL0hoSjVPMWFzUXBnTDFUVFJMMW1zcy9RNEh3NFF2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA1MDk4MzgsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0NSIn0=",
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
