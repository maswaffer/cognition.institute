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
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const content_routing_module_1 = require("./content-routing.module");
const text_display_component_1 = require("./text/text-display.component");
const image_display_component_1 = require("./image/image-display.component");
const animation_display_component_1 = require("./animation/animation-display.component");
const safe_pipe_1 = require("../pipes/safe-pipe");
let ContentModule = class ContentModule {
};
ContentModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            content_routing_module_1.ContentRoutingModule
        ],
        declarations: [
            content_routing_module_1.contentRoutedComponents,
            text_display_component_1.TextDisplayComponent,
            image_display_component_1.ImageDisplayComponent,
            animation_display_component_1.AnimationDisplayComponent,
            safe_pipe_1.SafePipe
        ]
    }),
    __metadata("design:paramtypes", [])
], ContentModule);
exports.ContentModule = ContentModule;
//# sourceMappingURL=content.module.js.map