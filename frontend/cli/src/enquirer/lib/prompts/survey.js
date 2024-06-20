'use strict';

const ArrayPrompt = require('../types/array');

class Survey extends ArrayPrompt {
  constructor(options = {}) {
    super(options);
    this.emptyError = options.emptyError || 'No items were selected';
    this.term = process.env.TERM_PROGRAM;

    if (!this.options.header) {
      let header = ['', '4 - Strongly Agree', '3 - Agree', '2 - Neutral', '1 - Disagree', '0 - Strongly Disagree', ''];
      header = header.map(ele => this.styles.muted(ele));
      this.state.header = header.join('\n   ');
    }
  }

  async toChoices(...args) {
    if (this.createdScales) return false;
    this.createdScales = true;
    let choices = await super.toChoices(...args);
    for (let choice of choices) {
      choice.scale = createScale(10, this.options);
      choice.scaleIdx = 5;
    }
    return choices;
  }

  dispatch() {
    this.alert();
  }

  space() {
    let choice = this.focused;
    let ele = choice.scale[choice.scaleIdx];
    let selected = ele.selected;
    choice.scale.forEach(e => (e.selected = false));
    ele.selected = !selected;
    return this.render();
  }

  indicator() {
    return '';
  }

  pointer() {
    return '';
  }

  separator() {
    return this.styles.muted(this.symbols.ellipsis);
  }

  right() {
    let choice = this.focused;
    if (choice.scaleIdx >= choice.scale.length - 1) return this.alert();
    choice.scaleIdx++;
    return this.render();
  }

  left() {
    let choice = this.focused;
    if (choice.scaleIdx <= 0) return this.alert();
    choice.scaleIdx--;
    return this.render();
  }

  indent() {
    return '   ';
  }

  async renderChoice(item, i) {
    await this.onChoice(item, i);
    let focused = this.index === i;
    let isHyper = this.term === 'Hyper';
    let n = !isHyper ? 8 : 0;
    let s = !isHyper ? ' ' : '';
    let ln = this.symbols.line.repeat(n);
    let sp = ' '.repeat(n + (isHyper ? 1 : 1));
    let dot = enabled => (enabled ? this.styles.success('◉') : '◯') + s;

    let num = i + 1 + '.';
    // let num = 1;
    let color = focused ? this.styles.heading : this.styles.noop;
    let msg = await this.resolve(item.message, this.state, item, i);
    let indent = this.indent(item);
    let scale = indent + item.scale.map((e, i) => dot(i === item.scaleIdx)).join(ln);
    let val = i => i === item.scaleIdx ? color(i) : i;
    let next = indent + item.scale.map((e, i) => val(i)).join(sp);

    let line = () => [num, msg].filter(Boolean).join(' ');
    let lines = () => [line(), scale, next, ' '].filter(Boolean).join('\n');

    if (focused) {
      scale = this.styles.white(scale);
      next = this.styles.white(next);
    }

    return lines();
  }
  // async renderChoice(item, i) {
  //   await this.onChoice(item, i);
  //   let focused = this.index === i;
  //   let isHyper = this.term === 'Hyper';
  //   let n = !isHyper ? 8 : 0;
  //   let s = !isHyper ? ' ' : '';
  //   let ln = this.symbols.line.repeat(n);
  //   let sp = ' '.repeat(n + (isHyper ? 1 : 1));
  //   let dot = enabled => (enabled ? this.styles.success('◉') : '◯') + s;
  
  //   let num = i + 1 + '.';
  //   let color = focused ? this.styles.heading : this.styles.noop;
  //   let msg = await this.resolve(item.message, this.state, item, i);
  //   let indent = this.indent(item);
  
  //   // Get the total length of the message and indent
  //   let messageLength = msg.length + indent.length;
  
  //   // Calculate the available space for the scale and next indicators
  //   let availableSpace = process.stdout.columns - messageLength - (num.length + 2); // Account for newline and space after message
  
  //   // Define a function to check if the scale fits
  //   let fitsOnLine = (scale, next) => scale.length + next.length <= availableSpace;
  
  //   let scale = indent + item.scale.map((e, i) => dot(i === item.scaleIdx)).join(ln);
  //   let val = i => i === item.scaleIdx ? color(i) : i;
  //   let next = indent + item.scale.map((e, i) => val(i)).join(sp);
  //     let line = () => [num, msg].filter(Boolean).join(' ');
  // //   let lines = () => [line(), scale, next, ' '].filter(Boolean).join('\n');
  //   let lines = () => {
  //     // Check if both scale and next fit on the same line
  //     if (fitsOnLine(scale, next)) {
  //       return [line(), scale, next, ' '].filter(Boolean).join('\n');
  //     } else {
  //       // If not, return message and scale on separate lines
  //       return [line(), scale, next, ' '].filter(Boolean).join('\n');
  //     }
  //   };
  
  //   if (focused) {
  //     scale = this.styles.white(scale);
  //     next = this.styles.white(next);
  //   }
  
  //   return lines();
  // }
  
  async renderChoices() {
    if (this.state.submitted) return '';
    let choices = this.visible.map(async(ch, i) => await this.renderChoice(ch, i));
    let visible = await Promise.all(choices);
    if (!visible.length) visible.push(this.styles.danger('No matching choices'));
    return visible.join('\n');
  }

  format() {
    if (this.state.submitted) {
      let values = this.choices.map(ch => this.styles.info(ch.scaleIdx));
      return values.join(', ');
    }
    return '';
  }

  // async render() {
  //   let { submitted, size } = this.state;

  //   let prefix = await this.prefix();
  //   let separator = await this.separator();
  //   let message = await this.message();

  //   let prompt = [prefix, message, separator].filter(Boolean).join(' ');
  //   this.state.prompt = prompt;

  //   let header = await this.header();
  //   let output = await this.format();
  //   let help = await this.error() || await this.hint();
  //   let body = await this.renderChoices();
  //   let footer = await this.footer();

  //   if (output || !help) prompt += ' ' + output;
  //   if (help && !prompt.includes(help)) prompt += ' ' + help;

  //   if (submitted && !output && !body && this.multiple && this.type !== 'form') {
  //     prompt += this.styles.danger(this.emptyError);
  //   }

  //   this.clear(size);
  //   this.write([prompt, header, body, footer].filter(Boolean).join('\n'));
  //   this.restore();
  // }
  async render() {
    let { submitted, size } = this.state;
  
    let prefix = await this.prefix();
    let separator = await this.separator();
    let message = await this.message();
  
    // Calculate the available space for the prompt and header
    let availableSpace = process.stdout.columns - (prefix?.length || 0) - (message?.length || 0) - separator.length;
  
    // Combine prompt, message, and separator with a space
    let prompt = [prefix, message, separator].filter(Boolean).join(' ');
  
    // Check if the prompt length exceeds available space
    if (prompt.length > availableSpace) {
      // Add newline before separator if prompt is too long
      prompt = [prefix, message].filter(Boolean).join('\n') + separator;
    }
  
    this.state.prompt = prompt;
  
    let header = await this.header();
    let output = await this.format();
    let help = await this.error() || await this.hint();
    let body = await this.renderChoices();
    let footer = await this.footer();
  
    if (output || !help) prompt += ' ' + output;
    if (help && !prompt.includes(help)) prompt += ' ' + help;
  
    if (submitted && !output && !body && this.multiple && this.type !== 'form') {
      prompt += this.styles.danger(this.emptyError);
    }
  
    this.clear(size);
    this.write([prompt, header, body, footer].filter(Boolean).join('\n'));
    this.restore();
  }
  
  submit() {
    this.value = {};
    for (let choice of this.choices) {
      this.value[choice.name] = choice.scaleIdx;
    }
    return this.base.submit.call(this);
  }
}

function createScale(n, options = {}) {
  if (Array.isArray(options.scale)) {
    return options.scale.map(ele => ({ ...ele }));
  }
  let scale = [];
  for (let i = 1; i < n + 1; i++) scale.push({ i, selected: false });
  return scale;
}

module.exports = Survey;
