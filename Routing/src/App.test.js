import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import List from "./list";

it("czy sie renderuje cokolwiek", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

it("czy sie renderuje span", () => {
  const wrapper = shallow(<App wart={5}/>);
  expect(wrapper.find("span").text()).toBe('5');
});

it("Czy inkrementuje", () => {
  const wrapper = shallow(<App wart={5}/>);
  const span = wrapper.find("span");

  expect(span.text()).toBe('5');
  wrapper.find("button").at(0).simulate("click");
  expect(wrapper.find("span").text()).toBe('6');
});

it("Czy dekrementuje", () => {
  const wrapper = shallow(<App wart={5}/>);
  const span = wrapper.find("span");

  expect(span.text()).toBe('5');
  wrapper.find("button").at(1).simulate("click");
  expect(wrapper.find("span").text()).toBe('4');
});

it("Czy sie renderuje lista i jej elementy", () => {
  const wrapper = mount(<App />);

  expect(wrapper.find("List").find("ul").exists()).toBe(true);
  expect(wrapper.find("List").find("li").exists()).toBe(true);
});

it("Czy w List sa dobre propsy", () => {
  const wrapper = mount(<App />);

  expect(wrapper.find("List").prop('el1')).toEqual("Pierwszy");
});