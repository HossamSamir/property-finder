import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Select, Option } from 'react-native-chooser';
import { EvilIcons } from '@expo/vector-icons';

export default class Intro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			country: 'أختار البلد',
			language: 'اختار اللغة'
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<Image
					style={{
						width: 150,
						height: 150,
						margin: 50,
						resizeMode: 'contain',
						flex: 0.8
					}}
					source={require('../assets/logo.png')}
				/>

				<View style={{ flex: 0.7 }}>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<Select
							onSelect={country => this.setState({ country })}
							defaultText={this.state.country}
							animationType="fade"
							style={{
								borderWidth: 3,
								borderRadius: 10,
								borderColor: '#1A5DAD',
								marginVertical: 10
							}}
							textStyle={{
								textAlign: 'right',
								color: '#1A5DAD',
								width: '100%',
								fontSize: 16
							}}
							optionListStyle={{
								backgroundColor: '#1A5DAD',
								borderRadius: 10
							}}
						>
							<Option value="مصر">
								<Text style={{ color: 'white', fontSize: 18 }}>مصر</Text>
							</Option>
							<Option value="السعودية">
								<Text style={{ color: 'white', fontSize: 18 }}>السعودية</Text>
							</Option>
							<Option value="الأردن">
								<Text style={{ color: 'white', fontSize: 18 }}>الأردن</Text>
							</Option>
							<Option value="الجزائر">
								<Text style={{ color: 'white', fontSize: 18 }}>الجزائر</Text>
							</Option>
							<Option value="المغرب">
								<Text style={{ color: 'white', fontSize: 18 }}>المغرب</Text>
							</Option>
						</Select>
						<EvilIcons name="location" size={32} color="#1A5DAD" />
					</View>

					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<Select
							onSelect={language => this.setState({ language })}
							defaultText={this.state.language}
							animationType="fade"
							style={{
								borderWidth: 3,
								borderRadius: 10,
								borderColor: '#1A5DAD',
								marginVertical: 10
							}}
							textStyle={{
								textAlign: 'right',
								color: '#1A5DAD',
								width: '100%',
								fontSize: 16
							}}
							optionListStyle={{
								backgroundColor: '#1A5DAD',
								borderRadius: 10
							}}
						>
							<Option value="العربية">
								<Text style={{ color: 'white', fontSize: 18 }}>العربية</Text>
							</Option>
						</Select>
						<EvilIcons name="gear" size={32} color="#1A5DAD" />
					</View>
				</View>

				<TouchableOpacity
					style={{
						flex: 0.2,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#1A5DAD',
						borderRadius: 5
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 17,
							paddingHorizontal: 40
						}}
					>
						استمرار
					</Text>
				</TouchableOpacity>
				<View
					style={{
						flex: 0.5,
						flexDirection: 'row',
						marginTop: 20,
						marginHorizontal: 30,
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<TouchableOpacity style={{ flex: 1 }}>
						<Text
							style={{
								color: '#1A5DAD',
								fontSize: 15,
								textAlign: 'left'
							}}
						>
							تسجيل الدخول
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1 }}>
						<Text
							style={{
								color: '#1A5DAD',
								fontSize: 15
							}}
						>
							فتح حساب جديد
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
