import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import RootContext from "../../context/RootContext";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginScreen = (props: any) => {
	const { userInfo, userToken } = useContext(RootContext);
	const insets = useSafeAreaInsets();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log(userInfo);
	console.log(userToken);
	const storeData = async (value: valueType) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem("accessUserCred", jsonValue);
		} catch (e) {
			// saving error
		}
	};
	const loginFunc = async () => {
		try {
			await axios
				.post("http://10.0.2.2:3000/v1/auth/login", {
					email: email,
					password: password,
				})
				.then((res) => storeData(res.data));
			props.navigation.navigate("CoreNav");
		} catch (error) {
			Alert.alert("Unauthorised!", "Incorrect email or password!", [
				{ text: "Okay", onPress: () => console.log("Okay Pressed") },
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
	return (
		<View style={{ flex: 1 }}>
			<View style={{ height: insets.top }} />
			<View style={{ flex: 4 }}>
				<TouchableOpacity
					style={styles.backArrow}
					onPress={() => {
						props.navigation.navigate("Welcome");
					}}
				>
					<Ionicons name='arrow-back-circle' size={40} color='black' />
				</TouchableOpacity>

				<View style={{ marginTop: 30 }}>
					<Text style={styles.loginTextPlace}>Log in</Text>
				</View>

				<View style={{ flex: 1, marginHorizontal: 40 }}>
					<TextInput
						style={styles.emailBox}
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
						style={styles.passwordBox}
						value={password}
						onChangeText={setPassword}
						placeholder='PASSWORD'
						autoCapitalize='none'
						autoCorrect={false}
						textContentType='password'
						placeholderTextColor='#707070'
						secureTextEntry={true}
					/>

					<TouchableOpacity style={styles.forgotBox} onPress={() => {}}>
						<Text style={styles.forgotText}>Forgot your password?</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginBox} onPress={() => loginFunc()}>
						<Text style={styles.loginText}>LOGIN</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ flex: 2 }} />
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	emailBox: {
		fontFamily: "SourceSansPro_400Regular",
		borderBottomColor: "#707070",
		borderBottomWidth: 1,
		paddingBottom: 16,
		fontSize: 16,
		marginTop: 32,
	},
	passwordBox: {
		fontFamily: "SourceSansPro_400Regular",
		borderBottomColor: "#707070",
		borderBottomWidth: 1,
		paddingBottom: 16,
		fontSize: 16,
		marginTop: 32,
	},
	forgotText: {
		fontFamily: "SourceSansPro_400Regular",
		fontSize: 16,
		marginTop: 24,
	},
	forgotBox: {
		alignItems: "center",
		alignSelf: "center",
	},
	loginBox: {
		backgroundColor: "#000000",
		alignItems: "center",
		borderRadius: 20,
		marginTop: 30,
		marginHorizontal: 40,
	},
	loginText: {
		fontFamily: "SourceSansPro_400Regular",
		color: "#FFFFFF",
		paddingVertical: 10,
		fontSize: 16,
	},
	loginTextPlace: {
		fontFamily: "RobotoMono_500Medium",
		textAlign: "center",
		fontSize: 20,
	},
	backArrow: {
		marginLeft: 40,
		marginTop: 50,
		alignSelf: "flex-start",
	},
});
