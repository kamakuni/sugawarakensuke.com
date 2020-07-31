import { h } from "preact";
import App from "../components/app";
import { Header } from "../components/header";
import { mount } from "enzyme";

describe("Initial Test of App", () => {
    it("should have a Header", () => {
        const context = mount(<App />);
        expect(context.find(Header).length).toBe(1);
    });
});
