"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
require("../../style/style.scss");
var title_1 = require("../../components/title");
var Content = function (props) {
    return (preact.h("a", { href: props.link },
        preact.h("div", { class: "card" },
            preact.h("div", { class: "card-image" },
                preact.h("figure", { class: "image is-2by1" },
                    preact.h("img", { src: props.image, alt: "Placeholder image" }))),
            preact.h("div", { class: "card-content" },
                preact.h("p", { className: "title is-size-5" }, props.title),
                preact.h("div", { class: "content" },
                    preact.h("p", null, props.body))))));
};
var Code = function () {
    return (preact.h(preact_1.Fragment, null,
        preact.h(title_1.Title, { title: "Code" }),
        preact.h("section", { className: "section" },
            preact.h("div", { className: "container" },
                preact.h("div", { className: "columns" },
                    preact.h("div", { className: "column" },
                        preact.h(Content, { title: "sugawarakensuke.com", link: "https://github.com/kamakuni/sugawarakensuke.com", body: "This website with Preact and Bulma", image: "/assets/img/code/sugawarakensuke.com.jpg" })),
                    preact.h("div", { className: "column" },
                        preact.h(Content, { title: "CHIP-8 Emulator", link: "https://github.com/kamakuni/chip8", body: "A virtual machine for CHIP-8 written in Go", image: "/assets/img/code/chip8.jpg" })),
                    preact.h("div", { className: "column" },
                        preact.h(Content, { title: "kmcc", link: "https://github.com/kamakuni/kmcc", body: "A compiler for a subset of C", image: "/assets/img/code/kmcc.jpg" })))))));
};
exports.default = Code;
