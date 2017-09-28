import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Detail extends Component {
    static navigationOptions = {
        title: 'Detail',
    };
    render() {
        return (
            <View>
                <Text>这就是详情页面！</Text>
                <Text>然而这里并没有详情！</Text>
            </View>
        )

    }
}