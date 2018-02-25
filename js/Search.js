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
    title: 'فلتر البحث',
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

        <View style={{ flex: .2, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', marginHorizontal: 30}}>
        <SelectInput
            buttonsBackgroundColor='transparent'
            style={{ borderBottomColor: '#009EE0', borderBottomWidth: 1, borderRadius: 10, flex: 1, }}
            labelStyle={{ color: '#0277BD', }}
            buttonsTextColor='white'
            cancelKeyText='الغاء'
            submitKeyText='اختيار'
            value={this.state.location}
            options={this.state.locations}
            onSubmitEditing={(itemValue) => this.setState({location: itemValue})}>
        </SelectInput>
        <Text style={{ fontWeight: 'bold', margin: 10 }}>نوع العقار</Text>
        </View>


        <View style={{ flex: .2, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', marginHorizontal: 30}}>
        <SelectInput
            buttonsBackgroundColor='transparent'
            style={{ borderBottomColor: '#009EE0', borderBottomWidth: 1, borderRadius: 10, flex: 1, }}
            labelStyle={{ color: '#0277BD', }}
            buttonsTextColor='white'
            cancelKeyText='الغاء'
            submitKeyText='اختيار'
            value={this.state.location}
            options={this.state.locations}
            onSubmitEditing={(itemValue) => this.setState({location: itemValue})}>
        </SelectInput>
        <Text style={{ fontWeight: 'bold', margin: 10 }}>نوع العقار</Text>
        </View>


        <View style={{ flex: .2, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', marginHorizontal: 30}}>
        <SelectInput
            buttonsBackgroundColor='transparent'
            style={{ borderBottomColor: '#009EE0', borderBottomWidth: 1, borderRadius: 10, flex: 1, }}
            labelStyle={{ color: '#0277BD', }}
            buttonsTextColor='white'
            cancelKeyText='الغاء'
            submitKeyText='اختيار'
            value={this.state.location}
            options={this.state.locations}
            onSubmitEditing={(itemValue) => this.setState({location: itemValue})}>
        </SelectInput>
        <Text style={{ fontWeight: 'bold', margin: 10 }}>نوع العقار</Text>
        </View>


        <View style={{ flex: .2, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', marginHorizontal: 30}}>
        <SelectInput
            buttonsBackgroundColor='transparent'
            style={{ borderBottomColor: '#009EE0', borderBottomWidth: 1, borderRadius: 10, flex: 1, }}
            labelStyle={{ color: '#0277BD', }}
            buttonsTextColor='white'
            cancelKeyText='الغاء'
            submitKeyText='اختيار'
            value={this.state.location}
            options={this.state.locations}
            onSubmitEditing={(itemValue) => this.setState({location: itemValue})}>
        </SelectInput>
        <Text style={{ fontWeight: 'bold', margin: 10 }}>نوع العقار</Text>
        </View>


        <View style={{ flex: .3, backgroundColor: 'transparent', alignItems: 'center', marginHorizontal: 60}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Drawer')}
           style={{ backgroundColor: '#0277BD', borderRadius: 10, paddingHorizontal: 30, }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, paddingVertical: 10, textAlign: 'center' }}>ابدأ البحث</Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}
