import { StyleSheet, Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../screens/Home/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import NotificationScreen from "../screens/Home/NotificationScreen";
import ProfileScreen from "../screens/Home/ProfileScreen";
import React from "react";
import SearchScreen from "../screens/Home/SearchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const CoreNav = () => {
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
							iconName = focused
								? "notifications-sharp"
								: "notifications-outline";
							break;
						case "Profile":
							iconName = focused ? "person" : "person-outline";
							break;
					}

					return <Ionicons name={iconName} color='black' size={28} />;
				},
			})}
		>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Search' component={SearchScreen} />
			<Tab.Screen name='Notification' component={NotificationScreen} />
			<Tab.Screen name='Profile' component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default CoreNav;

const styles = StyleSheet.create({});
