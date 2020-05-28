const menuList = [

    {
        title: 'Home',
        key: '/home',
        icon: 'home',
        url: "/home"
    },
    {
        title: '仪表盘',
        key: '/dashboard',
        icon: 'dashboard',
        menus: [
            {
                title: '项目1展示',
                key: '/dashboard/pj1',
                icon: 'project',
                url: '/dashboard/pj1'
            },
            {
                title: '项目2展示',
                key: '/dashboard/pj2',
                icon: 'project',
                url: '/dashboard/pj2'
            },
        ]
    },
    {
        title: '用户页',
        key: '/user',
        icon: 'team',
        menus: [
            {
                title: '页面列表',
                key: '/user/list',
                icon: 'unordered-list',
                url: '/user/list'
            },
            {
                title: '用户注册',
                key: '/user/register',
                icon: 'user-add',
                url: '/user/register'
            },
        ]
    }
];


export default menuList
