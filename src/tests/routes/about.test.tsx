import { h } from "preact";
import { About } from "../../routes/about";
import { mount } from "enzyme";

describe("Initial Test of About", () => {
    /*it("should render an Title", () => {
        const context = mount(<About />);
        expect(context.find("Title").length).toBe(1);
    });*/
    it("should render an image", () => {
        const context = mount(<About />);
        expect(context.find("img").length).toBe(1);
    });
});