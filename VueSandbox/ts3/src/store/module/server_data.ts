import axios from 'axios'
import { VuexModule, Module, Mutation, Action, MutationAction, getModule } from 'vuex-module-decorators'
import {SspServerRequestUrl} from "../types"
import SspContextMenuItem from "@/components/Generics/Button/ButtonContextMenu/ButtonContextMenuItem"
function CreateUrl(target: SspServerRequestUrl): string {
	return `${process.env.BASE_URL}api/${target.Controller}/${target.Method}`
}

@Module({ namespaced: true, name: 'sd'})
class SspServerData extends VuexModule {

	ctx__: Array<SspContextMenuItem>

	@Mutation
	public GetDataFromServer(target: SspServerRequestUrl): void {
		let url = CreateUrl(target)
		console.log(url)
	}

	@Mutation
	SetCtx(b:any):void{
		this.ctx__ = b
	}

	@Action({ rawError: true })
	public async GetData(target: SspServerRequestUrl) {
		this.context.commit('loading', true, { root: true })
		let url = CreateUrl(target)
		fetch(url).then(r=> {
			console.log(r)
			return r.json();
		})
		.then(d=>{
			console.log(d)

			this.context.commit("SetCtx", d.ContextMenu)
		})
		
		//this.context.commit("GetDataFromServer", target)
		//let sd = (await axios.get(url)).data


		this.context.commit('loading', false, { root: true })
	}

	public get TestG(): string {
		return "T";
	}

	public get ContextMenuItems():Array<SspContextMenuItem>{
		return this.ctx__;
	}
}

//export default getModule(SspServerData);

export default SspServerData;
