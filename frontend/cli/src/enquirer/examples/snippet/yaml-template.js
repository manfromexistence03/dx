'use strict';

const colors = require('ansi-colors');
const { Snippet } = require('enquirer');
const prompt = new Snippet({
  name: 'username',
  message: 'Fill out the fields in package.json',
  values: {
    name: 'awesome-lib'
  },
  styles: {
    primary: colors.blue
  },
  template: `
  name: "#{name}"
  description: "#{description:This is a great project}"
  version: "#{version}"
  homepage: "https://github.com/#{username}/#{name}"
  author: "#{author_name} (https://github.com/#{username})"
  repository: "#{username}/#{name}"
  bugs:
    url: "https://github.com/#{username}/#{name}/issues"
  license: "#{license:MIT}"
  scripts:
    test: mocha
  keywords:

`
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
