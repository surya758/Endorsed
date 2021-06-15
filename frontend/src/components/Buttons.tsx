import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const Buttons = (props) => {
	return (
		<TouchableOpacity style={styles.nextButton} onPress={props.onPress}>
			<Text>{props.text}</Text>
		</TouchableOpacity>
	);
};

export const SkipButton = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<Text>{props.skip}</Text>
		</TouchableOpacity>
	);
};

export default Buttons;

const styles = StyleSheet.create({
	nextButton: {
		alignItems: "center",
		backgroundColor: "#ffffff",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "#000000",
		justifyContent: "center",
	},
});
