import { Component, Prop, Vue } from "vue-property-decorator";
import { ComponentSize } from "@/enums";
import IconTypeEnum from "@/enums";
import { PropType } from "vue";
import { extend } from "vue/types/umd";
import ContextMenuItemType from "@/components/Generics/Button/ButtonContextMenu/ButtonContextMenuItem"

export default class SspComponent extends Vue {
	@Prop({
		default: ComponentSize.Medium,
		type: Number as PropType<ComponentSize>,
	})
	size: ComponentSize;
	ComponentSize = ComponentSize;

	get SizeStr(): string {
		return ComponentSize[this.size].toLowerCase()
	}
}

export class SspIconicComponent extends SspComponent {
	@Prop() icon: string;
	@Prop({
		default: IconTypeEnum.Material,
		type: Number as PropType<IconTypeEnum>,
	})
	iconType: IconTypeEnum;
	IconTypeEnum = IconTypeEnum;
}

export class SspButtonComponent extends SspIconicComponent{
	@Prop() href: string;
	@Prop() menuIcon: string;
	@Prop({ type: Boolean }) active: boolean;
	@Prop({ type: Boolean }) borderless: boolean;
	@Prop({ type: Boolean }) openNewWindow: boolean;
	@Prop({ type: Boolean }) splitMenu: boolean;
	@Prop() menuItems: Array<ContextMenuItemType>;
}

function applyMixins(derivedCtor: any, constructors: any[]) {
	constructors.forEach((baseCtor) => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
			Object.defineProperty(
				derivedCtor.prototype,
				name,
				Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
				Object.create(null)
			);
		});
	});
}