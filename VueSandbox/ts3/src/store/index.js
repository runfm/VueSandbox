import Vue from 'vue';
import Vuex from 'vuex';
import SspServerData from "./module/server_data";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        IsLoading: false
    },
    getters: {},
    mutations: {
        loading(state, value) {
            state.IsLoading = value;
        }
    },
    actions: {},
    modules: {
        sd: SspServerData
    }
});
//# sourceMappingURL=index.js.map