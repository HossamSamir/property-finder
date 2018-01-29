import React from 'react';
import { StackNavigator } from 'react-navigation';
import InitialSettings from '../InitialSettings';
import Drawer from '../Drawer';

const RootStackNavigator = StackNavigator(
  {
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
