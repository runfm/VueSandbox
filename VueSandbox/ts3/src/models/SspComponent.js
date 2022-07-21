var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Prop, Vue } from "vue-property-decorator";
import { ComponentSize } from "@/enums";
import { ButtonStyle } from "@/enums";
import IconTypeEnum from "@/enums";
export default class SspComponent extends Vue {
    size;
    ComponentSize = ComponentSize;
    get SizeStr() {
        return ComponentSize[this.size].toLowerCase();
    }
}
__decorate([
    Prop({
        default: ComponentSize.Medium,
        type: Number,
    })
], SspComponent.prototype, "size", void 0);
export class SspIconicComponent extends SspComponent {
    icon;
    iconType;
    IconTypeEnum = IconTypeEnum;
}
__decorate([
    Prop()
], SspIconicComponent.prototype, "icon", void 0);
__decorate([
    Prop({
        default: IconTypeEnum.Material,
        type: Number,
    })
], SspIconicComponent.prototype, "iconType", void 0);
export class SspButtonComponent extends SspIconicComponent {
    href;
    menuIcon;
    active;
    borderless;
    openNewWindow;
    plain;
    splitMenu;
    menuItems;
    type;
    ButtonStyle = ButtonStyle;
    get TypeStr() {
        return ButtonStyle[this.type].toLowerCase();
    }
}
__decorate([
    Prop()
], SspButtonComponent.prototype, "href", void 0);
__decorate([
    Prop()
], SspButtonComponent.prototype, "menuIcon", void 0);
__decorate([
    Prop({ type: Boolean })
], SspButtonComponent.prototype, "active", void 0);
__decorate([
    Prop({ type: Boolean })
], SspButtonComponent.prototype, "borderless", void 0);
__decorate([
    Prop({ type: Boolean })
], SspButtonComponent.prototype, "openNewWindow", void 0);
__decorate([
    Prop({ type: Boolean })
], SspButtonComponent.prototype, "plain", void 0);
__decorate([
    Prop({ type: Boolean })
], SspButtonComponent.prototype, "splitMenu", void 0);
__decorate([
    Prop()
], SspButtonComponent.prototype, "menuItems", void 0);
__decorate([
    Prop({
        default: ButtonStyle.Default,
        type: Number,
    })
], SspButtonComponent.prototype, "type", void 0);
function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}
//# sourceMappingURL=SspComponent.js.map