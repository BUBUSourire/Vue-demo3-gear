const expect = chai.expect;
import Vue from 'vue'
import Input from "../src/Input";

Vue.config.productionTip = false
Vue.config.devtools = false

// Mocha引入BDD(describe  it);chai引入断言
//理解BDD
//describe '人类'    --是什么
//it has a head      --可以做什么
//it can run

describe('Input', () => {
    //it('测试用例的名字',测试用函数)
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('接受 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })

        it('接受 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('接受 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readOnly: false
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(false)
        })

        it('接受 error', () => {
            vm = new Constructor({
                propsData: {
                    error: 'error'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
            const errorMessage = vm.$el.querySelector('.message-error')
            expect(errorMessage.innerText).to.equal('error')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                //触发 input 的 change 事件
                var event = new Event(eventName)
                Object.defineProperty(event,'target',{value:{value:'I love you .'},enumerable:true})
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith()
            })
        });

        //
        // it('支持 input 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('input', callback)
        //     //触发 input 的 change 事件
        //     var event = new Event('input')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // });
        //
        // it('支持 focus 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('focus', callback)
        //     //触发 input 的 change 事件
        //     var event = new Event('focus')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // });
        //
        // it('支持 blur 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('blur', callback)
        //     //触发 input 的 change 事件
        //     var event = new Event('blur')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // });
    })
})