/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, TouchableOpacity, StatusBar, View, Text, TextInput, ListView, Image } from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { EvilIcons } from '@expo/vector-icons';
import Modal from "react-native-modal";

// const MyNavScreen = ({ navigation, banner }) => (
// );

class MyNavScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }
  render() {
    return (
      <ScrollView>
        <Modal isVisible={this.state.modalVisible}>
          <ScrollView style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '100%', height: '40%', marginTop: '50%' }}>
            <Text>ترتيب حسب</Text>
            <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', margin: 20 }}>
              <Text style={{textAlign: 'right'}}>السعر الأقل</Text>
              <EvilIcons name='user' color='#0277BD' size={40} />
            </TouchableOpacity>
            <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', margin: 20 }}>
              <Text style={{textAlign: 'right'}}>السعر الأعلي</Text>
              <EvilIcons name='user' color='#0277BD' size={40} />
            </TouchableOpacity>
            <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', margin: 20 }}>
              <Text style={{textAlign: 'right'}}>تجربه ....</Text>
              <EvilIcons name='user' color='#0277BD' size={40} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.setState({ modalVisible: false })} style={{ backgroundColor: '#0277BD', padding: 10, borderRadius: 7, alignItems: 'center', margin: 20 }}>
                <Text style={{textAlign: 'right', color: 'white', fontWeight: 'bold'}}>إعادة ترتيب</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ modalVisible: false })} style={{  alignItems: 'center', margin: 20 }}>
                <Text style={{textAlign: 'right'}}>إلغاء</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
        <SafeAreaView forceInset={{ top: 'always' }}>
        <View style={{ backgroundColor: '#0277BD', flex: 1, alignItems: 'center', justifyContent: 'center', height: 60, flexDirection: 'row', elevation: 20,}}>
          <View style={{ flex: 1, alignItems: 'center'}}>
            <EvilIcons onPress={() => this.props.navigation.navigate('Search')} name="search" color="white" size={30} />
          </View>
          <View style={{ flex: 1, alignItems: 'center'}}>
            <EvilIcons onPress={() => this.setState({ modalVisible: true })} name="archive" color="white" size={30} />
          </View>
          <View style={{ flex: 3,}}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{this.props.banner}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center'}}>
            <EvilIcons onPress={() => this.props.navigation.navigate('DrawerOpen')} name="navicon" color="white" size={30} />
          </View>
        </View>
        </SafeAreaView>
        <StatusBar barStyle="default" />
      </ScrollView>
    )
  }
}

const InboxScreen = ({ navigation }) => (
  <View>
    <MyNavScreen banner={'اضافه عقار'} navigation={navigation} />
    <Text>askfhlaksfhlkashflaskhfl</Text>
  </View>
);
InboxScreen.navigationOptions = {
  header: null,
  drawerLabel: 'اضافه عقار',
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
            <TouchableOpacity onPress={ () => navigation.navigate('productSwiper', {title: rowData.title}) }>
            <View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
              <Image
                style={{ width: '100%', height: 150, borderRadius: 10 }}
                 source={{uri: rowData.img}} />
               <Text style={{ paddingVertical: 10, textAlign: 'right', fontWeight: 'bold', fontSize: 17}}>{rowData.title}</Text>
               <Text style={{ color: 'grey' }}>{rowData.loc}</Text>
            </View>
          </TouchableOpacity>
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
    Drafts: {
      path: '/sent',
      screen: DraftsScreen,
    },
    Inbox: {
      path: '/',
      screen: InboxScreen,
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
