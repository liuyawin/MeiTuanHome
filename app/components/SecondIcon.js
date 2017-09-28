import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
//import { connect } from 'dva'

import pxTodp from './../utils/pxTodp';
import { NavigationActions, createAction } from './../utils'

//@connect()
export default class SecondIcon extends Component {
    toDetail(title) {
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Detail',
            })
        )
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.toDetail.bind(this, this.props.title)}>
                <Image style={styles.img} source={this.props.source} />
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '20%',
        height: pxTodp(140),
    },
    img: {
        width: pxTodp(80),
        height: pxTodp(80),
        alignSelf: 'center',
    },
    text: {
        marginTop: pxTodp(12),
        fontSize: pxTodp(24),
        color: '#5E5E5E',
        alignSelf: 'center',
    },
});