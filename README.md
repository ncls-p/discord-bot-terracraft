# Terrcraft Discord Bot

Terrcraft Discord Bot is an open-source bot created to provide various functionalities and assist with server monitoring using the Discord.js library.

## Features

The Terrcraft Discord Bot offers the following features:

### Uptime Monitoring

The bot includes an Uptime Robot integration to monitor server uptime. It periodically scans the Uptime Robot API and sends status updates to a designated channel.

### Command Handling

The bot provides several commands that can be used in Discord channels:

- `sendMessage`: Sends a message to the channel.
- Other commands: The code includes additional command placeholders, but their implementation is not provided in the given code. You can add more commands according to your requirements.

### Event Handling

The bot also includes event handling for the following events:

- `messageCreate`: Handles the `sendEmptyMessage` event, which responds with the received message content if it matches a specific command.

## Installation

To install and run the Terrcraft Discord Bot, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/terrcraft-discord-bot`
2. Navigate to the project directory: `cd terrcraft-discord-bot`
3. Install dependencies: `yarn` or `npm install`
4. Set up environment variables:
   - Create a `.env` file at the root of the project.
   - Add the following environment variables to the `.env` file:
     - `DISCORD_BOT_TOKEN`: Your Discord bot token.
     - `UPTIME_ROBOT_API_KEY`: Your Uptime Robot API key.
   - Save the `.env` file.
5. Start the bot: `yarn start` or `npm start`

## Configuration

The Terrcraft Discord Bot uses a `.env` file for configuration. Ensure you have set the following environment variables in the `.env` file:

- `DISCORD_BOT_TOKEN`: Your Discord bot token.
- `UPTIME_ROBOT_API_KEY`: Your Uptime Robot API key.

You can modify other configuration options in the `config` object defined in the `config.ts` file according to your preferences.

## Usage

Once the bot is running and configured, it will automatically start monitoring the server's uptime based on the specified interval. You can use the provided commands in Discord channels based on the defined prefix.

## Contribution

Contributions to the Terrcraft Discord Bot are welcome! If you have any suggestions, improvements, or new features to add, please create an issue or a pull request in the GitHub repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
