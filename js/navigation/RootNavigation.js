import React from 'react';
import { StackNavigator } from 'react-navigation';
import InitialSettings from '../InitialSettings';
import Drawer from '../Drawer';
import Login from '../Login';

const RootStackNavigator = StackNavigator(
  {
    Login: {
      screen: Login,
    },
      InitialSettings: {
          screen: InitialSettings,
      },
      Drawer: {
          screen: Drawer,
      },
  },
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
