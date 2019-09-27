const expect = chai.expect;
import Vue from 'vue'
import Toast from "../src/Toast";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    //it('测试用例的名字',测试用函数)
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props', () => {
        it('接受closeToast', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    // closeToast: true,
                    closeToastDelay: 1,
                }
            }).$mount(div)
            // setTimeout(() => {
            //     expect(document.body.contains(vm.$el)).to.eq(false)
            //     done()
            // }, 1500)
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
            })
            div.remove()
            vm.$destroy()
        });
        it('接受closeButton', function () {
            const callback = sinon.fake()
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text:'关闭',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭')
            closeButton.click()
            expect(callback).to.have.been.called
        });
        it('接受enableHtml', function () {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong>hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector("#test")
            expect(strong).to.exist
        });
        it('接受position', function () {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        });
    })
})