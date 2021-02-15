import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import { findByTestAttr} from './test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = () => shallow(<App />);

test('the main app component renders', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'components-app');
  expect(component.length).toBe(1);
})
