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
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
let ScoreService = class ScoreService {
    constructor(http) {
        this.http = http;
    }
    saveSentences(data) {
        let jsonData = JSON.stringify(data);
        this.http
            .post('/api/v1/score', jsonData)
            .catch(this.handleError);
    }
    handleError(error) {
        console.error(error);
        let msg = `Error status code ${error.status} at $error.url}`;
        return Observable_1.Observable.throw(msg);
    }
};
ScoreService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ScoreService);
exports.ScoreService = ScoreService;
//# sourceMappingURL=score.service.js.map