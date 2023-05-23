import { client } from "..";
import { config } from "../config";

export function logLoginLogs() {
    console.log(`Logged in as ${client.user?.tag}!`);
    console.log(`Client ID: ${client.user?.id}`);
    console.log(`Client Username: ${client.user?.username}`);
    console.log(`Client Discriminator: ${client.user?.discriminator}`);
    console.log(`Creator: ${config.creator}`);
    console.log(`Prefix: ${config.prefix}`);
    console.log(
        `Token: ${config.token.slice(0, 5)}...${config.token.slice(-5)}`
    );
    console.log(
        `Uptime Robot API Key: ${config.uptime.api.apiKey.slice(
            0,
            5
        )}...${config.uptime.api.apiKey.slice(-5)}`
    );
}
