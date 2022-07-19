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
import  SspButtonBody  from "./SspButtonBody"
export default SspButtonBody
</script>

<style lang="scss">
.ssp-button-body {
	display: flex;
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