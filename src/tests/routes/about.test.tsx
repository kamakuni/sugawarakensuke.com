import { h } from "preact";
import { About } from "../../routes/about";
import { Title } from "../../components/title";
import { mount } from "enzyme";

describe("Initial Test of About", () => {
    it("should render a Title", () => {
        const context = mount(<About />);
        expect(context.find(Title).length).toBe(1);
    });
    it("should render an image", () => {
        const context = mount(<About />);
        expect(context.find("img").length).toBe(1);
    });
});
