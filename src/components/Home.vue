<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <div class="crumbs">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item v-for="(item,index) in crumbs" :key="item.path">
                            <i :class="item.meta.icon" v-if="index == 0"></i> {{ item.meta.title }}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vTags from './Tags.vue';
    import bus from '../assets/js/bus.js'
    export default {
        data(){
            return {
                tagsList: [],
                collapse: false,
                crumbs: []
            }
        },
        components:{
            vHead, vSidebar, vTags
        },
        watch: {
            '$route': {
                handler(newValue) {
                    this.crumbs = newValue.matched.filter(item => item.path !== '' && item.path !== '/')
                },
                immediate: true
            }
        },
        created(){
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
            // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
            bus.$on('tags', msg => {
                let arr = [];
                for(let i = 0, len = msg.length; i < len; i ++){
                    msg[i].name && arr.push(msg[i].name);
                }
                this.tagsList = arr;
            })
        }
    }
</script>
