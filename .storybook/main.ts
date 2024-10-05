import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { buildCssLoader } from '../config/build/loaders/buildCssLoader';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-styling-webpack',
    'storybook-addon-mock',
    'storybook-addon-remix-react-router',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  webpackFinal: async (config) => {
    config?.resolve?.extensions?.push('.tsx', '.ts', '.js');
    config?.resolve?.modules?.push(path.resolve(__dirname, '..', 'src'));
    config?.module?.rules?.push(buildCssLoader(true));

    if (config.module) {
      config.module.rules = config?.module?.rules?.map((rule) => {
        if (typeof rule !== 'object' || rule === null || !('test' in rule)) {
          return rule;
        }

        if (rule.test instanceof RegExp && rule.test.source.includes('svg')) {
          return { ...rule, exclude: /\.svg$/i };
        }

        // if ((rule.test as string).includes('svg')) {
        //   return { ...rule, exclude: /\.svg$/i }
        // }

        return rule;
      });
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /url/,
          use: 'url-loader',
        },
        {
          resourceQuery: { not: [/url/] },
          use: ['@svgr/webpack'],
        },
      ],
    });
    // config?.module?.rules?.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack']
    // })

    config.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook'),
      }),
    );
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '..', 'src'),
      };
    }
    return config;
  },
};
export default config;
