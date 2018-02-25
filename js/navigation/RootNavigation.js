import React from 'react';
import { StackNavigator } from 'react-navigation';
import InitialSettings from '../InitialSettings';
import Drawer from '../Drawer';
import Login from '../Login';
import Signup from '../Signup';
import Search from '../Search';
import productSwiper from '../productSwiper';
import productDesc from '../productDesc';
import profile from '../profile';

const RootStackNavigator = StackNavigator(
  {
    InitialSettings: {
      screen: InitialSettings,
    },
    Drawer: {
      screen: Drawer,
    },
    Search: {
      screen: Search,
    },
    Signup: {
      screen: Signup,
    },
    Login: {
      screen: Login,
    },
    productSwiper: {
      screen: productSwiper,
    },
    productDesc: {
      screen: productDesc,
    },
    profile: {
      screen: profile,
    },
  },
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
