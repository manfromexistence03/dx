// const { spawn } = require('child_process');
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Enter a bash command: ', (command) => {
//   const ls = spawn('bash', ['-c', command]);

//   ls.stdout.on('data', (data) => {
//     console.log(data.toString());
//   });

//   ls.stderr.on('data', (data) => {
//     console.error(data.toString());
//   });

//   ls.on('close', (code) => {
//     console.log(`Bash command exited with code: ${code}`);
//     readline.close();
//   });
// });
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const spawn = require('child_process').spawn;

// let currentPath = process.cwd();

// function runCommand(command) {
//   // const child = spawn('bash', ['-c', command]);
//   const [path, ...args] = command.split(' '); // Split command into path and arguments
//   const child = spawn('bash', ['-c', `${path} && ${args.join(' ')}`]);
 
//   child.stdout.on('data', (data) => {
//     console.log(data.toString());
//   });

//   child.stderr.on('data', (data) => {
//     console.error(data.toString());
//   });

//   child.on('close', (code) => {
//     if (code !== 0) {
//       console.error(`Command exited with code ${code}`);
//     }
//     prompt();
//   });
// }

// function prompt() {
//   function path() {
//     return process.cwd();
//   }
//   // currentPath = process.cwd(); // Update currentPath before displaying prompt

//   readline.question(`${path()}> `, (input) => {
//     if (input === 'exit') {
//       readline.close();
//       return;
//     }
//     runCommand(input);
//   });
// }

// prompt();


import { $ } from "bun";

await $`cd src && ls`;