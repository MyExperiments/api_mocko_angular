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
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_client_service_1 = require("./http-client.service");
var AppsService = (function () {
    function AppsService(_httpClientService) {
        this._httpClientService = _httpClientService;
        this._httpClientService = _httpClientService;
    }
    AppsService.prototype.getApis = function () {
        return this._httpClientService.get('http://localhost:4000/frontend/api/mock_apis.json', true)
            .map(function (response) {
            return response.json();
        });
    };
    AppsService.prototype.createApi = function (params) {
        return this._httpClientService.post('http://localhost:4000/frontend/api/mock_apis.json', params, true)
            .map(function (response) {
            return response.json();
        });
    };
    return AppsService;
}());
AppsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_client_service_1.HttpClientService])
], AppsService);
exports.AppsService = AppsService;
//# sourceMappingURL=apps.service.js.map