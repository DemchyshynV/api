(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/friends-page/friends-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/friends-page/friends-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!--<div *ngIf=\"friends$| async as friends\">-->\n<!--  <mat-card *ngFor=\"let friend of friends\" class=\"list\">-->\n<!--    <div class=\"profile\">-->\n<!--      <img [src]=\"friend.avatar\" *ngIf=\"friend.avatar else blank\">-->\n<!--      <div class=\"name\">{{friend.name}} {{friend.surname}}</div>-->\n<!--    </div>-->\n<!--    <div class=\"buttons\">-->\n<!--      <button mat-raised-button (click)=\"toFriend(friend.id)\">Добавить в друзья</button>-->\n<!--    </div>-->\n<!--    <ng-template #blank>-->\n<!--      <img [src]=\"avatarBlank\">-->\n<!--    </ng-template>-->\n<!--  </mat-card>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/friends-page/top/find-friends/find-friends.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/friends-page/top/find-friends/find-friends.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"friends$| async as friends\">\n  <mat-card *ngFor=\"let friend of friends\" class=\"list\">\n    <div class=\"profile\">\n      <img [src]=\"friend.avatar\" *ngIf=\"friend.avatar else blank\">\n      <div class=\"name\">{{friend.name}} {{friend.surname}}</div>\n    </div>\n    <div class=\"buttons\">\n      <button mat-raised-button (click)=\"save(friend.id)\">Добавить в друзья</button>\n    </div>\n    <ng-template #blank>\n      <img [src]=siteLayoutService.avatarBlank>\n    </ng-template>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/friends-page/top/my-friends/my-friends.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/friends-page/top/my-friends/my-friends.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"friends$| async as friends\" >-->\n<div *ngIf=\"friends\" >\n  <mat-card *ngFor=\"let friend of friends\" class=\"list\">\n    <div class=\"profile\">\n      <img [src]=\"friend.avatar\" *ngIf=\"friend.avatar else blank\">\n      <div class=\"name\">{{friend.name}} {{friend.surname}}</div>\n    </div>\n    <div class=\"buttons\">\n      <button mat-raised-button (click)=\"del(friend)\">Удалить из друзей</button>\n    </div>\n    <ng-template #blank>\n      <img [src]=\"siteLayoutService.avatarBlank\">\n    </ng-template>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/friends-page/top/top.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/friends-page/top/top.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"nav\">\n  <div><a mat-button *ngFor=\"let link of links\" [routerLink]=\"link.url\" routerLinkActive=\"active\">{{link.name}}</a> </div>\n</mat-toolbar>\n<div>\n\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"logingorm\">\n  <mat-card-title>Login</mat-card-title>\n  <mat-card-content xLayout=\"row\" fxLayoutAlign=\"center center\">\n    <form [formGroup]=\"form\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Email</mat-label>\n        <input matInput type=\"email\" required formControlName=\"email\" fxLayout=\"row\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxLayout=\"row\">\n        <mat-label>Password</mat-label>\n        <input matInput type=\"password\" required formControlName=\"password\">\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n  <mat-card-actions align=\"end\">\n    <button mat-raised-button  [disabled]=\"form.invalid\" (click)=\"login()\" color=\"primary\">Login</button>\n  </mat-card-actions>\n</mat-card>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/overview-page/overview-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/overview-page/overview-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n<p>overview-page works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-page/register-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-page/register-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"registerForm\">\n  <mat-card-title>Register</mat-card-title>\n\n  <mat-card-content fxLayoutAlign=\"center center\">\n    <form [formGroup]=\"form\">\n      <div fxLayout=\"column\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput type=\"email\" email required formControlName=\"email\">\n        </mat-form-field>\n\n        <div formGroupName=\"passwords\" fxLayout=\"column\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Password</mat-label>\n            <input matInput type=\"password\" required formControlName=\"password1\">\n            <mat-error>Min 6 characters</mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Password again</mat-label>\n            <input matInput type=\"password\" required [errorStateMatcher]=\"matcher\" formControlName=\"password2\">\n            <mat-error *ngIf=\"(form.hasError('notSame', 'passwords'))\">The password and confirm password\n              fields do not\n              match.\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n      </div>\n      <div formGroupName=\"profile\">\n        <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n          <mat-form-field appearance=\"outline\" class=\"fields\">\n            <mat-label>Name</mat-label>\n            <input matInput required formControlName=\"name\">\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"fields\">\n            <mat-label>Surname</mat-label>\n            <input matInput formControlName=\"surname\">\n          </mat-form-field>\n          <mat-form-field fxLayoutAlign=\"center\" appearance=\"outline\">\n            <mat-label>Age</mat-label>\n            <input matInput type=\"number\" formControlName=\"age\">\n          </mat-form-field>\n        </div>\n\n        <mat-form-field appearance=\"outline\" fxLayoutAlign=\"center\" class=\"fields\">\n          <mat-label>Gender</mat-label>\n          <mat-select formControlName=\"sex\">\n            <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\n              {{gender}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </form>\n  </mat-card-content>\n\n  <mat-card-actions align=\"end\">\n    <button mat-raised-button color=\"primary\" [disabled]=\"form.invalid\" (click)=\"register()\">Register</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/admin-layout/admin-layout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layouts/admin-layout/admin-layout.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>admin-layout works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/auth-layout/auth-layout.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layouts/auth-layout/auth-layout.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"nav\">\n  <div>MyBook</div>\n  <div class=\"nav\">\n   <a mat-button routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n   <a mat-button routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n  </div>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/site-layout/site-layout.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layouts/site-layout/site-layout.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"nav\">\n  <div><a mat-button routerLink=\"/overview\"><h1>MyBook</h1></a></div>\n</mat-toolbar>\n<mat-sidenav-container class=\"example-container\" *ngIf=\"siteLayout$ | async as siteLayout\">\n  <mat-sidenav class=\"sidenav\" mode=\"side\" opened>\n    <div class=\"avatar\">\n      <form [formGroup]=\"form\" enctype=\"multipart/form-data\">\n        <input type=\"file\" class=\"dn\" #input formControlName=\"file\" (change)=\"onFileUpload($event)\">\n        <img [src]=\"url\" (click)=\"triggerClick()\" width=\"200px\" height=\"250px\"\n             *ngIf=\"!siteLayout.avatar; else avatar\">\n      </form>\n      <ng-template #avatar>\n        <img [src]=\"siteLayout.avatar\" width=\"200px\" height=\"250px\">\n      </ng-template>\n    </div>\n    <div class=\"name\">\n      {{siteLayout.name}} {{siteLayout.surname}}\n    </div>\n    <div class=\"buttons\">\n      <div>\n        <a mat-stroked-button routerLink=\"/massages\" routerLinkActive=\"active\" [ngClass]=\"{blink: siteLayout.massages&&massageFlag}\" (click)=\"massageFlag=false\" >Сообщения</a>\n        <a mat-stroked-button routerLink=\"/friends\" routerLinkActive=\"active\" [ngClass]=\"{blink: siteLayout.friends&&friendFlag}\" (click)=\"friendFlag=false\">Друзья</a>\n        <a mat-stroked-button *ngFor=\"let link of links\" [routerLink]=\"link.url\"\n           routerLinkActive=\"active\">{{link.name}}</a>\n      </div>\n      <div class=\"bottom\">\n        <a *ngIf=\"siteLayout.admin\" mat-stroked-button routerLink=\"/admin\" routerLinkActive=\"active\">Админка</a>\n        <a mat-stroked-button routerLink=\"/login\" (click)=\"auth.logout()\" routerLinkActive=\"active\">Выход</a>\n\n      </div>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-page/register-page.component */ "./src/app/register-page/register-page.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/classes/auth.guard */ "./src/app/shared/classes/auth.guard.ts");
/* harmony import */ var _shared_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/layouts/admin-layout/admin-layout.component */ "./src/app/shared/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overview-page/overview-page.component */ "./src/app/overview-page/overview-page.component.ts");
/* harmony import */ var _friends_page_friends_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./friends-page/friends-page.component */ "./src/app/friends-page/friends-page.component.ts");
/* harmony import */ var _friends_page_top_top_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./friends-page/top/top.component */ "./src/app/friends-page/top/top.component.ts");
/* harmony import */ var _friends_page_top_my_friends_my_friends_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./friends-page/top/my-friends/my-friends.component */ "./src/app/friends-page/top/my-friends/my-friends.component.ts");
/* harmony import */ var _friends_page_top_find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./friends-page/top/find-friends/find-friends.component */ "./src/app/friends-page/top/find-friends/find-friends.component.ts");














var routes = [
    {
        path: '', component: _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"], children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
            { path: 'register', component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_5__["RegisterPageComponent"] }
        ]
    },
    {
        path: '', component: _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_6__["SiteLayoutComponent"], canActivate: [_shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], canActivateChild: [_shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], children: [
            { path: 'overview', component: _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_9__["OverviewPageComponent"] },
            { path: 'friends', component: _friends_page_friends_page_component__WEBPACK_IMPORTED_MODULE_10__["FriendsPageComponent"], children: [
                    { path: '', component: _friends_page_top_top_component__WEBPACK_IMPORTED_MODULE_11__["TopComponent"], children: [
                            { path: '', redirectTo: 'myFriends', pathMatch: 'full' },
                            { path: 'myFriends', component: _friends_page_top_my_friends_my_friends_component__WEBPACK_IMPORTED_MODULE_12__["MyFriendsComponent"] },
                            { path: 'findFriends', component: _friends_page_top_find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_13__["FindFriendsComponent"] }
                        ] }
                ] }
        ]
    },
    {
        path: '', component: _shared_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"], canActivate: [_shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], children: []
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
        var potencialToken = localStorage.getItem('Authorization');
        if (potencialToken !== null) {
            this.auth.setToken(potencialToken);
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-page/register-page.component */ "./src/app/register-page/register-page.component.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/classes/token.interceptor */ "./src/app/shared/classes/token.interceptor.ts");
/* harmony import */ var _shared_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/layouts/admin-layout/admin-layout.component */ "./src/app/shared/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./overview-page/overview-page.component */ "./src/app/overview-page/overview-page.component.ts");
/* harmony import */ var _friends_page_friends_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./friends-page/friends-page.component */ "./src/app/friends-page/friends-page.component.ts");
/* harmony import */ var _friends_page_top_top_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./friends-page/top/top.component */ "./src/app/friends-page/top/top.component.ts");
/* harmony import */ var _friends_page_top_my_friends_my_friends_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./friends-page/top/my-friends/my-friends.component */ "./src/app/friends-page/top/my-friends/my-friends.component.ts");
/* harmony import */ var _friends_page_top_find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./friends-page/top/find-friends/find-friends.component */ "./src/app/friends-page/top/find-friends/find-friends.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
                _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_6__["RegisterPageComponent"],
                _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
                _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_8__["SiteLayoutComponent"],
                _shared_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__["AdminLayoutComponent"],
                _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_16__["OverviewPageComponent"],
                _friends_page_friends_page_component__WEBPACK_IMPORTED_MODULE_17__["FriendsPageComponent"],
                _friends_page_top_top_component__WEBPACK_IMPORTED_MODULE_18__["TopComponent"],
                _friends_page_top_my_friends_my_friends_component__WEBPACK_IMPORTED_MODULE_19__["MyFriendsComponent"],
                _friends_page_top_find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_20__["FindFriendsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                    multi: true,
                    useClass: _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptor"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/friends-page/friends-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/friends-page/friends-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHMtcGFnZS9mcmllbmRzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/friends-page/friends-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/friends-page/friends-page.component.ts ***!
  \********************************************************/
/*! exports provided: FriendsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageComponent", function() { return FriendsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FriendsPageComponent = /** @class */ (function () {
    function FriendsPageComponent() {
    }
    FriendsPageComponent.prototype.ngOnInit = function () {
    };
    FriendsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friends-page',
            template: __webpack_require__(/*! raw-loader!./friends-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/friends-page/friends-page.component.html"),
            styles: [__webpack_require__(/*! ./friends-page.component.css */ "./src/app/friends-page/friends-page.component.css")]
        })
    ], FriendsPageComponent);
    return FriendsPageComponent;
}());



/***/ }),

/***/ "./src/app/friends-page/top/find-friends/find-friends.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/friends-page/top/find-friends/find-friends.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list img{\r\n  width: 40px;\r\n  height: 50px;\r\n}\r\n.list{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  padding: 5px;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n/*.name{*/\r\n/*  margin: auto 10px  ;*/\r\n/*}*/\r\n/*.buttons{*/\r\n/*  background: red;*/\r\n/*  width: 20px;*/\r\n/*  height: 20px;*/\r\n/*  */\r\n/*}*/\r\n.profile{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.name{\r\n  margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kcy1wYWdlL3RvcC9maW5kLWZyaWVuZHMvZmluZC1mcmllbmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QixJQUFJO0FBQ0osWUFBWTtBQUNaLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLEtBQUs7QUFDTCxJQUFJO0FBQ0o7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mcmllbmRzLXBhZ2UvdG9wL2ZpbmQtZnJpZW5kcy9maW5kLWZyaWVuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IGltZ3tcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmxpc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLyoubmFtZXsqL1xyXG4vKiAgbWFyZ2luOiBhdXRvIDEwcHggIDsqL1xyXG4vKn0qL1xyXG4vKi5idXR0b25zeyovXHJcbi8qICBiYWNrZ3JvdW5kOiByZWQ7Ki9cclxuLyogIHdpZHRoOiAyMHB4OyovXHJcbi8qICBoZWlnaHQ6IDIwcHg7Ki9cclxuLyogICovXHJcbi8qfSovXHJcbi5wcm9maWxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubmFtZXtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/friends-page/top/find-friends/find-friends.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/friends-page/top/find-friends/find-friends.component.ts ***!
  \*************************************************************************/
/*! exports provided: FindFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFriendsComponent", function() { return FindFriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_friend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/friend.service */ "./src/app/services/friend.service.ts");
/* harmony import */ var _services_site_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/site-layout.service */ "./src/app/services/site-layout.service.ts");




var FindFriendsComponent = /** @class */ (function () {
    function FindFriendsComponent(friendService, siteLayoutService) {
        this.friendService = friendService;
        this.siteLayoutService = siteLayoutService;
    }
    FindFriendsComponent.prototype.ngOnInit = function () {
        this.friends$ = this.friendService.find();
    };
    FindFriendsComponent.prototype.save = function (id) {
        this.friendService.save(id).subscribe();
    };
    FindFriendsComponent.ctorParameters = function () { return [
        { type: _services_friend_service__WEBPACK_IMPORTED_MODULE_2__["FriendService"] },
        { type: _services_site_layout_service__WEBPACK_IMPORTED_MODULE_3__["SiteLayoutService"] }
    ]; };
    FindFriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-find-friends',
            template: __webpack_require__(/*! raw-loader!./find-friends.component.html */ "./node_modules/raw-loader/index.js!./src/app/friends-page/top/find-friends/find-friends.component.html"),
            styles: [__webpack_require__(/*! ./find-friends.component.css */ "./src/app/friends-page/top/find-friends/find-friends.component.css")]
        })
    ], FindFriendsComponent);
    return FindFriendsComponent;
}());



/***/ }),

/***/ "./src/app/friends-page/top/my-friends/my-friends.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/friends-page/top/my-friends/my-friends.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list img{\r\n  width: 40px;\r\n  height: 50px;\r\n}\r\n.list{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  padding: 5px;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.profile{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.name{\r\n  margin-left: 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kcy1wYWdlL3RvcC9teS1mcmllbmRzL215LWZyaWVuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHMtcGFnZS90b3AvbXktZnJpZW5kcy9teS1mcmllbmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCBpbWd7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5saXN0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5wcm9maWxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubmFtZXtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/friends-page/top/my-friends/my-friends.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/friends-page/top/my-friends/my-friends.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFriendsComponent", function() { return MyFriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_friend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/friend.service */ "./src/app/services/friend.service.ts");
/* harmony import */ var _services_site_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/site-layout.service */ "./src/app/services/site-layout.service.ts");




var MyFriendsComponent = /** @class */ (function () {
    function MyFriendsComponent(friendService, siteLayoutService) {
        this.friendService = friendService;
        this.siteLayoutService = siteLayoutService;
    }
    MyFriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.friends$ =this.friendService.myFriends();
        this.friendService.myFriends().subscribe(function (value) { return _this.friends = value; });
    };
    MyFriendsComponent.prototype.del = function (friend) {
        this.friendService.del(friend.id).subscribe();
        this.friends.splice(this.friends.indexOf(friend), 1);
    };
    MyFriendsComponent.ctorParameters = function () { return [
        { type: _services_friend_service__WEBPACK_IMPORTED_MODULE_2__["FriendService"] },
        { type: _services_site_layout_service__WEBPACK_IMPORTED_MODULE_3__["SiteLayoutService"] }
    ]; };
    MyFriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-friends',
            template: __webpack_require__(/*! raw-loader!./my-friends.component.html */ "./node_modules/raw-loader/index.js!./src/app/friends-page/top/my-friends/my-friends.component.html"),
            styles: [__webpack_require__(/*! ./my-friends.component.css */ "./src/app/friends-page/top/my-friends/my-friends.component.css")]
        })
    ], MyFriendsComponent);
    return MyFriendsComponent;
}());



/***/ }),

/***/ "./src/app/friends-page/top/top.component.css":
/*!****************************************************!*\
  !*** ./src/app/friends-page/top/top.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  align-self: baseline;\r\n  justify-content: space-around;\r\n\r\n}\r\n.active{\r\n  background: white;\r\n  color: #3f51b5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kcy1wYWdlL3RvcC90b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQiw2QkFBNkI7O0FBRS9CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHMtcGFnZS90b3AvdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG59XHJcbi5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICMzZjUxYjU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/friends-page/top/top.component.ts":
/*!***************************************************!*\
  !*** ./src/app/friends-page/top/top.component.ts ***!
  \***************************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopComponent = /** @class */ (function () {
    function TopComponent() {
        this.links = [
            { url: '/friends/myFriends', name: 'Мои Друзья' },
            { url: '/friends/findFriends', name: 'Найти Друзей' },
            { url: '/friends/myRequest', name: 'Мои запросы' },
            { url: '/friends/myRequestFriends', name: 'Хочет быть другом' }
        ];
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top',
            template: __webpack_require__(/*! raw-loader!./top.component.html */ "./node_modules/raw-loader/index.js!./src/app/friends-page/top/top.component.html"),
            styles: [__webpack_require__(/*! ./top.component.css */ "./src/app/friends-page/top/top.component.css")]
        })
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logingorm{\r\n  width: 30%;\r\n  margin: 10% auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5nb3Jte1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luOiAxMCUgYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginPageComponent = /** @class */ (function () {
    // saul: string;
    function LoginPageComponent(auth, route, router) {
        this.auth = auth;
        this.route = route;
        this.router = router;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        // this.route.queryParams.subscribe((params: Params) => {
        //   if (params['registered']) {
        //     // теперь можете войти в систему
        //   } else if (params['accessDenied']) {
        //     // Для начала зарегистрируйтесь в системе
        //   }
        // });
    };
    LoginPageComponent.prototype.login = function () {
        var _this = this;
        this.form.disable();
        console.log(this.form.value);
        this.auth.login(this.form.value).subscribe(function (res) {
            _this.router.navigate(['overview']);
        });
    };
    LoginPageComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var Materials = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                Materials
            ],
            exports: [
                Materials
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/overview-page/overview-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/overview-page/overview-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3LXBhZ2Uvb3ZlcnZpZXctcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/overview-page/overview-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/overview-page/overview-page.component.ts ***!
  \**********************************************************/
/*! exports provided: OverviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageComponent", function() { return OverviewPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OverviewPageComponent = /** @class */ (function () {
    function OverviewPageComponent() {
    }
    OverviewPageComponent.prototype.ngOnInit = function () {
    };
    OverviewPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview-page',
            template: __webpack_require__(/*! raw-loader!./overview-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/overview-page/overview-page.component.html"),
            styles: [__webpack_require__(/*! ./overview-page.component.css */ "./src/app/overview-page/overview-page.component.css")]
        })
    ], OverviewPageComponent);
    return OverviewPageComponent;
}());



/***/ }),

/***/ "./src/app/register-page/register-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-page/register-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registerForm {\r\n  width: 60%;\r\n  margin: 5rem auto;\r\n}\r\n.fields{\r\n  padding-right: 4px;\r\n}\r\nmat-error{\r\n  text-align: end;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlckZvcm0ge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiA1cmVtIGF1dG87XHJcbn1cclxuLmZpZWxkc3tcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxubWF0LWVycm9ye1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/register-page/register-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-page/register-page.component.ts ***!
  \**********************************************************/
/*! exports provided: MyErrorStateMatcher, RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = (form.control.hasError('notSame', 'passwords') && control.touched);
        return invalidCtrl;
    };
    return MyErrorStateMatcher;
}());

var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.genders = ['MALE', 'FEMALE', 'OTHER', 'UNKNOWN'];
        this.matcher = new MyErrorStateMatcher();
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            // user: new FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            passwords: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                password1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]),
                password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
            }, this.passwordValidator),
            profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
                age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
            })
        });
        // });
    };
    RegisterPageComponent.prototype.passwordValidator = function (control) {
        var pass = control.controls.password1.value;
        var confirmPass = control.controls.password2.value;
        console.log(pass);
        console.log(confirmPass);
        return pass === confirmPass ? null : { notSame: true };
    };
    RegisterPageComponent.prototype.register = function () {
        var _this = this;
        var password = this.form.controls.passwords.get('password1').value;
        this.form.addControl('password', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](password));
        // console.log(this.form.value);
        this.auth.register(this.form.value).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/login']);
        });
        // console.log(this.form);
    };
    RegisterPageComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! raw-loader!./register-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/register-page/register-page.component.css")]
        })
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.token = null;
    }
    AuthService.prototype.register = function (user) {
        return this.http.post('api/auth/register', user);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('api/auth/login', btoa(JSON.stringify(user)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_a) {
            var Authorization = _a.Authorization;
            localStorage.setItem('Authorization', Authorization);
            _this.setToken(Authorization);
        }));
    };
    AuthService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getRoles = function () {
        var temp = this.token.toString().substr(8);
        var s = atob(temp.split('.')[1]);
        var parse = JSON.parse(s);
        var roles = parse.roles;
        return roles;
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.token;
    };
    AuthService.prototype.logout = function () {
        this.setToken(null);
        localStorage.clear();
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/friend.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/friend.service.ts ***!
  \********************************************/
/*! exports provided: FriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendService", function() { return FriendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FriendService = /** @class */ (function () {
    function FriendService(http) {
        this.http = http;
    }
    FriendService.prototype.find = function () {
        return this.http.get('/api/friends/find');
    };
    FriendService.prototype.save = function (id) {
        return this.http.post('/api/friends/save', id);
    };
    FriendService.prototype.myFriends = function () {
        return this.http.get('/api/friends/myFriends');
    };
    FriendService.prototype.del = function (id) {
        return this.http.post('/api/friends/del', id);
    };
    FriendService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FriendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FriendService);
    return FriendService;
}());



/***/ }),

/***/ "./src/app/services/site-layout.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/site-layout.service.ts ***!
  \*************************************************/
/*! exports provided: SiteLayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutService", function() { return SiteLayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SiteLayoutService = /** @class */ (function () {
    function SiteLayoutService(http) {
        this.http = http;
        this.avatarBlank = "../../../../assets/blankAvatar.gif";
    }
    SiteLayoutService.prototype.getProfile = function () {
        return this.http.get('/api/profile');
    };
    SiteLayoutService.prototype.setAvatar = function (file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post('/api/profile/avatar', formData);
    };
    SiteLayoutService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SiteLayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SiteLayoutService);
    return SiteLayoutService;
}());



/***/ }),

/***/ "./src/app/shared/classes/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/classes/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/classes/token.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/classes/token.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    Authorization: this.auth.getToken()
                }
            });
        }
        return next.handle(req);
    };
    TokenInterceptor.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/layouts/admin-layout/admin-layout.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shared/layouts/admin-layout/admin-layout.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/layouts/admin-layout/admin-layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/admin-layout/admin-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.css */ "./src/app/shared/layouts/admin-layout/admin-layout.component.css")]
        })
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav{\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\nspan{\r\n  padding-right: 1rem;\r\n}\r\n.active{\r\n  background: white;\r\n  color: blue;\r\n\r\n}\r\nbutton{\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUE4QjtVQUE5Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7O0FBRWI7QUFDQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2F1dGgtbGF5b3V0L2F1dGgtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2e1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5zcGFue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogYmx1ZTtcclxuXHJcbn1cclxuYnV0dG9ue1xyXG5cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.css */ "./src/app/shared/layouts/auth-layout/auth-layout.component.css")]
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.example-container {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  position: absolute;\r\n  top: 64px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  border: 1px solid gainsboro;\r\n}\r\n\r\n.sidenav {\r\n  width: 250px;\r\n}\r\n\r\n.avatar {\r\n  width: 200px;\r\n  margin: 10px auto;\r\n  height: 250px;\r\n  /*background: red;*/\r\n}\r\n\r\n.avatar:hover {\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n}\r\n\r\n.buttons a {\r\n  width: 230px;\r\n  margin-bottom: 3px;\r\n  /*background: blue;*/\r\n\r\n}\r\n\r\n.buttons {\r\n  width: 230px;\r\n  margin: 0 auto;\r\n  /*background: green;*/\r\n\r\n}\r\n\r\n.blink{\r\n  -webkit-animation: blink 3s linear infinite;\r\n          animation: blink 3s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n  0% {\r\n    color: rgba(34, 34, 34, 1);\r\n  }\r\n  50% {\r\n    color: rgba(34, 34, 34, 0);\r\n  }\r\n  100% {\r\n    color: rgba(34, 34, 34, 1);\r\n  }\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n    color: rgba(34, 34, 34, 1);\r\n  }\r\n  50% {\r\n    color: rgba(34, 34, 34, 0);\r\n  }\r\n  100% {\r\n    color: rgba(34, 34, 34, 1);\r\n  }\r\n}\r\n\r\n.active {\r\n  background: #3f51b5;\r\n  color: white;\r\n}\r\n\r\n.bottom {\r\n  position: absolute;\r\n  left: 10px;\r\n  bottom: 0;\r\n}\r\n\r\n.name {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n  font-family: \"Monotype Corsiva\", Cursive;\r\n  font-size: 25px;\r\n  color: #3f51b5;\r\n\r\n}\r\n\r\n.dn {\r\n  display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvc2l0ZS1sYXlvdXQvc2l0ZS1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQVk7RUFBWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9CQUFvQjs7QUFFdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHFCQUFxQjs7QUFFdkI7O0FBRUE7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL3NpdGUtbGF5b3V0L3NpdGUtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY0cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICAvKmJhY2tncm91bmQ6IHJlZDsqL1xyXG59XHJcblxyXG4uYXZhdGFyOmhvdmVyIHtcclxuICBjdXJzb3I6IGdyYWI7XHJcbn1cclxuXHJcbi5idXR0b25zIGEge1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgLypiYWNrZ3JvdW5kOiBibHVlOyovXHJcblxyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8qYmFja2dyb3VuZDogZ3JlZW47Ki9cclxuXHJcbn1cclxuXHJcbi5ibGlua3tcclxuICBhbmltYXRpb246IGJsaW5rIDNzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgMCUge1xyXG4gICAgY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBjb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBjb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTBweDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LWZhbWlseTogXCJNb25vdHlwZSBDb3JzaXZhXCIsIEN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG5cclxufVxyXG5cclxuLmRuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_site_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/site-layout.service */ "./src/app/services/site-layout.service.ts");





var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent(auth, siteLayoutService) {
        this.auth = auth;
        this.siteLayoutService = siteLayoutService;
        this.fileData = null;
        this.url = "../../../../assets/addAvatar.gif";
        this.links = [
            { url: '/photos', name: 'Фото', notify: '' },
            { url: '/music', name: 'Музыка', notify: '' },
            { url: '/settings', name: 'Настройки', notify: '' }
        ];
        this.massageFlag = true;
        this.friendFlag = true;
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        // this.siteLayout$ = this.siteLayoutService.getProfile();
        this.siteLayout$ = this.siteLayoutService.getProfile();
    };
    SiteLayoutComponent.prototype.triggerClick = function () {
        this.inputRef.nativeElement.click();
    };
    SiteLayoutComponent.prototype.onFileUpload = function (inputFile) {
        var _this = this;
        this.fileData = inputFile.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = function () {
            _this.url = reader.result;
        };
        this.siteLayoutService.setAvatar(this.fileData).subscribe();
    };
    SiteLayoutComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_site_layout_service__WEBPACK_IMPORTED_MODULE_4__["SiteLayoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false })
    ], SiteLayoutComponent.prototype, "inputRef", void 0);
    SiteLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-layout',
            template: __webpack_require__(/*! raw-loader!./site-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/site-layout/site-layout.component.html"),
            styles: [__webpack_require__(/*! ./site-layout.component.css */ "./src/app/shared/layouts/site-layout/site-layout.component.css")]
        })
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Death\IdeaProjects\mybook\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map