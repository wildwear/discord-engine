if (fromID === me && text.includes("!say") ) {
    bot.sendMessage({ to: channel, message: txt.replace('!say ','') });
}
