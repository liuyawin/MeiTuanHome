import React, { PureComponent } from 'react';
import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers,
} from 'react-navigation';

import { connect } from 'dva';
import IndexPage from './container/IndexPage';
import Detail from './components/Detail';

const AppNavigator = StackNavigator(
    {
        TestPage: { screen: IndexPage },
        Detail: { screen: Detail },
    },
    {
        headerMode: 'float',
    });

@connect(({ router }) => ({ router }))
class Router extends PureComponent {
    render() {
        const { dispatch, router } = this.props
        const navigation = addNavigationHelpers({ dispatch, state: router })
        return <AppNavigator navigation={navigation} />
    }
}

export function routerReducer(state, action = {}) {
    return AppNavigator.router.getStateForAction(action, state);
}

export default Router;