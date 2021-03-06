const themeOptions = {
  siteName: 'SchemaHero Changelog',
  pageTitle: 'SchemaHero Changelog',
  menuTitle: 'SchemaHero',
  baseDir: 'changelog',
  contentDir: 'source',
};

module.exports = {
  pathPrefix: '/changelog',
  plugins: [
    {
      resolve: '../gatsby-theme-schemahero',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'SchemaHero Changelog',
        description: 'SchemaHero Changelog',
        githubRepo: 'schemahero/schemahero-docs',
        sidebarCategories: {
          null: ['index'],
          'Changelog': [
            'releases/0.11.2',
            'releases/0.11.1',
            'releases/0.11.0',
            'releases/0.10.4',
            'releases/0.10.3',
            'releases/0.10.2',
            'releases/0.10.1',
            'releases/0.10.0',
            'releases/0.9.0',
          ],
        },
      },
    },
  ],
};
