'use strict';
// 

var app = angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        // 默认地址
        $urlRouterProvider.otherwise('/access/login');
        // 状态配置
        $stateProvider
            .state('main', {
                abstract: true,
                url: '',
                templateUrl: 'src/tpl/app.html'
            })
            .state('access', {
                url: '/access',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('access.login', {
                url: '/login',
                templateUrl: 'src/app/sys/login/login.html',
                controller: 'loginController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/login/loginController.js');
                    }]
                }
            })
            .state('main.sys', {
                url: '/sys',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            }) // 用户
            .state('main.sys.user', {
                url: '/user',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.sys.user.list', {
                url: '/list',
                templateUrl: 'src/app/sys/user/user.html',
                controller: 'userController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/user/userController.js');
                    }]
                }
            })
            .state('main.sys.user.create', {
                url: '/create',
                templateUrl: 'src/app/sys/user/update.html',
                controller: 'userUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/user/updateController.js');
                    }]
                }
            })
            .state('main.sys.user.update', {
                url: '/update/{id}?params',
                templateUrl: 'src/app/sys/user/update.html',
                controller: 'userUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/user/updateController.js');
                    }]
                }
            }) // 部门
            .state('main.sys.dept', {
                url: '/dept',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.sys.dept.list', {
                url: '/list',
                templateUrl: 'src/app/sys/dept/dept.html',
                controller: 'deptController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/dept/deptController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.sys.dept.create', {
                url: '/create',
                templateUrl: 'src/app/sys/dept/update.html',
                controller: 'deptUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/dept/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.sys.dept.update', {
                url: '/update/{id}?params',
                templateUrl: 'src/app/sys/dept/update.html',
                controller: 'deptUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/dept/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            }) // 菜单
            .state('main.sys.menu', {
                url: '/menu',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.sys.menu.list', {
                url: '/list',
                templateUrl: 'src/app/sys/menu/menu.html',
                controller: 'menuController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/menu/menuController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.sys.menu.create', {
                url: '/create',
                templateUrl: 'src/app/sys/menu/update.html',
                controller: 'menuUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/menu/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.sys.menu.update', {
                url: '/update/{id}?params',
                templateUrl: 'src/app/sys/menu/update.html',
                controller: 'menuUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/menu/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            }) // 角色
            .state('main.sys.role', {
                url: '/role',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.sys.role.list', {
                url: '/list',
                templateUrl: 'src/app/sys/role/role.html',
                controller: 'roleController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/role/roleController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.sys.role.create', {
                url: '/create',
                templateUrl: 'src/app/sys/role/update.html',
                controller: 'roleUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/role/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.sys.role.update', {
                url: '/update/{id}?params',
                templateUrl: 'src/app/sys/role/update.html',
                controller: 'roleUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/role/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            }) // 会话
            .state('main.sys.session', {
                url: '/session',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.sys.session.list', {
                url: '/list',
                templateUrl: 'src/app/sys/session/session.html',
                controller: 'sessionController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/session/sessionController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            }) // 字典
            .state('main.sys.dic', {
                url: '/dic',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.sys.dic.list', {
                url: '/list',
                templateUrl: 'src/app/sys/dic/dic.html',
                controller: 'dicController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/dic/dicController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.sys.dic.create', {
                url: '/create',
                templateUrl: 'src/app/sys/dic/update.html',
                controller: 'dicUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/dic/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.sys.dic.update', {
                url: '/update/{id}?params',
                templateUrl: 'src/app/sys/dic/update.html',
                controller: 'dicUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/dic/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            }) // 参数
            .state('main.sys.param', {
                url: '/param',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.sys.param.list', {
                url: '/list',
                templateUrl: 'src/app/sys/param/param.html',
                controller: 'paramController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/param/paramController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.sys.param.create', {
                url: '/create',
                templateUrl: 'src/app/sys/param/update.html',
                controller: 'paramUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/param/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.sys.param.update', {
                url: '/update/{id}?params',
                templateUrl: 'src/app/sys/param/update.html',
                controller: 'paramUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/sys/param/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            }) // 调度
            .state('main.task', {
                url: '/task',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.task.group', {
                url: '/group',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.task.group.list', {
                url: '/list',
                templateUrl: 'src/app/task/group/group.html',
                controller: 'taskGroupController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/task/group/groupController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.task.group.create', {
                url: '/create',
                templateUrl: 'src/app/task/group/update.html',
                controller: 'groupUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/task/group/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.task.group.update', {
                url: '/update/{id}?params',
                templateUrl: 'src/app/task/group/update.html',
                // params: {
                //     item: item // 这个地方就可以随便你用了. 因为这个参数没在state的url中体现出来
                // },
                controller: 'groupUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/task/group/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.task.scheduler', {
                url: '/scheduler',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.task.scheduler.list', {
                url: '/list',
                templateUrl: 'src/app/task/scheduler/scheduler.html',
                controller: 'taskSchedulerController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/task/scheduler/schedulerController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.task.scheduler.create', {
                url: '/create',
                templateUrl: 'src/app/task/scheduler/update.html',
                controller: 'schedulerUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/task/scheduler/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.task.scheduler.update', {
                url: '/update/{id}?params',
                templateUrl: 'src/app/task/scheduler/update.html',
                controller: 'schedulerUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/task/scheduler/updateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.task.scheduled', {
                url: '/scheduled',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.task.scheduled.list', {
                url: '/list',
                templateUrl: 'src/app/task/scheduled/scheduled.html',
                controller: 'taskScheduledController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/task/scheduled/scheduledController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.task.log', {
                url: '/log',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.task.log.list', {
                url: '/list',
                templateUrl: 'src/app/task/scheduled/log.html',
                controller: 'scheduledLogController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/task/scheduled/logController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            //业务管理
            .state('main.bus', {
                url: '/bus',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            //库存管理
            .state('main.bus.invntory', {
                url: '/invntory',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.bus.invntory.list', {
                url: '/list',
                templateUrl: 'src/app/bus/invntory/invntory.html',
                controller: 'invntoryController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/bus/invntory/invntoryController.js');
                    }]
                }
            })
            //采购管理
            .state('main.bus.prchs', {
                url: '/prchs',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            //采购管理查询
            .state('main.bus.prchs.list', {
                url: '/list',
                templateUrl: 'src/app/bus/prchs/prchs.html',
                controller: 'prchsController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/bus/prchs/prchsController.js');
                    }]
                }
            })
            .state('main.bus.prchs.create', {
                url: '/create',
                templateUrl: 'src/app/bus/prchs/prchsUpdate.html',
                controller: 'prchsUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/bus/prchs/prchsUpdateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            //商品信息管理
            .state('main.bus.prdct', {
                url: '/prdct',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.bus.prdct.list', {
                url: '/list',
                templateUrl: 'src/app/bus/prdct/prdct.html',
                controller: 'prdctController',

                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/bus/prdct/prdctController.js');
                    }]
                }
            })
            .state('main.bus.prdct.create', {
                url: '/create',
                templateUrl: 'src/app/bus/prdct/prdctUpdate.html',
                controller: 'prdctUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/bus/prdct/prdctUpdateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            .state('main.bus.prdct.update', {
                params:{"mydata":null},
                url: '/update',
                templateUrl: 'src/app/bus/prdct/prdctUpdate.html',
                controller: 'prdctUpdateController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/bus/prdct/prdctUpdateController.js').then(function () {
                            return $ocLazyLoad.load('toaster');
                        });
                    }]
                }
            })
            //销售管理
            .state('main.bus.sale', {
                url: '/sale',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('main.bus.sale.list', {
                url: '/list',
                templateUrl: 'src/app/bus/sale/sale.html',
                controller: 'saleController',
                resolve: {
                    deps: ['uiLoad', '$ocLazyLoad', function (uiLoad, $ocLazyLoad) {
                        return uiLoad.load('src/app/bus/sale/saleController.js');
                    }]
                }
            });
    }])
    .controller("navCtrl", function ($rootScope, $state) {
        $.ajax({
            url: '/user/read/current',
            success: function (result) {
                if (result.httpCode == 200) {
                    $rootScope.userInfo = result.user;
                    $rootScope.menuList = result.menus;
                    $rootScope.$apply();
                }
            }
        });
    })
    .run(['$rootScope', '$state', '$stateParams', '$timeout', '$templateCache',
        function ($rootScope, $state, $stateParams, $timeout, $templateCache) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                var from = fromState.name, to = toState.name;
                if (from && to) { // 解决 相应模块从列表进入编辑后 状态丢失问题
                    var s1 = from.substring(0, from.lastIndexOf(".")),
                        g1 = from.substring(from.lastIndexOf(".") + 1),
                        s2 = to.substring(0, to.lastIndexOf(".")),
                        g2 = to.substring(to.lastIndexOf(".") + 1);
                    if (s1 == s2) {
                        if (g1 == 'list' && (g2 == 'update' || g2 == 'view')) { //进行编辑
                            toParams['params'] = window.location.hash;
                        }
                        //返回列表
                        if ((g1 == "update" || g1 == 'view') && g2 == 'list') {
                            var h = fromParams['params'];
                            if (h) {
                                $timeout(function () {
                                    window.location.hash = h;
                                });
                            }
                        }
                    }
                }
            });
        }
    ]);