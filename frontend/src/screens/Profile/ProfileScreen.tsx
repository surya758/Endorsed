import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStore } from "../../context/RootContext";

const ProfileScreen = ({ navigation }) => {
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
				.post("http://13.126.33.1:3000/v1/auth/logout", {
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

			<View
				style={{
					flex: 1,
					backgroundColor: "#191970",
					justifyContent: "space-evenly",
					paddingHorizontal: 15,
				}}
			>
				<TouchableOpacity
					style={{
						alignSelf: "flex-end",
					}}
				>
					<Ionicons name='settings-outline' size={24} color='white' />
				</TouchableOpacity>
				<View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
					<Image
						source={require("../../assets/images/ob1.jpg")}
						style={{ width: 50, height: 50, borderRadius: 25 }}
					/>
					<View style={{ marginLeft: 15 }}>
						<Text
							style={{
								color: "white",
								fontFamily: "SourceSansPro_700Bold",
								fontSize: 16,
								paddingVertical: 2,
							}}
						>
							{userData.user.name.toUpperCase()}
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
							<Text style={{ color: "#35c949", fontFamily: "Lato_400Regular", fontSize: 12 }}>
								Edit Profile
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={{ flex: 4 }}>
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
