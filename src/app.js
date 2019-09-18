import Vue from 'vue'
import Button from './Button'
import Icon from "./Icon";
import Button_group from "./Button_group";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', Button_group)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'I love you .'
    },
    methods: {
        changeError(e) {
            console.log(e)
        }
    }

})

//单元测试
import chai from 'chai'

const expect = chai.expect

import spies from 'chai-spies'

chai.use(spies)

//测试test
{
    //动态生成一个按钮
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount('#test') //挂载到#test的div中
    //测试
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    vm.$el.remove()
    vm.$destroy()
}

//测试loading
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount() //挂载到内存
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
}

//测试order·
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            icon_position: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}

//测试click --mock  --chai.spies
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
        }
    })
    vm.$mount()
    let spy = chai.spy(function () {
    })
    vm.$on('click', spy) //spy ‘间谍’框架/库
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}
