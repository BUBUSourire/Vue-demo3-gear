import Vue from 'vue'
import Button from './Button'
import Icon from "./Icon";
import Button_group from "./Button_group";

// Vue.component('g-button',Button)
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',Button_group)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }
})