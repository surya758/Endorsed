import {
	Alert,
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import RootContext from "../../context/RootContext";
import { TouchableRipple } from "react-native-paper";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStore } from "../../context/RootContext";

const LoginScreen = (props: any) => {
	const { setState } = useStore();

	const insets = useSafeAreaInsets();
	const [email, setEmail] = useState("");
	const [hidePass, setHidePass] = useState(true);
	const [password, setPassword] = useState("");
	const [isEmailValid, setIsEmailValid] = useState(true);

	const emailIsValid = (email) => {
		return setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
	};

	const storeData = async (value: valueType) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem("accessUserCred", jsonValue);
		} catch (e) {
			console.error(e);
		}
	};
	const loginFunc = async () => {
		try {
			await axios
				.post("http://13.126.33.1:3000/v1/auth/login", {
					email: email,
					password: password,
				})
				.then((res) => storeData(res.data));
			setState("refresh");
		} catch (error) {
			Alert.alert("Invalid User!", "Incorrect email or password.", [
				{ text: "Okay", onPress: () => console.log("Okay Pressed") },
			]);
			console.log({ error });
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
							value={email.trimStart().trimLeft()}
							onChangeText={setEmail}
							placeholder='EMAIL'
							autoFocus={true}
							autoCapitalize='none'
							autoCorrect={false}
							textContentType='emailAddress'
							placeholderTextColor='#707070'
							keyboardType='email-address'
							onEndEditing={(e) => emailIsValid(e.nativeEvent.text)}
						/>

						{isEmailValid ? null : <Text style={styles.errMsg}>Please provide a valid email.</Text>}

						<View
							style={{
								borderBottomWidth: 1,
								paddingBottom: 16,
								marginTop: 24,
							}}
						>
							<TextInput
								style={styles.passwordStyle}
								value={password.trim()}
								onChangeText={setPassword}
								placeholder='PASSWORD'
								autoCapitalize='none'
								autoCorrect={false}
								textContentType='password'
								placeholderTextColor='#707070'
								secureTextEntry={hidePass ? true : false}
							/>
							<TouchableOpacity
								onPress={() => setHidePass(!hidePass)}
								style={{ position: "absolute", zIndex: 5, right: 0 }}
							>
								<Ionicons name={hidePass ? "eye-off" : "eye"} size={24} color='#000' />
							</TouchableOpacity>
						</View>

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
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	emailBox: {
		fontFamily: "SourceSansPro_400Regular",
		borderBottomWidth: 1,
		paddingBottom: 16,
		fontSize: 16,
		marginTop: 32,
	},
	passwordStyle: {
		fontFamily: "SourceSansPro_400Regular",
		fontSize: 16,
	},
	passwordBox: {
		fontFamily: "SourceSansPro_400Regular",
		borderBottomWidth: 1,
		paddingBottom: 16,
		fontSize: 16,
		marginTop: 32,
	},
	forgotText: {
		fontFamily: "SourceSansPro_400Regular",
		fontSize: 16,
		marginTop: 24,
		color: "#000",
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
	errMsg: {
		color: "red",
		fontFamily: "SourceSansPro_400Regular",
		fontSize: 14,
		marginTop: 5,
	},
});
