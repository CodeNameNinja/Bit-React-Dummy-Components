import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './congrats';
import { findByTestAttr } from 'test/testUtils'
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Counter component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
    // const wrapper = setup();
    // const appComponent = findByTestAttr(wrapper, 'component-app');
    // expect(appComponent.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {

})

test('renders non-empty congrats message when `success` prop is true', () => {

})