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
export default class MainIcon extends Component {
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
        flex: 1,
        height: pxTodp(150),
    },
    img: {
        width: pxTodp(90),
        height: pxTodp(90),
        alignSelf: 'center',
    },
    text: {
        marginTop: pxTodp(18),
        fontSize: pxTodp(28),
        color: '#5E5E5E',
        alignSelf: 'center',
    },
});