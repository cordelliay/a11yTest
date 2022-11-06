import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    alias: {
      '@comp/*': './src/components/*',
      '@home/*': './src/components/home/*',
      '@stores/*': './src/stores/*'
    },
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      onError: 'continue',
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : '/a11yTest'
    }
  }
};
