export const siteData = {
    siteTitle: 'The Urban Collaborative – Master Planning, Urban Design, Street Design, Form-Based Coding',
    siteLogo: './images/logo.png',
    navigation: [
        {
            title: 'Philosophy',
            slug: '/',
            submenu: false
        },
        {
            title: 'Staff',
            slug: '/staff',
            submenu: false
        },
        {
            title: 'Accolades',
            slug: '/accolades',
            submenu: true,
            submenuLinks: [
                {
                    title: 'Selected Awards',
                    slug: '/accolades/selected-awards',
                },
                {
                    title: 'Selected Publications',
                    slug: '/accolades/selected-publications',
                },
                {
                    title: 'Selected News',
                    slug: '/accolades/selected-news',
                },
            ]
        },
        {
            title: 'Resources',
            slug: '/resources',
            submenu: true,
            submenuLinks: [
                {
                    title: 'Selected Awards',
                    slug: '/',
                    submenu: false
                },
            ]
        },
    ], 
    footerNavigation: []
};