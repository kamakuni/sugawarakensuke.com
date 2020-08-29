import { h } from "preact";
import { Title } from "../../components/title";
import { mount } from "enzyme";

describe("Testing for Title component", () => {
    it("should render title props", () => {
        const context = mount(<Title title="value" />);
        expect(context.find("p").text()).toBe("value");
    });
});
