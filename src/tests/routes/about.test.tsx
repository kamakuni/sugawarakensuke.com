import { h } from "preact";
import { About } from "../../routes/about";
import { Title } from "../../components/title";
import { mount } from "enzyme";

describe("Initial Test of About", () => {
    it("should render a Title", () => {
        const context = mount(<About />);
        expect(context.find(Title).length).toBe(1);
    });
    it("should render a Title With a About text", () => {
        const context = mount(<About />);
        const title = context.find(Title);
        expect(title.find("p").text()).toBe("About");
    });
    it("should render an image", () => {
        const context = mount(<About />);
        expect(context.find("img").length).toBe(1);
    });
});
