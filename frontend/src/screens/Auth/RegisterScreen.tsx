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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { RobotoMono_500Medium } from "@expo-google-fonts/roboto-mono";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RegisterScreen = (props) => {
	const storeData = async (value) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem("accessUserCred", jsonValue);
		} catch (e) {
			// saving error
		}
	};

	const createUserFunc = async () => {
		try {
			await axios
				.post("http://10.0.2.2:3000/v1/auth/register", {
					email: userEmail,
					password: userPassword,
					name: userFullName,
				})
				.then((res) => storeData(res.data));
			props.navigation.navigate("Core");
		} catch (err) {
			Alert.alert("Uh oh...", `${err}`, [
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel",
				},
				{ text: "OK", onPress: () => console.log("OK Pressed") },
			]);
			console.log({ err });
		}
	};
	const insets = useSafeAreaInsets();
	const [userFullName, setUserFullName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	let [fontsLoaded] = useFonts({
		RobotoMono_500Medium,
		SourceSansPro_300Light,
		SourceSansPro_400Regular,
	});

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
						Register
					</Text>
				</View>

				<View
					style={{
						marginHorizontal: 40,
					}}
				>
					<TextInput
						style={{
							fontFamily: "SourceSansPro_400Regular",
							borderBottomColor: "#707070",
							borderBottomWidth: 1,
							paddingBottom: 16,
							fontSize: 16,
							marginTop: 32,
						}}
						value={userFullName}
						onChangeText={setUserFullName}
						placeholder='FULL NAME'
						autoCapitalize='none'
						autoCorrect={false}
						placeholderTextColor='#707070'
					/>
					<TextInput
						style={{
							fontFamily: "SourceSansPro_400Regular",
							borderBottomColor: "#707070",
							borderBottomWidth: 1,
							paddingBottom: 16,
							marginVertical: 32,
							fontSize: 16,
						}}
						value={userEmail}
						onChangeText={setUserEmail}
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
						value={userPassword}
						onChangeText={setUserPassword}
						placeholder='PASSWORD'
						autoCapitalize='none'
						autoCorrect={false}
						textContentType='password'
						placeholderTextColor='#707070'
						secureTextEntry={true}
					/>
					<View style={{ flexDirection: "row", marginTop: 10 }}>
						<Ionicons name='checkmark' size={16} color='black' />
						<Text
							style={{ fontFamily: "SourceSansPro_300Light", fontSize: 12 }}
						>
							Must be 6-8 characters long
						</Text>
					</View>

					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
						}}
					>
						<Text
							style={{
								fontFamily: "SourceSansPro_400Regular",
								fontSize: 16,
								marginTop: 16,
							}}
						>
							Forgot your password?
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: "#000000",
						alignItems: "center",
						borderRadius: 20,

						marginHorizontal: 60,
						marginVertical: 50,
					}}
					onPress={() => createUserFunc()}
				>
					<Text
						style={{
							fontFamily: "SourceSansPro_400Regular",
							color: "#FFFFFF",
							paddingVertical: 10,
							fontSize: 16,
						}}
					>
						CREATE ACCOUNT
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 2 }}></View>
		</View>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({});
