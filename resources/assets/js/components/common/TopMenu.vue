<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">vue-spa</router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <router-link v-if="!user.authenticated" to="/login" tag="li">
                        <a>登录</a>
                    </router-link>
                    <router-link v-if="!user.authenticated"  to="/register" tag="li">
                        <a>注册</a>
                    </router-link>
                    <router-link v-if="user.authenticated"  to="/profile" tag="li">
                        <a>个人中心</a>
                    </router-link>
                    <li v-if="user.authenticated">
                        <a @click.prevent="logout" href="#">退出</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        name:'top-menu',
        computed:{
            ...mapState({
                user : state => state.AuthUser
            })
        },
        methods:{
            logout(){
                this.$store.dispatch('logoutRequest').then(response=>{
                    this.$router.push({name : 'home'})
                })
            }
        }
    }
</script>
