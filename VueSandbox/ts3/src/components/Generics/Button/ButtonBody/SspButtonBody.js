var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Emit } from "vue-property-decorator";
import { SspButtonComponent } from "@/models/SspComponent";
import ButtonIcon from "../ButtonIcon/index.vue";
let SspButtonBody = class SspButtonBody extends SspButtonComponent {
    get TagName() {
        if (this.href)
            return "a";
        return "div";
    }
    get HrefNewWindowTarget() {
        if (this.openNewWindow)
            return '_blank';
        return undefined;
    }
    get ButtonBemClass() {
        let baseClassName = "ssp-button-body";
        let result = [
            baseClassName,
            `${baseClassName}_size_${this.SizeStr}`,
            `${baseClassName}_type_${this.TypeStr}`
        ];
        if (this.splitMenu && this.menuItems && this.menuItems.length)
            result.push(`${baseClassName}_split-menu`);
        if (this.borderless)
            result.push(`${baseClassName}_borderless`);
        if (this.plain)
            result.push(`${baseClassName}_plain`);
        return result;
    }
    get TextContainerBemClass() {
        let baseClassName = "ssp-button-body__text-content";
        let result = [
            baseClassName,
            `${baseClassName}_size_${this.SizeStr}`
        ];
        return result;
    }
    get TextContainerStyle() {
        let style = {
            fontSize: "12px"
        };
        if (this.size >= 2)
            style.fontSize = "14px";
        return {};
    }
    contextmenu(e) {
        if (this.menuItems && this.menuItems.length)
            e.preventDefault();
    }
    dblclick() { }
    click() { }
};
__decorate([
    Emit()
], SspButtonBody.prototype, "contextmenu", null);
__decorate([
    Emit()
], SspButtonBody.prototype, "dblclick", null);
__decorate([
    Emit()
], SspButtonBody.prototype, "click", null);
SspButtonBody = __decorate([
    Component({
        name: "SspButtonBody",
        components: {
            "ssp-button-icon": ButtonIcon
        },
    })
], SspButtonBody);
export default SspButtonBody;
//# sourceMappingURL=SspButtonBody.js.map