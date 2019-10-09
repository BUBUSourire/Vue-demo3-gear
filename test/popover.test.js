const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/Popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    //it('测试用例的名字',测试用函数)
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
}