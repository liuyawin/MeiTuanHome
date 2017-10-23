import { createAction, NavigationActions } from './../utils'
import * as login from './../services/login'

export default {
    namespace: 'login',
    state: {},
    reducers: {
        appPasswdLogin(state, { payload }) {
            state = {}
            state = { ...payload }
            return { ...state }
        },
    },
    effects: {
        *passwdLogin({ payload }, { call, put }) {
            const publicKey =  yield call(login.getLoginPasswdEncPubKey);
            console.log('publicKey: ', publicKey.result);//公钥
            //password加密
            // const result = yield call(login.appPasswdLogin, payload)
            // if (result) {
            //     yield put(createAction('appPasswdLogin')(JSON.parse(result)))
            // }
        },
    },
}
