import { h } from "preact";
import NotFound from "../../routes/notfound";
import { mount } from "enzyme";

describe("Initial Test of NotFound", () => {
    it("should render Link", () => {
        const context = mount(<NotFound />);
        expect(context.find("Link").length).toBe(1);
    });
});
