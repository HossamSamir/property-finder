import React from 'react';
import { StackNavigator } from 'react-navigation';
import InitialSettings from '../InitialSettings';
import Drawer from '../Drawer';
import Login from '../Login';
import Signup from '../Signup';

const RootStackNavigator = StackNavigator(
  {
    Drawer: {
      screen: Drawer,
    },
    InitialSettings: {
      screen: InitialSettings,
    },
    Signup: {
      screen: Signup,
    },
    Login: {
      screen: Login,
    },
  },
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
