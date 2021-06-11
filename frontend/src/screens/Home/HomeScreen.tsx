import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
	RobotoMono_300Light,
	RobotoMono_500Medium,
	useFonts,
} from "@expo-google-fonts/roboto-mono";
import {
	SourceSansPro_300Light,
	SourceSansPro_400Regular,
	SourceSansPro_600SemiBold,
	SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";

import Endorsed from "../../assets/icons/Endorsed";
import { Ionicons } from "@expo/vector-icons";
import ProductCard from "../../components/ProductCard";
import ProductContext from "../../context/ProductContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import axios from "axios";

// const testFlatData0 = [
// 	{
// 		imageURL:
// 			"https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
// 		title: "title1",
// 		description: "des1",
// 	},
// 	{
// 		imageURL:
// 			"https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
// 		title: "title2",
// 		description: "des2",
// 	},
// 	{
// 		imageURL:
// 			"https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
// 		title: "title3",
// 		description: "des3",
// 	},
// ];

// type productType = {
// 	imageURL: string;
// 	title: string;
// 	description: string;
// };

const HomeScreen = ({ navigation }) => {
	const product = useContext(ProductContext);
	// const [testFlatData, setTestFlatData] =
	// 	useState<Array<productType>>(testFlatData0);
	// const getProductFunc = async () => {
	// 	try {
	// 		await axios.get("http://10.0.2.2:3000/v1/products").then((res) => {
	// 			setTestFlatData(res.data);
	// 		});
	// 	} catch (err) {
	// 		// console.log(err);
	// 	}
	// };

	// useEffect(() => {
	// 	getProductFunc();
	// }, []);

	const insets = useSafeAreaInsets();
	let [fontsLoaded] = useFonts({
		RobotoMono_500Medium,
		RobotoMono_300Light,
		SourceSansPro_300Light,
		SourceSansPro_400Regular,
		SourceSansPro_600SemiBold,
		SourceSansPro_700Bold,
	});
	if (!fontsLoaded) {
		return <View />;
	}
	return (
		<>
			<View style={{ height: insets.top }} />
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginHorizontal: 20,
				}}
			>
				<Endorsed />
				<Text
					style={{
						fontSize: 20,
						fontFamily: "RobotoMono_300Light",
						letterSpacing: 3,
						color: "#005245",
					}}
				>
					ENDORSED
				</Text>
				<Ionicons name='bookmarks' size={24} color='black' />
			</View>
			<View style={{ flex: 15 }}>
				<View style={styles.line} />
				<View style={{ marginHorizontal: 20 }}>
					<Text
						style={{
							fontFamily: "RobotoMono_500Medium",
							fontSize: 24,
							color: "#707070",
							marginTop: 10,
						}}
					>
						Welcome, Surya
					</Text>
					<Text
						style={{
							fontFamily: "SourceSansPro_700Bold",
							fontSize: 18,
							marginTop: 10,
						}}
					>
						Here's your recommendations...
					</Text>
				</View>
				<FlatList
					data={product}
					keyExtractor={(product) => product.title}
					renderItem={({ item }) => {
						return <ProductCard item={item} navigation={navigation} />;
					}}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={true}
				/>
			</View>
		</>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	line: {
		borderBottomColor: "#707070",
		borderBottomWidth: 1,
		opacity: 0.3,
		marginHorizontal: 20,
	},
});
