import { Message } from "discord.js";
import { config } from "../../config";

export const sendEmptyMessage = async (message: Message) => {
    if (message.content.startsWith(config.prefix + "sendMessage")) {
        message.channel.send(message.content);
    }
};

export default sendEmptyMessage;
