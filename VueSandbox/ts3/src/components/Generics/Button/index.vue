<template>
	<el-tooltip :content="tooltip" :disabled="!tooltip || ContextMenuVisible">
		<div ref="SspWrapper" class="ssp-button" tabindex="-1" @focusout="focusout">
			<div class="ssp-button__cw">
				<ssp-button-body
					:split-menu="splitMenu"
					:active="active"
					:open-new-window="openNewWindow"
					:borderless="borderless"
					:size="size"
					:icon="icon"
					:iconType="iconType"
					:menu-items="menuItems"
					:menu-icon="MenuIcon"
					:href="href"
					@click="bodyClick"
					@dblclick="bodyDblclick"
					@contextmenu="bodyContextmenu"
				>
					<slot></slot>
				</ssp-button-body>
				<ssp-button-icon
					v-if="splitMenu && menuItems && menuItems.length"
					class="ssp-button-icon_split"
					:size="size"
					:icon="MenuIcon"
					:iconType="iconType"
					@click="menuIconClick"
				/>
			</div>
			<ssp-button-context-menu
				v-if="ContextMenuVisible"
				:menu-items="menuItems"
				@contextMenuItemClick="contextMenuItemClick"
			/>
		</div>
	</el-tooltip>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import IconTypeEnum from "@/enums";
import {SspButtonComponent} from "@/models/SspComponent"

import ButtonBody from "./ButtonBody.vue";
import ButtonIcon from "./ButtonIcon.vue"
import ButtonContextMenu from "./ButtonContextMenu/"
import ContextMenuItemType from "./ButtonContextMenu/ButtonContextMenuItem"

@Component({
	name: "SspButton",
	components: {
		"ssp-button-body": ButtonBody,
		"ssp-button-icon": ButtonIcon,
		"ssp-button-context-menu": ButtonContextMenu
	},
})
export default class SspButton extends SspButtonComponent {
	@Prop() tooltip: string;

	get MenuIcon(): string {
		if (this.menuIcon)
			return this.menuIcon
		switch (this.iconType) {
			case IconTypeEnum.Awesome:
				return "ellipsis-v"
			case IconTypeEnum.Element:
				return "caret-bottom"
			case IconTypeEnum.Material:
				return "more_vert"
		}
	}

	get ContextMenuVisible(): boolean {
		if (this.menuItems && this.menuItems.length)
			return this.isContextMenuVisible
		return false
	}

	private isActive: boolean;
	private isContextMenuVisible: boolean = false

	@Emit("click")
	bodyClick() {
		if (!this.splitMenu && this.menuItems && this.menuItems.length)
			this.isContextMenuVisible = true
	}

	@Emit("dblclick")
	bodyDblclick() { }

	@Emit("contextmenu")
	bodyContextmenu() {
		this.isContextMenuVisible = true
	}

	menuIconClick() {
		this.isContextMenuVisible = true
	}

	contextMenuItemClick(e: ContextMenuItemType) {
		this.isContextMenuVisible = false
	}

	focusout(e: FocusEvent) {
		if (e.relatedTarget == null || !this.$refs.SspWrapper.contains(e.relatedTarget))
			this.isContextMenuVisible = false
	}
}
</script>

<style lang="scss">
.ssp-button {
	cursor: pointer;
	width: fit-content;

	position: relative;
}

.ssp-button__cw {
	display: flex;
	user-select: none;
}

.ssp-button-icon_split {
	border: $border;
	border-left: 0px;
	border-radius: 0px 4px 4px 0px;
}
</style>