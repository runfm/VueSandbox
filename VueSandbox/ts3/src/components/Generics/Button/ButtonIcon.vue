<template>
	<div @click="click" :class="WrapperBemClass">
		<i v-if="iconType == IconTypeEnum.Element" :class="`el-icon-${icon}`"></i>
		<span v-else-if="iconType == IconTypeEnum.Material" class="ssp-mi material-icons-round">{{icon}}</span>
		<i v-else-if="iconType == IconTypeEnum.Awesome" :class="`fa fa-${icon}`"></i>
	</div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import {SspIconicComponent} from "@/models/SspComponent"

@Component({
	name: "SspButtonIcon",
	components: {},
})
export default class SspButtonIcon extends SspIconicComponent {
	@Prop({ type: Boolean }) borderless: boolean;
	
	get WrapperBemClass(){
		let base = "ssp-button-icon"
		if(this.borderless)
			base = `${base} ${base}_borderless`
		return base
	}

	@Emit()
	click(){}
}
</script>

<style lang="scss">
.ssp-button-icon [class^="el-icon-"],
.ssp-button-icon .fa {
	font-size: 24px;
}
.ssp-button-icon {
	display: flex;
	min-width: 24px;
	justify-content: center;
	align-items: center;
}
</style>