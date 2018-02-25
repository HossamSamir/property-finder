import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ListView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class productDesc extends Component {
  static navigationOptions = ({navigation}) => ({
      title: 'الملف الشخصي',
    });

    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
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
        ]),
      }
    }



  render(){
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'right', margin: 15 }}>{`عقارات ${this.props.navigation.state.params.name}`}</Text>

        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => (
              <TouchableOpacity onPress={ () => this.props.navigation.navigate('productSwiper', {title: rowData.title}) }>
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

    </ScrollView>
    );
  }
}
