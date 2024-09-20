import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Your bot token
const TOKEN = process.env.DISCORD_BOT_TOKEN;

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.login(TOKEN);

export default (req: VercelRequest, res: VercelResponse) => {
    res.status(200).send('Bot is running!');
};
