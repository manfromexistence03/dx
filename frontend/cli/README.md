# cli-test

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


```
                             
                              

// // index.js
// const { Command } = require("commander");

// // creating a command instance
// const program = new Command();

// // creating tool
// program
//   .name("Math-util")
//   .description("A CLI tool for performing simple math functions")
//   .version("1.0.0");

// // adding command
// program
//   .command("add")
//   .description("Add two numbers")
//   .argument("<firstNumber>", "first number")
//   .argument("<secondNumber>", "second number")
//   .action((a: string, b: string) => {
//     console.log(parseInt(a) + parseInt(b));
//   });

// program.parse();






// // index.js
// import inquirer from "inquirer";

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//     },
//   ])
//   .then((answers) => {
//     console.log(`Hello ${answers.name}`);
//   })




// import chalk from "chalk";

// console.log(chalk.blue("Hello world!"));
// console.log(chalk.red.bold("Warning"));
// console.log(chalk.white.italic("success"));

// console.log(
//   chalk.yellow.bgBlue("This text has a yellow foreground and blue background")
// );





// const Spinner = require("cli-spinner").Spinner;

// const spinner = new Spinner("processing... %s");
// spinner.setSpinnerString("|/-\\\\");
// spinner.start();

// setTimeout(() => {
//   spinner.text = "Task completed.";

//   setTimeout(() => {
//     spinner.stop();
//   }, 500);
// }, 5000);






// const figlet = require("figlet");

// figlet("Hello World!!", (err: any, data: any) => {
//   if (err) {
//     console.log("Sorry, something went wrong");
//     console.dir(err);
//     return;
//   }

//   console.log(data);
// });









// await $`cat package.json | grep name`

// let branch = await $`git branch --show-current`
// await $`dep deploy --branch=${branch}`

// await Promise.all([
//   $`sleep 1; echo 1`,
//   $`sleep 2; echo 2`,
//   $`sleep 3; echo 3`,
// ])

// let name = 'foo bar'
// await $`mkdir /tmp/${name}`





// var blessed = require('blessed')
// , contrib = require('blessed-contrib')
// , screen = blessed.screen()
// , line = contrib.line(
//     { style:
//       { line: "yellow"
//       , text: "green"
//       , baseline: "black"}
//     , xLabelPadding: 3
//     , xPadding: 5
//     , label: 'Title'})
// , data = {
//     x: ['t1', 't2', 't3', 't4'],
//     y: [5, 1, 7, 5]
//  }
// screen.append(line) //must append before setting data
// line.setData([data])

// screen.key(['escape', 'q', 'C-c'], function(ch: any, key: any) {
// return process.exit(0);
// });

// screen.render()




// require('yargs')
//   .scriptName("pirate-parser")
//   .usage('$0 <cmd> [args]')
//   .command('hello [name]', 'welcome ter yargs!', (yargs: { positional: (arg0: string, arg1: { type: string; default: string; describe: string }) => void }) => {
//     yargs.positional('name', {
//       type: 'string',
//       default: 'Cambi',
//       describe: 'the name to say hello to'
//     })
//   }, function (argv: { name: any }) {
//     console.log('hello', argv.name, 'welcome to yargs!')
//   })
//   .help()
//   .argv






// import {Command} from '@oclif/core'

// export class HelloCommand extends Command {
//   public static enableJsonFlag = true
//   public async run(): Promise<{ message: string }> {
//     this.log('hello, world!')
//     return { message: 'hello, world!' }
//   }
// }









// const prompts = require('prompts');

// (async () => {
//   const response = await prompts({
//     type: 'autocomplete',
//     name: 'value',
//     message: 'Pick your favorite actor',
//     choices: [
//       { title: 'Cage' },
//       { title: 'Clooney', value: 'silver-fox' },
//       { title: 'Gyllenhaal' },
//       { title: 'Gibson' },
//       { title: 'Grant' }
//     ]
//   });

//   console.log(response); // => { value: 24 }
// })();










// const { MultiSelect } = require('enquirer');

// const prompt = new MultiSelect({
//   name: 'value',
//   message: 'Pick your favorite colors',
//   limit: 7,
//   choices: [
//     { name: 'aqua', value: '#00ffff' },
//     { name: 'black', value: '#000000' },
//     { name: 'blue', value: '#0000ff' },
//     { name: 'fuchsia', value: '#ff00ff' },
//     { name: 'gray', value: '#808080' },
//     { name: 'green', value: '#008000' },
//     { name: 'lime', value: '#00ff00' },
//     { name: 'maroon', value: '#800000' },
//     { name: 'navy', value: '#000080' },
//     { name: 'olive', value: '#808000' },
//     { name: 'purple', value: '#800080' },
//     { name: 'red', value: '#ff0000' },
//     { name: 'silver', value: '#c0c0c0' },
//     { name: 'teal', value: '#008080' },
//     { name: 'white', value: '#ffffff' },
//     { name: 'yellow', value: '#ffff00' }
//   ]
// });

// prompt.run()
//   .then((answer: any) => console.log('Answer:', answer))
//   .catch(console.error);










// const prompts = require('prompts');
// import prompts from "prompts";

// (async () => {
//     const response = await prompts({
//         type: 'multiselect',
//         name: 'value',
//         message: 'Pick colors',
//         choices: [
//             { title: 'shadcnui', value: '#ff0000', selected: true },
//             { title: 'accertinityui', value: '#0000ff', selected: true  },
//             { title: 'materialui', value: '#0000ff' },
//             { title: 'nextui', value: '#0000ff' },
//             { title: 'bootstrapui', value: '#0000ff' },
//             { title: 'chakraui', value: '#0000ff' },
//             { title: 'fluentui', value: '#0000ff' },
//             { title: 'headlessui', value: '#0000ff' },
//             { title: 'mantineui', value: '#0000ff' },
//             { title: 'semanticui', value: '#0000ff' },
//         ],
//         max: 2,
//         hint: '- Space to select. Return to submit'
//     });

//     console.log(response); // => { value: 24 }
// })();




// */                          
 
// var blessed = require('blessed');

// // Create a screen object.
// var screen = blessed.screen({
//   smartCSR: true
// });

// screen.title = 'my window title';

// // Create a box perfectly centered horizontally and vertically.
// var box = blessed.box({
//   top: 'center',
//   left: 'center',
//   width: '50%',
//   height: '50%',
//   content: 'Hello {bold}world{/bold}!',
//   tags: true,
//   border: {
//     type: 'line'
//   },
//   style: {
//     fg: 'white',
//     bg: 'magenta',
//     border: {
//       fg: '#f0f0f0'
//     },
//     hover: {
//       bg: 'green'
//     }
//   }
// });

// // Append our box to the screen.
// screen.append(box);

// // Add a png icon to the box
// var icon = blessed.image({
//   parent: box,
//   top: 0,
//   left: 0,
//   type: 'overlay',
//   width: 'shrink',
//   height: 'shrink',
//   file: __dirname + '/my-program-icon.png',
//   search: false
// });

// // If our box is clicked, change the content.
// box.on('click', function(data) {
//   box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
//   screen.render();
// });

// // If box is focused, handle `enter`/`return` and give us some more content.
// box.key('enter', function(ch, key) {
//   box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
//   box.setLine(1, 'bar');
//   box.insertLine(1, 'foo');
//   screen.render();
// });

// // Quit on Escape, q, or Control-C.
// screen.key(['escape', 'q', 'C-c'], function(ch, key) {
//   return process.exit(0);
// });

// // Focus our element.
// box.focus();

// // Render the screen.
// screen.render();

// const vorpal = require('vorpal')();

// vorpal
//   .command('foo', 'Outputs "bar".')
//   .action(function(args, callback) {
//     // @ts-ignore
//     this.log('bar');
//     callback();
//   });

//   vorpal.ui.delimiter('NaN: ');
//   setInterval(function() {
//     vorpal.ui.delimiter(vorpal.ui.delimiter() + 'NaN: ');
//   }, 1000);
// import figures, {mainSymbols, fallbackSymbols, replaceSymbols} from 'figures';

// console.log(figures.tick);
// // On terminals with Unicode symbols:  ✔
// // On other terminals:                 √

// console.log(mainSymbols.tick);
// // On all terminals:  ✔

// console.log(fallbackSymbols.tick);
// // On all terminals:  √

// console.log(replaceSymbols('✔ check'));
// // On terminals with Unicode symbols:  ✔ check
// // On other terminals:                 √ check
// import logSymbols from 'log-symbols';

// console.log(logSymbols.warning, 'Finished successfully!');
// // Terminals with Unicode support:     ✔ Finished successfully!
// // Terminals without Unicode support:  √ Finished successfully!
// import updateNotifier from 'update-notifier';
// import packageJson from '../package.json' assert {type: 'json'};

// updateNotifier({pkg: packageJson}).notify();
// import meow from 'meow';
// // import foo from './lib/index.js';

// const cli = meow(`
// 	Usage
// 	  $ foo <input>

// 	Options
// 	  --rainbow, -r  Include a rainbow

// 	Examples
// 	  $ foo unicorns --rainbow
// 	  🌈 unicorns 🌈
// `, {
// 	importMeta: import.meta, // This is required
// 	flags: {
// 		rainbow: {
// 			type: 'boolean',
// 			shortFlag: 'r'
// 		}
// 	}
// });
// /*

// foo(cli.input.at(0), cli.flags);
// import meow from 'meow';

// const cli = meow(`
// 	Usage
// 	  $ foo

// 	Options
// 	  --rainbow, -r  Include a rainbow
// 	  --unicorn, -u  Include a unicorn
// 	  --no-sparkles  Exclude sparkles

// 	Examples
// 	  $ foo
// 	  🌈 unicorns✨🌈
// `, {
// 	importMeta: import.meta,
// 	booleanDefault: undefined,
// 	flags: {
// 		rainbow: {
// 			type: 'boolean',
// 			default: true,
// 			shortFlag: 'r'
// 		},
// 		unicorn: {
// 			type: 'boolean',
// 			default: false,
// 			shortFlag: 'u'
// 		},
// 		cake: {
// 			type: 'boolean',
// 			shortFlag: 'c'
// 		},
// 		sparkles: {
// 			type: 'boolean',
// 			default: true
// 		}
// 	}
// });

// const wifiPassword = require('wifi-password');

// wifiPassword().then(password => {
// 	console.log(password);
// 	//=> 'johndoesecretpassword'
// });


/*
/$$$$$$$$ /$$$$$$ / $$$$$$$ / $$$$$$$$ / $$$$$$ / $$ / $$ / $$$$$$ / $$$$$$$ / $$
| $$_____/|_  $$_/| $$__  $$| $$_____/ /$$__  $$| $$  | $$|_  $$_/| $$__  $$|__/
| $$        | $$  | $$  \ $$| $$      | $$  \__/| $$  | $$  | $$  | $$  \ $$ /$$  /$$$$$$
| $$$$$     | $$  | $$$$$$$/| $$$$$   |  $$$$$$ | $$$$$$$$  | $$  | $$$$$$$/| $$ /$$__  $$
| $$__/     | $$  | $$__  $$| $$__/    \____  $$| $$__  $$  | $$  | $$____/ | $$| $$  \ $$
| $$        | $$  | $$  \ $$| $$       /$$  \ $$| $$  | $$  | $$  | $$      | $$| $$  | $$
| $$       /$$$$$$| $$  | $$| $$$$$$$$|  $$$$$$/| $$  | $$ /$$$$$$| $$ /$$  | $$|  $$$$$$/
|__/      |______/|__/  |__/|________/ \______/ |__/  |__/|______/|__/|__/  |__/ \______/
*/




// let playerName:any;

// const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

// async function welcome() {
//   // const rainbowTitle = chalkAnimation.rainbow(
//   //   'Dx Ui - Is a cli app to quickly add your favorite components from your favorite ui frameworks.\n'
//   // );

//   await sleep();
//   // rainbowTitle.stop();

//   console.log(`
//     ${chalk.bgBlue('HOW TO PLAY')} 
//     I am a process on your computer.
//     If you get any question wrong I will be ${chalk.bgRed('killed')}
//     So get all the questions right...

//   `);
// }

// async function handleAnswer(isCorrect: boolean) {
//   const spinner = createSpinner('Checking answer...').start();
//   await sleep();

//   if (isCorrect) {
//     spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
//   } else {
//     spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
//     process.exit(1);
//   }
// }

// async function askName() {
//   const answers = await inquirer.prompt({
//     name: 'player_name',
//     type: 'input',
//     message: 'What is your name?',
//     default() {
//       return 'Player';
//     },
//   });

//   playerName = answers.player_name;
// }

// function winner() {
//   console.clear();
//   figlet(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
//     console.log(gradient.pastel.multiline(data) + '\n');

//     console.log(
//       chalk.green(
//         `Programming isn't about what you know; it's about making the command line look cool`
//       )
//     );
//     process.exit(0);
//   });
// }

// async function question1() {
//   const answers = await inquirer.prompt({
//     name: 'question_1',
//     type: 'list',
//     message: 'JavaScript was created in 10 days then released on\n',
//     choices: [
//       'May 23rd, 1995',
//       'Nov 24th, 1995',
//       'Dec 4th, 1995',
//       'Dec 17, 1996',
//     ],
//   });

//   return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
// }

// async function question2() {
//   const answers = await inquirer.prompt({
//     name: 'question_2',
//     type: 'list',
//     message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
//     choices: ['4', '"4"', '"1111"', '69420'],
//   });
//   return handleAnswer(answers.question_2 === '"1111"');
// }

// async function question3() {
//   const answers = await inquirer.prompt({
//     name: 'question_3',
//     type: 'list',
//     message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
//     choices: ['0', '🐏', '🐍', 'undefined'],
//   });

//   return handleAnswer(answers.question_3 === 'undefined');
// }

// async function question4() {
//   const answers = await inquirer.prompt({
//     name: 'question_4',
//     type: 'list',
//     message: 'Which of the following is NOT a primitive type?\n',
//     choices: [
//       'boolean',
//       'number',
//       'null',
//       'object', // Correct
//     ],
//   });
//   return handleAnswer(answers.question_4 === 'object');
// }

// async function question5() {
//   const answers = await inquirer.prompt({
//     name: 'question_5',
//     type: 'list',
//     message:
//       'JS is a high-level single-threaded, garbage-collected,\n' +
//       'interpreted(or just-in-time compiled), prototype-based,\n' +
//       'multi-paradigm, dynamic language with a ____ event loop\n',
//     choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
//   });

//   return handleAnswer(answers.question_5 === 'non-blocking');
// }

// // Run it with top-level await
// console.clear();
// await welcome();
// await askName();
// await question1();
// await question2();
// await question3();
// await question4();
// await question5();
// winner();

/*
________                  __ 
/        |                /  |
$$$$$$$$/  _______    ____$$ |
$$ |__    /       \  /    $$ |
$$    |   $$$$$$$  |/$$$$$$$ |
$$$$$/    $$ |  $$ |$$ |  $$ |
$$ |_____ $$ |  $$ |$$ \__$$ |
$$       |$$ |  $$ |$$    $$ |
$$$$$$$$/ $$/   $$/  $$$$$$$/ 

// */


        // console.log(`${chalk.gray("This innovative solution empowers developers by automating the often-tedious process of integrating UI components.\nEliminate the need for manual configuration and repetitive tasks, and unlock a new level of development efficiency.\nTo maintain your current session and avoid interruption, please execute any command within the next 10s")}`)



import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import prompt from "prompts";
import terminalLink from 'terminal-link';
import * as readline from 'readline';
import cliCursor from 'cli-cursor';
import React, { useState, useEffect } from 'react';
import { render, Text } from 'ink';
import { findMostMatchText } from '@helpers/math-diff';
import { outputBox } from '@helpers/output-info';
import { getCommandDescAndLog } from '@helpers/utils';
import { exec } from '@helpers/exec';



// cliCursor.hide();

// const unicornsAreAwesome = true;
// cliCursor.toggle(unicornsAreAwesome);
// var Canvas = require('drawille');
// var line = require('bresenham');

// var c = new Canvas(160, 160);

// function draw() {
//   c.clear();
//   var t = new Date();
//   var sin = function(i, l) {
//     return Math.floor(Math.sin(i*2*Math.PI)*l+80);
//   }, cos = function(i, l) {
//     return Math.floor(Math.cos(i*2*Math.PI)*l+80);
//   };
//   line(80, 80, sin(t.getHours()/24, 30), 160-cos(t.getHours()/24, 30), c.set.bind(c));
//   line(80, 80, sin(t.getMinutes()/60, 50), 160-cos(t.getMinutes()/60, 50), c.set.bind(c));
//   line(80, 80, sin(t.getSeconds()/60+(+t%1000)/60000, 75), 160-cos(t.getSeconds()/60+(+t%1000)/60000, 75), c.set.bind(c));
//   process.stdout.write(c.frame());
// }

// setInterval(draw, 1000/24);




        // const Counter = () => {
        //     const [counter, setCounter] = useState(0);

        //     useEffect(() => {
        //         const timer = setInterval(() => {
        //             setCounter(previousCounter => previousCounter + 1);
        //         }, 100);

        //         return () => {
        //             clearInterval(timer);
        //         };
        //     }, []);

        //     return <Text color="green" > { counter } tests passed </Text>;
        // };

        // render(<Counter />);
        // var ProgressBar = require('progress');
        // var https = require('https');

        // var req = https.request({
        //     host: 'download.github.com',
        //     port: 443,
        //     path: '/visionmedia-node-jscoverage-0d4608a.zip'
        // });

        // req.on('response', function (res) {
        //     var len = parseInt(res.headers['content-length'], 10);

        //     console.log();
        //     var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
        //         complete: '=',
        //         incomplete: ' ',
        //         width: 20,
        //         total: len
        //     });

        //     res.on('data', function (chunk) {
        //         bar.tick(chunk.length);
        //     });

        //     res.on('end', function () {
        //         console.log('\n');
        //     });
        // });

        // req.end();


        // const data:any[] = [
        //     {
        //       name: 'Sosa Saunders',
        //       gender: 'male',
        //       age: 17,
        //       email: 'sosa.saunders@mail.com',
        //       phone: '+1 (809) 435-2786',
        //     },
        //     {
        //       name: 'Angelina Kirk',
        //       gender: 'female',
        //       age: 3,
        //       email: 'angelina@kirk.io',
        //       phone: '+1 (870) 567-3516',
        //     },
        //     {
        //       name: 'Bradford Rosales',
        //       gender: 'male',
        //       age: 20,
        //       email: 'bradfordrosales@fast.com',
        //       phone: '+1 (918) 573-3240',
        //     },
        //     {
        //       name: 'Gwen Schroeder',
        //       gender: 'female',
        //       age: 17,
        //       email: 'gwen@corp.xyz',
        //       phone: '+1 (987) 417-2062',
        //     },
        //     {
        //       name: 'Ellison Mann',
        //       gender: 'male',
        //       age: 5,
        //       email: 'ellisonmann@katakana.com',
        //       phone: '+1 (889) 411-2186',
        //     },
        //   ]

        //   const Basic:any = () => <Table data={data} />

        //   render(<Basic />)
        // cliCursor.hide();

        // const unicornsAreAwesome = true;
        // cliCursor.toggle(unicornsAreAwesome);
        // var chart = require('chart');
        // var clear = require('clear');

        // var data:any = [1, 2,3];

        // clear();
        // console.log(chart(data, {
        //     width: 130,
        //     height: 30,
        //     pointChar: '█',
        //     negativePointChar: '░'
        // }));
        // async function CLI_HOME_ACTIONS () {

        //     const questions: any[] = [
        //         {
        //             type: 'text',
        //             name: 'twitter',
        //             message: `What's your twitter handle?`,
        //             initial: `terkelg`,
        //             format: (v: string) => `@${v}`
        //         },
        //         {
        //             type: 'number',
        //             name: 'age',
        //             message: 'How old are you?',
        //             validate: (value: number) => value < 18 ? `Sorry, you have to be 18` : true
        //         },
        //         {
        //             type: 'password',
        //             name: 'secret',
        //             message: 'Tell me a secret'
        //         },
        //         {
        //             type: 'confirm',
        //             name: 'confirmed',
        //             message: 'Can you confirm?'
        //         },
        //         {
        //             type: (prev: boolean) => prev && 'toggle',
        //             name: 'confirmtoggle',
        //             message: 'Can you confirm again?',
        //             active: 'yes',
        //             inactive: 'no'
        //         },
        //         {
        //             type: 'list',
        //             name: 'keywords',
        //             message: 'Enter keywords'
        //         },
        //         {
        //             type: 'select',
        //             name: 'color',
        //             message: 'Pick a color',
        //             choices: [
        //                 { title: 'Red', description: 'This option has a description.', value: '#ff0000' },
        //                 { title: 'Green', value: '#00ff00' },
        //                 { title: 'Yellow', value: '#ffff00', disabled: true },
        //                 { title: 'Blue', value: '#0000ff' }
        //             ]
        //         },
        //         {
        //             type: 'multiselect',
        //             name: 'multicolor',
        //             message: 'Pick colors',
        //             hint: false,
        //             choices: [
        //                 { title: 'Red', description: 'This option has a description.', value: '#ff0000' },
        //                 { title: 'Green', value: '#00ff00' },
        //                 { title: 'Yellow', value: '#ffff00', disabled: true },
        //                 { title: 'Blue', value: '#0000ff' }
        //             ]
        //         },
        //         {
        //             type: 'autocomplete',
        //             name: 'actor',
        //             message: 'Pick your favorite actor',
        //             initial: 1,
        //             limit: 3,
        //             suggest: (input: string, choices: any[]) => choices.filter(i => i.title.toLowerCase().includes(input.toLowerCase())),
        //             choices: [
        //                 { title: 'Cage' },
        //                 { title: 'Clooney', value: 'silver-fox' },
        //                 { title: 'Gyllenhaal' },
        //                 { title: 'Gibson' },
        //                 { title: 'Grant', description: 'This option has a description.' },
        //                 { title: 'Hanks' },
        //                 { title: 'Downey Jr.' }
        //             ],
        //             fallback: {
        //                 title: `This is the fallback. Its value is 'fallback'`,
        //                 value: 'fallback'
        //             }
        //         },
        //         {
        //             type: 'date',
        //             name: 'birthday',
        //             message: `What's your birthday?`,
        //             validate: (date: any) => date > Date.now() ? `Your birth day can't be in the future` : true
        //         },
        //         {
        //             type: 'number',
        //             name: 'prompt',
        //             message: 'This will be overridden',
        //             onRender(color: any) {
        //                 this.no = (this.no || 1);
        //                 this.msg = `Enter a number (e.g. ${color.cyan(this.no)})`;
        //                 if (!interval) interval = setInterval(() => {
        //                     this.no += 1;
        //                     if(this.no > 10){
        //                         console.log("Exiting...");
        //                         process.exit(0);
        //                     }
        //                     this.render();
        //                 }, 1000);
        //                 // if(interval>10){
        //                 //     process.exit();
        //                 // }
        //             }
        //         }
        //     ];
        //     const answers = await prompt(questions, { onCancel: cleanup, onSubmit: cleanup });
        //     console.log(answers);

        // }
        // CLI_HOME_ACTIONS();
        // function cleanup() {
        //     clearInterval(interval);
        // }
        // Countdown
        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // });

        // function countdown(seconds: number): any {
        //     const intervalId = setInterval(() => {
        //         seconds--;
        //         if (seconds === 0) {
        //             clearInterval(intervalId);
        //             process.stdout.write('\nSession expired!');
        //             rl.close();
        //         } else {
        //             // Move cursor to the bottom left corner before writing
        //             process.stdout.write('\x1b[?25l'); // Hide cursor
        //             process.stdout.cursorTo(0, process.stdout.rows - 1); // Move cursor to bottom left
        //             // Overwrite existing countdown with spaces
        //             process.stdout.write(' '.repeat(process.stdout.columns)); // Clear current line
        //             process.stdout.cursorTo(0, process.stdout.rows - 1); // Move cursor back to bottom left
        //             process.stdout.write(`${seconds} seconds`);
        //             process.stdout.write('\x1b[?25h'); // Show cursor again
        //         }
        //     }, 1000); // Update every second
        // }

        // rl.on('line', (input: string) => {
        //     // Reset timer on any user input
        //     clearInterval(countdown(10)); // Restart countdown with 10 seconds
        //     if (input.toLowerCase() === 'q') {
        //         process.stdout.write('\nExiting...\n');
        //         rl.close();
        //         process.exit(0); // Exit with code 0 (successful termination)
        //     }
        // });

        // // Start the countdown
        // countdown(10);

        // const link = terminalLink('My Website', 'https://sindresorhus.com');
        // console.log(link);
        
    // Add NextUI CLI version check preAction
    // const currentVersion = pkg.version;

    // if (compareVersions(currentVersion, cliLatestVersion) === -1) {
    //     outputBox({
    //         color: 'yellow',
    //         padding: 1,
    //         text: `${chalk.gray(
    //             `Available upgrade: v${currentVersion} -> ${chalk.green(
    //                 `v${cliLatestVersion}`
    //             )}\nRun \`${chalk.cyan(
    //                 'npm install nextui-cli@latest'
    //             )}\` to upgrade\nChangelog: ${chalk.underline(
    //                 'https://github.com/nextui-org/nextui-cli/releases'
    //             )}`
    //         )}`,
    //         title: gradientString('NextUI CLI')
    //     });
    //     Logger.newLine();
    // }

    import type {CommandName} from '@helpers/type';

import chalk from 'chalk';
import {Command} from 'commander';

import {exec} from '@helpers/exec';
import {Logger, gradientString} from '@helpers/logger';
import {findMostMatchText} from '@helpers/math-diff';
import {outputBox} from '@helpers/output-info';
import {getCommandDescAndLog} from '@helpers/utils';

import pkg from '../package.json';

import {addAction} from './actions/add-action';
import {doctorAction} from './actions/doctor-action';
import {envAction} from './actions/env-action';
import {initAction} from './actions/init-action';
import {listAction} from './actions/list-action';
import {removeAction} from './actions/remove-action';
import {upgradeAction} from './actions/upgrade-action';
import {initStoreComponentsData} from './constants/component';
import {getStore, store} from './constants/store';
import {compareVersions, getComponents} from './scripts/helpers';

const commandList: CommandName[] = ['add', 'env', 'init', 'list', 'upgrade', 'doctor', 'remove'];

const ui = new Command();

ui
  .name('ui')
  .usage('[command]')
  .description(`${chalk.blue(getCommandDescAndLog(`\nDx/Ui CLI v${pkg.version}\n`, ''))}`)
  .version(pkg.version, '-v, --version', 'Output the current version')
  .helpOption('-h, --help', 'Display help for command')
  .allowUnknownOption()
  .action(async (_, command) => {
    let isArgs = false;

    if (command) {
      const args = command.args?.[0];

      if (args && !commandList.includes(args as CommandName)) {
        isArgs = true;

        const matchCommand = findMostMatchText(commandList, args);

        if (matchCommand) {
          Logger.error(
            `Unknown command '${args}', Did you mean '${chalk.underline(matchCommand)}'?`
          );
        } else {
          Logger.error(`Unknown command '${args}'`);
        }
      }
    }

    if (!isArgs) {
      const helpInfo = (await exec('ui --help', {logCmd: false, stdio: 'pipe'})) as string;

      let helpInfoArr = helpInfo.split('\n');

      helpInfoArr = helpInfoArr.filter((info) => info && !info.includes('NextUI CLI v'));
      // Add command name color
      helpInfoArr = helpInfoArr.map((info) => {
        const command = info.match(/(\w+)\s\[/)?.[1];

        if (command) {
          return info.replace(command, chalk.cyan(command));
        }

        return info;
      });

      Logger.log(helpInfoArr.join('\n'));
    }
    process.exit(0);
  });

ui
  .command('init')
  .description('Initializes a new project')
  .argument('[projectName]', 'Name of the project to initialize')
  .option('-t --template [string]', 'Specify a template for the new project, e.g., app, pages')
  /** ======================== TODO:(winches)Temporary use npm with default value ======================== */
  // .option('-p --package [string]', 'The package manager to use for the new project')
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
  .command('upgrade')
  .description('Upgrades project components to the latest versions')
  .argument('[components...]', 'Names of components to upgrade')
  .option('-p --packagePath [string]', 'Specify the path to the package.json file')
  .option('-a --all [boolean]', 'Upgrade all components', false)
  .action(upgradeAction);

ui
  .command('remove')
  .description('Removes components from the project')
  .argument('[components...]', 'Names of components to remove')
  .option('-p --packagePath [string]', 'Specify the path to the package.json file')
  .option('-a --all [boolean]', 'Remove all components', false)
  .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
  .action(removeAction);

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

  // Add NextUI CLI version check preAction
  const currentVersion = pkg.version;

  if (compareVersions(currentVersion, cliLatestVersion) === -1) {
    outputBox({
      color: 'yellow',
      padding: 1,
      text: `${chalk.gray(
        `Available upgrade: v${currentVersion} -> ${chalk.greenBright(
          `v${cliLatestVersion}`
        )}\nRun \`${chalk.cyan(
          'npm install ui-cli@latest'
        )}\` to upgrade\nChangelog: ${chalk.underline(
          'https://github.com/ui-org/ui-cli/releases'
        )}`
      )}`,
      title: gradientString('NextUI CLI')
    });
    Logger.newLine();
  }
});

ui.parseAsync(process.argv).catch(async (reason) => {
  Logger.newLine();
  Logger.error('Unexpected error. Please report it as a bug:');
  Logger.log(reason);
  Logger.newLine();
  process.exit(1);
});


        // // Countdown
        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // });

        // function countdown(seconds: number): any {
        //     const intervalId = setInterval(() => {
        //         seconds--;
        //         if (seconds === 0) {
        //             clearInterval(intervalId);
        //             process.stdout.write('\nThis is manfromexistence, signing out...');
        //             rl.close();
        //         } else {
        //             // Move cursor to the bottom left corner before writing Session expired!
        //             process.stdout.write('\x1b[?25l'); // Hide cursor
        //             process.stdout.cursorTo(0, process.stdout.rows - 1); // Move cursor to bottom left
        //             // Overwrite existing countdown with spaces
        //             process.stdout.write(' '.repeat(process.stdout.columns)); // Clear current line
        //             process.stdout.cursorTo(0, process.stdout.rows - 1); // Move cursor back to bottom left
        //             process.stdout.write(`${seconds} seconds`);
        //             process.stdout.write('\x1b[?25h'); // Show cursor again
        //         }
        //     }, 1000); // Update every second
        // }
        // countdown(10);
        // Countdown with toggle
        // Countdown with toggle (infinite)
    

        // // Toggle emon/sumon infinitely
        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // });

        // let message = "emon"; // Initial message to display

        // function toggleMessage() {
        //     message = message === "emon" ? "sumon" : "emon";
        //     process.stdout.write('\x1b[?25l'); // Hide cursor
        //     process.stdout.cursorTo(0, process.stdout.rows - 1); // Move to bottom left
        //     process.stdout.write(' '.repeat(process.stdout.columns)); // Clear current line
        //     process.stdout.cursorTo(0, process.stdout.rows - 1); // Move back to bottom left
        //     process.stdout.write(`${message}`);
        //     process.stdout.write('\x1b[?25h'); // Show cursor again
        // }

        // setInterval(toggleMessage, 3000); // Toggle every 3 seconds

        // // Prevent program from exiting immediately (optional)
        // rl.on('SIGINT', () => {
        //     process.stdout.write('\n');
        //     rl.close();
        // });

        // // Start the loop
        // toggleMessage();

        // // Toggle CLI options/flags (bottom left)
        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // });

        // let message = "options"; // Initial message to display

        // function toggleMessage() {
        //     message = message === "options" ? "flags" : "options";

        //     const content = message === "options" ? CLI_OPTIONS : CLI_FLAGS;

        //     const terminalHeight = process.stdout.rows; // Get terminal height

        //     process.stdout.write('\x1b[?25l'); // Hide cursor
        //     process.stdout.cursorTo(0, terminalHeight - 1); // Move to bottom left
        //     process.stdout.write(' '.repeat(process.stdout.columns)); // Clear current line
        //     process.stdout.cursorTo(0, terminalHeight - 1); // Move back to bottom left
        //     process.stdout.write(content);
        //     process.stdout.write('\x1b[?25h'); // Show cursor again
        // }

        // setInterval(toggleMessage, 3000); // Toggle every 3 seconds

        // // Prevent program from exiting immediately (optional)
        // rl.on('SIGINT', () => {
        //     process.stdout.write('\n');
        //     rl.close();
        // });

        // // Start the loop
        // toggleMessage();

        // // Toggle CLI options/flags (bottom left, clean removal)
        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // });

        // let message = "options"; // Initial message to display

        // function toggleMessage() {
        //     message = message === "options" ? "flags" : "options";

        //     const contentLength = (message === "options" ? CLI_OPTIONS : CLI_FLAGS).length; // Get content length
        //     const terminalHeight = process.stdout.rows; // Get terminal height

        //     process.stdout.write('\x1b[?25l'); // Hide cursor
        //     process.stdout.cursorTo(0, terminalHeight - 1); // Move to bottom left
        //     // Overwrite previous content with spaces (adjust length if needed)
        //     process.stdout.write(' '.repeat(contentLength));
        //     process.stdout.cursorTo(0, terminalHeight - 1); // Move back to bottom left
        //     process.stdout.write(message === "options" ? CLI_OPTIONS : CLI_FLAGS);
        //     process.stdout.write('\x1b[?25h'); // Show cursor again
        // }

        // setInterval(toggleMessage, 3000); // Toggle every 3 seconds

        // // Prevent program from exiting immediately (optional)
        // rl.on('SIGINT', () => {
        //     process.stdout.write('\n');
        //     rl.close();
        // });

        // // Start the loop
        // toggleMessage();
        // const readline = require('readline').createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        // });

        // const messages = [
        //     "Line 1 - This is the first line.",
        //     "Line 2 - This is the second line.",
        //     "Line 3 - This is the third line." // Add more lines as needed
        // ];

        // let currentLineIndex = 0; // Keeps track of the current line to toggle

        // function toggleMessage() {
        //     process.stdout.write('\x1b[?25l'); // Hide cursor

        //     // Clear the current line
        //     process.stdout.cursorTo(0, process.stdout.rows - 1);
        //     process.stdout.write(' '.repeat(process.stdout.columns));

        //     // Move back to the bottom left
        //     process.stdout.cursorTo(0, process.stdout.rows - 1);

        //     // Display the current line
        //     process.stdout.write(`${messages[currentLineIndex]}\n`); // Add newline at the end

        //     currentLineIndex = (currentLineIndex + 1) % messages.length; // Cycle through messages

        //     process.stdout.write('\x1b[?25h'); // Show cursor again
        // }

        // setInterval(toggleMessage, 3000); // Toggle every 3 seconds

        // // Prevent program from exiting immediately (optional)
        // readline.on('SIGINT', () => {
        //     process.stdout.write('\n');
        //     readline.close();
        // });

        // // Start the display
        // toggleMessage();


        // // Toggle emon/sumon infinitely
        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // });

        // let message = "emon"; // Initial message to display

        // function toggleMessage() {
        //     message = message === "emon" ? `${chalk.red("sumon")}` : `${chalk.green("emon")}`;
        //     process.stdout.write('\x1b[?25l'); // Hide cursor
        //     process.stdout.cursorTo(0, process.stdout.rows - 1); // Move to bottom left
        //     process.stdout.write(' '.repeat(process.stdout.columns)); // Clear current line
        //     process.stdout.cursorTo(0, process.stdout.rows - 1); // Move back to bottom left
        //     process.stdout.write(`${message}`);
        //     process.stdout.write('\x1b[?25h'); // Show cursor again
        // }

        // setInterval(toggleMessage, 3000); // Toggle every 3 seconds

        // // Prevent program from exiting immediately (optional)
        // rl.on('SIGINT', () => {
        //     process.stdout.write('\n');
        //     rl.close();
        // });

        // // Start the loop
        // toggleMessage();

        // Toggle message and display it in the console
        // Toggle message and display it in the console with clearing

        // const readline = require('readline').createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // });

        // let message = "emon"; // Initial message

        // function toggleMessage() {
        //     message = message === "emon" ? "sumon" : "emon";

        //     // Clear the current line before logging the new message
        //     process.stdout.write('\x1b[2K'); // Clear current line (ESC [ 2 K)

        //     console.log(`${message}`); // Log the current message to the console
        // }

        // setInterval(toggleMessage, 3000); // Toggle every 3 seconds

        // // Prevent program from exiting immediately (optional)
        // readline.on('SIGINT', () => {
        //     console.log('\n'); // Log a newline character on exit
        //     readline.close();
        // });

        // // Start the loop
        // toggleMessage();
        // Toggle message and display it in the console


                // (async () => {
        //     const response = await prompts([
        //         {
        //             type: 'text',
        //             name: 'command',
        //             message: `${chalk.hex("#03fcf0")("ManFromExistence")}${chalk.hex("#6203fc")("(")}${chalk.hex("#ffff00")("Freetier")}${chalk.hex("#6203fc")(")")}`
        //         }
        //     ]);

        //     (async () => {
        //         const stream = await cohere.chatStream({
        //             model: "command-r-plus",
        //             message: response.command,
        //             temperature: 0.3,
        //             chatHistory: [],
        //             promptTruncation: "AUTO",
        //             connectors: [{ "id": "web-search" }]
        //         });

        //         for await (const chat of stream) {
        //             if (chat.eventType === "text-generation") {
        //                 process.stdout.write(chat.text);
        //             }
        //         }
        //     })();
        //     console.log(`\n${chalk.hex("#02f78d")("Friday:")}`);
        // })();

        // console.log(CONTRACT);

        // Start the loop
        // toggleMessage();


        // (async function () {
        //     const questions:any = [
        //         {
        //             type: 'text',
        //             name: 'twitter',
        //             message: `What's your twitter handle?`,
        //             initial: `terkelg`,
        //             format: v => `@${v}`
        //         },
        //         {
        //             type: 'number',
        //             name: 'age',
        //             message: 'How old are you?',
        //             validate: value => value < 18 ? `Sorry, you have to be 18` : true
        //         },
        //         {
        //             type: 'password',
        //             name: 'secret',
        //             message: 'Tell me a secret'
        //         },
        //         {
        //             type: 'confirm',
        //             name: 'confirmed',
        //             message: 'Can you confirm?'
        //         },
        //         {
        //             type: prev => prev && 'toggle',
        //             name: 'confirmtoggle',
        //             message: 'Can you confirm again?',
        //             active: 'yes',
        //             inactive: 'no'
        //         },
        //         {
        //             type: 'list',
        //             name: 'keywords',
        //             message: 'Enter keywords'
        //         },
        //         {
        //             type: 'select',
        //             name: 'color',
        //             message: 'Pick a color',
        //             choices: [
        //                 { title: 'Red', description: 'This option has a description.', value: '#ff0000' },
        //                 { title: 'Green', value: '#00ff00' },
        //                 { title: 'Yellow', value: '#ffff00', disabled: true },
        //                 { title: 'Blue', value: '#0000ff' }
        //             ]
        //         },
        //         {
        //             type: 'multiselect',
        //             name: 'multicolor',
        //             message: 'Pick colors',
        //             hint: false,
        //             choices: [
        //                 { title: 'Red', description: 'This option has a description.', value: '#ff0000' },
        //                 { title: 'Green', value: '#00ff00' },
        //                 { title: 'Yellow', value: '#ffff00', disabled: true },
        //                 { title: 'Blue', value: '#0000ff' }
        //             ]
        //         },
        //         {
        //             type: 'autocomplete',
        //             name: 'actor',
        //             message: 'Pick your favorite actor',
        //             initial: 1,
        //             limit: 3,
        //             suggest: (input, choices) => choices.filter(i => i.title.toLowerCase().includes(input.toLowerCase())),
        //             choices: [
        //                 { title: 'Cage' },
        //                 { title: 'Clooney', value: 'silver-fox' },
        //                 { title: 'Gyllenhaal' },
        //                 { title: 'Gibson' },
        //                 { title: 'Grant', description: 'This option has a description.' },
        //                 { title: 'Hanks' },
        //                 { title: 'Downey Jr.' }
        //             ],
        //             fallback: {
        //                 title: `This is the fallback. Its value is 'fallback'`,
        //                 value: 'fallback'
        //             }
        //         },
        //         {
        //             type: 'date',
        //             name: 'birthday',
        //             message: `What's your birthday?`,
        //             validate: date => date > Date.now() ? `Your birth day can't be in the future` : true
        //         },
        //         {
        //             type: 'number',
        //             name: 'prompt',
        //             message: 'This will be overridden',
        //         }
        //     ];

        //     const answers = await prompt(questions, { onCancel: cleanup, onSubmit: cleanup });
        //     console.log(answers);
        // })();

        // function cleanup() {
        //     clearInterval(interval);
        // }


        // const prompt = new MultiSelect({
        //   name: 'value',
        //   message: 'Pick your favorite colors',
        //   limit: 7,
        //   choices: [
        //     { name: 'aqua', value: '#00ffff' },
        //     { name: 'black', value: '#000000' },
        //     { name: 'blue', value: '#0000ff' },
        //     { name: 'fuchsia', value: '#ff00ff' },
        //     { name: 'gray', value: '#808080' },
        //     { name: 'green', value: '#008000' },
        //     { name: 'lime', value: '#00ff00' },
        //     { name: 'maroon', value: '#800000' },
        //     { name: 'navy', value: '#000080' },
        //     { name: 'olive', value: '#808000' },
        //     { name: 'purple', value: '#800080' },
        //     { name: 'red', value: '#ff0000' },
        //     { name: 'silver', value: '#c0c0c0' },
        //     { name: 'teal', value: '#008080' },
        //     { name: 'white', value: '#ffffff' },
        //     { name: 'yellow', value: '#ffff00' }
        //   ]
        // });

        // prompt.run()
        //   .then(answer => console.log('Answer:', answer))
        //   .catch(console.error);

        // Answer: ['aqua', 'blue', 'fuchsia']

        // (async () => {
        //     const response = await prompts({
        //         type: 'autocomplete',
        //         name: 'value',
        //         message: 'Pick your favorite actor',
        //         choices: [
        //             { title: 'Cage' },
        //             { title: 'Clooney', value: 'silver-fox' },
        //             { title: 'Gyllenhaal' },
        //             { title: 'Gibson' },
        //             { title: 'Clooney', value: 'silver-fox' },
        //             { title: 'Gyllenhaal' },
        //             { title: 'Gibson' },
        //             { title: 'Clooney', value: 'silver-fox' },
        //             { title: 'Gyllenhaal' },
        //             { title: 'Gibson' },
        //             { title: 'Clooney', value: 'silver-fox' },
        //             { title: 'Gyllenhaal' },
        //             { title: 'Gibson' },
        //             { title: 'Clooney', value: 'silver-fox' },
        //             { title: 'Gyllenhaal' },
        //             { title: 'Gibson' },
        //             { title: 'Grant' }
        //         ]
        //     });

        //     console.log(response); // => { value: 24 }
        // })();
        // const prompt = new AutoComplete({
        //   name: 'flavor',
        //   message: 'Pick your favorite flavor',
        //   limit: 10,
        //   initial: 2,
        //   choices: [
        //     'Almond',
        //     'Apple',
        //     'Banana',
        //     'Blackberry',
        //     'Blueberry',
        //     'Cherry',
        //     'Chocolate',
        //     'Cinnamon',
        //     'Coconut',
        //     'Cranberry',
        //     'Grape',
        //     'Nougat',
        //     'Orange',
        //     'Pear',
        //     'Pineapple',
        //     'Raspberry',
        //     'Strawberry',
        //     'Vanilla',
        //     'Watermelon',
        //     'Wintergreen'
        //   ]
        // });

        // prompt.run()
        //   .then(answer => console.log('Answer:', answer))
        //   .catch(console.error);

        // {
        //     value: "Command",
        //     headerColor: "red",
        //     color: "green",
        //     align: "left",
        //     width: "8%"
        // },
        // {
        //     value: "Description",
        //     width: "25%",
        //     headerColor: "magenta",
        //     color: "gray"
        // },
        // {
        //     value: "Arguments",
        //     color: "white",
        //     align: "center",
        //     width: "10%",
        //     headerColor: "cyan",
        // }
// Toggle emon/sumon infinitely
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let message = `${chalk.red("emon")}`; // Initial message to display

// function toggleMessage() {
//     message = message === `${chalk.red("emon")}` ? `${chalk.green("sumon")}` : `${chalk.red("emon")}`;
//     process.stdout.write('\x1b[?25l'); // Hide cursor
//     process.stdout.cursorTo(0, process.stdout.rows - 1); // Move to bottom left
//     process.stdout.write(' '.repeat(process.stdout.columns)); // Clear current line
//     process.stdout.cursorTo(0, process.stdout.rows - 1); // Move back to bottom left
//     process.stdout.write(`${message}`);
//     process.stdout.write('\x1b[?25h'); // Show cursor again
// }

// setInterval(toggleMessage, 2000); // Toggle every 3 seconds

// // Prevent program from exiting immediately (optional)
// rl.on('SIGINT', () => {
//     process.stdout.write('\n');
//     rl.close();
// });
// npm ui init nextjs-ui-website
// npm ui add -a
// npm ui remove accordion
```





```
GitHub: https://github.com/manfromexistence

websites I have made before:
1. https://manofexistence.vercel.app/
2. https://manofexistence-professional-portfolio.vercel.app/
3. https://manofexistence-brainwave.vercel.app/
4. https://fiverr-rocket-krypt.vercel.app/
5. https://aladdin.vercel.app/
6. https://lolgamer-xstream.vercel.app/

Dear Hiring Manager,
As an experienced software engineer with a focus on blockchain technology, I am confident in my ability to contribute significantly to your project. My expertise in full-stack development, particularly with React.js and Next.js, aligns well with your requirements.

I have successfully managed and executed several blockchain projects, demonstrating my understanding of the intricacies of blockchain technology, smart contracts, and decentralized applications. This experience, coupled with my proficiency in developing user-facing features and building reusable components and libraries, makes me a strong candidate for this role.

I am excited about the opportunity to bring my skills and passion to your team and make a significant impact in your fast-growing company. I am fully capable and ready to take on this job. Looking forward to the possibility of working with you.

Best Regards,
manfromearth01
```