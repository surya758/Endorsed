import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import {
	SourceSansPro_300Light,
	SourceSansPro_400Regular,
	useFonts,
} from "@expo-google-fonts/source-sans-pro";

import Auth from "@aws-amplify/auth";
import { Ionicons } from "@expo/vector-icons";
import { RobotoMono_500Medium } from "@expo-google-fonts/roboto-mono";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginScreen = (props) => {
	const insets = useSafeAreaInsets();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let [fontsLoaded] = useFonts({
		RobotoMono_500Medium,
		SourceSansPro_300Light,
		SourceSansPro_400Regular,
	});
	const loginFunc = async () => {
		try {
			await axios
				.post("http://10.0.2.2:3000/v1/auth/login", {
					email: email,
					password: password,
				})
				.then((res) => console.log(res.data));
			props.navigation.navigate("Core");
		} catch (error) {
			Alert.alert("Uh oh...", `${error}`, [
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel",
				},
				{ text: "OK", onPress: () => console.log("OK Pressed") },
			]);
			console.error({ error });
		}
	};

	// const getCurrentUser = async () => {
	// 	try {
	// 		await Auth.currentAuthenticatedUser().then((res) => {
	// 			console.log({ res });
	// 		});
	// 	} catch (error) {
	// 		console.error({ error });
	// 	}
	// };

	// const signOutFunc = async () => {
	// 	try {
	// 		await Auth.signOut();
	// 	} catch (error) {
	// 		console.log({ error });
	// 	}
	// };
	if (!fontsLoaded) {
		return null;
	}
	return (
		<View style={{ flex: 1 }}>
			<View style={{ height: insets.top }} />
			<View style={{ flex: 4 }}>
				<TouchableOpacity
					style={{
						marginLeft: 40,
						marginTop: 50,
						alignSelf: "flex-start",
					}}
					onPress={() => {
						props.navigation.navigate("Welcome");
					}}
				>
					<Ionicons name='arrow-back-circle' size={40} color='black' />
				</TouchableOpacity>

				<View style={{ marginTop: 30 }}>
					<Text
						style={{
							fontFamily: "RobotoMono_500Medium",
							textAlign: "center",
							fontSize: 20,
						}}
					>
						Log in
					</Text>
				</View>

				<View style={{ flex: 1, marginHorizontal: 40 }}>
					<TextInput
						style={{
							fontFamily: "SourceSansPro_400Regular",
							borderBottomColor: "#707070",
							borderBottomWidth: 1,
							marginVertical: 56,
							paddingBottom: 16,
							fontSize: 16,
						}}
						value={email}
						onChangeText={setEmail}
						placeholder='EMAIL'
						autoCapitalize='none'
						autoCorrect={false}
						textContentType='emailAddress'
						placeholderTextColor='#707070'
						keyboardType='email-address'
					/>
					<TextInput
						style={{
							fontFamily: "SourceSansPro_400Regular",
							borderBottomColor: "#707070",
							borderBottomWidth: 1,
							paddingBottom: 16,
							fontSize: 16,
						}}
						value={password}
						onChangeText={setPassword}
						placeholder='PASSWORD'
						autoCapitalize='none'
						autoCorrect={false}
						textContentType='password'
						placeholderTextColor='#707070'
					/>

					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
						}}
						onPress={() => {}}
					>
						<Text
							style={{
								fontFamily: "SourceSansPro_400Regular",
								fontSize: 16,
								marginTop: 24,
							}}
						>
							Forgot your password?
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "#000000",
							alignItems: "center",
							borderRadius: 20,
							marginTop: 30,
							marginHorizontal: 40,
						}}
						onPress={() => loginFunc()}
					>
						<Text
							style={{
								fontFamily: "SourceSansPro_400Regular",
								color: "#FFFFFF",
								paddingVertical: 10,
								fontSize: 16,
							}}
						>
							LOGIN
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ flex: 2 }} />
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({});
