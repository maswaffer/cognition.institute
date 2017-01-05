"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const rspan_component_1 = require("./rspan.component");
const letterRecall_component_1 = require("../letterRecall/letterRecall.component");
const routes = [
    { path: 'rspan', component: rspan_component_1.RspanComponent },
    { path: 'letters', component: letterRecall_component_1.LetterRecallComponent },
];
let RspanRoutingModule = class RspanRoutingModule {
};
RspanRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], RspanRoutingModule);
exports.RspanRoutingModule = RspanRoutingModule;
exports.rspanRoutedComponents = [
    rspan_component_1.RspanComponent,
    letterRecall_component_1.LetterRecallComponent
];
//# sourceMappingURL=rspan-routing.module.js.map