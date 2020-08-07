import { h } from "preact";
import { AsyncImage } from "../../components/asyncimage";
import { mount } from "enzyme";

describe("Initial Test of AsyncImage", () => {
    it("should render an element for loading", () => {
        const context = mount(<AsyncImage src="/assets/img/home.jpg" />);
        expect(context.find("div.loading").length).toBe(1);
    });
});
