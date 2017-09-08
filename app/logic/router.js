// Reference: https://reactnavigation.org/docs/guides/redux
// https://medium.com/handlebar-labs/use-redux-to-manage-react-navigation-state-b6d639497143

import { NavigationActions } from 'react-navigation';
import Navigator from '../config/router';

const initialState = Navigator.router.getStateForAction(
  NavigationActions.init()
);

export default (state = initialState, action) =>
  Navigator.router.getStateForAction(action, state) || state;
