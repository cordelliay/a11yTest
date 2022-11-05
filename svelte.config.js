import adapter from '@sveltejs/adapter-static';
const dev = "production" === "development";

export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true
    }),
	paths: {
		base: dev ? "" : "/a11yTest",
	}
  }
};