"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var header_1 = require("../components/header");
var enzyme_1 = require("enzyme");
describe("Initial Test of Header", function () {
    it("should render 3 Link components", function () {
        var context = enzyme_1.mount(preact.h(header_1.Header, null));
        chai_1.expect(context.find("Link").length).toBe(3);
    });
});
