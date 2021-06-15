import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const WelcomeScreen = (props) => {
	return (
		<>
			<View
				style={{ flex: 2.5, alignItems: "center", justifyContent: "center" }}
			>
				<Text
					style={{
						fontFamily: "RobotoMono_300Light",
						fontSize: 40,
						marginBottom: 50,
						color: "#005245",
						letterSpacing: 4,
					}}
				>
					ENDORSED
				</Text>
				<Text
					style={{
						fontFamily: "RobotoMono_500Medium",
						fontSize: 30,
						marginTop: 10,
					}}
				>
					Simply Recommended
				</Text>
			</View>

			<View style={{ flex: 2 }}>
				<View>
					<View style={styles.line} />
					<Image
						style={{
							height: 46,
							width: 45,
							marginTop: -23,
							marginLeft: 44,
						}}
						source={require("../assets/icons/endorsedBackground.png")}
					/>
				</View>
				<Text
					style={{
						marginLeft: 44,
						marginTop: 15,
						fontSize: 18,
						fontFamily: "SourceSansPro_300Light",
					}}
				>
					Your all-in-one recommendation app.
				</Text>

				<View style={{ marginHorizontal: 44 }}>
					<TouchableOpacity
						style={{
							...styles.loginButtons,
							backgroundColor: "#ffffff",
						}}
						onPress={() => {}}
					>
						<View style={{ flexDirection: "row" }}>
							<FontAwesome name='google' size={24} color='black' />
							<Text
								style={{
									...styles.loginButtonsText,
									color: "#707070",
									marginHorizontal: 10,
								}}
							>
								Continue with Google
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ ...styles.loginButtons, backgroundColor: "#4267B2" }}
						onPress={() => {}}
					>
						<View style={{ flexDirection: "row" }}>
							<FontAwesome name='facebook-square' size={24} color='black' />
							<Text
								style={{
									...styles.loginButtonsText,
									color: "#FFFFFF",
									marginHorizontal: 10,
								}}
							>
								Continue with Facebook
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ ...styles.loginButtons, backgroundColor: "#000000" }}
						onPress={() => {}}
					>
						<View style={{ flexDirection: "row" }}>
							<FontAwesome name='apple' size={24} color='white' />
							<Text
								style={{
									...styles.loginButtonsText,
									color: "#FFFFFF",
									marginHorizontal: 10,
								}}
							>
								Continue with Apple
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ ...styles.loginButtons, backgroundColor: "#5AC066" }}
						onPress={() => {
							props.navigation.navigate("Login");
						}}
					>
						<Text style={{ ...styles.loginButtonsText, color: "#FFFFFF" }}>
							Continue with Email
						</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						marginTop: 14,
					}}
				>
					<Text
						style={{ fontFamily: "SourceSansPro_400Regular", fontSize: 16 }}
					>
						Don't have an Endorsed ID?
					</Text>
					<TouchableOpacity
						onPress={() => {
							props.navigation.navigate("Register");
						}}
					>
						<Text
							style={{
								fontFamily: "SourceSansPro_600SemiBold",
								fontSize: 16,
								color: "#638BDC",
							}}
						>
							Register
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	line: {
		height: 1,
		backgroundColor: "rgba(0,0,0,1)",
		opacity: 0.3,
		alignSelf: "stretch",
		padding: 0,
	},
	loginButtons: {
		alignItems: "center",
		paddingVertical: 10,
		borderRadius: 20,
		elevation: 10,
		shadowOpacity: 0.5,
		marginTop: 14,
	},
	loginButtonsText: {
		fontSize: 16,
		fontFamily: "SourceSansPro_400Regular",
		textAlign: "center",
	},
});
