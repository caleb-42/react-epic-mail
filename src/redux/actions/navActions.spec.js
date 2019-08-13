import { activeNav } from '@redux/reducers/initialState';
import { NAVIGATE } from './actionTypes';
import { navigate } from './navActions';


describe('NAVIGATE ACTION', () => {
  it('should create a NAVIGATE action', () => {
    const expectedAction = {
      type: NAVIGATE,
      activeNav: {
        menu: 'Mails', subMenu: 'Inbox', open: false
      }
    };
    const action = navigate(activeNav);
    expect(action).toEqual(expectedAction);
  })
})