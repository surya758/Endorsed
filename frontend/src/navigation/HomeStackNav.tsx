import { StyleSheet, Text, View } from "react-native";

import BookmarkScreen from "../screens/Home/BookmarkScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ProductDetailScreen from "../screens/Home/ProductDetailScreen";
import ProductEditScreen from "../screens/Home/ProductEditScreen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

const HomeStackNav = () => {
	return (
		<HomeStack.Navigator initialRouteName='Home'>
			<HomeStack.Screen
				name='Home'
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<HomeStack.Screen
				name='ProductDetail'
				component={ProductDetailScreen}
				options={{
					headerShown: false,
				}}
			/>
			<HomeStack.Screen
				name='ProductEdit'
				component={ProductEditScreen}
				options={{
					headerShown: false,
				}}
			/>
			<HomeStack.Screen
				name='Bookmark'
				component={BookmarkScreen}
				// options={{
				// 	headerShown: false,
				// }}
			/>
		</HomeStack.Navigator>
	);
};

export default HomeStackNav;

const styles = StyleSheet.create({});
