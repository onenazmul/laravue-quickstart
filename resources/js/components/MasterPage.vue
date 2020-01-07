<template>
    <div>
        <main-header></main-header>
        <router-view></router-view>
        <main-footer></main-footer>
    </div>
</template>

<script>
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import About from './pages/About';
import Login from './auth/Login';
export default {
    components: { MainHeader, MainFooter, About, Login },
    metaInfo(){
    return {
        title: 'Laravel App',
        meta: [
            {
                name:'keywords', content:'quickstart, laravel vue'
            },
            {
                name: 'description', content: 'An awesome quick start pack for Laravel, VueJs'
            }
        ]
    }
    }
}
</script>

<style>
a, a:hover, a:focus{
    text-decoration: none
}
</style>