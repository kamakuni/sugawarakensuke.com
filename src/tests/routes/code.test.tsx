import { h } from "preact";
import Code from "../../routes/code";
import { mount } from "enzyme";
import { Title } from "../../components/title";

describe("Initial Test of Code", () => {
    it("should render a Title", () => {
        const context = mount(<Code />);
        expect(context.find(Title).length).toBe(1);
    });
    it("should render a Title With a Code text", () => {
        const context = mount(<Code />);
        const title = context.find(Title);
        expect(title.find("p").text()).toBe("Code");
    });
    it("should render 3 links", () => {
        const context = mount(<Code />);
        expect(context.find("a").length).toBe(3);
    });
    it("should render 3 images", () => {
        const context = mount(<Code />);
        expect(context.find("img").length).toBe(3);
    });
});
