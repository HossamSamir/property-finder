import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Animated,
	Easing,
	Dimensions
} from 'react-native';
const window = Dimensions.get('window');
import { EvilIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import Header from '../components/Header';
export default class Home extends React.Component {
	static navigationOptions = {
		header: <Header />
	};
	constructor(props) {
		super(props);
		this.spinValue = new Animated.Value(-200);
	}
	transX() {
		this.spinValue.setValue(-200);
		Animated.timing(this.spinValue, {
			toValue: 0,
			duration: 300,
			easing: Easing.cubic
		}).start();
	}
	closeMenu() {
		this.spinValue.setValue(0);
		Animated.timing(this.spinValue, {
			toValue: -200,
			duration: 300,
			easing: Easing.cubic
		}).start();
	}

	render() {
		return (
			<View style={{ backgroundColor: 'crimson', flex: 1, paddingTop: 30 }} />
		);
	}
}
