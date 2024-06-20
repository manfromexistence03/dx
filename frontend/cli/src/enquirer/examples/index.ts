// const { Survey } = require('enquirer');
import Survey from "../lib/prompts/survey";

console.log("Hello Bun");
'use strict';


const prompt = new Survey({
  name: 'experience',
  message: 'Please rate your experience',
  choices: [
    {
      name: 'interface',
      message: 'The website has a friendly interface.'
    }
  ]
});

prompt.run()
  .then(value => console.log('ANSWERS:', value))
  .catch(console.error);
