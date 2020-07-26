import { h } from "preact";
import { AsyncImage } from "../../components/asyncimage";
import { mount } from "enzyme";

describe("Initial Test of AsyncImage", () => {
    it("should render title props", () => {
        const context = mount(<AsyncImage src="/assets/img/home.jpg" />);
        expect(context.find("div.loading").length).toBe(1);
    });
});
