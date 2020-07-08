import { Component, h } from "preact";
import { deep, shallow } from "preact-render-spy";
//import Link from "preact-router/match";
import { Header } from "../components/header";

describe("Initial Test of the Header", () => {
    test("Header renders 3 nav items", () => {
        const context = shallow(<Header />);
        expect(context.find("Link").length).toBe(3);
    });
});
