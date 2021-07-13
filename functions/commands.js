const { readdirSync } = require("fs");
const { join } = require("path");
const filePath = join(__dirname, "..", "commands");
const fs = require("fs");

const functions = require("../functions/functions.js");

module.exports.run = (bot) => {
    functions.loadCommands(bot, `${filePath}/Utilities/`);
    functions.loadCommands(bot, `${filePath}/fun/`);
    functions.loadCommands(bot, `${filePath}/animals/`);
    functions.loadCommands(bot, `${filePath}/music/`);
    functions.loadCommands(bot, `${filePath}/owner/`);
    functions.loadCommands(bot, `${filePath}/bot/`);
    functions.loadCommands(bot, `${filePath}/joy/`);
}

