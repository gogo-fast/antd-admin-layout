export default {
    namespaces: "layout",
    state: {
        siderCollapsed: false,
        siderDrawerVisible: false,
    },
    reducers: {
        siderTrigger(state, action) {
            console.log( '** models.layout **',state, action);
            return Object.assign({}, state, {siderCollapsed: action.payload.siderCollapsed})
        },
        siderDrawerTrigger(state, action) {
            console.log( '** models.layout **',state, action);
            return Object.assign({}, state, {siderDrawerVisible: action.payload.siderDrawerVisible})
        },
    }
}