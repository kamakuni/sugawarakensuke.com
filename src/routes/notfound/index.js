"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("preact-router/match");
var style = __importStar(require("./style.css"));
var Notfound = function () {
    return (preact.h("div", { class: style.notfound },
        preact.h("h1", null, "Error 404"),
        preact.h("p", null, "That page doesn't exist."),
        preact.h(match_1.Link, { href: "/" },
            preact.h("h4", null, "Back to Home"))));
};
exports.default = Notfound;
