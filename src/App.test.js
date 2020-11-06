import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
};

test('renders App component', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
})

test('renders button component', () => {
    const wrapper = setup();
    const buttonComponent = findByTestAttr(wrapper, "component-button");
    expect(buttonComponent.length).toBe(1);
})

test('renders quote component', () => {
    const wrapper = setup();
    const quoteComponent = findByTestAttr(wrapper, "component-quote");
    expect(quoteComponent.length).toBe(1)
})