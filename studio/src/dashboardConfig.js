export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdb04682c735880b4e691f3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xohkh3u4',
                  apiId: '87ffee6d-b51f-42b5-b71b-083e66c029fd'
                },
                {
                  buildHookId: '5fdb04682c73588265e68f6a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cv5iv789',
                  apiId: 'afec86f8-bc66-4a17-9301-7e49f68d7dca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fybchristasker/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cv5iv789.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
