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
var apps_service_1 = require("../../services/apps.service");
var api_exception_service_1 = require("../../services/api-exception.service");
var http_client_service_1 = require("../../services/http-client.service");
var data_filter_pipe_1 = require("../../pipes/data-filter.pipe");
var ApiComponent = (function () {
    function ApiComponent(_appsService, _apiExceptionService) {
        var _this = this;
        this._appsService = _appsService;
        this._apiExceptionService = _apiExceptionService;
        this.rowsOnPage = 5;
        this.sortBy = 'title';
        this.sortOrder = 'asc';
        this._appsService = _appsService;
        this._apiExceptionService = _apiExceptionService;
        this._appsService.getApis().subscribe(function (response) {
            console.log(response);
            _this.apis = response.apis;
            _this.allApis = _this.apis;
        }, function (error) {
            _this._apiExceptionService.catch(error);
        });
    }
    ApiComponent.prototype.filter = function (event) {
        var filterPipe = new data_filter_pipe_1.DataFilterPipe();
        this.apis = this.allApis;
        if (this.titleFilter) {
            this.apis = filterPipe.transform(this.apis, this.titleFilter, 'title');
        }
        if (this.tokenFilter) {
            this.apis = filterPipe.transform(this.apis, this.tokenFilter, 'api_token');
        }
    };
    return ApiComponent;
}());
ApiComponent = __decorate([
    core_1.Component({
        selector: 'apis',
        templateUrl: 'app/components/apis/apis.component.html',
        providers: [apps_service_1.AppsService, api_exception_service_1.ApiExceptionService, http_client_service_1.HttpClientService]
    }),
    __metadata("design:paramtypes", [apps_service_1.AppsService, api_exception_service_1.ApiExceptionService])
], ApiComponent);
exports.ApiComponent = ApiComponent;
//# sourceMappingURL=apis.component.js.map