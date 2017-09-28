import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

import pxTodp from './../utils/pxTodp';
import { NavigationActions, createAction } from './../utils'

export default class RecommendItem extends Component {
    toDetail(title) {
        // this.props.dispatch(
        //     NavigationActions.navigate({
        //         routeName: 'Detail',
        //     })
        // )
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.toDetail.bind(this, this.props.title)}>
                <Image style={styles.img} source={this.props.source} />
                <View style={styles.infBox}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.text}>{this.props.distance}</Text>
                    </View>
                    <Text style={styles.text}>{this.props.detail}</Text>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Text style={styles.price}>¥{this.props.price}</Text>
                            <Text style={[styles.text,styles.top10]}>门市价:¥{this.props.fixPrice}</Text>
                        </View>
                        <Text style={styles.text}>已售{this.props.sold}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: pxTodp(20),
        //flex: 1,
        width: Dimensions.width,
        height: pxTodp(260),
        flexDirection: 'row',
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: pxTodp(2),
    },
    img: {
        width: pxTodp(200),
        height: pxTodp(200),
        alignSelf: 'center',
    },
    infBox: {
        padding: pxTodp(20),
        height: pxTodp(200),
        flexDirection: 'column',
        alignSelf: 'center',
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: pxTodp(24),
        color: '#5E5E5E',
    },
    title: {
        fontSize: pxTodp(32),
        color: '#000000',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    price: {
        fontSize: pxTodp(36),
        marginRight: pxTodp(12),
        color: '#009100',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    top10: {
        marginTop: pxTodp(10),
    },
});