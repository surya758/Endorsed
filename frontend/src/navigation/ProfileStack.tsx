import EditProfileScreen from "../screens/Profile/EditProfileScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

const ProfileStackNav = () => {
	return (
		<ProfileStack.Navigator initialRouteName='Home'>
			<ProfileStack.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					headerShown: false,
				}}
			/>
			<ProfileStack.Screen
				name='EditProfile'
				component={EditProfileScreen}
				options={
					{
						// headerShown: false,
					}
				}
			/>
		</ProfileStack.Navigator>
	);
};

export default ProfileStackNav;

const styles = StyleSheet.create({});
