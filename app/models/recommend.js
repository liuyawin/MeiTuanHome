import { createAction, NavigationActions } from './../utils'
import * as recommend from './../services/recommend'

export default {
    namespace: 'recommend',
    state: {},
    reducers: {
        getRecommendData(state, { payload }) {
            state = {}
            state = { ...payload }
            return { ...state }
        },
    },
    effects: {
        *getRecommendList({ payload }, { call, put }) {
            const recommendList = yield call(recommend.getRecommendList)
            if (recommendList) {
                yield put(createAction('getRecommendData')({ recommendList }))
            }
        },
    },
}
