import { h } from "preact";
import { Footer } from "../../components/footer";
import { mount } from "enzyme";

describe("Testing for Footer component", () => {
    it("should render 3 SnsLink components", () => {
        const context = mount(<Footer />);
        expect(context.find("SnsLink").length).toBe(3);
    });
});
