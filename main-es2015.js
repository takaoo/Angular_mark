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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" style=\"height: 800px\">\n  <div fxFlex=25 fxLayoutAlign=\"center left\" fxLayout=\"column\">\n    <div *ngFor=\"let item of items\">\n      <div *ngIf=\"item.level==1\" class=\"main\"><span (click)=\"call(item)\">{{item.title}}</span>\n        <button mat-raised-button [matMenuTriggerFor]=\"menu\" style=\"margin:0 0 0 10px\">Menu</button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"add(2,items,'DATA')\">Add 2nd Menu</button>\n          <button mat-menu-item (click)=\"add(3,items,'DATA')\">Add 3rd Menu</button>\n        </mat-menu>\n      </div>\n      <div *ngIf=\"item.level==2\" class=\"second\"><span (click)=\"call(item)\">{{item.title}}</span></div>\n      <div *ngIf=\"item.level==3\" class=\"third\"><span (click)=\"call(item)\">{{item.title}}</span></div>\n    </div>\n    <br>\n\n    <div *ngFor=\"let item of items2\">\n      <div *ngIf=\"item.level==1\" class=\"main\"><span (click)=\"call(item)\">{{item.title}}</span>\n        <button mat-raised-button [matMenuTriggerFor]=\"menu\" style=\"margin:0 0 0 10px\">Menu</button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"add(2,items2,'DATA2')\">Add 2nd Menu</button>\n          <button mat-menu-item (click)=\"add(3,items2,'DATA2')\">Add 3rd Menu</button>\n        </mat-menu>\n      </div>\n      <div *ngIf=\"item.level==2\" class=\"second\"><span (click)=\"call(item)\">{{item.title}}</span></div>\n      <div *ngIf=\"item.level==3\" class=\"third\"><span (click)=\"call(item)\">{{item.title}}</span></div>\n    </div>\n    <br>\n\n    <div *ngFor=\"let item of items3\">\n      <div *ngIf=\"item.level==1\" class=\"main\"><span (click)=\"call(item)\">{{item.title}}</span>\n        <button mat-raised-button [matMenuTriggerFor]=\"menu\" style=\"margin:0 0 0 10px\">Menu</button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"add(2,items3,'DATA3')\">Add 2nd Menu</button>\n          <button mat-menu-item (click)=\"add(3,items3,'DATA3')\">Add 3rd Menu</button>\n        </mat-menu>\n      </div>\n      <div *ngIf=\"item.level==2\" class=\"second\"><span (click)=\"call(item)\">{{item.title}}</span></div>\n      <div *ngIf=\"item.level==3\" class=\"third\"><span (click)=\"call(item)\">{{item.title}}</span></div>\n    </div>\n  </div>\n\n  <div fxFlex=75>\n    <div fxLayout=\"row\">\n      <div fxFlex=80 *ngIf=\"titleSaveState===true\">\n        <mat-form-field style=\"width: 100%;\">\n          <input id=\"input\" matInput placeholder=\"title\" value={{title}} style=\"font-size: 24px\">\n        </mat-form-field>\n      </div>\n      <div *ngIf=\"titleSaveState===false\" fxFlex=80 id=\"title\" style=\"font-size: 40px; font-weight: bold\">{{title}}\n      </div>\n      <button fxFlex=20 id=titlebtn mat-raised-button (click)=\"clickTitle()\">edit</button>\n    </div>\n\n    <br>\n    <mat-divider></mat-divider><br>\n\n    <div fxLayout=\"column\">\n      <button fxFlex=20 id=btn mat-raised-button (click)=\"saveOrEdit()\"\n        style=\"width: 200px; margin:0 0 0 auto\">edit</button>\n      <mat-form-field fxFlex=80 *ngIf=\"saveState===true\" floatLabel=\"always\">\n        <textarea matInput id=\"textarea\" placeholder=\"content\"\n          style=\"height: 400px;width: 1000px; padding: 30px; font-size: 20px;resize: none\">{{markText}}</textarea>\n      </mat-form-field>\n      <div fxFlex=80 *ngIf=\"saveState===false\" id=\"output\">\n        <markdown [data]=\"markText\" style=\"font-size: 20px\"></markdown>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  .main {\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .second {\n    margin: 0 0 0 10px;\n    font-weight: bold;\n  }\n  .third {\n    margin: 0 0 0 25px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLm1haW4ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuc2Vjb25kIHtcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAudGhpcmQge1xuICAgIG1hcmdpbjogMCAwIDAgMjVweDtcbiAgfSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const DATA = [
    { id: 1, level: 1, title: 'Main Menu', text: '# Sample Main', data: 'DATA' },
    { id: 2, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA' },
    { id: 3, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA' },
];
const DATA2 = [
    { id: 4, level: 1, title: 'Main Menu', text: '# Sample Main', data: 'DATA2' },
    { id: 5, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA2' },
    { id: 6, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA2' },
];
const DATA3 = [
    { id: 7, level: 1, title: 'Main Menu', text: '# Sample Main', data: 'DATA3' },
    { id: 8, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA3' },
    { id: 9, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA3' },
];
let AppComponent = class AppComponent {
    constructor() {
        this.title = DATA[0].title;
        this.saveState = false;
        this.titleSaveState = false;
        this.markText = DATA[0].text;
        this.currentId = DATA[0].id;
        this.items = DATA;
        this.items2 = DATA2;
        this.items3 = DATA3;
        this.i = 10;
        this.currentData = DATA[0].data;
    }
    saveOrEdit() {
        if (this.saveState === false) {
            console.log('save -> edit');
            document.getElementById('btn').innerHTML = 'save';
        }
        else {
            if (this.currentData === 'DATA') {
                this.savaText(DATA);
            }
            else if (this.currentData === 'DATA2') {
                this.savaText(DATA2);
            }
            else if (this.currentData === 'DATA3') {
                this.savaText(DATA3);
            }
        }
        this.saveState = !this.saveState;
    }
    add(item, items, data) {
        if (data === 'DATA') {
            if (item === 2) {
                items.push({ id: this.i, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA' });
            }
            else if (item === 3) {
                items.push({ id: this.i, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA' });
            }
        }
        else if (data === 'DATA2') {
            if (item === 2) {
                items.push({ id: this.i, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA2' });
            }
            else if (item === 3) {
                items.push({ id: this.i, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA2' });
            }
        }
        else if (data === 'DATA3') {
            if (item === 2) {
                items.push({ id: this.i, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA3' });
            }
            else if (item === 3) {
                items.push({ id: this.i, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA3' });
            }
        }
        items.sort((a, b) => {
            if (a.level > b.level) {
                return 1;
            }
            else {
                return -1;
            }
        });
        this.i++;
    }
    call(item) {
        this.title = item.title;
        this.markText = item.text;
        this.currentId = item.id;
        this.currentData = item.data;
    }
    clickTitle() {
        if (this.titleSaveState === false) {
            document.getElementById('titlebtn').innerHTML = 'save';
        }
        else {
            if (this.currentData === 'DATA') {
                this.saveTitle(DATA);
            }
            else if (this.currentData === 'DATA2') {
                this.saveTitle(DATA2);
            }
            else if (this.currentData === 'DATA3') {
                this.saveTitle(DATA3);
            }
        }
        this.titleSaveState = !this.titleSaveState;
    }
    saveTitle(data) {
        this.title = document.getElementById('input').value;
        const index = data.findIndex(item => item.id === this.currentId);
        data[index].title = this.title;
        document.getElementById('titlebtn').innerHTML = 'edit';
    }
    savaText(data) {
        console.log('edit -> save');
        this.markText = document.getElementById('textarea').value;
        const index = data.findIndex(item => item.id === this.currentId);
        data[index].text = this.markText;
        document.getElementById('btn').innerHTML = 'edit';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__["TextFieldModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownModule"].forRoot(),
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_13__["MatTreeModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\4071026\Desktop\Angular_mark-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map