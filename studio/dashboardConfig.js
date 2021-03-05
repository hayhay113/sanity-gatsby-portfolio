export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60428996ba974c162c9b6806',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-m312s2bc',
                  apiId: 'd831b8bd-0c08-4063-8fb2-800f740f09e2'
                },
                {
                  buildHookId: '60428997eb4d102102645929',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h471t4cj',
                  apiId: '064deb6c-7684-4bfb-a7ff-c4093f33098f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hayhay113/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h471t4cj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
