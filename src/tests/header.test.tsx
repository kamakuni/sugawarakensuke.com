import { h } from "preact";
import { Header } from "../components/header";
import { shallow } from "enzyme";

describe("Initial Test of Header", () => {
    test("Header render 3 Link components", () => {
        const context = shallow(<Header />);
        expect(context.find("Link").length).toBe(3);
    });
});
