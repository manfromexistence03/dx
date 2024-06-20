import type {ChalkColor, CommandName} from './type';

import chalk from 'chalk';

import {boxRound} from 'src/constants/box';
import {
  type NextUIComponent,
  type NextUIComponents,
  colorNextUIComponentKeys,
  orderNextUIComponentKeys
} from 'src/constants/component';

import {Logger} from './logger';
import {PasCalCase} from './utils';

// eslint-disable-next-line no-control-regex
const colorMatchRegex = /\u001b\[[\d;]+m/g;

const rounded = boxRound.round;
const space = '   ';
const padStart = `${rounded.vertical}${space}`;
const padEnd = `${space}${rounded.vertical}${space}`;

/**
 * Output the components information e.g. status, description, version, etc.
 * @param components
 * @param commandName
 * @param warnError
 */
export function outputComponents({
  commandName,
  components,
  message = 'Current installed components:\n',
  warnError = true
}: {
  components: NextUIComponents;
  commandName?: CommandName;
  warnError?: boolean;
  message?: string;
}) {
  if (!components.length) {
    if (warnError) {
      Logger.prefix('warn', 'No components found');
    }

    return;
  }

  const componentKeyLengthMap: Record<keyof NextUIComponent, number> = {
    description: 0,
    docs: 0,
    name: 0,
    package: 0,
    status: 0,
    style: 0,
    version: 0
  };

  for (const component of components) {
    for (const key in component) {
      // Align the length of the version
      componentKeyLengthMap[key] = Math.max(
        componentKeyLengthMap[key],
        key === 'version'
          ? Math.max(String(component[key]).length, 'version'.length)
          : String(component[key]).length
      );
    }
  }

  let transformComponentsOutput = components.reduce((acc, component) => {
    let outputData = padStart;

    for (const key of orderNextUIComponentKeys) {
      let value = component[key].padEnd(componentKeyLengthMap[key]);

      /** ======================== Replace version to new version ======================== */
      if (commandName !== 'list' && key === 'version') {
        // Filter list command cause it will list all the latest components
        const currentVersion = value.match(/([\d.]+)\snew:/)?.[1];
        const newVersion = value.match(/new:\s([\d.]+)/)?.[1];

        if (currentVersion === newVersion) {
          value = value.replace(/\snew:\s([\d.]+)/, '');
          value = `${value} 🚀latest`.padEnd(componentKeyLengthMap[key]);
          value = value.replace('latest', chalk.magentaBright.underline('latest'));
        } else if (newVersion) {
          value = `${chalk.white(`${currentVersion} ->`)} ${chalk.yellowBright(
            `${newVersion} (new)`
          )}`;

          componentKeyLengthMap[key] = Math.max(
            // eslint-disable-next-line no-control-regex
            value.replace(/(\u001b\[\d+m)/g, '').length,
            componentKeyLengthMap[key]
          );
        }
      }

      /** ======================== Change the color according to different status ======================== */
      if (component.status === 'stable' && colorNextUIComponentKeys.includes(key)) {
        value = chalk.greenBright(value);
      } else if (component.status === 'new') {
        value = chalk.magentaBright(value);
      } else if (component.status === 'updated') {
        value = chalk.blueBright(value);
      }

      outputData += value + padEnd;
    }

    outputData;

    acc.push(outputData);

    return acc;
  }, [] as string[]);

  /** ======================== Generate box header ======================== */
  let boxHeader = rounded.topLeft + padStart.replace(/.*/g, rounded.horizontal).slice(1);
  let boxHeaderSec = padStart;
  let boxHeaderTrd = rounded.vertical + padStart.replace(/.*/g, rounded.horizontal).slice(1);

  for (const key of orderNextUIComponentKeys) {
    boxHeader += `${rounded.horizontal.padEnd(componentKeyLengthMap[key] + 7, rounded.horizontal)}`;
    boxHeaderSec += chalk.redBright(PasCalCase(key).padEnd(componentKeyLengthMap[key])) + padEnd;
    boxHeaderTrd += `${rounded.horizontal.padEnd(
      componentKeyLengthMap[key] + 7,
      rounded.horizontal
    )}`;
  }

  boxHeader = boxHeader.slice(0, -2) + rounded.topRight;
  boxHeaderTrd = boxHeaderTrd.slice(0, -2) + rounded.vertical;

  /** ======================== Generate box footer ======================== */
  let boxFooter = rounded.bottomLeft + padStart.replace(/.*/g, rounded.horizontal).slice(1);

  for (const key of orderNextUIComponentKeys) {
    boxFooter += `${rounded.horizontal.padEnd(componentKeyLengthMap[key] + 7, rounded.horizontal)}`;
  }

  boxFooter = boxFooter.slice(0, -2) + rounded.bottomRight;

  transformComponentsOutput = [
    boxHeader,
    boxHeaderSec,
    boxHeaderTrd,
    ...transformComponentsOutput,
    boxFooter
  ];

  Logger.info(message);

  Logger.log(transformComponentsOutput.join('\n'));
}

/**
 * Output the environment information e.g. OS, CPU, Node version, etc.
 */
export function outputInfo() {
  Logger.newLine();
  Logger.log(chalk.redBright('Environment Info:'));
  Logger.log(chalk.blueBright('  System:'));
  Logger.log(chalk.blueBright('    OS:'), process.platform);
  Logger.log(chalk.blueBright('    CPU:'), process.arch);
  Logger.log(chalk.greenBright('  Binaries:'));
  Logger.log(chalk.greenBright('    Node:'), process.version);
  Logger.newLine();
}

/**
 * Output a box with the content
 * @param text
 * @param center
 * @param log
 * @param color
 * @param title
 * @param borderStyle
 * @param padding
 */
export function outputBox({
  borderStyle = 'round',
  center = false,
  color,
  log = true,
  padding = 0,
  text,
  title
}: {
  text: string;
  center?: boolean;
  log?: boolean;
  color?: ChalkColor;
  title?: string;
  borderStyle?: keyof typeof boxRound;
  padding?: number;
}) {
  const rounded = boxRound[borderStyle];
  const mergedRounded = color
    ? Object.fromEntries(Object.entries(rounded).map(([key, value]) => [key, chalk[color](value)]))
    : rounded;
  const contentArr = text.split('\n');
  const transformArr = contentArr.map((c) => c.replace(colorMatchRegex, ''));

  const isPadding = padding > 0;
  const paddingLength = padding;

  const mergedPadding = center || isPadding;

  let maxLength = transformArr.reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0);

  // Update the padding maxLength
  // paddingLength * 2 because one vertical line == 4 spaces
  maxLength = isPadding ? maxLength + paddingLength * 4 : maxLength;

  const clearColorTitle = title ? title.replace(colorMatchRegex, '') : '';
  const titleLength = title ? clearColorTitle.length : 0;
  let titleHeaderLength = maxLength - titleLength;
  const spaceLen = 2;

  while (titleLength + spaceLen + paddingLength >= maxLength) {
    // Need to adjust the maxLength
    maxLength += Math.floor(titleLength / 2);
  }
  // Update the titleHeaderLength
  titleHeaderLength = maxLength - titleLength;

  const boxHeaderContent = title
    ? `${rounded.horizontal
        .padEnd(Math.floor(titleHeaderLength / 2) - 1, rounded.horizontal)
        .replaceAll(rounded.horizontal, mergedRounded.horizontal)} ${title} ${rounded.horizontal
        .padEnd(Math.ceil(titleHeaderLength / 2) - 1, rounded.horizontal)
        .replaceAll(rounded.horizontal, mergedRounded.horizontal)}`
    : rounded.horizontal
        .padEnd(maxLength, rounded.horizontal)
        .replaceAll(rounded.horizontal, mergedRounded.horizontal);

  const boxHeader = mergedRounded.topLeft + boxHeaderContent + mergedRounded.topRight;
  const boxFooter =
    mergedRounded.bottomLeft +
    rounded.horizontal
      .padEnd(maxLength, rounded.horizontal)
      .replaceAll(rounded.horizontal, mergedRounded.horizontal) +
    mergedRounded.bottomRight;

  let boxContent = contentArr.reduce((acc, cur) => {
    const transformCur = cur.replace(colorMatchRegex, '');
    const spaceLength = maxLength - transformCur.length;

    const pad = ' '.repeat(spaceLength);

    const spaceFir = Math.floor(spaceLength / 2);
    const spaceSec = Math.ceil(spaceLength / 2);

    const padFir = spaceFir > 0 ? ' '.repeat(spaceFir) : '';
    const padSec = spaceSec > 0 ? ' '.repeat(spaceSec) : '';

    // Over 2 cause one vertical line == 2 spaces
    // paddingLength = Math.floor(Math.max(paddingLength, spaceFir, spaceSec) / 2);

    mergedPadding
      ? acc.push(
          `${mergedRounded.vertical}${spaceLength ? `${padFir}${cur}${padSec}` : cur}${
            mergedRounded.vertical
          }`
        )
      : acc.push(
          `${mergedRounded.vertical}${spaceLength > 0 ? `${cur}${pad}` : cur}${
            mergedRounded.vertical
          }`
        );

    return acc;
  }, [] as string[]);

  // Generate the padding
  if (mergedPadding) {
    for (let i = 0; i < paddingLength; i++) {
      boxContent.unshift(
        `${mergedRounded.vertical}${' '.repeat(maxLength)}${mergedRounded.vertical}`
      );
      boxContent.push(`${mergedRounded.vertical}${' '.repeat(maxLength)}${mergedRounded.vertical}`);
    }
  }

  boxContent = [boxHeader, ...boxContent, boxFooter];

  log && Logger.log(boxContent.join('\n'));

  return boxContent.join('\n');
}
