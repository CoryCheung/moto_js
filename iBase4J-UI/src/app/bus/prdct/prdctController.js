'use strict';
angular.module('app')
    .controller('prdctController', ['$rootScope', '$scope', '$http', '$state',
    function ($rootScope, $scope, $http, $state) {
        $scope.title = '商品信息管理';
        $scope.param = {};
        $scope.loading = false;
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

        $scope.loading = true;
        $.ajax({
            url: '/dic/read/key',
            data: {'key': 'PRDCT_TYPE'}
        }).then(function (result) {
            $scope.loading = false;
            if (result.httpCode == 200) {
                $scope.slctItm = result.data;
                // $scope.record=$scope.updateData;
            } else {
                $scope.msg = result.msg;
            }
            $scope.$apply();
        });

        $scope.loading = true;
        $.ajax({
            url: '/dic/read/key',
            data: {'key': 'ENABLE'}
        }).then(function (result) {
            $scope.loading = false;
            if (result.httpCode == 200) {
                $scope.enableItem = result.data;
                // $scope.record=$scope.updateData;
            } else {
                $scope.msg = result.msg;
            }
            $scope.$apply();
        });




        $scope.search();

        $scope.clearSearch = function () {
            $scope.param.startTime = null;
            $scope.param.endTime = null;
            $scope.param.productName = null;
            $scope.param.productTwodimecode = null;
            $scope.param.type = null;
            // $scope.param.keyword = null;

            $scope.search();
        }
        $scope.clearProductName = function () {
            var obj = $('#productName').val('');
        };
        $scope.clearProductTwodimecode = function () {
            var obj = $('#productTwodimecode').val('');
        };
        $scope.clearType = function () {
            var obj = $('#type').val('');
        };

        $scope.disableItem = function (id, enable) {

        }
        // 翻页
        $scope.pagination = function (page) {
            $scope.param.pageNum = page;
            $scope.search();
        }
        //    $('.form_datetime').datetimepicker({
        //        language: 'zh-CN',
        //        weekStart: 1,
        //        todayBtn: 1,
        //        autoclose: 1,
        //        todayHighlight: 1,
        //        startView: 2,
        //        forceParse: 0,
        //        showMeridian: 1
        //    });
        $('.form_date').datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: "yyyy-mm-dd" //选择日期后，文本框显示的日期格式
        });
        //    $('.form_time').datetimepicker({
        //        language: 'zh-CN',
        //        weekStart: 1,
        //        todayBtn: 1,
        //        autoclose: 1,
        //        todayHighlight: 1,
        //        startView: 1,
        //        minView: 0,
        //        maxView: 1,
        //        forceParse: 0
        //    });
    }]);