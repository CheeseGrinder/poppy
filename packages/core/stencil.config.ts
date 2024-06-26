import { componentConfigTarget } from '@cheese-grinder/stencil-component-config';
import { docsReadme } from '@cheese-grinder/stencil-custom-readme';
import { sassAlias } from '@cheese-grinder/stencil-sass-alias';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { apiSpecGenerator } from './plugins/api-spec-generator';
import type { JSX } from './src/components';

type ComponentTag = keyof JSX.IntrinsicElements;
type Bundle = { components: ComponentTag[] };


type VueComponentModel = {
  elements: ComponentTag | ComponentTag[];
  event: string
  targetAttr: string;
}

const componentCorePackage = '@poppy-ui/core';

export const config: Config = {
  namespace: 'Poppy',
  globalScript: './src/global/poppy.ts',
  preamble: '(C) Cheese Grinder - MIT License',
  enableCache: true,
  transformAliasedImportPaths: true,
  buildEs5: 'prod',
  plugins: [
    sass({
      importer: [sassAlias({
        path: 'src/themes',
      })]
    }),
  ],
  bundles: <Bundle[]>[
    { components: ['pop-accordion', 'pop-accordion-group'] },
    { components: ['pop-avatar', 'pop-img'] },
    { components: ['pop-badge', 'pop-indicator'] },
    { components: ['pop-button'] },
    { components: ['pop-card'] },
    { components: ['pop-checkbox'] },
    { components: ['pop-divider'] },
    { components: ['pop-drawer'] },
    { components: ['pop-dropdown'] },
    { components: ['pop-input'] },
    { components: ['pop-input-file'] },
    { components: ['pop-list', 'pop-item'] },
    { components: ['pop-join'] },
    { components: ['pop-kbd'] },
    { components: ['pop-loading'] },
    { components: ['pop-mask'] },
    { components: ['pop-modal'] },
    { components: ['pop-navbar'] },
    { components: ['pop-popover'] },
    { components: ['pop-progress'] },
    { components: ['pop-radio', 'pop-radio-group'] },
    { components: ['pop-range'] },
    { components: ['pop-select', 'pop-select-option', 'pop-select-popover'] },
    { components: ['pop-swap'] },
    { components: ['pop-textarea'] },
    { components: ['pop-toggle'] },
    { components: ['pop-tooltip'] },
  ],
  outputTargets: [
    docsReadme(),
    componentConfigTarget(),
    {
      type: 'docs-json',
      file: '../docs/core.json'
    },
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/CheeseGrinder/poppy-ui/tree/main/packages/core/',
    },
    apiSpecGenerator({
      file: 'api.txt',
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [{
        src: '../assets/custom-elements',
        dest: 'components',
        warn: true
      }],
      includeGlobalScripts: false
    },
    vueOutputTarget({
      componentCorePackage: componentCorePackage,
      proxiesFile: '../vue/src/proxies.ts',
      includeImportCustomElements: true,
      includeDefineCustomElements: false,
      includePolyfills: false,
      componentModels: <VueComponentModel[]>[
        {
          elements: ['pop-checkbox', 'pop-toggle'],
          targetAttr: 'checked',
          event: 'pop-change'
        },
        {
          elements: ['pop-swap', 'pop-accordion-group'],
          targetAttr: 'active',
          event: 'pop-change'
        },
        {
          elements: ['pop-radio', 'pop-radio-group', 'pop-select', 'pop-range'],
          targetAttr: 'value',
          event: 'pop-change',
        },
        {
          elements: ['pop-input', 'pop-textarea'],
          targetAttr: 'value',
          event: 'pop-input',
        },
      ]
    })
  ],
  testing: {
    browserHeadless: "new",
  },
  extras: {
    /**
     * `experimentalSlotFixes` is necessary in Stencil v4 until the fixes described in
     * {@link https://stenciljs.com/docs/config-extras#experimentalslotfixes the Stencil docs for the flag} are the
     * default behavior (slated for a future Stencil major version).
     */
    experimentalSlotFixes: true,
    /**
     * `experimentalScopedSlotChanges` is necessary in Stencil v4 until the fixes described in
     * {@link https://stenciljs.com/docs/config-extras#experimentalscopedslotchanges the Stencil docs for the flag} are
     * the default behavior (slated for a future Stencil major version).
     */
    experimentalScopedSlotChanges: true,
  }
};
