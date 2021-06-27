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
import React, { useRef, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RegisterScreen = (props: any) => {
	const [hidePass, setHidePass] = useState(true);
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isPasswordValid, setIsPasswordValid] = useState(true);
	const insets = useSafeAreaInsets();
	const [userFullName, setUserFullName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const emailIsValid = (email) => {
		return setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()));
	};

	const passwordIsValid = (password) => {
		return setIsPasswordValid(
			/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password.trim())
		);
	};
	const storeData = async (value: valueType) => {
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
			props.navigation.navigate("Core", { screen: "Home" });
		} catch (err) {
			Alert.alert("Uh oh...", `${err}`, [
				{ text: "Okay", onPress: () => console.log("Okay Pressed") },
			]);
			console.log({ err });
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1 }}>
				<View style={{ height: insets.top }} />
				<View style={{ flex: 4 }}>
					<TouchableOpacity
						style={styles.backIcon}
						onPress={() => {
							props.navigation.navigate("Welcome");
						}}
					>
						<Ionicons name='arrow-back-circle' size={40} color='black' />
					</TouchableOpacity>

					<View style={{ marginTop: 30 }}>
						<Text style={styles.registerText}>Register</Text>
					</View>

					<View
						style={{
							marginHorizontal: 40,
						}}
					>
						<TextInput
							style={styles.nameStyle}
							value={userFullName.trimStart().trimLeft()}
							onChangeText={setUserFullName}
							placeholder='FULL NAME'
							autoCapitalize='none'
							autoCorrect={false}
							placeholderTextColor='#707070'
							autoFocus={true}
						/>
						<TextInput
							style={styles.emailStyle}
							value={userEmail.trimStart().trimLeft()}
							onChangeText={setUserEmail}
							placeholder='EMAIL'
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
								flexDirection: "row",
								borderBottomWidth: 1,
								paddingBottom: 16,
								justifyContent: "space-between",
								alignItems: "flex-end",
							}}
						>
							<TextInput
								style={styles.passwordStyle}
								value={userPassword.trim()}
								onChangeText={setUserPassword}
								placeholder='PASSWORD'
								autoCapitalize='none'
								autoCorrect={false}
								textContentType='password'
								placeholderTextColor='#707070'
								secureTextEntry={hidePass ? true : false}
								onEndEditing={(e) => passwordIsValid(e.nativeEvent.text)}
							/>
							<TouchableOpacity onPress={() => setHidePass(!hidePass)}>
								<Ionicons name={hidePass ? "eye-off" : "eye"} size={24} color='#000' />
							</TouchableOpacity>
						</View>
						{isPasswordValid ? null : (
							<Text style={styles.errMsg}>
								Password must contain at least one numeric digit and a special character.
							</Text>
						)}

						<TouchableOpacity
							style={{
								alignItems: "center",
								alignSelf: "center",
							}}
						>
							<Text style={styles.forgotText}>Forgot your password?</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.createAccountBox} onPress={() => createUserFunc()}>
						<Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	backIcon: {
		marginLeft: 40,
		marginTop: 50,
		alignSelf: "flex-start",
	},
	registerText: {
		fontFamily: "SourceSansPro_400Regular",
		textAlign: "center",
		fontSize: 20,
	},
	nameStyle: {
		fontFamily: "SourceSansPro_400Regular",
		borderBottomColor: "#707070",
		borderBottomWidth: 1,
		paddingBottom: 16,
		fontSize: 16,
		marginTop: 24,
	},
	emailStyle: {
		fontFamily: "SourceSansPro_400Regular",
		borderBottomColor: "#707070",
		borderBottomWidth: 1,
		paddingBottom: 16,
		marginTop: 24,
		fontSize: 16,
	},
	passwordStyle: {
		fontFamily: "SourceSansPro_400Regular",
		borderBottomColor: "#707070",
		fontSize: 16,
		marginTop: 24,
	},
	errMsg: {
		color: "red",
		fontFamily: "SourceSansPro_400Regular",
		fontSize: 14,
		marginTop: 5,
	},
	forgotText: {
		fontFamily: "SourceSansPro_400Regular",
		fontSize: 16,
		marginTop: 16,
	},
	createAccountBox: {
		backgroundColor: "#000000",
		alignItems: "center",
		borderRadius: 20,
		marginHorizontal: 60,
		marginVertical: 32,
	},
	createAccountText: {
		fontFamily: "SourceSansPro_400Regular",
		color: "#FFFFFF",
		paddingVertical: 10,
		fontSize: 16,
	},
});
