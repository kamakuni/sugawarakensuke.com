"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
require("../../style/style.scss");
var title_1 = require("../../components/title");
exports.About = function () {
    return (preact.h(preact_1.Fragment, null,
        preact.h(title_1.Title, { title: "About" }),
        preact.h("section", { className: "section" },
            preact.h("figure", { class: "image container is-128x128" },
                preact.h("img", { class: "is-rounded", src: "/assets/img/face.jpg" }))),
        preact.h("section", { className: "section has-text-centered" },
            preact.h("div", { class: "content" },
                preact.h("h4", null, "Hello, my name is Kensuke Sugawara."),
                preact.h("p", null, "I'm a software developer in Tokyo. I can speak Japanese 100% fluently.")))));
};
exports.default = exports.About;
