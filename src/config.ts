import dotenv from "dotenv";
import { IntentsBitField } from "discord.js";

dotenv.config();

export const config = {
    token: process.env.DISCORD_BOT_TOKEN as string,
    prefix: "*",
    creator: "Nicolas#0719",
    version: "1.3.O",

    uptime: {
        api: {
            url: "https://api.uptimerobot.com/v2/getMonitors",
            apiKey: process.env.UPTIME_ROBOT_API_KEY as string,
        },
        channelId: "1073895243566563358",
        messageID: "1110581628557865000",
        occurrence: 15000,
        embed: {
            color: "Green",
            title: "Server Status",
            image: "https://cdn-longterm.mee6.xyz/plugins/welcome/images/1072212660499795988/228358aa7d3d06cb3c9fb5c3918e4046df4c7e721609809cf75d232aee9b7e30.png",
            message: {
                information: "ℹ️Information: this is the status of the server.",
                up: "UP ✅ \n",
                down: "DOWN 🚫\n",
                paused: "PAUSED ⏸️\n",
                notCheckedYet: "NOT CHECKED YET 🤔\n",
                seemsDown: "SEEMS DOWN 🤔\n",
                unknown: "UNKNOWN ❓\n",
            },
        },
    },

    intents: [
        "AutoModerationConfiguration",
        "AutoModerationExecution",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "DirectMessages",
        "GuildBans",
        "GuildEmojisAndStickers",
        "GuildIntegrations",
        "GuildInvites",
        "GuildMembers",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "GuildMessages",
        "GuildModeration",
        "GuildPresences",
        "GuildScheduledEvents",
        "GuildVoiceStates",
        "GuildWebhooks",
        "Guilds",
        "MessageContent",
    ] as unknown as IntentsBitField[],
};
