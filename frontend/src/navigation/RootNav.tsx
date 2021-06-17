import { ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";

import AuthRoute from "./AuthRoute";
import CoreRoute from "./CoreRoute";
import { ProductContextProvider } from "../context/ProductContext";
import { useStore } from "../context/RootContext";

type user = { username: string };

const RootNav = () => {
	const { state, userData } = useStore();

	useEffect(() => {
		console.log({ userData });
	}, [userData]);

	return userData ? (
		userData === "loading" ? (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size='large' color='#00ff00' />
			</View>
		) : (
			<ProductContextProvider>
				<CoreRoute />
			</ProductContextProvider>
		)
	) : (
		<AuthRoute />
	);
};

export default RootNav;
