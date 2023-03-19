module.exports = {
    title: "丢丢的学习笔记",
    description: "",
    head: [
        ['link', { rel: 'icon', href: '/lulu.jpg' }]
    ],
    themeConfig: {
        logo: '/lulu.jpg',
        nav: [
            { text: 'vue', link: '/guide/vue/' },
            { text: '小程序', link: '/guide/weixin/' },
            { text: '算法', link: '/guide/algorithm/' },
            { text: '面试', link: '/guide/interview/' },
            { text: 'webpack', link: '/guide/webpack/' },
        ],
        // 设置自动生成侧边栏
        // sidebar:'auto'
        sidebar: {
            '/guide/vue/': [
                {
                    title: 'Vue.js',
                    collapsable: true,
                    children: [
                        {title:'Vue',path:'Vue'},
                        {title:'VueX',path:'VueX'},
                        {title:'Vue-Cli',path:'Vue-Cli'},
                        {title:'Vue-Router',path:'Vue-Router'},
                    ],
                },

            ],
            '/guide/weixin/': [
                {
                    title:'微信小程序',
                    collapsable:true,
                    children:[
                        {title:'开发',path:'weixin'}
                    ]
                }
            ],
            '/guide/webpack/':[
                {
                    title:'构建工具',
                    collapsable:true,
                    children:[
                        {title:'webpack',path:'Webpack'}
                    ]
                }
            ],
            '/guide/interview/':[
                {
                    title:'手写题',
                    collapsable:true,
                    children:[
                        {title:'handWrite',path:'handWrite'}
                    ]
                }
            ],
            '/guide/algorithm/':[
                {
                    title:'数据结构与算法',
                    collapsable:true,
                    children:[
                        {title:'算法',path:'algorithm'}
                    ]
                }
            ]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@images': '/docs/.vuepress/images',
                '@public': '/docs/.vuepress/public'
            }
        }
    }
}