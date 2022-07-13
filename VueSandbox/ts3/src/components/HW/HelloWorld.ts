import { Component, Prop, Vue } from 'vue-property-decorator';

import WithRender from "./HW.html";


@WithRender
@Component
export default class HelloWorld extends Vue {
	@Prop({default:"SowWat??"}) msg!:string
}
