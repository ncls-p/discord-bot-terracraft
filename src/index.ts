import { ActivityType, Client } from "discord.js";

import { logLoginLogs } from "./utils/logLoginLogs";
import { config } from "./config";
import { startUptimeRobotScan } from "./uptimeRobot/scanUptimeRobot";
import sendEmptyMessage from "./events/commands/emptyMessage";

export const client = new Client({
    intents: config.intents,
});

client.on("ready", () => {
    logLoginLogs();

    client.user?.setActivity("Development", {
        type: ActivityType.Competing,
    });

    client.on("messageCreate", sendEmptyMessage);
    startUptimeRobotScan();
});

client.login(config.token);
