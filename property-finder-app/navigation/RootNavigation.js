import { StackNavigator } from 'react-navigation';
import React from 'react';
import Intro from '../screens/intro';
import Home from '../screens/Home';

const RootStackNavigator = StackNavigator({
	Home: { screen: Home },
	Intro: { screen: Intro }
});

export default class RootNavigator extends React.Component {
	render() {
		return <RootStackNavigator />;
	}
}
