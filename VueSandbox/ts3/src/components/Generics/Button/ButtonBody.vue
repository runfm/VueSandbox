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
		<div  :class="TextContainerBemClass">
			<slot></slot>
		</div>
		<ssp-button-icon
			v-if="!splitMenu && menuItems && menuItems.length"
			:size="size"
			:icon="menuIcon"
			:iconType="iconType"
		/>
	</component >
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import {SspButtonComponent} from "@/models/SspComponent"

import ButtonIcon from "./ButtonIcon.vue";

@Component({
	name: "SspButtonBody",
	components: {
		"ssp-button-icon": ButtonIcon
	},
})
export default class SspButtonBody extends SspButtonComponent {

	get TagName():string{
		if(this.href)
			return "a"
		return "div"
	}

	get HrefNewWindowTarget():string | undefined{
		if(this.openNewWindow)
			return '_blank'
		return undefined
	}

	get ButtonBemClass(): Array<string> {		
		let baseClassName = "ssp-button-body";
		let result = [baseClassName,`${baseClassName}_size_${this.SizeStr}`]
		if (this.splitMenu && this.menuItems && this.menuItems.length)
			result.push(`${baseClassName}_split-menu`);
		if (this.borderless)
			result.push(`${baseClassName}_borderless`);
		return result;
	}

	get TextContainerBemClass(): string {
		let baseClassName = "ssp-button-body__text-content";
		return `${baseClassName} ${baseClassName}_size_${this.SizeStr}`;
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
	contextmenu(e:Event) {
		if(this.menuItems && this.menuItems.length)
			e.preventDefault();
	}

	@Emit()
	dblclick() {}

	@Emit()
	click() {}
}
</script>

<style lang="scss">

.ssp-button-body {
	display: flex;
	gap: 8px;
	align-items: center;
	background: #fff;
	color: $basicTextColor;
	border-radius: 4px;
	border: $border
}

a.ssp-button-body{
	text-decoration: none !important;
	color: $basicTextColor !important;
}

.ssp-button-body_split-menu {
	border-radius: 4px 0px 0px 4px;
}

.ssp-button-body_borderless {
	border-radius: 0px;
	border: 0px ;
}

.ssp-button-body_size_mini {
	padding: 1px;
	padding-right: 5px;
}

.ssp-button-body_size_small {
	padding: 3px;
	padding-right: 7px;
}

.ssp-button-body_size_medium {
	padding: 5px;
}

.ssp-button-body_size_large {
	padding: 7px;
}

.ssp-button-body__text-content {
	font-size: $textContextFontSizeNormal;
}

.ssp-button-body__text-content_size_mini,
.ssp-button-body__text-content_size_small{
	font-size: $textContextFontSizeCompact;
}

</style>