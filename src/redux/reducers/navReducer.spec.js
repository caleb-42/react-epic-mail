import navActions from '@redux/actions/navActions';
import navReducer from './navReducer';
import { activeNav } from './initialState';

describe('REDUCERS TEST', () => {
  it('should navigate a user when NAVIGATE action is passed', () => {
    const newNav = {
      menu: 'Mails', subMenu: 'Draft'
    };
    const action = navActions(newNav);

    const newState = navReducer(activeNav, action);
    expect(newState).toEqual(newNav);
  })
})
