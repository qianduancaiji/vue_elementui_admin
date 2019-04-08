import Vue from 'vue';
import Router from 'vue-router';
import RouterView from '../components/RouterView.vue';
import Home from '../components/Home.vue' 
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            hidden: true,
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: Home,
            meta: {
                title: '容器'
            },
            children:[
                {
                    path: '/dashboard',
                    component: () => import('../views/page/Dashboard.vue'),
                    meta: {
                        title: '系统首页',
                        icon: 'el-icon-lx-home'
                    }
                },
                {
                    path: '/icon',
                    component: () => import('../views/page/Icon.vue'),
                    meta: {
                        title: '自定义图标',
                        icon: 'el-icon-lx-emoji'
                    }
                },
                {
                    path: '/table',
                    component: () => import('../views/page/BaseTable.vue'),
                    meta: {
                        title: '基础表格',
                        icon: 'el-icon-lx-cascades'
                    }
                },
                {
                    path: '/tabs',
                    component: () => import('../views/page/Tabs.vue'),
                    meta: {
                        title: 'tab选项卡',
                        icon: 'el-icon-lx-copy'
                    }
                },
                {
                    path: '/form',
                    component: RouterView,
                    redirect: '/404',
                    meta: {
                        title: '表单相关',
                        icon: 'el-icon-lx-calendar'
                    },
                    children: [
                        {
                            path: '/form/form',
                            component: () => import('../views/page/BaseForm.vue'),
                            meta: {
                                title: '基本表单',
                                icon: 'el-icon-lx-emoji'
                            }
                        },
                        {
                            path: '/form/edit',
                            component: RouterView,
                            redirect: '/404',
                            meta: {
                                title: '富文本',
                                icon: 'el-icon-lx-emoji'
                            },
                            children: [
                                {
                                    path: '/form/edit/editor',
                                    component: () => import('../views/page/VueEditor.vue'),
                                    meta: {
                                        title: '富文本编辑器',
                                        icon: 'el-icon-lx-editor'
                                    }
                                },
                                {
                                    path: '/form/edit/markdown',
                                    component: () => import('../views/page/Markdown.vue'),
                                    meta: {
                                        title: 'markdown编辑器',
                                        icon: 'el-icon-lx-markdown'
                                    }    
                                }
                            ]
                        },
                        {
                            path: '/form/upload',
                            component: () => import('../views/page/Upload.vue'),
                            meta: {
                                title: '文件上传',
                                icon: 'el-icon-lx-emoji'
                            }   
                        }
                    ]
                },
                
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import('../views/page/BaseCharts.vue'),
                    meta: {
                        title: 'schart图表',
                        icon: 'el-icon-lx-favor'
                    }
                },
                {
                    path: '/tuo',
                    component: RouterView,
                    meta: {
                        title: '拖拽组件',
                        icon: 'el-icon-lx-rank'
                    },
                    children: [
                        {

                            path: '/tuo/drag',
                            component: () => import('../views/page/DragList.vue'),
                            meta: {
                                title: '拖拽列表',
                                icon: 'el-icon-lx-rank'
                            }
                        },
                        {

                            path: '/tuo/dialog',
                            component: () => import('../views/page/DragDialog.vue'),
                            meta: {
                                title: '拖拽弹框',
                                icon: 'el-icon-lx-dialog'
                            }
                        }
                    ]
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import('../views/page/Permission.vue'),
                    meta: {
                        title: '权限测试',
                        icon: 'el-icon-lx-warn',
                        permission: true
                    }
                },
                {
                    path: '/error',
                    component: RouterView,
                    meta: {
                        title: '错误处理',
                        icon: 'el-icon-lx-warn'
                    },
                    children: [
                        {
                            path: '/error/404',
                            component: () => import('../views/page/404.vue'),
                            meta: {
                                title: '404',
                                icon: 'el-icon-lx-emoji'
                            }
                        },
                        {
                            path: '/error/403',
                            component: () => import('../views/page/403.vue'),
                            meta: {
                                title: '403',
                                icon: 'el-icon-lx-emoji'
                            }
                        }
                    ]

                }
            ]
        },
        {
            path: '/login',
            hidden: true,
            component: () => import('../views/page/Login.vue')
        },
        {
            path: '*',
            hidden: true,
            redirect: '/404'
        }
    ]
})
