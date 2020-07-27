import { h } from "preact";
import Code from "../../routes/code";
import { mount } from "enzyme";

describe("Initial Test of Code", () => {
    it("should render 3 images", () => {
        const context = mount(<Code />);
        expect(context.find("img").length).toBe(3);
    });
});
