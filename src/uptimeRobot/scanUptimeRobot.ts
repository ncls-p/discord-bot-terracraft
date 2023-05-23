import {
    ChannelType,
    ColorResolvable,
    EmbedBuilder,
    MessageEditOptions,
    MessagePayload,
    TextChannel,
} from "discord.js";
import axios from "axios";

import { client } from "..";
import { config } from "../config";

export function startUptimeRobotScan() {
    setInterval(() => {
        scanUptimeRobot();
    }, config.uptime.occurrence);
}

async function scanUptimeRobot() {
    try {
        const response = await axios.post(config.uptime.api.url, {
            api_key: config.uptime.api.apiKey,
            format: "json",
            logs: 1,
        });
        const monitors = (response.data as { monitors: any[] }).monitors;
        let message = config.uptime.embed.message.information + "\n\n";
        if (monitors) {
            monitors.forEach(
                (monitor: {
                    friendly_name: string;
                    status: number;
                    logs: any[];
                }) => {
                    if (
                        monitor.friendly_name
                            .toLowerCase()
                            .includes("terracraft")
                    ) {
                        const status = monitor.status;
                        message += `${monitor.friendly_name} : ${
                            status === 2
                                ? config.uptime.embed.message.up
                                : status === 9
                                ? config.uptime.embed.message.down
                                : status === 0
                                ? config.uptime.embed.message.paused
                                : status === 1
                                ? config.uptime.embed.message.notCheckedYet
                                : status === 8
                                ? config.uptime.embed.message.seemsDown
                                : config.uptime.embed.message.unknown
                        }\n`;
                    }
                }
            );
            const embed = new EmbedBuilder()
                .setColor(config.uptime.embed.color as ColorResolvable)
                .setTitle(config.uptime.embed.title)
                .setDescription(message)
                .setImage(config.uptime.embed.image)
                .setTimestamp();

            sendMessageToChannel(embed);
        }
    } catch (error) {
        console.error(error);
    }
}

function sendMessageToChannel(message: string | EmbedBuilder) {
    const channel = config.uptime.channelId;
    const messageToEditId = config.uptime.messageID;

    client.channels.cache
        .get(channel)
        ?.fetch()
        .then((channel) => {
            if (channel && channel.type === ChannelType.GuildText) {
                (channel as TextChannel).messages
                    .fetch(messageToEditId)
                    .then((msg) => {
                        if (msg) {
                            let messagePayload:
                                | string
                                | MessageEditOptions
                                | MessagePayload;
                            if (message instanceof EmbedBuilder) {
                                messagePayload = { embeds: [message] };
                            } else {
                                messagePayload = message;
                            }
                            msg.edit(messagePayload);
                        }
                    });
            }
        });
}
