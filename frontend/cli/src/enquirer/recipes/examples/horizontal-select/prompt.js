'use strict';

const HorizontalSelect = require('../../HorizontalSelect');

const prompt = new HorizontalSelect({
  message: 'Keywords:',
  choices: ['foo', 'bar', 'baz']
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
