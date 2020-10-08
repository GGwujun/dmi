// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/gaowujun/tanzhou/dmi/packages/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
    {
      path: '/',
      component: require('@/pages/index').default,
      exact: true,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
