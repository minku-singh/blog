const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://twitter.com/minku_singhh',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://twitter.com/minku_singhh',
    logoLink: 'https://twitter.com/minku_singhh',
    title:
      "<a href='https://twitter.com/minku_singhh'><img class='img-responsive' src='https://twitter.com/minku_singhh' alt='Twitter' /></a>",
    githubUrl: 'https://github.com/minku-singh',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/minku_singhh" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img title = "Twitter" src='https://cdn-icons-png.flaticon.com/512/123/123728.png' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://www.linkedin.com/in/minku-singh/" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img title = "LinkedIn" src='https://cdn-icons-png.flaticon.com/512/61/61109.png' alt={'LinkedIn'}/>
		      </div>
		    </a>
		  </li>
      <li>
		    <a href="https://github.com/minku-singh" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img title = "github" src='https://cdn-icons-png.flaticon.com/512/38/38401.png' alt={'LinkedIn'}/>
		      </div>
		    </a>
		  </li>
      `,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Hasura', link: 'https://hasura.io' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/alien-monster_1f47e.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
