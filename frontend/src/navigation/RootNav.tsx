import React, { useState } from "react";

import AuthRoute from "./AuthRoute";
import CoreRoute from "./CoreRoute";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "../screens/OnboardingScreen";
import ProductDetailScreen from "../screens/Product/ProductDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

type user = { username: string };

const RootNavigator = () => {
	// const [userData, setUserData] = useState<user | "loading" | null>("loading");
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Onboarding'>
				<Stack.Screen
					name='Onboarding'
					component={OnboardingScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='AuthRoute'
					component={AuthRoute}
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
					name='CoreRoute'
					component={CoreRoute}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;
