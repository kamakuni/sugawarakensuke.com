import { h } from "preact";
import { Header } from "../../components/header";
import { mount } from "enzyme";

describe("Initial Test of Header", () => {
    it("should render an icon image", () => {
        const context = mount(<Header />);
        expect(context.find("img.is-rounded").prop("src")).toBe(
            "/assets/img/face.jpg"
        );
    });
    it("should render 3 Link components", () => {
        const context = mount(<Header />);
        expect(context.find("Link").length).toBe(3);
    });
});
