import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStore } from "../../context/RootContext";

const ProfileScreen = () => {
	const windowWidth = Dimensions.get("window").width;
	const insets = useSafeAreaInsets();
	const { setState, userData } = useStore();

	const cleanData = async () => {
		try {
			await AsyncStorage.removeItem("accessUserCred").then(() => setState("Refreshing"));
		} catch (exception) {}
	};

	const signOutFunc = async () => {
		try {
			await axios
				.post("http://10.0.2.2:3000/v1/auth/logout", {
					refreshToken: `${userData.tokens.refresh.token}`,
				})
				.then(() => {
					cleanData();
				});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<View style={{ height: insets.top, backgroundColor: "red" }} />
			<View style={styles.headerBox}>
				<Text style={styles.headerText}>PROFILE</Text>
			</View>
			<View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
				<TouchableOpacity
					style={{
						backgroundColor: "#191970",
						width: 0.8 * windowWidth,
						alignItems: "center",
						borderRadius: 5,
					}}
					onPress={signOutFunc}
				>
					<Text style={{ padding: 15, color: "#fff" }}>Sign Out</Text>
				</TouchableOpacity>
			</View>
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
