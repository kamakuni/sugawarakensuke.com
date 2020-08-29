import { h } from "preact";
import { Header } from "../../components/header";
import { mount } from "enzyme";

describe("Testing for Header component", () => {
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
    it("should be active after clicking the burger menu", () => {
        const context = mount(<Header />);
        context.find("a.navbar-burger").simulate("click");
        expect(
            context.find("a.navbar-burger").hasClass("is-active")
        ).toBeTruthy();
    });
    it("should be inactive after clicking the Link to the home page", () => {
        const context = mount(<Header />);
        context.find("a.navbar-burger").simulate("click");
        context.find('.navbar-end a[href="/"]').simulate("click");
        expect(
            context.find("a.navbar-burger").hasClass("is-active")
        ).toBeFalsy();
    });
    it("should be inactive after clicking the Link to the code page", () => {
        const context = mount(<Header />);
        context.find("a.navbar-burger").simulate("click");
        context.find('.navbar-end a[href="/code"]').simulate("click");
        expect(
            context.find("a.navbar-burger").hasClass("is-active")
        ).toBeFalsy();
    });
    it("should be inactive after clicking the Link to the about page", () => {
        const context = mount(<Header />);
        context.find("a.navbar-burger").simulate("click");
        context.find('.navbar-end a[href="/about"]').simulate("click");
        expect(
            context.find("a.navbar-burger").hasClass("is-active")
        ).toBeFalsy();
    });

});
