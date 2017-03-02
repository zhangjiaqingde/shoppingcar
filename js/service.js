/**
 * Created by Administrator on 2017/1/12.
 */
angular.module('Mservice',[])
    .service('ShoppingService',function(){
        return {
            car:[
                {
                    id:1001,
                    name:'华为',
                    count:2,
                    price:2300
                },
                {
                    id:1002,
                    name:'魅族',
                    count:3,
                    price:1200
                },
                {
                    id:1003,
                    name:'iphone',
                    count:4,
                    price:5500
                },
                {
                    id:1004,
                    name:'oppo',
                    count:3,
                    price:2600
                },
                {
                    id:1005,
                    name:'努比亚',
                    count:2,
                    price:1500
                }
                ],
            //商品的数据
                shopping:[
                    {
                        id:1001,
                        name:'华为',
                        price:2300,
                        story:'通信设备'
                    },
                    {
                        id:1002,
                        name:'魅族',
                        price:1200,
                        story:'通信设备'
                    },
                    {
                        id:1003,
                        name:'iphone',
                        price:5500,
                        story:'通信设备'
                    },
                    {
                        id:1004,
                        name:'oppo',
                        price:2600,
                        story:'通信设备'
                    },
                    {
                        id:1005,
                        name:'努比亚',
                        price:1500,
                        story:'通信设备'
                    },
                    {
                        id:1006,
                        name:'ipad',
                        price:6700,
                        story:'通信设备'
                    },
                    {
                        id:1007,
                        name:'苹果',
                        price:2.7,
                        story:'水果'
                    }

                ]
        }
    });
