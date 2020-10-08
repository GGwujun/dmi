import * as fs from 'fs';
import assert from 'assert';
import * as path from 'path';
import { performance } from 'perf_hooks';
import { Route } from '@umijs/core';
import { IApi, BundlerConfigType } from '@umijs/types';
import { winPath, Mustache, lodash as _, routeToChunkName } from '@umijs/utils';
import { matchRoutes, RouteConfig } from 'react-router-config';
import { webpack } from '@umijs/bundler-webpack-vue';

export default (api: IApi) => {
  api.describe({
    key: 'bundler',
    config: {},
    // 配置开启
    enableBy: () =>
      // TODO: api.EnableBy.config 读取的 userConfig，modifyDefaultConfig hook 修改后对这个判断不起效
      'ssr' in api.userConfig ? api.userConfig.ssr : api.config?.ssr,
  });

  // 再加一个 webpack instance
  api.modifyBundleConfigs(async (memo, { getConfig }) => {
    return [...memo, await getConfig({ type: BundlerConfigType.ssr })];
  });
};
