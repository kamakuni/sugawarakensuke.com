"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var preact_router_1 = require("preact-router");
require("../style/style.scss");
var notfound_1 = __importDefault(require("../routes/notfound"));
var header_1 = require("./header");
var home_1 = __importDefault(require("../routes/home"));
var code_1 = __importDefault(require("../routes/code"));
var about_1 = __importDefault(require("../routes/about"));
var footer_1 = require("./footer");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (module.hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}
var App = function () {
    var currentUrl;
    var handleRoute = function (e) {
        currentUrl = e.url;
    };
    return (preact.h("div", { id: "app has-background-white" },
        preact.h(header_1.Header, null),
        preact.h(preact_router_1.Router, { onChange: handleRoute },
            preact.h(preact_router_1.Route, { path: "/", component: home_1.default }),
            preact.h(preact_router_1.Route, { path: "/code", component: code_1.default }),
            preact.h(preact_router_1.Route, { path: "/about", component: about_1.default }),
            preact.h(notfound_1.default, { default: true })),
        preact.h(footer_1.Footer, null)));
};
exports.default = App;
