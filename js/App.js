/* @flow */

import React from 'react';
import { Constants, ScreenOrientation } from 'expo';

ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';

import Banner from './Banner';
import CustomTabs from './CustomTabs';
import CustomTransitioner from './CustomTransitioner';
import Drawer from './Drawer';
import MultipleDrawer from './MultipleDrawer';
import TabsInDrawer from './TabsInDrawer';
import ModalStack from './ModalStack';
import StacksInTabs from './StacksInTabs';
import StacksOverTabs from './StacksOverTabs';
import SimpleStack from './SimpleStack';
import SimpleTabs from './SimpleTabs';
import TabAnimations from './TabAnimations';
import InitialSettings from './InitialSettings';
import RootNavigation from './navigation/RootNavigation';

const ExampleRoutes = {
  // SimpleStack: {
  //   name: 'Stack Example',
  //   description: 'A card stack',
  //   screen: SimpleStack,
  // },
  // SimpleTabs: {
  //   name: 'Tabs Example',
  //   description: 'Tabs following platform conventions',
  //   screen: SimpleTabs,
  // },
  Drawer: {
    name: 'Drawer Example',
    description: 'Android-style drawer navigation',
    screen: Drawer,
  },
  InitialSettings: {
    name: 'InitialSettings screen',
    description: 'choosing language and location',
    screen: InitialSettings,
  },
  // MultipleDrawer: {
  //   name: 'Multiple Drawer Example',
  //   description: 'Add any drawer you need',
  //   screen: MultipleDrawer,
  // },
  // TabsInDrawer: {
  //   name: 'Drawer + Tabs Example',
  //   description: 'A drawer combined with tabs',
  //   screen: TabsInDrawer,
  // },
  // CustomTabs: {
  //   name: 'Custom Tabs',
  //   description: 'Custom tabs with tab router',
  //   screen: CustomTabs,
  // },
  // CustomTransitioner: {
  //   name: 'Custom Transitioner',
  //   description: 'Custom transitioner with stack router',
  //   screen: CustomTransitioner,
  // },
  // ModalStack: {
  //   name:
  //     Platform.OS === 'ios'
  //       ? 'Modal Stack Example'
  //       : 'Stack with Dynamic Header',
  //   description:
  //     Platform.OS === 'ios'
  //       ? 'Stack navigation with modals'
  //       : 'Dynamically showing and hiding the header',
  //   screen: ModalStack,
  // },
  // StacksInTabs: {
  //   name: 'Stacks in Tabs',
  //   description: 'Nested stack navigation in tabs',
  //   screen: StacksInTabs,
  // },
  // StacksOverTabs: {
  //   name: 'Stacks over Tabs',
  //   description: 'Nested stack navigation that pushes on top of tabs',
  //   screen: StacksOverTabs,
  // },
  // LinkStack: {
  //   name: 'Link in Stack',
  //   description: 'Deep linking into a route in stack',
  //   screen: SimpleStack,
  //   path: 'people/Jordan',
  // },
  // LinkTabs: {
  //   name: 'Link to Settings Tab',
  //   description: 'Deep linking into a route in tab',
  //   screen: SimpleTabs,
  //   path: 'settings',
  // },
  // TabAnimations: {
  //   name: 'Animated Tabs Example',
  //   description: 'Tab transitions have custom animations',
  //   screen: TabAnimations,
  // },
};

class MainScreen extends React.Component<*> {
  render() {
    const { navigation } = this.props;

    return (
      // <View style={{ flex: 1 }}>
        <RootNavigation />
      // </View>
    );
  }
}

const AppNavigator = StackNavigator(
  {
    ...ExampleRoutes,
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default () => <AppNavigator />;

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  statusBarUnderlay: {
    backgroundColor: '#673ab7',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Constants.statusBarHeight,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});
