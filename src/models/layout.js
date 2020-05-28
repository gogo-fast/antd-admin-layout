export default {
    namespaces: "layout",
    state: {
        theme: {
            themeType: 'dark',
            themeColor: '#001529',
            defaultChecked: false,
        },
        siderCollapsed: false,
        siderDrawerVisible: false,
    },
    reducers: {
        siderTrigger(state, action) {
            return Object.assign({}, state, {siderCollapsed: action.payload.siderCollapsed})
        },
        switchTheme(state, action) {
            return Object.assign({}, state, {theme: action.payload.theme})
        },


        /*
        * siderDrawerTrigger 弃用
        * */
        // siderDrawerTrigger(state, action) {
        //     return Object.assign({}, state, {siderDrawerVisible: action.payload.siderDrawerVisible})
        // },


    }
}
