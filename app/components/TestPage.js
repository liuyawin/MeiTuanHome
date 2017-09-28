import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { connect } from 'dva';
import Swiper from 'react-native-swiper';

import MainIcon from './MainIcon';
import SecondIcon from './SecondIcon';
import RecommendItem from './RecommendItem';
import pxTodp from './../utils/pxTodp';

const MainIconArr = [
    {
        title: '美食',
        source: require('./../images/1_1.png')
    },
    {
        title: '电影/演出',
        source: require('./../images/1_2.png')
    },
    {
        title: '酒店住宿',
        source: require('./../images/1_3.png')
    },
    {
        title: '休闲娱乐',
        source: require('./../images/1_4.png')
    },
    {
        title: '外卖',
        source: require('./../images/1_5.png')
    },
]
const SecondIconArr = [
    {
        title: '周边游',
        source: require('./../images/2_1.png')
    },
    {
        title: '机票/火车票',
        source: require('./../images/2_2.png')
    },
    {
        title: 'KTV',
        source: require('./../images/2_3.png')
    },
    {
        title: '丽人/美发',
        source: require('./../images/2_4.png')
    },
    {
        title: '足疗按摩',
        source: require('./../images/2_5.png')
    },
    {
        title: '景点',
        source: require('./../images/2_6.png')
    },
    {
        title: '美团旅游',
        source: require('./../images/2_7.png')
    },
    {
        title: '结婚/摄影',
        source: require('./../images/2_8.png')
    },
    {
        title: '母婴亲子',
        source: require('./../images/2_9.png')
    },
    {
        title: '全部分类',
        source: require('./../images/2_10.png')
    },
]

const RecommendItemArr = [
    {
        title: '私宅',
        detail: '[和平门]单人包夜8小时',
        price: 108,
        fixPrice: 238,
        distance: '11.7km',
        sold: 2,
        source: require('./../images/goods1.png')
    },
    {
        title: '必胜客宅急送',
        detail: '[多城市]超值双人套餐',
        price: 68,
        fixPrice: 89,
        distance: '<500m',
        sold: 1438,
        source: require('./../images/goods2.png')
    },
    {
        title: '奶茶嫁给粉',
        detail: '[8店通用]10元代金券一张，可叠加',
        price: 8.5,
        fixPrice: 10,
        distance: '10.8km',
        sold: 38721,
        source: require('./../images/goods3.png')
    },
    {
        title: '江同学烤蹄',
        detail: '[4店通用]10元代金券一张，可叠加',
        price: 8.9,
        fixPrice: 10,
        distance: '4.2km',
        sold: 10413,
        source: require('./../images/goods4.png')
    },
]

@connect()
export default class TestPage extends Component {
    static navigationOptions = {
        title: 'Test Page',
    };
    render() {
        var _this = this;
        return (
            <ScrollView style={styles.container}>
                <Swiper
                    style={styles.swiper}
                    autoplay={true}
                    autoplayTimeout={2}
                    height={pxTodp(200)}
                    horizontal={true}
                    //paginationStyle={{ bottom: -pxTodp(10) }}
                    showsButtons={false}>
                    <Image source={require('./../images/swiper_1.jpg')} style={styles.img} />
                    <Image source={require('./../images/swiper_2.jpg')} style={styles.img} />
                    <Image source={require('./../images/swiper_3.jpg')} style={styles.img} />
                </Swiper>

                <View style={styles.navIcon}>
                    {
                        MainIconArr.map(function (icon) {
                            return <MainIcon title={icon.title} source={icon.source} dispatch={_this.props.dispatch} />
                        })
                    }
                </View>
                <View style={styles.navIcon}>
                    {
                        SecondIconArr.map(function (icon) {
                            return <SecondIcon title={icon.title} source={icon.source} dispatch={_this.props.dispatch} />
                        })
                    }
                </View>
                <View>
                    <View  style={styles.borderBottom}>
                        <Text style={styles.guf}>-猜你喜欢-</Text>
                    </View>
                    <View style={styles.recommend}>
                        {
                            RecommendItemArr.map(function (icon) {
                                return <RecommendItem
                                    title={icon.title}
                                    detail={icon.detail}
                                    price={icon.price}
                                    fixPrice={icon.fixPrice}
                                    distance={icon.distance}
                                    sold={icon.sold}
                                    source={icon.source}
                                    dispatch={_this.props.dispatch} />
                            })
                        }
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: pxTodp(30),
        //flex: 1,
        backgroundColor: '#FFFFFF',
    },
    swiper: {
        //marginTop: pxTodp(40),
        marginBottom: pxTodp(20),
    },
    img: {
        width: Dimensions.width,
        height: pxTodp(200),
    },
    navIcon: {
        padding: pxTodp(30),
        paddingTop: pxTodp(30),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: pxTodp(2),
    },
    guf: {     
        fontSize: pxTodp(24),
        color: '#5E5E5E',
        alignSelf: 'center',
    },
    borderBottom: {
        marginTop: pxTodp(32),
        height: pxTodp(64),
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: pxTodp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    recommend: {
        marginTop: pxTodp(24),
    }

});