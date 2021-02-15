import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import { findByTestAttr} from './test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = () => shallow(<App />);

describe('app successfully renders:', () => {
  let wrapper;
  beforeEach(( )=> {
     wrapper = setup();
  });
  test('the main component', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'components-app');
    expect(component.length).toBe(1);
  });
  test('PomoTaskList', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-pomotasklist');
    expect(component.length).toBe(1);
  });
  test('PomoTaskList', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-regulartasklist');
    expect(component.length).toBe(1);
  });
});



