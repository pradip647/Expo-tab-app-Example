import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import { AuthStack } from './AuthNavigator';

export default createSwitchNavigator({
  Main: MainTabNavigator,
  Auth:AuthStack
},{
  initialRouteName:'Main'
  // initialRouteName:'Auth'
});