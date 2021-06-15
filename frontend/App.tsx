import "react-native-gesture-handler";

import {
	Lato_300Light,
	Lato_400Regular,
	Lato_700Bold,
} from "@expo-google-fonts/lato";
import {
	RobotoMono_300Light,
	RobotoMono_400Regular,
	RobotoMono_500Medium,
	RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";
import {
	SourceSansPro_300Light,
	SourceSansPro_400Regular,
	SourceSansPro_600SemiBold,
	SourceSansPro_700Bold,
	useFonts,
} from "@expo-google-fonts/source-sans-pro";

import AppLoading from "expo-app-loading";
import { ProductContextProvider } from "./src/context/ProductContext";
import React from "react";
import { RootContextProvider } from "./src/context/RootContext";
import RootNav from "./src/navigation/RootNav";
import { StatusBar } from "expo-status-bar";

export default () => {
	let [fontsLoaded] = useFonts({
		SourceSansPro_300Light,
		SourceSansPro_400Regular,
		SourceSansPro_600SemiBold,
		SourceSansPro_700Bold,
		RobotoMono_300Light,
		RobotoMono_400Regular,
		RobotoMono_500Medium,
		RobotoMono_700Bold,
		Lato_300Light,
		Lato_400Regular,
		Lato_700Bold,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<ProductContextProvider>
			<RootContextProvider>
				<RootNav />
			</RootContextProvider>
		</ProductContextProvider>
	);
};
