"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var style_css_1 = __importDefault(require("./style.css"));
exports.AsyncImage = function (props) {
    var _a = hooks_1.useState(false), loaded = _a[0], setLoaded = _a[1];
    hooks_1.useEffect(function () {
        if (!loaded) {
            var img = new Image();
            img.onload = function () {
                setLoaded(true);
            };
            img.onerror = function (e) {
                console.log(e);
            };
            img.src = props.src;
        }
    });
    return (preact.h("figure", { className: "image" }, loaded ? (preact.h("img", { src: props.src })) : (preact.h("div", { className: "container has-text-centered" },
        preact.h("div", { className: style_css_1.default.loading })))));
};
