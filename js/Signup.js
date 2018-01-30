/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StatusBar, View, Text, KeyboardAvoidingView, TextInput, ListView, Image, TouchableOpacity } from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { EvilIcons } from '@expo/vector-icons';
import SelectInput from 'react-native-select-input-ios';

export default class InitialSettings extends React.Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1, backgroundColor: 'white'}}>

        <View style={{ flex: .4 , alignItems: 'center', justifyContent: 'center'}}>
          <Image source={{ uri: 'http://guardianroofing.org/wp-content/uploads/2016/06/HouseLogo.png' }} style={{ width: '50%', height: '50%' }} />
        </View>

          <View style={{ flex: .2 , marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
              style={{textAlign: 'right', borderBottomColor: '#0277BD', color: '#0277BD', fontWeight: 'bold', borderBottomWidth: 1, flex: 1, maxHeight: 50, minHeight: 50, marginHorizontal: 10}}
              placeholder='الاسم'
              placeholderTextColor='#0277BD'
              underlineColorAndroid='transparent'
            />
            <EvilIcons name='user' color='#0277BD' size={40} />
          </View>

          <View style={{ flex: .2 , marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
              style={{textAlign: 'right', borderBottomColor: '#0277BD', color: '#0277BD', fontWeight: 'bold', borderBottomWidth: 1, flex: 1, maxHeight: 50, minHeight: 50, marginHorizontal: 10}}
              placeholder='عنوان البريد الالكتروني'
              placeholderTextColor='#0277BD'
              underlineColorAndroid='transparent'
            />
            <EvilIcons name='user' color='#0277BD' size={40} />
          </View>

          <View style={{ flex: .2 ,  marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
              style={{textAlign: 'right', borderBottomColor: '#0277BD', color: '#0277BD', fontWeight: 'bold', borderBottomWidth: 1, flex: 1, maxHeight: 50, marginHorizontal: 10}}
              placeholder='كلمه المرور'
              placeholderTextColor='#0277BD'
              underlineColorAndroid='transparent'
              secureTextEntry={true}
            />
            <EvilIcons name='lock' color='#0277BD' size={40} />
          </View>

          <View style={{ flex: .2 ,  marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
              style={{textAlign: 'right', borderBottomColor: '#0277BD', color: '#0277BD', fontWeight: 'bold', borderBottomWidth: 1, flex: 1, maxHeight: 50, marginHorizontal: 10}}
              placeholder='تأكيد كلمة المرور'
              placeholderTextColor='#0277BD'
              underlineColorAndroid='transparent'
              secureTextEntry={true}
            />
            <EvilIcons name='lock' color='#0277BD' size={40} />
          </View>


      </KeyboardAvoidingView>
      <View style={{ flex: .1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', marginHorizontal: 60}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Drawer')}
         style={{ backgroundColor: '#0277BD', borderRadius: 10, paddingHorizontal: 30, }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, paddingVertical: 10, textAlign: 'center' }}>استمرر</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: .2,  flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 60 }}>
        <TouchableOpacity style={{ backgroundColor: 'white', paddingHorizontal: 10, flex: 1 }}>
          <EvilIcons name='sc-facebook' color='#0277BD' size={40} />
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'white', paddingHorizontal: 10, flex: 1 }}>
          <EvilIcons name='sc-twitter' color='#0277BD' size={40} />
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'white', paddingHorizontal: 10, flex: 1 }}>
          <EvilIcons name='sc-google-plus' color='#0277BD' size={40} />
        </TouchableOpacity>
      </View>


      </View>
    )
  }
}
