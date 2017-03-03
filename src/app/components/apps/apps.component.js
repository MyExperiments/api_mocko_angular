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
var core_1 = require('@angular/core');
var apps_service_1 = require('../../services/apps.service');
var api_exception_service_1 = require('../../services/api-exception.service');
var http_client_service_1 = require('../../services/http-client.service');
var data_filter_pipe_1 = require('../../pipes/data-filter.pipe');
var AppComponent = (function () {
    function AppComponent(_appsService, _apiExceptionService) {
        var _this = this;
        this._appsService = _appsService;
        this._apiExceptionService = _apiExceptionService;
        this.rowsOnPage = 5;
        this.sortBy = 'title';
        this.sortOrder = 'asc';
        this._appsService = _appsService;
        this._apiExceptionService = _apiExceptionService;
        this._appsService.getApps().subscribe(function (response) {
            _this.apps = response.apps;
            _this.allApps = _this.apps;
        }, function (error) {
            _this._apiExceptionService.catch(error);
        });
    }
    AppComponent.prototype.filter = function (event) {
        var filterPipe = new data_filter_pipe_1.DataFilterPipe();
        this.apps = this.allApps;
        if (this.titleFilter) {
            this.apps = filterPipe.transform(this.apps, this.titleFilter, 'title');
        }
        if (this.tokenFilter) {
            this.apps = filterPipe.transform(this.apps, this.tokenFilter, 'app_token');
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'apps',
            pipes: [data_filter_pipe_1.DataFilterPipe],
            templateUrl: 'app/components/apps/apps.component.html',
            providers: [apps_service_1.AppsService, api_exception_service_1.ApiExceptionService, http_client_service_1.HttpClientService]
        }), 
        __metadata('design:paramtypes', [apps_service_1.AppsService, api_exception_service_1.ApiExceptionService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=apps.component.js.map