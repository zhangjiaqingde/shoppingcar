/**
 * Created by Administrator on 2017/1/12.
 */

angular.module('MshoppingCtrl',[])
    .controller('ShoppingCtrl',['$scope','ShoppingService',function($scope,ShoppingService)
    {
        $scope.Car=ShoppingService.car;
        $scope.Shopping=ShoppingService.shopping;

        //总件数函数
        $scope.sumCount=function(){
            var sum=0;
            angular.forEach($scope.Car,function(value,key){
                sum+=value.count;
            });
            return sum;
        };

        //总价格函数
        $scope.sumPrice=function(){
            var sum=0;
            angular.forEach($scope.Car,function(value,key){
                sum+=value.price;
            });
            return sum;
        };
        //指定货物减少函数
        $scope.sub=function(id){
            angular.forEach($scope.Car,function(value,key){
                if(value.id==id && value.count>1)
                {
                    value.count--;
                }
                if(value.count==0)
                {

                }
            })
        };
        //指定货物增加函数
        $scope.sup=function(id){
            angular.forEach($scope.Car,function(value,key){
                if(value.id==id )
                {
                    value.count++;
                }
                if(value.count==0)
                {

                }
            })
        };
        //指定货物删除函数
        $scope.remove=function(id){
            var index=-1;
            var flag=confirm('亲你不再要我了吗？');
            angular.forEach($scope.Car,function(value,key){
                if(value.id==id)
                {
                    index=key;
                }
            });
            if(flag)
            {
                $scope.Car.splice(index,1);
            }
        };
        //清空购物车
        $scope.clear=function(){
            var a=confirm('确定要清空吗？');
            if(a)
            {
                $scope.Car=[];
            }

        };
        $scope.wenben=function(id){
            var  index=-1;
            var flag=confirm('商品至少为一件');
            angular.forEach($scope.Car,function(value,key){
                if(value.id==id)
                {
                    index=key;
                }
                if(value.count=0&&flag)
                {
                    value.count=1;
                }
                if(value.count=10)
                {
                    value.count=10;
                }
            });
        };
        //数据操作
        $scope.oprate=function(id)
        {
            var flag=false;
            angular.forEach($scope.Car,function(value,key){
                if(value.id==id){
                    value.count++;
                    flag=true;
                }
            });
            if(!flag)
            {
                angular.forEach($scope.Shopping,function(value,key){

                    if(value.id==id)
                    {
                        var a={};
                        a.id=value.id;
                        a.name=value.name;
                        a.price=value.price;
                        a.count=1;
                        $scope.Car.push(a);
                    }

                })
            };
        }
    }]);