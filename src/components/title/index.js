"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../style/style.scss");
exports.Title = function (props) {
    return (preact.h("section", { className: "section is-small has-text-centered" },
        preact.h("p", { className: "is-size-4" }, props.title)));
};
