import { delay } from './../utils'

export const getRecommendList = async () => {
    await delay(1000)
    return [
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
}