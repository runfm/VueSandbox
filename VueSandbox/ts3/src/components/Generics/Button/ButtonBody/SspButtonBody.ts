import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { SspButtonComponent } from "@/models/SspComponent"
import ButtonIcon from "../ButtonIcon/index.vue";


@Component({
	name: "SspButtonBody",
	components: {
		"ssp-button-icon": ButtonIcon
	},
})
export default class SspButtonBody extends SspButtonComponent {

	get TagName(): string {
		if (this.href)
			return "a"
		return "div"
	}

	get HrefNewWindowTarget(): string | undefined {
		if (this.openNewWindow)
			return '_blank'
		return undefined
	}

	get ButtonBemClass(): Array<string> {
		let baseClassName = "ssp-button-body";
		let result = [
			baseClassName,
			`${baseClassName}_size_${this.SizeStr}`,
			`${baseClassName}_type_${this.TypeStr}`
		]
		if (this.splitMenu && this.menuItems && this.menuItems.length)
			result.push(`${baseClassName}_split-menu`);
		if (this.borderless)
			result.push(`${baseClassName}_borderless`);
		if (this.plain)
			result.push(`${baseClassName}_plain`);
		return result;
	}

	get TextContainerBemClass(): Array<string> {
		let baseClassName = "ssp-button-body__text-content";
		let result = [
			baseClassName,
			`${baseClassName}_size_${this.SizeStr}`
		]
		return result;
	}
	get TextContainerStyle(): any {
		let style = {
			fontSize: "12px"
		}
		if (this.size >= 2)
			style.fontSize = "14px"
		return {}
	}

	@Emit()
	contextmenu(e: Event) {
		if (this.menuItems && this.menuItems.length)
			e.preventDefault();
	}

	@Emit()
	dblclick() { }

	@Emit()
	click() { }
}