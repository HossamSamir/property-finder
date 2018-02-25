import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { MapView } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Communications from 'react-native-communications';

export default class productDesc extends Component {
  static navigationOptions = ({navigation}) => ({
      title: navigation.state.params.title,
    });

    constructor(props) {
      super(props);
      this.state = {
        number: 'اظهار الرقم',
        showCall: false,
        phoneIcon: 'ios-phone-portrait-outline'
      }
    }

    showNumber() {
      if (this.state.showCall) {
        Communications.phonecall('0123456789', true)
      } else {
        this.setState({ number: '0123456789', showCall: true, phoneIcon: 'ios-unlock-outline' })
      }
    }

  render(){
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <MapView
        style={{ width: '100%', height: 130 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>{this.props.navigation.state.params.title}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>650,300 ج.م</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons
            name="ios-people-outline"
            size={30}
            color="black"
            />
          <Text style={{ paddingHorizontal: 10 }}>3 guests</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons
            name="ios-time-outline"
            size={30}
            color="black"
            />
          <Text style={{ paddingHorizontal: 10 }}>3 beds</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons
            name="ios-trash-outline"
            size={30}
            color="black"
            />
          <Text style={{ paddingHorizontal: 10 }}>1 bath</Text>
        </View>
    </View>
    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'right', margin: 20 }}>تفاصيل الاعلان</Text>
    <Text style={{ fontSize: 16, textAlign: 'right', marginHorizontal: 20 }}>
      مدينة القاهرة الجديدة هي واحدة من أكبر وأرقى مدن محافظة القاهرة الجديدة. تقع القاهرة الجديدة في شرق القاهرة وتتكون من عدة تجمعات سكنية أكبرهم التجمع الخامس والتجمع الأول والتجمع الثالث. ومن الأخطاء الشائعة تسمية مدينة القاهرة الجديدة بالتجمع أو التجمع الخامس، حيث أن التجمع الخامس يعد حي من أحياء القاهرة الجديدة، لكن جرت العادة على هذه التسمية. تتميز القاهرة الجديدة بالتقسيم والتخطيط الممتاز بالمقارنة مع بقية أحياء القاهرة فشوارعها واسعها وتتميز بالهدوء وانخفاض الكثافة السكانية. كما يوجد فيها عدد كبير من......
    </Text>

    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'right', margin: 20 }}> الخدمات</Text>
    <Text style={{ fontSize: 16, textAlign: 'right', marginHorizontal: 20 }}>
      ● أمن و حراسه
    </Text>
    <Text style={{ fontSize: 16, textAlign: 'right', marginHorizontal: 20 }}>
      ● أمن و حراسه
    </Text>
    <Text style={{ fontSize: 16, textAlign: 'right', marginHorizontal: 20 }}>
      ● أمن و حراسه
    </Text>
    <Text style={{ fontSize: 16, textAlign: 'right', marginHorizontal: 20 }}>
      ● أمن و حراسه
    </Text>

    <TouchableOpacity
      onPress={ () => this.props.navigation.navigate('profile', {name: 'حسام سمير'}) }
      style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}
      >
      <Text style={{ color: '#0277BD', fontSize: 16, textAlign: 'center', padding: 10 }}>صاحب الاعلان : حسام سمير</Text>
      <Ionicons
        name='ios-person-outline'
        size={30}
        color="#0277BD"
        style={{ padding: 10 }}
        />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={this.showNumber.bind(this)}
      style={{ backgroundColor: '#0277BD', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
      >
      <Text style={{ color: 'white', fontSize: 18, padding: 20, textAlign: 'center' }}>{this.state.number}</Text>
      <Ionicons
        name={this.state.phoneIcon}
        size={30}
        color="white"
        />
    </TouchableOpacity>

    </ScrollView>
    );
  }
}
