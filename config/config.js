export default {
    // 插件配置
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: true  // 在这里打开 dva
            }
        ],
    ],
    // 路由配置
    routes: [
        {
            path: '/',
            component: '../layouts/BasicLayout',
            routes: [
                {
                    path: '/dashboard',
                    component: './Dashboard',
                    routes: [
                        {
                            path: '/dashboard/pj1',
                            component: './Dashboard/Project1'
                        },
                        {
                            path: '/dashboard/pj2',
                            component: './Dashboard/Project2'
                        },
                        {
                            // 默认路由不需要path字段
                            component: './Errors/NotFound',
                        }
                    ],

                },
                {
                    path: '/user',
                    component: './User',
                    routes: [
                        {
                            path: '/user/list',
                            component: './User/UserList',
                        },
                        {
                            path: '/user/register',
                            component: './User/UserRegister',
                        },
                        {
                            // 默认路由不需要path字段
                            component: './Errors/NotFound',
                        }
                    ],
                },
                {
                    // 默认路由不需要path字段
                    component: './Errors/NotFound',
                }
            ]
        },

    ],
}