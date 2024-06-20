'use strict';

const colors = require('ansi-colors');
const { Select } = require('enquirer');

const prompt = new Select({
  name: 'halloween',
  message: 'Trick or treat! Take your pick',
  choices: [
    { name: 'candy', value: 'Sweet!' },
    { name: 'apple', value: 'Hard... core?' },
    { name: 'toothpaste', value: 'Orange juice?' },
    { name: 'insult', value: 'You stink!' },
    { name: 'razor blade', value: 'Ouch!' }
  ],
  styles: {
    primary: colors.blue,
    muted: colors.yellow
  },
  symbols: {
    pointer(state, choice, i) {
      if (state.index === i) {
        return ['🍬', '🍎', '👄', '🖕', '🗡️ '][i];
      }
      return '  ';
    },
    prefix(state) {
      return ({ pending: '🎃', cancelled: '⚰️ ', answered: '💀' })[state.status];
    }
  }
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
