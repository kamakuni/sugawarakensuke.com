import { h } from "preact";
import Home from "../../routes/home";
import { AsyncImage } from "../../components/asyncimage";
import { mount } from "enzyme";

describe("Initial Test of Home", () => {
    it("should render a AsyncImage", () => {
        const context = mount(<Home />);
        expect(context.find(AsyncImage).length).toBe(1);
    });
});
