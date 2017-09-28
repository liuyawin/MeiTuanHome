import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

import pxTodp from './../utils/pxTodp';

export default class LodeMore extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <Text style={styles.text}>加载中...</Text>
            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: pxTodp(12),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        marginLeft: pxTodp(8),
        color: '#5E5E5E',
    },
});