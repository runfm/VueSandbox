var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from "./HW.html";
let HelloWorld = class HelloWorld extends Vue {
    msg;
};
__decorate([
    Prop({ default: "SowWat??" })
], HelloWorld.prototype, "msg", void 0);
HelloWorld = __decorate([
    WithRender,
    Component
], HelloWorld);
export default HelloWorld;
//# sourceMappingURL=HelloWorld.js.map