/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StatusBar, View, Text, TextInput, ListView, Image, TouchableOpacity } from 'react-native';
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
        display: 0,
        pos: {
            long: 360, lat: 360
        },
        fetchedLocationData: false,
        language: 'العربية',
        location: 'مصر',
        locations: [
          { value: 0, label: 'مصر'      },
          { value: 1, label: 'الجزائر'     },
          { value: 2, label: 'المغرب'     },
          { value: 3, label: 'السعودية' }
        ],
        languages: [
          { value: 0, label: 'العربية'      },
        ],
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white'}}>

        <View style={{ flex: .4 , alignItems: 'center', justifyContent: 'center'}}>
          <Image source={{ uri: 'http://guardianroofing.org/wp-content/uploads/2016/06/HouseLogo.png' }} style={{ width: '50%', height: '50%' }} />
        </View>

        <View style={{ flex: .2, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', marginHorizontal: 30}}>
        <SelectInput
            buttonsBackgroundColor='#0277BD'
            style={{ backgroundColor: '#009EE0', borderRadius: 10, flex: 1, }}
            labelStyle={{ color: 'white', }}
            buttonsTextColor='white'
            cancelKeyText='الغاء'
            submitKeyText='اختيار'
            value={this.state.location}
            options={this.state.locations}
            onSubmitEditing={(itemValue) => this.setState({location: itemValue})}>
        </SelectInput>
        <EvilIcons name='location' color='#0277BD' size={40} style={{ flex: .2 }} />
        </View>

        <View style={{ flex: .2, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', marginHorizontal: 30}}>
        <SelectInput
            buttonsBackgroundColor='#0277BD'
            style={{ backgroundColor: '#009EE0', borderRadius: 10, flex: 1,  }}
            labelStyle={{ color: 'white', }}
            buttonsTextColor='white'
            cancelKeyText='الغاء'
            submitKeyText='اختيار'
            value={this.state.language}
            options={this.state.languages}
            onSubmitEditing={(itemValue) => this.setState({language: itemValue})}>
        </SelectInput>
        <EvilIcons name='gear' color='#0277BD' size={40} style={{ flex: .2 }} />
        </View>

        <View style={{ flex: .3, backgroundColor: 'transparent', alignItems: 'center', marginHorizontal: 60}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Drawer')}
           style={{ backgroundColor: '#0277BD', borderRadius: 10, paddingHorizontal: 30, }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, paddingVertical: 10, textAlign: 'center' }}>استمرر</Text>
          </TouchableOpacity>
          <Text style={{ marginVertical: 20 }}>أو</Text>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ backgroundColor: 'white', flex: 1 }}>
              <Text style={{ color: '#0277BD', fontWeight: 'bold', fontSize: 15, textAlign: 'left' }}>تسجيل دخول</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} style={{ backgroundColor: 'white', flex: 1 }}>
              <Text style={{ color: '#0277BD', fontWeight: 'bold', fontSize: 15, textAlign: 'right' }}>فتح حساب جديد</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
    )
  }
}
