import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
};

test('renders the App component', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
})

test('renders button', () => {

})

test('connects to quotes API', () => {

})

test('recieves data from quotes API', () => {

})

test('renders data from quote API', () => {

})

test('generates new quote when button is clicked', () => {

})