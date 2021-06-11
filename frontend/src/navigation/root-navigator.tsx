import CoreNav from "./CoreNav";
import LoginScreen from "../screens/Auth/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "../screens/OnboardingScreen";
import ProductDetailScreen from "../screens/Product/ProductDetailScreen";
import React from "react";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const RootNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Core'>
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
				<Stack.Screen
					name='ProductDetail'
					component={ProductDetailScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Core'
					component={CoreNav}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;
