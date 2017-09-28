import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    RefreshControl,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { connect } from 'dva';
import Swiper from 'react-native-swiper';

import { NavigationActions, createAction } from './../utils'

import Head from './../components/Head';
import MainIcon from './../components/MainIcon';
import SecondIcon from './../components/SecondIcon';
import RecommendItem from './../components/RecommendItem';
import LoadMore from './../components/LoadMore';
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

@connect(({ recommend }) => ({ ...recommend }))
export default class IndexPage extends Component {
    static navigationOptions = {
        title: 'Index Page',

    };
    constructor() {
        super();
        this.state = {
            recommendList: null,
            loadMore: false,
        }
    }
    componentWillMount() {
        this.getRecommendList();
    }
    getRecommendList() {
        console.log('1');
        this.props.dispatch(createAction('recommend/getRecommendList')());
    }
    componentWillReceiveProps(nextProps) {
        console.log('5');
        let { recommendList } = nextProps
        this.setState({
            recommendList: recommendList,
        })
    }
    _onRefresh(event) {
        //console.log('下拉刷新。。。');
    }
    onScroll(event) {
        if (this.state.loadMore) {
            return;
        }
        let y = event.nativeEvent.contentOffset.y;
        let height = event.nativeEvent.layoutMeasurement.height;
        let contentHeight = event.nativeEvent.contentSize.height;
        if (y + height >= contentHeight - 40) {
            this.setState({
                loadMore: true,
            });

            var _this = this;
            setTimeout(function () {
                _this.setState({
                    loadMore: false,
                });
            }, 2000);
        }
    }
    render() {
        let _this = this;
        return (
            <View>
                <Head />
                <ScrollView
                    style={styles.container}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.loadMore}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                            progressBackgroundColor="#ffffff"
                        />
                    }
                    onScroll={this.onScroll.bind(this)}
                    scrollEventThrottle={200}
                >
                    <Swiper
                        style={styles.swiper}
                        autoplay={true}
                        autoplayTimeout={2}
                        height={pxTodp(200)}
                        horizontal={true}
                        showsButtons={false}>
                        <Image source={require('./../images/swiper_1.jpg')} style={styles.img} />
                        <Image source={require('./../images/swiper_2.jpg')} style={styles.img} />
                        <Image source={require('./../images/swiper_3.jpg')} style={styles.img} />
                    </Swiper>

                    <View style={styles.navIcon}>
                        {
                            MainIconArr.map(function (icon, index) {
                                return <MainIcon key={index} title={icon.title} source={icon.source} dispatch={_this.props.dispatch} />
                            })
                        }
                    </View>
                    <View style={styles.navIcon}>
                        {
                            SecondIconArr.map(function (icon, index) {
                                return <SecondIcon key={index} title={icon.title} source={icon.source} dispatch={_this.props.dispatch} />
                            })
                        }
                    </View>
                    <View>
                        <View style={styles.borderBottom}>
                            <Text style={styles.guf}>-猜你喜欢-</Text>
                        </View>
                        <View style={styles.recommend}>
                            {
                                this.state.recommendList && this.state.recommendList.length > 0
                                    ? this.state.recommendList.map(function (icon, index) {
                                        return <RecommendItem
                                            key={index}
                                            title={icon.title}
                                            detail={icon.detail}
                                            price={icon.price}
                                            fixPrice={icon.fixPrice}
                                            distance={icon.distance}
                                            sold={icon.sold}
                                            source={icon.source}
                                            dispatch={_this.props.dispatch} />
                                    }) : null
                            }
                        </View>
                        {
                            this.state.loadMore ?
                                <LoadMore />
                                : null
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    swiper: {
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