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
require('rxjs/add/operator/map');
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post('http://localhost:4000/users/sign_in.json', { user: { email: email, password: password } })
            .map(function (response) {
            return response.json();
        });
    };
    AuthenticationService.prototype.isSignedIn = function () {
        if (Object.getOwnPropertyNames(this.getCurrentUser()).length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            return JSON.parse(currentUser);
        }
        else {
            return {};
        }
    };
    AuthenticationService.prototype.setCurrentUser = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    };
    AuthenticationService.prototype.removeCurrentUser = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.handleLoginError = function (response) { };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map