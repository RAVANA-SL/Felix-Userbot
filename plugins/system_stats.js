/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

            await message.client.sendMessage(message.jid,'š ššš² šš«šØ!! š šš¦ šš­š¢š„š„ šš„š¢šÆš & šš¢šš¤š¢š§š !! š\n\nšš¦š·š¦š­š°š±š¦š³ : šš¾ššøš² š³š“ššøš»\nšš¶š±š±š°š³šµ : Wa.me/919544707896\n\nšš¦š³š“šŖš°šÆ : 1.1.0\nšš³š¢šÆš¤š© : šššššš\nššŖšµ : https://github.com/TOXIC-DEVIL/Felix-Userbot.git\n\nšš©š¢šµš“šš±š± šš³š°š¶š± 1 : https://chat.whatsapp.com/FdxBLbt1BcT3NKbVKvNGcD\n\nšš©š¢šµš“šš±š± šš³š°š¶š± 2 : https://chat.whatsapp.com/KMHpUACludA5XIcPncFkl1\n\nšš”šš§š¤ ššØš® ššØš« šš¬š¢š§š  ššš„š¢š± šš', MessageType.text);
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
