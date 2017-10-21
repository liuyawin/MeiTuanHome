import { createAction, NavigationActions } from './../utils'
import * as register from './../services/register'

export default {
    namespace: 'register',
    state: {},
    reducers: {
        getCaptchaCode(state, { payload }) {
            state = {}
            state = { ...payload }
            console.log({ ...state })
            return { ...state }
        },
    },
    effects: {
        *getCaptcha({ payload }, { call, put }) {
            const result = yield call(register.getCaptcha, payload)
            if (result) {
                var code = result.code;
                yield put(createAction('getCaptchaCode')({code}))
            }
        },
    },
}
