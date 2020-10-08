// @ts-nocheck
import { Plugin } from '/Users/gaowujun/tanzhou/dmi/packages/runtime';

const plugin = new Plugin({
  validKeys: [
    'modifyClientRenderOpts',
    'patchRoutes',
    'rootContainer',
    'render',
    'onRouteChange',
    'ssr',
  ],
});

export { plugin };
