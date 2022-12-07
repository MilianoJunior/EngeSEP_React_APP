const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Apprelatorios',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Apprelatorios',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios',
          templates:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\node_modules\\docz-core\\dist\\templates',
          docz:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\.docz',
          cache:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\.docz\\.cache',
          app:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\.docz\\app',
          appPackageJson:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\package.json',
          appTsConfig:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\tsconfig.json',
          gatsbyConfig:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\gatsby-browser.js',
          gatsbyNode:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\gatsby-node.js',
          gatsbySSR:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\gatsby-ssr.js',
          importsJs:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\.docz\\app\\imports.js',
          rootJs:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\.docz\\app\\index.html',
          db:
            'D:\\2_EngeSEP\\Engesep\\Apps\\APPRELATORIOS\\AppRelatorios\\AppRelatorios\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
