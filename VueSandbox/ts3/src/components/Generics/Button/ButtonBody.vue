<template>
	<component
		:is="TagName"
		:href="href"
		:target="HrefNewWindowTarget"
		:class="ButtonBemClass"
		@click.stop="click"
		@dblclick.stop="dblclick"
		@contextmenu.stop="contextmenu"
	>
		<ssp-button-icon v-if="icon" :size="size" :icon="icon" :iconType="iconType" />
		<div :class="TextContainerBemClass">
			<slot></slot>
		</div>
		<ssp-button-icon
			v-if="!splitMenu && menuItems && menuItems.length"
			:size="size"
			:icon="menuIcon"
			:iconType="iconType"
		/>
	</component>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { SspButtonComponent } from "@/models/SspComponent"

/* import {ButtonStyle} from "@/enums" */

import ButtonIcon from "./ButtonIcon.vue";

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
</script>

<style lang="scss">
.ssp-button-body {
	display: flex;
	gap: 8px;
	align-items: center;
	border-radius: 4px;
	border: $border;
}

a.ssp-button-body {
	text-decoration: none !important;
}

.ssp-button-body_split-menu {
	border-radius: 4px 0px 0px 4px;
}

.ssp-button-body_borderless {
	border-radius: 0px !important;
	border: $borderNone !important;
}
</style>