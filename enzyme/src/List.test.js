import React from "react";
import { shallow } from "enzyme";
import List from "./List";

it("renderuje się", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.exists()).toBe(true);
});

it("dobrze używa propsy", () => {
    const wrapper = shallow(<List/>);
    wrapper.setProps({el1: "Pierwszy", el2:"Drugi", el3:"Trzeci"});

    expect(wrapper.find("li").at(0).text()).toBe("Pierwszy");
    // zad zrobić resztę
});
