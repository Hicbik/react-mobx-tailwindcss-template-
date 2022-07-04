import * as CracoLessPlugin from 'craco-less';
import { CracoAliasPlugin } from 'react-app-alias';

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        '@': 'src',
      },
    },

    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
