module.exports = {
  title: 'Landstar 7',
  tagline: 'Справочная документация',
  url: 'https://ayavrik.github.io',
  baseUrl: '/landstar7/',
  favicon: 'img/favicon.ico',
  organizationName: 'ayavrik', // Usually your GitHub org/user name.
  projectName: 'landstar7', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Landstar 7',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Документация',
          position: 'left',
        },
//        {to: 'blog', label: 'Blog', position: 'left'},

        {
          href: 'https://github.com/ayavrik/landstar7',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'ГЕОСТРОЙИЗЫСКАНИЯ',
        src: 'img/GSI_logo.png',
        href: 'http://geostroi.kz/',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
        {
          title: ' ',
          items: [ 
            {
              html: `
                <a href="https://www.chcnav.com" target="_blank" rel="noreferrer noopener" aria-label="CHCNAV">
                  <img src='/landstar7/img/logo_chcnav.png' alt="CHCNAV" />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ТОО "ГЕОСТРОЙИЗЫСКАНИЯ" `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ayavrik/landstar7/edit/master/',
        },
//        blog: {
//          showReadingTime: true,
          // Please change this to your repo.
//          editUrl:
//            'https://github.com/ayavrik/landstar7/edit/master/',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
