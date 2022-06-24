export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62b5b364ba2ab4065a1bc7ec',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-b2b12mh9',
                  apiId: '08ed7264-97d2-4a70-9453-b34dc6b32f93'
                },
                {
                  buildHookId: '62b5b365e15514025a24f451',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tapqtj2b',
                  apiId: '553ab459-474d-48ba-90d6-d1c2a9b39905'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/powdhar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tapqtj2b.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
