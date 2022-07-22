<template>
	<div class="ssp-main-page">
		<div class="ssp-sandbox">
			<ssp-button
				icon="edit"
				href="http://ya.ru"
				:size="SspComponentSize.Large"
				:icon-type="IconTypeEnum.Element"
				@click="btnClick"
			>ButtonElement</ssp-button>
			<ssp-button
				active
				icon="pie-chart"
				:size="SspComponentSize.Medium"
				:icon-type="IconTypeEnum.Awesome"
				:menu-items="l1"
				@click="btnClick"
			>ButtonAwesome</ssp-button>
			<ssp-button
				active
				plain
				icon="settings"
				:size="SspComponentSize.Small"
				:type="ButtonStyle.Success"
				@click="btnClick"
			>ButtonMaterialUI_Small</ssp-button>
			<ssp-button
				active
				plain
				split-menu
				icon="settings"
				:size="SspComponentSize.Mini"
				:menu-items="l1"
				:type="ButtonStyle.Danger"
				@click="btnClick"
			>ButtonMaterialUI</ssp-button>
			<ssp-button
				active
				plain
				icon="settings"
				tooltip="Small Borderless button"
				:size="SspComponentSize.Small"
				:type="ButtonStyle.Warning"
				@click="btnClick"
			>ButtonMaterialUI_Borderless</ssp-button>
			<ssp-button
				active
				plain
				split-menu
				icon="s-management"
				:size="SspComponentSize.Mini"
				:icon-type="IconTypeEnum.Element"
				:menu-items="l1"
				:type="ButtonStyle.Info"
				@click="btnClick"
			>ButtonElementUI</ssp-button>
			<ssp-button
				active
				plain
				split-menu
				icon="menu"
				href="http://ya.ru"
				open-new-window
				:icon-type="IconTypeEnum.Element"
				:menu-items="l1"
				:type="ButtonStyle.Primary"
				@click="btnClick"
			>ButtonElementUI</ssp-button>
			<ssp-button
				active
				plain
				split-menu
				icon="menu"
				href="http://ya.ru"
				open-new-window
				:icon-type="IconTypeEnum.Element"
				:menu-items="l1"
				:type="ButtonStyle.Primary"
				@click="btnClick"
			></ssp-button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ButtonComponent from "@/components/Generics/Button/index.vue";
import IconTypeEnum from "@/enums";
import { ComponentSize } from "@/enums";
import { ButtonStyle } from "@/enums"
import ContextMenuItemType from "@/components/Generics/Button/ButtonContextMenu/ButtonContextMenuItem"

@Component({
	name: "HelloWorld",
	components: {
		"ssp-button": ButtonComponent,
	},
})
export default class HelloWorld extends Vue {
	@Prop() readonly msg!: string;
	@Prop({ default: "John doe" }) readonly name: string;
	@Prop() readonly last_name: string;

	IconTypeEnum = IconTypeEnum;
	SspComponentSize = ComponentSize;
	ButtonStyle = ButtonStyle

	t1: string = "welc";
	l1: Array<ContextMenuItemType> = [
		{
			Name: "X1_шеуь23",
			Alias: "26",
		},
		{
			Name: "Jo_45еа_фа",
			Alias: "32",
		},
		{
			Name: "1124Jo_4342355еа_ф3425а",
			Alias: "332",
		},
	];

	get fullName(): string {
		return `${this.name} ${this.last_name} ${this.msg}`;
	}

	btnClick(): void {
		console.log("clicke")
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}

.ssp-sandbox {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
</style>
