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
var authentication_service_1 = require("../../services/users/authentication.service");
var api_exception_service_1 = require("../../services/api-exception.service");
var LoginComponent = (function () {
    function LoginComponent(_authenticationService, _apiExceptionService, router) {
        this._authenticationService = _authenticationService;
        this._apiExceptionService = _apiExceptionService;
        this.router = router;
        this._authenticationService = _authenticationService;
        this._apiExceptionService = _apiExceptionService;
        this.router = router;
    }
    LoginComponent.prototype.login = function (event, email, password) {
        var _this = this;
        event.preventDefault();
        this._authenticationService.login(email, password).subscribe(function (response) {
            if (response && response.authentication_token.length > 0) {
                // store current user details in localstorage
                _this._authenticationService.setCurrentUser(response);
                _this.router.navigate(['/apps']);
            }
        }, function (error) {
            _this._apiExceptionService.catch(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'app/components/login/login-form.component.html',
        providers: [authentication_service_1.AuthenticationService, api_exception_service_1.ApiExceptionService]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, api_exception_service_1.ApiExceptionService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map