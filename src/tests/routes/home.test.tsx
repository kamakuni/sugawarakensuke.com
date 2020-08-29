import { h } from "preact";
import Home from "../../routes/home";
import { AsyncImage } from "../../components/asyncimage";
import { mount } from "enzyme";
import { Title } from "../../components/title";

describe("Testing for Home component", () => {
    it("should render a Title", () => {
        const context = mount(<Home />);
        expect(context.find(Title).length).toBe(1);
    });
    it("should render a Title With a Home text", () => {
        const context = mount(<Home />);
        const title = context.find(Title);
        expect(title.find("p").text()).toBe("Hi, I'm Ken.");
    });
    it("should render 3 columns", () => {
        const context = mount(<Home />);
        expect(context.find(".column").length).toBe(3);
    });
    it("should render a AsyncImage", () => {
        const context = mount(<Home />);
        expect(context.find(AsyncImage).length).toBe(1);
    });
});
