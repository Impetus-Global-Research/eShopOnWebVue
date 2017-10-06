import './css/app.css';
import 'bootstrap';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { createStore } from './store/store'

Vue.use(VueRouter);
Vue.use(Vuex)

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') }
];

const store = createStore()

new Vue({
    store,
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),     
    render: h => h(require('./components/app/app.vue.html'))
});
