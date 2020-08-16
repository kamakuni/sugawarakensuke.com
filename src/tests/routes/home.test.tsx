import { h } from "preact";
import Home from "../../routes/home";
import { AsyncImage } from "../../components/asyncimage";
import { mount } from "enzyme";
import { Title } from "../../components/title";

describe("Initial Test of Home", () => {
    it("should render a Title", () => {
        const context = mount(<Home />);
        expect(context.find(Title).length).toBe(1);
    });
    it("should render a AsyncImage", () => {
        const context = mount(<Home />);
        expect(context.find(AsyncImage).length).toBe(1);
    });
});
