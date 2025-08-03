const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/riobotpair/RIO/blob/main/images/Vmake1754198681084.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 RIO-MD Is Alive Now😍*",
BOT_OWNER: '94720630290',  // Replace with the owner's phone number



};
