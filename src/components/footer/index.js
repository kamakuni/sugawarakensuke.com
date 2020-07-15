"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../style/style.scss");
var SnsLink = function (props) {
    return (preact.h("a", { href: props.href },
        preact.h("span", { class: "icon px-3" },
            preact.h("i", { class: "fab " + props.iconClass }))));
};
exports.Footer = function () {
    return (preact.h("footer", { className: "footer has-background-white" },
        preact.h("div", { className: "container" },
            preact.h("div", { class: "content has-text-centered" },
                preact.h(SnsLink, { href: "https://github.com/kamakuni", iconClass: "fa-github" }),
                preact.h(SnsLink, { href: "https://twitter.com/kamakuni", iconClass: "fa-twitter" }),
                preact.h(SnsLink, { href: "https://www.instagram.com/kamakuni", iconClass: "fa-instagram" })))));
};
