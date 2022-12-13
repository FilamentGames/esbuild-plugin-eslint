import { ESLint } from 'eslint';
import { Plugin } from 'esbuild';

interface esbuildPluginEslintOptions extends ESLint.Options {
  /**
  * tells esbuild what files to look at; only matches will be processed.
  * @default /\.(jsx?|tsx?|vue|svelte)$/
  */
  filter?: RegExp;

  /**
   * Apply further filtering to the path
   * @param path
   * @returns Whether or not to include the path
   */
  filterFunc?: (path) => boolean;
}

declare function eslint(options?: esbuildPluginEslintOptions): Plugin;

export = eslint;
