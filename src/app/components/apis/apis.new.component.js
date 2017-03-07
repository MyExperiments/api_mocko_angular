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
var router_1 = require("@angular/router");
var apps_service_1 = require("../../services/apps.service");
var api_exception_service_1 = require("../../services/api-exception.service");
var http_client_service_1 = require("../../services/http-client.service");
var NewApiComponent = (function () {
    function NewApiComponent(_router, _appsService, _apiExceptionService) {
        this._router = _router;
        this._appsService = _appsService;
        this._apiExceptionService = _apiExceptionService;
        this._appsService = _appsService;
        this._apiExceptionService = _apiExceptionService;
    }
    NewApiComponent.prototype.createApp = function (event, apiName, appName, response) {
        var _this = this;
        event.preventDefault();
        var params = {
            "mock_api": {
                "title": apiName,
                "app": appName,
                "api_response": response
            }
        };
        this._appsService.createApi(params).subscribe(function (response) {
            if (response.success) {
                _this._router.navigate(['/apps']);
            }
        }, function (error) {
            _this._apiExceptionService.catch(error);
        });
    };
    return NewApiComponent;
}());
NewApiComponent = __decorate([
    core_1.Component({
        selector: 'new-api',
        templateUrl: 'app/components/apis/apis.new.component.html',
        providers: [apps_service_1.AppsService, api_exception_service_1.ApiExceptionService, http_client_service_1.HttpClientService]
    }),
    __metadata("design:paramtypes", [router_1.Router, apps_service_1.AppsService, api_exception_service_1.ApiExceptionService])
], NewApiComponent);
exports.NewApiComponent = NewApiComponent;
//# sourceMappingURL=apis.new.component.js.map