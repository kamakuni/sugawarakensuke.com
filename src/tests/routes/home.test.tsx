import { h } from "preact";
import { Home } from "../../routes/home";
import { mount } from "enzyme";

describe("Initial Test of Home", () => {
    it("should render a image", () => {
        const context = mount(<Home />);
        expect(context.find("img").length).toBe(1);
    });
});
