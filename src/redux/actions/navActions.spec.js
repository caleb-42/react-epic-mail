import { activeNav } from '@redux/reducers/initialState';
import { NAVIGATE } from './actionTypes';
import navAction from './navActions';


describe('NAVIGATE ACTION', () => {
  it('should create a NAVIGATE action', () => {
    const expectedAction = {
      type: NAVIGATE,
      activeNav: {
        menu: 'Mails', subMenu: 'Inbox'
      }
    };
    const action = navAction(activeNav);
    expect(action).toEqual(expectedAction);
  })
})