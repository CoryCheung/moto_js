'use strict';
var myapp = angular.module('app');
myapp.factory('cacheData', function () {
    var data = {
        updateItem: ''
    };

    return {
        getUpdateItem: function () {
            return data.updateItem;
        },
        setUpdateItem: function (updateItem) {
            data.updateItem = updateItem;
        }
    };
});
myapp.controller('prdctController', ['$rootScope', '$scope', '$http', '$state', 'cacheData',
    function ($rootScope, $scope, $http, $state, cacheData) {
        $scope.title = '商品信息管理';
        $scope.param = {};
        $scope.loading = false;
        $scope.updateItem = null;

        $scope.search = function () {
            $scope.loading = true;
            $.ajax({
                url: '/prdct/read/list',
                data: $scope.param
            }).then(function (result) {
                $scope.loading = false;
                if (result.httpCode == 200) {
                    $scope.pageInfo = result.data;
                } else {
                    $scope.msg = result.msg;
                }
                $scope.$apply();
            });
        }
        $scope.$watch('updateItem', function (newValue, oldValue) {
            if (newValue !== oldValue) {
                cachaData.setUpdateItem(newValue);
            }
        });

        $scope.search();

        $scope.clearSearch = function () {
            $scope.param.keyword = null;
            $scope.search();
        }

        $scope.disableItem = function (id, enable) {

        }
        // 翻页
        $scope.pagination = function (page) {
            $scope.param.pageNum = page;
            $scope.search();
        }
        $scope.change = function (obj) {
            $scope.updateItem = obj;
        };
    }]);