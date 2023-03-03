//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
//引入tab模块
import tab from './tab.js'
//创建并暴露store
export default new Vuex.Store({
	modules:{
		tabAbout:tab
	}
})