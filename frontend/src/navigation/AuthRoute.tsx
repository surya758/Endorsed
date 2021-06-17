import LoginScreen from "../screens/Auth/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import React from "react";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import { StyleSheet } from "react-native";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthRoute = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Onboarding'
				component={OnboardingScreen}
				options={{
					headerShown: false,
				}}
			/>
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

export default AuthRoute;

const styles = StyleSheet.create({});
