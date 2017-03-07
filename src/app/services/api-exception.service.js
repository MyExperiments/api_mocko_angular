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
var authentication_service_1 = require("./users/authentication.service");
var ApiExceptionService = (function () {
    function ApiExceptionService(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this._router = _router;
        this._authenticationService = _authenticationService;
    }
    ApiExceptionService.prototype.catch = function (response) {
        // Unauthorized Access - status code 401
        var body = JSON.parse(response._body);
        if (response.status == 401) {
            this._authenticationService.removeCurrentUser();
            this._router.navigate(['/login']);
        }
    };
    return ApiExceptionService;
}());
ApiExceptionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], ApiExceptionService);
exports.ApiExceptionService = ApiExceptionService;
//# sourceMappingURL=api-exception.service.js.map