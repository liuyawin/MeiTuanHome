import { createAction, NavigationActions } from './../utils'
import * as recommend from './../services/recommend'

export default {
    namespace: 'recommend',
    state: {},
    reducers: {
        getRecommendData(state, { payload }) {
            console.log('4');
            state = {}
            state = { ...payload }
            return { ...state }
        },
    },
    effects: {
        *getRecommendList({ payload }, { call, put }) {
            console.log('2');
            const recommendList = yield call(recommend.getRecommendList)
            console.log('3');
            if (recommendList) {
                yield put(createAction('getRecommendData')({ recommendList }))
                console.log('6');
            }
        },
    },
}
