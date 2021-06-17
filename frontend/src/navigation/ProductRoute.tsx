import { StyleSheet, Text, View } from "react-native";

import ProductDetailScreen from "../screens/Home/ProductDetailScreen";
import ProductEditScreen from "../screens/Home/ProductEditScreen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ProductRoute = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='ProductDetail'
				component={ProductDetailScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='ProductEdit'
				component={ProductEditScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default ProductRoute;

const styles = StyleSheet.create({});
