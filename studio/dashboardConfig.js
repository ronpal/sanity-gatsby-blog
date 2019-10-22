export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5daede203c951aab21575f52',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fcnrh3i1',
                  apiId: '8d5d89a8-f459-4255-bc52-389cfb2d8829'
                },
                {
                  buildHookId: '5daede20f468c1b8c382fb0d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1sja9fhp',
                  apiId: '1a63ac8e-bd31-40ce-bc86-dc05f6d12988'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ronpal/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1sja9fhp.netlify.com', category: 'apps'}
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
