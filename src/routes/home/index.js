"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
require("../../style/style.scss");
var asyncimage_1 = require("../../components/asyncimage");
var title_1 = require("../../components/title");
var Home = function () {
    return (preact.h(preact_1.Fragment, null,
        preact.h(title_1.Title, { title: "Hi, I'm Ken." }),
        preact.h("section", { className: "hero" },
            preact.h("div", { class: "columns is-gapless" },
                preact.h("div", { className: "column" }),
                preact.h("div", { className: "column is-7 is-12-mobile" },
                    preact.h(asyncimage_1.AsyncImage, { src: "/assets/img/home.jpg" })),
                preact.h("div", { className: "column" })))));
};
exports.default = Home;
