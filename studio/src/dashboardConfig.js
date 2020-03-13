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
                  buildHookId: '5e6bfe318d7c1a6e5d4574a1',
                  title: 'Sanity Studio',
                  name: 'aenikata-public-studio',
                  apiId: '836855ff-00e9-4ca2-ac57-ebcb3f13c0d7'
                },
                {
                  buildHookId: '5e6bfe31281eb05f8fa6d15b',
                  title: 'Blog Website',
                  name: 'aenikata-public',
                  apiId: 'f2140797-d9d5-4ff4-8250-f17709aa6ca3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aenikata/aenikata-public',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://aenikata-public.netlify.com', category: 'apps' }
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
