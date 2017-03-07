"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ng2_pagination_1 = require("ng2-pagination");
var angular2_datatable_1 = require("angular2-datatable");
var router_component_1 = require("./components/router/router.component");
var register_component_1 = require("./components/register/register.component");
var login_component_1 = require("./components/login/login.component");
var home_component_1 = require("./components/home/home.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var apis_component_1 = require("./components/apis/apis.component");
var apis_new_component_1 = require("./components/apis/apis.new.component");
var header_component_1 = require("./components/header/header.component");
var api_exception_service_1 = require("./services/api-exception.service");
var http_client_service_1 = require("./services/http-client.service");
var authentication_service_1 = require("./services/users/authentication.service");
var data_filter_pipe_1 = require("./pipes/data-filter.pipe");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'apis', component: apis_component_1.ApiComponent },
    { path: 'apis/new', component: apis_new_component_1.NewApiComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes),
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            ng2_pagination_1.Ng2PaginationModule,
            angular2_datatable_1.DataTableModule
        ],
        declarations: [
            router_component_1.RouterComponent, header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent, register_component_1.RegisterComponent, login_component_1.LoginComponent, home_component_1.HomeComponent, apis_component_1.ApiComponent, apis_new_component_1.NewApiComponent,
            // Pipes below
            data_filter_pipe_1.DataFilterPipe
        ],
        bootstrap: [router_component_1.RouterComponent, header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent],
        providers: [
            http_client_service_1.HttpClientService, api_exception_service_1.ApiExceptionService, authentication_service_1.AuthenticationService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map