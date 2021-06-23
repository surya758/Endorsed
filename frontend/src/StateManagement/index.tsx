import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootContextProvider } from "../context/RootContext";
import RootNav from "../navigation/RootNav";

const RootState = () => {
	const [state, setState] = useState<string>("LOL");
	const [userData, setUserData] = useState<object | "loading" | null>("loading");
	const [mainScreenProductList, setMainScreenProductList] =
		useState<object | "loading" | null>("loading");

	const getUserDataFromLocalStorage = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("accessUserCred");
			if (jsonValue) {
				setUserData(JSON.parse(jsonValue));
			} else {
				setUserData(null);
			}
		} catch (e) {
			setUserData(null);
		}
	};

	useEffect(() => {
		getUserDataFromLocalStorage();
	}, [state]);

	return (
		<RootContextProvider
			state={state}
			setState={setState}
			userData={userData}
			getUserDataFromLocalStorage={getUserDataFromLocalStorage}
		>
			<RootNav />
		</RootContextProvider>
	);
};

export default RootState;

const styles = StyleSheet.create({});
