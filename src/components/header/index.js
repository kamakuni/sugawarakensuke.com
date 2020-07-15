"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var match_1 = require("preact-router/match");
require("../../style/style.scss");
exports.Header = function () {
    var _a = hooks_1.useState(false), isActive = _a[0], setIsActive = _a[1];
    var toggleNav = function () {
        setIsActive(!isActive);
    };
    return (preact.h("header", { className: "navbar is-fixed-top is-transparent" },
        preact.h("div", { className: "container" },
            preact.h("div", { className: "navbar-brand" },
                preact.h("a", { className: "navbar-item", href: "/" },
                    preact.h("figure", { class: "image is-32x32" },
                        preact.h("img", { class: "is-rounded", src: "/assets/img/face.jpg" }))),
                preact.h("a", { className: "navbar-burger burger " + (isActive ? "is-active" : ""), onClick: toggleNav },
                    preact.h("span", null),
                    preact.h("span", null),
                    preact.h("span", null))),
            preact.h("div", { className: "navbar-menu " + (isActive ? "is-active" : "") },
                preact.h("div", { className: "navbar-end" },
                    preact.h(match_1.Link, { className: "navbar-item", href: "/", onClick: toggleNav }, "Home"),
                    preact.h(match_1.Link, { className: "navbar-item", href: "/code", onClick: toggleNav }, "Code"),
                    preact.h(match_1.Link, { className: "navbar-item", href: "/about", onClick: toggleNav }, "About"))))));
};
