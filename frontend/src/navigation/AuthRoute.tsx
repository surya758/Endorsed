import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "../screens/Auth/LoginScreen";
import React from "react";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Welcome'
				component={WelcomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Register'
				component={RegisterScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Login'
				component={LoginScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default AuthNav;

const styles = StyleSheet.create({});
