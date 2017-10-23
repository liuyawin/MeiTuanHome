import { createAction, NavigationActions } from './../utils'
import * as register from './../services/register'

export default {
    namespace: 'register',
    state: {},
    reducers: {
        getCaptchaCode(state, { payload }) {
            state = {}
            state = { ...payload }
            return { ...state }
        },
        doRegester(state, { payload }){
            state = {}
            state = { ...payload }
            return { ...state }
        },
    },
    effects: {
        *getCaptcha({ payload }, { call, put }) {
            const result = yield call(register.getCaptcha, payload)
            if (result) {
                yield put(createAction('getCaptchaCode')(JSON.parse(result)))
            }
        },
        *doRegister({ payload }, { call, put }){
            const result = yield call(register.doRegister, payload)
            console.log('result: ', result)
            if (result) {
                yield put(createAction('doRegester')(JSON.parse(result)))
            }
        },
    },
}
