#!/usr/bin/env node
import type { CommandName } from '@helpers/type';
import chalk from 'chalk';
import { Command } from 'commander';
import { Logger } from '@helpers/logger';
import chalkAnimation from 'chalk-animation';
import pkg from '../package.json';
import { addAction } from './actions/add-action';
import { doctorAction } from './actions/doctor-action';
import { envAction } from './actions/env-action';
import { initAction } from './actions/init-action';
import { listAction } from './actions/list-action';
import { removeAction } from './actions/remove-action';
import { upgradeAction } from './actions/upgrade-action';
import { initStoreComponentsData } from './constants/component';
import { getStore, store } from './constants/store';
import { getComponents } from './scripts/helpers';
import Table from "./table/src/main";
import { prompt } from "./enquirer/lib/prompt";
import terminalLink from 'terminal-link';
import { CohereClient } from "cohere-ai";
const prompts = require('prompts');
prompts.override(require('yargs').argv);
// const { prompt } = require('enquirer/index.js');
const { spawn } = require('child_process');
const cohere = new CohereClient({
    token: "agnI51GCGhkPOpIxQdo3Hqkdw3D60OXYIAvBwfan",
});

const fakeChoice = input => ({ value: input, message: '', name: "" });
let question = {
    type: 'autocomplete',
    name: 'home',
    message: `${chalk.hex("#eff542")("<..>")} ${chalk.hex("#03fcf4")(`${__dirname}`)} ${chalk.hex("#0320fc")(`manfromexistence${chalk.hex("#0320fc")("(")}${chalk.hex("#fc0303")("freetier")}${chalk.hex("#0320fc")(")")}${chalk.hex("#0320fc")(": ")}`)}`,
    suggest(typed, choices) {
        const maches = choices.filter(choice => choice.message.includes(typed));
        return maches.length ? maches : [fakeChoice(typed)];
    },
    choices: [
        { name: "create", message: `cli commands       ${chalk.gray("✯  run cli commands straight from the cli home.")}` },
        { name: "shell commands", message: `shell commands     ${chalk.gray("➠  runing command line interpreter programs.")}` },
        { name: "account", message: `account            ${chalk.gray("♔  exploring your account.")}` },
        { name: "setting", message: `setting            ${chalk.gray("🏵  adjusting you preferences.")}` },
        { name: "history", message: `history            ${chalk.gray("⟲  seeing what you typoed last time.")}` },
        { name: "more", message: `more               ${chalk.gray("✺  more options to see.")}` },
        { name: "exit", message: `exit               ${chalk.gray("␛  this is manfromexistence, signing out and sayonara.")}` },
    ]
};
let interval: any;
// Copyright disclaimer for the CLI
const COPYRIGHT_INFO: string = `
This CLI utilizes base components and potentially leverages UI frameworks from other sources. We respect the ownership of these frameworks and aim to ensure a smooth integration experience. By using this CLI, you won't encounter missing downloads or malicious code that could compromise the security of the respective owners' work. Thank you for using our CLI!
`;
// Informational message displayed in the CLI
const CLI_INFO: string = `${chalk.gray("This innovative solution empowers developers by automating the often-tedious process of integrating UI components \nEliminate the need for manual configuration and repetitive tasks, and unlock a new level of development efficiency.")}
${chalk.hex("#05f5ed")("You can type any bash command here and the command will be exucuted immedeitly, press to exit.")}`;

const CONTRACT: string = `
${chalk.hex("#00f3f7")("Follow:")}
• Give us a start on Github: ${terminalLink('manfromexistence/dx', 'https://github.com/manfromexistence/dx-beta')}
• Subscribe us on YouTube: ${terminalLink('manfromexistence', 'https://www.youtube.com/channel/UCK0IEdLWxA2EFgucri7z4SA')}
• Follow us on X: ${terminalLink('manfromexistence', 'https://twitter.com/manofexistence1')}
• Join our Discord community: ${terminalLink('emon_420', 'https://discord.com/channels/1053093315442118677/1053093316138385539')}
• Follow us on Instragam: ${terminalLink('tonymitul', 'https://www.instagram.com/tonymitul/')}
`;


// Options displayed in the CLI with descriptions /To maintain your current session and avoid interruption, please execute any command within the next 10s.
const CLI_OPTIONS: string = `
${chalk.hex("#ff00d9")("Options:")}
-a, --all [boolean]: Add all components
-p, --packagePath [string]: Specify the path to the package.json file
-app, --appPath [string]: Specify the path to the App.tsx file
`;

// Flags displayed in the CLI with descriptions
const CLI_FLAGS: string = `${chalk.hex("#9500ff")("\nFlags:")}
--prettier [boolean]: Apply Prettier formatting to the added content
--addApp [boolean]: Include App.tsx file content that requires a provider
--addHook [boolean]: Include hook.tsx file content that requires a provider
`;

// Examples displayed in the CLI
const CLI_EXAMPLES: string = `${chalk.hex("#ff0080")("\nExamples:")}
$ suggest "what is the best library which simple and yet beautiful?"
$ explain "how to center a div? With a very basic and beginner explaination"
$ create nextjs-ui-website\n`;



const commandList: any[] = ['suggest', 'explain', 'create', 'init', 'add', 'remove', 'list', 'update', 'theme', 'doctor', 'env', 'search'];
const ui = new Command();

/*
      $$\                 $$\          $$\ 
      $$ |               $$  |         \__|
 $$$$$$$ |$$\   $$\     $$  /$$\   $$\ $$\ 
$$  __$$ |\$$\ $$  |   $$  / $$ |  $$ |$$ |
$$ /  $$ | \$$$$  /   $$  /  $$ |  $$ |$$ |
$$ |  $$ | $$  $$<   $$  /   $$ |  $$ |$$ |
\$$$$$$$ |$$  /\$$\ $$  /    \$$$$$$  |$$ |
 \_______|\__/  \__|\__/      \______/ \__|
                                                                                                                        
*/

ui
    .name('ui')
    .usage('[command]')
    .description(`${chalkAnimation.rainbow(
        `Dx/Ui(v${pkg.version}): Streamline UI Development with a CLI Tool for Efficient Component Integration`
    )}`)
    // .description("dx-ui --> : Streamline UI Development with a CLI Tool for Efficient Component Integration")
    .version(pkg.version, '-v, --version', 'Output the current version')
    .helpOption('-h, --help', 'Display help for command')
    .allowUnknownOption()
    .action(async (_, command) => {
        console.log(CLI_INFO);
        console.log(CLI_OPTIONS);
        console.log(CLI_FLAGS);
        const header = [
            {
                value: "Command",
                headerColor: "white",
                color: "white",
                align: "left",
                width: "8%"
            },
            {
                value: "Description",
                width: "25%",
                headerColor: "white",
                color: "gray"
            },
            {
                value: "Arguments",
                color: "white",
                align: "center",
                width: "10%",
                headerColor: "white",
            }
        ]
        const rows: any[] = [
            {
                Command: "suggest",
                Description: "Suggests you about what ui component is best for your job and ai chat...",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,
            },
            {
                Command: "explain",
                Description: "Explains you what course of actions you should take to solve your ui problems...",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            },
            {
                Command: "create",
                Description: "Creates A new project using any frontend frameworks",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            },
            {
                Command: "init",
                Description: "Initializes a new project",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            },
            {
                Command: "add",
                Description: "Adds components to your project",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            },
            {
                Command: "remove",
                Description: "Removes components from the project",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            },
            {
                Command: "update",
                Description: "Upgrades project components to the latest versions",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            },
            {
                Command: "list",
                Description: "Lists all components, showing status, descriptions, and versions",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            },
            {
                Command: "doctor",
                Description: "Checks for issues in the project",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            },
            {
                Command: "env",
                Description: "Displays debugging information for the local environment",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            },
            {
                Command: "search",
                Description: "Searches for your desired pacages and installs it.",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            },
            {
                Command: "theme",
                Description: "Customize any complete from any ui frameworks with ease.",
                Arguments: `${chalk.white.italic.dim("[--option]")} ${chalk.white.italic.dim("[--flag]")}`,

            }
        ]
        const options = {
            borderStyle: "solid",
            headerAlign: "center",
            headerColor: "green",
            align: "left",
            color: "white",
            width: '80%'
        }
        const COMMAND_DETAILS = Table(header, rows, options).render();
        console.log(COMMAND_DETAILS);
        console.log(CLI_EXAMPLES);

        async function main() {
            const currentWorkingDir = process.cwd();

            let shouldExit = false;
            while (!shouldExit) {
                const response = await prompt({
                    type: 'autocomplete',
                    name: 'home',
                    message: `${chalk.hex("#eff542")("<..>")} ${chalk.hex("#03fcf4")(`${currentWorkingDir}`)} ${chalk.hex("#0320fc")(`manfromexistence${chalk.hex("#0320fc")("(")}${chalk.hex("#fc0303")("freetier")}${chalk.hex("#0320fc")(")")}${chalk.hex("#0320fc")(": ")}`)}`,
                    suggest(typed, choices) {
                        const maches = choices.filter(choice => choice.message.includes(typed));
                        return maches.length ? maches : [fakeChoice(typed)];
                    },
                    choices: [
                        { name: "create", message: `cli commands       ${chalk.gray("✯  run cli commands straight from the cli home.")}` },
                        { name: "shell commands", message: `shell commands     ${chalk.gray("➠  runing command line interpreter programs.")}` },
                        { name: "account", message: `account            ${chalk.gray("♔  exploring your account.")}` },
                        { name: "setting", message: `setting            ${chalk.gray("🏵  adjusting you preferences.")}` },
                        { name: "history", message: `history            ${chalk.gray("⟲  seeing what you typoed last time.")}` },
                        { name: "more", message: `more               ${chalk.gray("✺  more options to see.")}` },
                        { name: "exit", message: `exit               ${chalk.gray("␛  this is manfromexistence, signing out and sayonara.")}` },
                    ]
                });
                // console.log(response.home);
                categorizeText(response.home);

            }
        }

        function categorizeText(text) {
            const trimmedText = text.trim();

            // Regular expressions for improved pattern matching
            const commandRegex = /^suggest|explain|create|init|add|remove|list|update|search|theme|env|doctor/i;
            const accountRegex = /^account/i;
            const settingRegex = /^setting/i;
            const historyRegex = /^history/i;
            const moreRegex = /^more/i;
            const exitRegex = /^exit/i;

            if (commandRegex.test(trimmedText)) {
                console.log("\n");
                console.log("131312312313131");
                console.log("\n");
                // const shell = spawn('bash', ['-c', "bun run dev add"]);

                // shell.stdout.on('data', (data) => {
                //     console.log(data.toString());
                //     // console.log(`${chalk.gray("Thansk for using our cli, use it more or it will auto exit in 10s.")}`)
                //     // const shellAgent = prompt(question);
                // });
                // // ui.command('suggest')
                return "";
            } else if (accountRegex.test(trimmedText)) {
                console.log("\n");

                return "account";
            } else if (settingRegex.test(trimmedText)) {
                console.log("\n");

                return "setting";
            } else if (historyRegex.test(trimmedText)) {
                console.log("\n");

                return "history";
            } else if (moreRegex.test(trimmedText)) {
                console.log("\n");
                return "";
            } else if (exitRegex.test(trimmedText)) {
                console.log("\n");
                console.log(CONTRACT);
                console.log("\n");

                return process.exit(0);
            } else {
                const shell = spawn('bash', ['-c', trimmedText]);

                shell.stdout.on('data', (data) => {
                    console.log(data.toString());
                    console.log(`${chalk.gray("Thansk for using our cli, use it more or it will auto exit in 10s.")}`)
                    const shellAgent = prompt(question);
                });

                shell.stderr.on('data', (data) => {
                    console.error(data.toString());
                    console.log(`${chalk.gray("10s.")}`)
                    const shellAgent = prompt(question);
                });
                return "";
            }
        };
        return await main();


    });

ui
    .command('suggest')
    .description('Suggests you about what ui component is best for your job and ai chat...')
    .argument('[components...]', 'Names of components to add')
    .option('-a --all [boolean]', 'Add all components', false)
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
    .option('--prettier [boolean]', 'Apply Prettier formatting to the added content', false)
    .option('--addApp [boolean]', 'Include App.tsx file content that requires a provider', false)
    .action(addAction);

ui
    .command('explain')
    .description('Explains you what course of actions you should take to solve your ui problems...')
    .argument('[components...]', 'Names of components to add')
    .option('-a --all [boolean]', 'Add all components', false)
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
    .option('--prettier [boolean]', 'Apply Prettier formatting to the added content', false)
    .option('--addApp [boolean]', 'Include App.tsx file content that requires a provider', false)
    .action(addAction);

ui
    .command('create')
    .description('Creates A new project using any frontend frameworks')
    .argument('[components...]', 'Names of components to add')
    .option('-a --all [boolean]', 'Add all components', false)
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
    .option('--prettier [boolean]', 'Apply Prettier formatting to the added content', false)
    .option('--addApp [boolean]', 'Include App.tsx file content that requires a provider', false)
    .action(addAction);

ui
    .command('init')
    .description('Initializes a new project')
    .argument('[projectName]', 'Name of the project to initialize')
    .option('-t --template [string]', 'Specify a template for the new project, e.g., app, pages')
    .action(initAction);

ui
    .command('add')
    .description('Adds components to your project')
    .argument('[components...]', 'Names of components to add')
    .option('-a --all [boolean]', 'Add all components', false)
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
    .option('--prettier [boolean]', 'Apply Prettier formatting to the added content', false)
    .option('--addApp [boolean]', 'Include App.tsx file content that requires a provider', false)
    .action(addAction);

ui
    .command('remove')
    .description('Removes components from the project')
    .argument('[components...]', 'Names of components to remove')
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-a --all [boolean]', 'Remove all components', false)
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .action(removeAction);

ui
    .command('upgrade')
    .description('Upgrades project components to the latest versions')
    .argument('[components...]', 'Names of components to upgrade')
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-a --all [boolean]', 'Upgrade all components', false)
    .action(upgradeAction);

ui
    .command('list')
    .description('Lists all components, showing status, descriptions, and versions')
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-r --remote', 'List all components available remotely')
    .action(listAction);

ui
    .command('env')
    .description('Displays debugging information for the local environment')
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .action(envAction);

ui
    .command('doctor')
    .description('Checks for issues in the project')
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
    .option('-ca --checkApp [boolean]', 'Check the App.tsx file', false)
    .option('-ct --checkTailwind [boolean]', 'Check the tailwind.config.js file', true)
    .option('-cp --checkPnpm [boolean]', 'Check for Pnpm', true)
    .action(doctorAction);

ui.hook('preAction', async (command) => {
    const args = command.args?.[0];

    if (args && commandList.includes(args as CommandName)) {
        // Before run the command init the components.json
        const nextUIComponents = (await getComponents()).components;
        initStoreComponentsData(nextUIComponents);
    }

    const cliLatestVersion = await getStore('cliLatestVersion');
    const latestVersion = await getStore('latestVersion');

    // Init latest version
    store.latestVersion = latestVersion;
    store.cliLatestVersion = cliLatestVersion;
});

ui.parseAsync(process.argv).catch(async (reason) => {
    Logger.newLine();
    Logger.error('Unexpected error. Please report it as a bug:');
    Logger.log(reason);
    Logger.newLine();
    process.exit(1);
});

/*
                          $$\ 
                          $$ |
 $$$$$$\  $$$$$$$\   $$$$$$$ |
$$  __$$\ $$  __$$\ $$  __$$ |
$$$$$$$$ |$$ |  $$ |$$ /  $$ |
$$   ____|$$ |  $$ |$$ |  $$ |
\$$$$$$$\ $$ |  $$ |\$$$$$$$ |
 \_______|\__|  \__| \_______|
                          
*/
