import {Logger} from '@helpers/logger';
import {outputComponents} from '@helpers/output-info';
import {getPackageInfo} from '@helpers/package';
import {store} from 'src/constants/store';

import {type NextUIComponents} from '../constants/component';
import {resolver} from '../constants/path';

interface ListActionOptions {
  remote?: boolean;
  packagePath?: string;
}

export async function listAction(options: ListActionOptions) {
  const {packagePath = resolver('package.json'), remote = false} = options;

  let components = store.nextUIComponents as NextUIComponents;

  try {
    /** ======================== Get the installed components ======================== */
    if (!remote) {
      const {currentComponents} = await getPackageInfo(packagePath);

      components = currentComponents;
    }

    if (!components.length) {
      Logger.warn(`No NextUI components detected in the specified package.json at: ${packagePath}`);

      return;
    }

    /** ======================== Output the components ======================== */
    remote ? outputComponents({commandName: 'list', components}) : outputComponents({components});
  } catch (error) {
    Logger.prefix('error', `An error occurred while attempting to list the components: ${error}`);
  }

  process.exit(0);
}
