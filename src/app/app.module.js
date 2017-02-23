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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var register_component_1 = require('./components/register/register.component');
var login_component_1 = require('./components/login/login.component');
var login_register_links_component_1 = require('./components/login/login-register-links.component');
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes),
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ],
            declarations: [
                home_component_1.HomeComponent, register_component_1.RegisterComponent, login_component_1.LoginComponent, login_register_links_component_1.LoginRegisterLinksComponent
            ],
            bootstrap: [home_component_1.HomeComponent, login_register_links_component_1.LoginRegisterLinksComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map