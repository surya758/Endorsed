import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "../screens/Home/HomeScreen";
import HomeStackNav from "./HomeStackNav";
import { Ionicons } from "@expo/vector-icons";
import NotificationScreen from "../screens/Notification/NotificationScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import React from "react";
import SearchScreen from "../screens/Search/SearchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const CoreRoute = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: "black",
				inactiveTintColor: "#707070",
			}}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					switch (route.name) {
						case "Home":
							iconName = focused ? "home" : "home-outline";
							break;
						case "Search":
							iconName = focused ? "search" : "search-outline";
							break;
						case "Notification":
							iconName = focused ? "notifications-sharp" : "notifications-outline";
							break;
						case "Profile":
							iconName = focused ? "person" : "person-outline";
							break;
					}

					return <Ionicons name={iconName} color='black' size={28} />;
				},
			})}
		>
			<Tab.Screen name='Home' component={HomeStackNav} />
			<Tab.Screen name='Search' component={SearchScreen} />
			<Tab.Screen name='Notification' component={NotificationScreen} />
			<Tab.Screen name='Profile' component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default CoreRoute;

const styles = StyleSheet.create({});
