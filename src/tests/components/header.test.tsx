import { h } from "preact";
import { Header } from "../../components/header";
import { mount } from "enzyme";

describe("Initial Test of Header", () => {
    it("should render 3 Link components", () => {
        const context = mount(<Header />);
        expect(context.find("Link").length).toBe(3);
    });
    it("should be active", () => {
        const context = mount(<Header />);
        console.log(context.instance().state);
        //expect(context.instance().state("isActive")).toBe(true);
    });
});