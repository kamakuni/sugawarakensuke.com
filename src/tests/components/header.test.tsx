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
    it("should render Link for /", () => {
        const context = mount(<Header />);
        expect(context.find('Link[href="/"]').text()).toEqual("Home");
    });
    it("should render Link for /code", () => {
        const context = mount(<Header />);
        expect(context.find('Link[href="/code"]').text()).toEqual("Code");
    });
    it("should render Link for /about", () => {
        const context = mount(<Header />);
        expect(context.find('Link[href="/about"]').text()).toEqual("About");
    });
    it("should render a burger menu", () => {
        const context = mount(<Header />);
        expect(context.find("a.navbar-burger").exists()).toBeTruthy();
    });
    it("should not be active", () => {
        const context = mount(<Header />);
        expect(
            context.find("a.navbar-burger").hasClass("is-active")
        ).toBeFalsy();
    });
});
