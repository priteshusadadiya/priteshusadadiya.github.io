// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pritesh Usadadiya',
  siteDescription: 'Pritesh Usadadiya is a software tester, occasional coder and blogger. and launching projects on the side.',
  siteUrl: 'https://www.priteshusadadiya.com',
  
  plugins: [
	{
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/blog/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        },
        remark: {
          // remark options
        }
      }
	},
  {
    use: 'gridsome-plugin-seo'
  },
  {
    use: '@gridsome/plugin-google-analytics',
    options: {
      id: 'UA-134288593-1'
    }
  },
  {
    use: 'gridsome-plugin-feed',
    options: {
      // Required: array of `GraphQL` type names you wish to include
      contentTypes: ['Post'],
      // Optional: any properties you wish to set for `Feed()` constructor
      // See https://www.npmjs.com/package/feed#example for available properties
      feedOptions: {
        title: 'Pritesh Usadadiya',
        description: 'Pritesh Usadadiya is a software tester, occasional coder and blogger. and launching projects on the side.'
      },
      // === All options after this point show their default values ===
      // Optional; opt into which feeds you wish to generate, and set their output path
      rss: {
        enabled: true,
        output: '/feed.xml'
      },
      atom: {
        enabled: false,
        output: '/feed.atom'
      },
      json: {
        enabled: false,
        output: '/feed.json'
      },
      // Optional: the maximum number of items to include in your feed
      maxItems: 25,
      // Optional: an array of properties passed to `Feed.addItem()` that will be parsed for
      // URLs in HTML (ensures that URLs are full `http` URLs rather than site-relative).
      // To disable this functionality, set to `null`.
      htmlFields: ['description', 'content'],
      // Optional: if you wish to enforce trailing slashes for site URLs
      enforceTrailingSlashes: false,
      // Optional: a method that accepts a node and returns true (include) or false (exclude)
      // Example: only past-dated nodes: `filterNodes: (node) => node.date <= new Date()`
      filterNodes: (node) => true,
      // Optional: a method that accepts a node and returns an object for `Feed.addItem()`
      // See https://www.npmjs.com/package/feed#example for available properties
      // NOTE: `date` field MUST be a Javascript `Date` object
      nodeToFeedItem: (node) => ({
        title: node.title,
        date: node.date || node.fields.date,
        content: node.content
      })
    }
  }
 ],
 transformers: {
  remark: {
  }
 },
 templates: {
    Post: [{
      path: '/post/:title'
    }],
    Category: [{
      path: '/category/:title',
      component: '~/templates/Category.vue'
    }],
    Tag: [{
      path: '/tag/:title',
      component: '~/templates/Tag.vue'
    }],
  }
}
