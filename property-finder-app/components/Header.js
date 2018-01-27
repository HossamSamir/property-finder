import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Animated,
	Easing,
	Dimensions
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
const window = Dimensions.get('window');

export default class Header extends React.Component {
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
		const offsetValue = this.spinValue.interpolate({
			inputRange: [-200, 0],
			outputRange: [-200, 0]
		});
		return (
			<View style={{ backgroundColor: 'crimson', flex: 1, paddingTop: 30 }}>
				<TouchableOpacity
					style={{ position: 'absolute', top: 30 }}
					onPress={this.transX.bind(this)}
				>
					<EvilIcons name="navicon" color="white" size={50} />
				</TouchableOpacity>
				<Animated.View
					style={{
						backgroundColor: 'black',
						width: '40%',
						height: '100%',
						transform: [{ translateX: offsetValue }]
					}}
				>
					<TouchableOpacity
						style={{ position: 'absolute', top: 30 }}
						onPress={this.closeMenu.bind(this)}
					>
						<EvilIcons name="close" color="white" size={50} />
					</TouchableOpacity>
				</Animated.View>
			</View>
		);
	}
}
