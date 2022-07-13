<template>
	<div class="ssp-button-context-menu">
		<div
			v-for="item in menuItems"
			:key="item.Alias"
			class="ssp-button-context-menu__item"
			@click.stop="click(item)"
		>{{item.Name}}</div>
	</div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import ContextMenuItemType from "@/components/Generics/Button/ButtonContextMenu/ButtonContextMenuItem"
@Component({
	name: "SspButtonContextMenu",
	components: {

	},
})
export default class SspButtonContextMenu extends Vue {
	@Prop() menuItems: Array<ContextMenuItemType>;

	@Emit("contextMenuItemClick")
	click(e:ContextMenuItemType){}
}
</script>

<style lang="scss">
.ssp-button-context-menu {
	display: flex;
	flex-direction: column;
	position: absolute;
	background: white;
	z-index: 999;
	top: calc(100% + 8px);
	border-radius: 4px;
	border: $border;
	padding: 8px 0px;
	text-align: left;
}

.ssp-button-context-menu__item {
	padding: 4px 12px;
	font-size: $textContextFontSizeNormal;
}
.ssp-button-context-menu__item:hover{
	background-color: $hoveredItem;
	color: $--color-primary;
}
</style>