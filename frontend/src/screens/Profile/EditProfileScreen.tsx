import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const EditProfileScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitleStyle: { ...styles.headerTitleStyle },
		});
	}, [navigation]);
	return (
		<View>
			<Text>Edit proifle</Text>
			<Text>Edit proifle</Text>
			<Text>Edit proifle</Text>
			<Text>Edit proifle</Text>
			<Text>Edit proifle</Text>
		</View>
	);
};

export default EditProfileScreen;

const styles = StyleSheet.create({
	headerTitleStyle: {
		fontFamily: "RobotoMono_500Medium",
		fontSize: 20,
	},
});
