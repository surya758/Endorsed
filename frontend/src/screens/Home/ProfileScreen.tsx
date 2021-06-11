import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
	const Insets = useSafeAreaInsets();
	return (
		<View>
			<View style={{ height: Insets.top, backgroundColor: "red" }} />
			<View style={styles.line} />
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	line: {
		borderBottomColor: "#707070",
		borderBottomWidth: 1,
		opacity: 0.3,
		marginHorizontal: 20,
	},
});
