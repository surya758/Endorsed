import React, { useState } from "react";
import {
	RobotoMono_300Light,
	RobotoMono_400Regular,
	RobotoMono_500Medium,
	useFonts,
} from "@expo-google-fonts/roboto-mono";
import {
	SourceSansPro_300Light,
	SourceSansPro_400Regular,
	SourceSansPro_600SemiBold,
	SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
	const [filter, setFilter] = useState("");
	const insets = useSafeAreaInsets();
	let [fontsLoaded] = useFonts({
		RobotoMono_400Regular,
		RobotoMono_500Medium,
		SourceSansPro_400Regular,
	});
	if (!fontsLoaded) {
		return <View />;
	}

	return (
		<>
			<View style={{ height: insets.top, backgroundColor: "red" }} />
			<View style={styles.headerBox}>
				<Text style={styles.headerText}>PROFILE</Text>
			</View>
			<View style={{ flex: 1 }}></View>
		</>
	);
};

const styles = StyleSheet.create({
	headerText: {
		fontSize: 20,
		fontFamily: "RobotoMono_500Medium",
		letterSpacing: 3,
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

export default ProfileScreen;
