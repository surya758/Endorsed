import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NotificationScreen = () => {
	const [filter, setFilter] = useState("");
	const insets = useSafeAreaInsets();

	return (
		<>
			<View style={{ height: insets.top, backgroundColor: "red" }} />
			<View style={styles.headerBox}>
				<Text style={styles.headerText}>NOTIFICATIONS</Text>
			</View>
			<View style={{ flex: 1 }}></View>
		</>
	);
};

const styles = StyleSheet.create({
	line: {
		borderBottomColor: "#707070",
		borderBottomWidth: 1,
		opacity: 0.3,
		marginHorizontal: 20,
	},
	headerText: {
		fontSize: 20,
		fontFamily: "RobotoMono_500Medium",
		letterSpacing: 2,
	},
	headerBox: {
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderBottomColor: "#D0D0D0",
		borderBottomWidth: 1,
		marginHorizontal: 20,
	},
	searchBox: {
		height: 40,
		borderRadius: 10,
		backgroundColor: "#E0E0E0",
		marginHorizontal: 16,
		flexDirection: "row",
		marginTop: 20,
		alignItems: "center",
	},
	searchText: {
		fontSize: 16,
		fontFamily: "SourceSansPro_400Regular",
	},
});

export default NotificationScreen;
