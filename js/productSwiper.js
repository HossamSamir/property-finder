import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'normal'
  }
})

export default class productSwiper extends Component {
  static navigationOptions = ({navigation}) => ({
      title: navigation.state.params.title,
    });
  render(){
    const productTitle = this.props.navigation.state.params.title;
    return (
      <View style={{ flex: 1 }}>
        <Swiper style={styles.wrapper} showsButtons={true} dotColor='white'>
          <View style={styles.slide1}>
            <Image
              style={{ width: '100%', height: '100%', }}
               source={{uri: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large'}} />
          </View>
          <View style={styles.slide2}>
            <Image
              style={{ width: '100%', height: '100%', }}
               source={{uri: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large'}} />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{ width: '100%', height: '100%', }}
               source={{uri: 'https://a0.muscache.com/im/pictures/105c9293-1a73-4f9f-9bc5-79055dfddfc7.jpg?aki_policy=xx_large'}} />
          </View>
        </Swiper>
        <TouchableOpacity style={{ backgroundColor: '#0277BD' }} onPress={ () => this.props.navigation.navigate('productDesc', {title: productTitle}) }>
          <Text style={{ color: 'white', fontSize: 18, padding: 20, textAlign: 'center' }}>عرض التفاصيل</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
