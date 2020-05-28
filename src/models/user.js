import {getUserList} from '../services/user'


export default {
    namespaces: "user",
    state: {
        users: [],
        total: 0,
        currentPageNum: 1,
    },

    effects: {
        * loadUsers(action, {call, put}) {
            const data = yield call(getUserList, action.payload.pageNum, action.payload.pageSise);
            yield put({type: "addUsers", payload: data.data})
        }
    },

    reducers: {
        addUsers(state, action) {
            return Object.assign({}, state, {
                users: action.payload.data.users,
                total: action.payload.data.total,
                currentPageNum: action.payload.data.currentPageNum,
            })
        },
    }
}
