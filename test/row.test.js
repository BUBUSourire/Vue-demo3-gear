const expect = chai.expect;
import Vue from 'vue'
import Row from "../src/Row";
import Col from "../src/Col";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    //it('测试用例的名字',测试用函数)
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('接收gutter属性', (done) => { //异步任务 ---> 如果不加done，默认是同步代码，会自动退出，不会有log出现
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-row gutter="20">
            <g-col span="12"></g-col>
            <g-col span="12"></g-col>
        </g-row>
        `
        const vm = new Vue({
            el: div
        })
        // console.log(vm.$el.outerHTML) 此处打印出的padding-left、right是0
        //因为mounted在log执行后才被调用
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        }, 0)
    })
    it('接收 align 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData:{
                align:'right'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
        vm.$el.remove()
        vm.$destroy()
    })
})