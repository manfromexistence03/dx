'use strict';

const { Snippet } = require('enquirer');
const pkg = { name: 'my-awesome-lib' };
const required = ['name', 'description', 'version'];
const template = {};

for (let name of required) {
  template[name] = `\${${name}}`;
}

const prompt = new Snippet({
  name: 'username',
  message: 'Fill out the fields in package.json',
  required,
  initial: pkg,
  template: JSON.stringify(template, null, 2)
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
