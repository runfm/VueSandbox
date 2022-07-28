var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import axios from 'axios';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
function CreateUrl(target) {
    return `${process.env.BASE_URL}api/${target.Controller}/${target.Method}`;
}
let SspServerData = class SspServerData extends VuexModule {
    ContextMenuItems;
    GetDataFromServer(target) {
        let url = CreateUrl(target);
        console.log(url);
    }
    async GetData(target) {
        this.context.commit('loading', true, { root: true });
        let url = CreateUrl(target);
        axios.get(url).then(r => {
            console.log(r.data);
        });
        //this.context.commit("GetDataFromServer", target)
        //let sd = (await axios.get(url)).data
        this.context.commit('loading', false, { root: true });
    }
    get TestG() {
        return "T";
    }
};
__decorate([
    Mutation
], SspServerData.prototype, "GetDataFromServer", null);
__decorate([
    Action({ rawError: true })
], SspServerData.prototype, "GetData", null);
SspServerData = __decorate([
    Module({ namespaced: true, name: 'sd' })
], SspServerData);
//export default getModule(SspServerData);
export default SspServerData;
//# sourceMappingURL=server_data.js.map