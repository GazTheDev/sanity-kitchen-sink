export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60f1b95c0aa1ea546f9e40c1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v1moa3vc',
                  apiId: 'de831e0d-9d04-47f5-a7c0-01107b22c82a'
                },
                {
                  buildHookId: '60f1b95c0aa1ea56859e3f9c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ninonkhg',
                  apiId: '67cb41ef-803d-4fb1-afe3-2a59c435eb38'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GazTheDev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ninonkhg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
