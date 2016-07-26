'use strict';
var myapp = angular.module('app');
myapp.controller('prdctUpdateController', ['$scope', '$rootScope', '$state', '$timeout', 'toaster', 'prdctData',
    function ($scope, $rootScope, $state, $timeout, toaster, prdctData) {
        var title = "";
        var defaultAva = $rootScope.defaultAvatar;
        $scope.myImage = '';
        // $scope.myCroppedImage=$scope.myCroppedImage ;
        $scope.myCroppedImage = '';
        $scope.updateData = prdctData.getUpdateItem();
        if ($state.includes('**.prdct.update')) {
            title = "编辑商品信息";
            // var obj = $stateParams.mydata;
            // var item = $stateParams.mydata.item;
            var id = $state.params.id;
            activate(id);
            validate(id);
        } else if ($state.includes('**.prdct.create')) {
            title = "添加商品信息";
            activate(null);
            validate(null);
            setTimeout(function () {
                $scope.myCroppedImage = defaultAva;
                !$rootScope.$$phase && $scope.$apply();
            }, 300);

        }


        $scope.title = $rootScope.title = title;
        $scope.loading = true;
        //初始化验证
        //validate($scope);
        $scope.submit = function () {
            var m = $scope.record;
            if (m) {
                $scope.isDisabled = true;//提交disabled
                $.ajax({
                    url: $scope.record.id ? '/prdct/update' : 'prdct/add',
                    data: $scope.record
                }).then(callback);
            }
            function callback(result) {
                if (result.httpCode == 200) {//成功
                    toaster.clear('*');
                    toaster.pop('success', '', "保存成功");
                    $timeout(function () {
                        $state.go('main.bus.prdct.list');
                    }, 2000);
                } else {
                    toaster.clear('*');
                    toaster.pop('error', '', result.msg);
                    $scope.isDisabled = false;
                }
            }
        }

        var handleFileSelect = function (evt) {
            var file = evt.currentTarget.files[0];
            if (!/image\/\w+/.test(file.type)) {
                return false;
            }
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    $scope.myImage = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);


        // 初始化页面
        function activate(id) {
            $scope.loading = true;
            $.ajax({
                url: '/dic/read/key',
                data: {'key': 'PRDCT_TYPE'}
            }).then(function (result) {
                $scope.loading = false;
                if (result.httpCode == 200) {
                    $scope.slctItm = result.data;
                    $scope.record=$scope.updateData;
                } else {
                    $scope.msg = result.msg;
                }
                $scope.$apply();
            });
        }

        //表单验证
        function validate() {
            jQuery('form').validate({
                rules: {
                    // deptName: {
                    //     required: true,
                    //     stringCheck:[],
                    //     maxLengthB:[20]
                    // },
                    // sortNo: {
                    //     required: true
                    // }
                },
                messages: {
                    // deptName: {
                    //     required: '请填写部门名称',
                    //     maxLengthB:"部门名称不得超过{0}个字符"
                    // },
                    // sortNo: {
                    //     required: '请填写排序'
                    // }
                },
                submitHandler: function () {
                    $scope.submit();
                }
            });
        };
    }]);