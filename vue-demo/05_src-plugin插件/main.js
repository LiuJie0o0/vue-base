import Vue from 'vue'
import App from './App.vue'

import plugin from './plugin'

Vue.config.productionTip = false

Vue.use(plugin, "ahaha")

new Vue({
  render: h => h(App),
}).$mount('#app')
