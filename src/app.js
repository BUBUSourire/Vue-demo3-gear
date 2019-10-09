import Vue from 'vue'
import Button from './Button'
import Icon from "./Icon";
import Button_group from "./Button_group";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";
import Content from "./Content";
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import Layout from "./Layout";
import Toast from "./Toast";
import plugin from "./plugin";
import Tabs from "./Tabs";
import TabsHead from "./Tabs-head"
import TabsItem from "./Tabs-item"
import TabsBody from "./Tabs-body"
import TabsPanel from "./Tabs-panel"
import Popover from "./Popover";
import Collapse from "./Collapse";
import CollapseItem from "./Collapse-item"


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', Button_group)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-layout', Layout)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-panel',TabsPanel)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'I love you .',
        selectedTab:'sth1'

    },
    // created() {
    //     this.$toast('这是默认内容，不加html',{
    //         position:'top'
    //     })
    // }
    // ,
    methods: {
        changeError(e) {
            console.log(e)
        },
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast(`<strong>智商为${parseInt(Math.random()*100)}。。。</strong>` +
                '此处内容此处内容此处内容此处内容此处内容此处内容此处内容此处内容此处内容此处内容此处内容', {
                enableHtml: true,
                position,
            })
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
