import { h } from "preact";
import App from "../components/app";
import { Header } from "../components/header";
import { Router } from "preact-router";
import { Footer } from "../components/footer";
import { mount } from "enzyme";

describe("Initial Test of App", () => {
    it("should have a Header", () => {
        const context = mount(<App />);
        expect(context.find(Header).length).toBe(1);
    });
    it("should have a Router", () => {
        const context = mount(<App />);
        expect(context.find(Router).length).toBe(1);
    });
    it("should have a Footer", () => {
        const context = mount(<App />);
        expect(context.find(Footer).length).toBe(1);
    });
});
