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
        siderDrawerTrigger(state, action) {
            return Object.assign({}, state, {siderDrawerVisible: action.payload.siderDrawerVisible})
        },
        switchTheme(state, action) {
            return Object.assign({}, state, {theme: action.payload.theme})
        },
    }
}
