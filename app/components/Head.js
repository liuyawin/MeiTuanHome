import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import pxTodp from './../utils/pxTodp';

export default class Head extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.location}>
                    <Text style={styles.locText}>北京</Text>
                    <Image style={styles.locButton} source={require('./../images/location.png')} />
                </View>
                <View style={styles.search}>
                    <Image style={styles.searchIcon} source={require('./../images/search.png')} />
                    <Text style={styles.searchText}>小吊梨汤</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.searcçhIcon} source={require('./../images/more.png')} />
                </TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        height: pxTodp(90),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    search: {
        height: pxTodp(58),
        width: pxTodp(480),
        borderRadius: pxTodp(58),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
    },
    searchIcon: {
        width: pxTodp(36),
        height: pxTodp(36),
        marginLeft: pxTodp(12),
    },
    searchText: {
        fontSize: pxTodp(28),
        color: '#5E5E5E',
        alignSelf: 'center',
        marginLeft: pxTodp(10),
    },
    location: {
        height: pxTodp(58),
        width: pxTodp(140),
        flexDirection: 'row',
        alignItems: 'center',
    },
    locText: {
        fontSize: pxTodp(32),
        color: '#5E5E5E',
        alignSelf: 'center',
        marginLeft: pxTodp(18),
    },
    locButton: {
        width: pxTodp(20),
        height: pxTodp(20),
        alignSelf: 'center',
        marginLeft: pxTodp(8),
    }
});