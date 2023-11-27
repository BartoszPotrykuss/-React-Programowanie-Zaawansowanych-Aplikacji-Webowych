import React from "react";
import { mount, shallow } from "enzyme";
import {App, KomponentZPropsami1, KomponentZPropsami2} from "./App"


it("Czy komponent 1 sie renderuje", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Component1").exists()).toBe(true);
});

it("Czy komponent 2 sie renderuje", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Component2").exists()).toBe(true);
});

it("Czy komponent 3 sie renderuje", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Component3").exists()).toBe(true);
});

it("Czy Komponent 1 zawiera KolejnyKomponent1", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find("Component1").find("KolejnyKomponent1").exists()).toBe(true);
});

it("Czy Komponent 1 zawiera KolejnyKomponent2", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find("Component1").find("KolejnyKomponent2").exists()).toBe(true);
});

it("Czy propsy KomponentZPropsami1 się wyświetlają", () =>
{
  const wrapper = shallow(<KomponentZPropsami1 name = "Nazwa1"/>);
  expect(wrapper.text()).toBe("Nazwa1");
});

/*
it("Czy propsy KomponentZPropsami2 się wyświetlają", () =>
{
  const wrapper = mount(<App />);
  const propsy2 = wrapper.find("Component1").find("KolejnyKomponent1").find("KomponentZPropsami2");
  KomponentZPropsami2.setProps({name: "Nazwa2"});
  expect(propsy2.text()).toBe("Nazwa2");
});
*/

it("Czy jesli brak propsow w KomponentZPropsami1 wyswietla sie informacja", () =>
{
  const wrapper = mount(<App />);
  const propsy1 = wrapper.find("Component1").find("KolejnyKomponent1").find("KomponentZPropsami1");
  expect(propsy1.text()).toBe("Brak props");
});