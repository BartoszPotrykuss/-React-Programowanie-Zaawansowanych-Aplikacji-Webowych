import React from "react";
import { mount, shallow } from "enzyme";
import App from "./App";
import List from "./List";

/*
it('czy się renderuje bez crashowania', () =>
{
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
})

it("czy poprawnie ustawia span", () => {
  const wrapper = shallow(<App wart={7}/>)
  const value = wrapper.state.wart;

  expect(wrapper.find("span").text()).toBe("7");

});

it('czy się inkrementuje', () => {
  const wrapper = shallow(<App wart={5}/>);
  const span = wrapper.find("span");

  wrapper.setState({wart: 6});
  expect(span.text()).toBe('5');
  wrapper.find("button").at(0).simulate("click");
  expect(wrapper.find("span").text()).toBe('6');
});

// zad czy się dekrementuje

it("Czy się renderuje lista i jej elementy", () =>
{
  const wrapper = mount(<App />);
  expect(wrapper.find("List").find("ul").exists()).toBe(true);
  expect(wrapper.find("List").find("li").exists()).toBe(true);
});

it("Czy w List są dobre propsy", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find("List").prop('el1')).toEqual("Pierwszy");
  expect(wrapper.find("List").props().el2).toEqual("Drugi");
});
*/

it("czy się renderuje bez crashowania", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

it("czy poprawnie ustawia span", () => {
  const wrapper = shallow(<App wart={5} />);
  const value = wrapper.state.wart;
  expect(wrapper.find("span").text()).toBe("5");
});

it("czy sie inkrementuje", () => {
  const wrapper = shallow(<App wart={5}/>);
  wrapper.find("button").at(0).simulate("click");
  expect(wrapper.find("span").text()).toBe("6");
})

it("czy list przekazuje dobra liste", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("List").prop("el1")).toBe("Pierwszy");
});

it("czy poprawny state", () => {
  const wrapper = shallow(<App />);
  wrapper.setState({wart: 5});
  expect(wrapper.find("span").text()).toBe("5");
});

/*
describe('change props', () => {
  const users = ['Jan', 'Maria'];
  const usersList = shallow(<UsersList users={['Ktoś tam', 'Nieważne']} />);
  usersList.setProps({ users });
  
  users.forEach(user => {
      it(`includes name ${user} on the list`, () => {
          expect(usersList).toContainReact(<li>{user}</li>)
      });
  });
});

it('passes all users to the UsersList', () => {
  const app = shallow(<App />);
  expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);
})

it('filters names on input', () => {
  const app = shallow(<App />);
  expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);

  app.find('input').simulate('input', {currentTarget: {value: 'M'}})
  expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Marta', 'Tomek']);
});
*/

