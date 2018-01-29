/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StatusBar, View, Text, TextInput, ListView, Image } from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { EvilIcons } from '@expo/vector-icons';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always' }}>
    <View style={{ backgroundColor: '#0277BD', flex: 1, alignItems: 'center', justifyContent: 'center', height: 60, flexDirection: 'row', elevation: 20,}}>
      <View style={{ flex: 1, alignItems: 'center'}}>
        <EvilIcons name="search" color="white" size={30} />
      </View>
      <View style={{ flex: 1, alignItems: 'center'}}>
        <EvilIcons name="archive" color="white" size={30} />
      </View>
      <View style={{ flex: 3,}}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{banner}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center'}}>
        <EvilIcons onPress={() => navigation.navigate('DrawerOpen')} name="navicon" color="white" size={30} />
      </View>
    </View>
    </SafeAreaView>
    <StatusBar barStyle="default" />
  </ScrollView>
);

const InboxScreen = ({ navigation }) => (
  <View>
    <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
    <Text>askfhlaksfhlkashflaskhfl</Text>
  </View>
);
InboxScreen.navigationOptions = {
  header: null,
  drawerLabel: 'تجربه',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
state = {
    dataSource: ds.cloneWithRows([
      {
        title: 'للبيع -  شقة ١٠٨ متر² سوبر لوكس بالزمالك',
        img: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large',
        loc: 'ابو الفدا، الزمالك'
      },
      {
        title: 'للبيع -  شقة ١٠٨ متر² سوبر لوكس بالزمالك',
        img: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large',
        loc: 'ابو الفدا، الزمالك'
      },
      {
        title: 'للبيع -  شقة ١٠٨ متر² سوبر لوكس بالزمالك',
        img: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large',
        loc: 'ابو الفدا، الزمالك'
      },
      {
        title: 'للبيع -  شقة ١٠٨ متر² سوبر لوكس بالزمالك',
        img: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large',
        loc: 'ابو الفدا، الزمالك'
      },
      {
        title: 'للبيع -  شقة ١٠٨ متر² سوبر لوكس بالزمالك',
        img: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large',
        loc: 'ابو الفدا، الزمالك'
      },
      {
        title: 'للبيع -  شقة ١٠٨ متر² سوبر لوكس بالزمالك',
        img: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large',
        loc: 'ابو الفدا، الزمالك'
      },
      {
        title: 'للبيع -  شقة ١٠٨ متر² سوبر لوكس بالزمالك',
        img: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large',
        loc: 'ابو الفدا، الزمالك'
      },
      {
        title: 'للبيع -  شقة ١٠٨ متر² سوبر لوكس بالزمالك',
        img: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large',
        loc: 'ابو الفدا، الزمالك'
      },
      {
        title: 'للبيع -  شقة ١٠٨ متر² سوبر لوكس بالزمالك',
        img: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large',
        loc: 'ابو الفدا، الزمالك'
      },
    ]),
  }
const DraftsScreen = ({ navigation }) => (
  <View style={{ backgroundColor: 'white', flex: 1}}>
    <MyNavScreen banner={'الرئيسية'} navigation={navigation} />
      <ListView
          dataSource={state.dataSource}
          renderRow={(rowData) => (
            <View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
              <Image
                style={{ width: '100%', height: 150, borderRadius: 10 }}
                 source={{uri: rowData.img}} />
               <Text style={{ paddingVertical: 10, textAlign: 'right', fontWeight: 'bold', fontSize: 17}}>{rowData.title}</Text>
               <Text style={{ color: 'grey' }}>{rowData.loc}</Text>
            </View>
          )}
        />
  </View>
);
DraftsScreen.navigationOptions = {
  header: null,
  drawerLabel: 'الرئيسية',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  ),
};

const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxScreen,
    },
    Drafts: {
      path: '/sent',
      screen: DraftsScreen,
    },
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#0277BD',
    },
    drawerPosition: 'right',
  }
);

export default DrawerExample;
