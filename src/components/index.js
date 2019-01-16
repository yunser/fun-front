import page from './page'
import AppList from './app-list'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('app-list', AppList)
    }
}
