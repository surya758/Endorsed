import "react-native-gesture-handler";

import { ProductContextProvider } from "./src/context/ProductContext";
import React from "react";
import { RootContextProvider } from "./src/context/RootContext";
import RootNavigator from "./src/navigation/root-navigator";
import { StatusBar } from "expo-status-bar";

export default () => {
	return (
		<ProductContextProvider>
			<RootContextProvider>
				<RootNavigator />
			</RootContextProvider>
		</ProductContextProvider>
	);
};
