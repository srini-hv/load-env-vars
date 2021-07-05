import * as core from '@actions/core';
import * as loader from './env-loader';

async function run() {
  try {
    let filePath = core.getInput('file-path');
    let delimiter = core.getInput('delimiter');
    core.debug(`filePath = '${filePath}'`);
    // core.debug(`delimiter at start = '${delimiter}'`);
    if (filePath) {
      await loader.loadEnvVars(filePath,delimiter);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();