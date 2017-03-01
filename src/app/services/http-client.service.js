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
var http_1 = require('@angular/http');
var authentication_service_1 = require('./users/authentication.service');
var HttpClientService = (function () {
    function HttpClientService(http, _authenticationService) {
        this.http = http;
        this._authenticationService = _authenticationService;
        this._authenticationService = _authenticationService;
        this.http = http;
    }
    HttpClientService.prototype.authorizationHeader = function (headers) {
        var currentUser = this._authenticationService.getCurrentUser();
        headers.append('X-User-Token', currentUser.authentication_token);
        headers.append('X-User-Email', currentUser.email);
    };
    HttpClientService.prototype.get = function (url, withAuthHeader) {
        if (withAuthHeader) {
            var headers = new http_1.Headers();
            this.authorizationHeader(headers);
            return this.http.get(url, {
                headers: headers
            });
        }
        else {
            return this.http.get(url);
        }
    };
    HttpClientService.prototype.post = function (url, data, withAuthHeader) {
        if (withAuthHeader) {
            alert(222);
            var headers = new http_1.Headers();
            this.authorizationHeader(headers);
            return this.http.post(url, data, {
                headers: headers
            });
        }
        else {
            return this.http.post(url, data);
        }
    };
    HttpClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, authentication_service_1.AuthenticationService])
    ], HttpClientService);
    return HttpClientService;
}());
exports.HttpClientService = HttpClientService;
//# sourceMappingURL=http-client.service.js.map