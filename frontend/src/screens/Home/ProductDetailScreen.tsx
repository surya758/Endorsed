import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductDetailScreen = ({ route }) => {
	const insets = useSafeAreaInsets();

	const currentProductId = route.params;
	console.log(currentProductId);

	// const [productFullData, setProductFullData] = useState(productDataStyle);
	// const getProductFunc = async () => {
	// 	try {
	// 		await axios
	// 			.get(`http://10.0.2.2:3000/v1/products/${currentProductId}`)
	// 			.then((res) => {
	// 				setProductFullData(res.data);
	// 			});
	// 	} catch (err) {
	// 		// console.log(err);
	// 	}
	// };

	// useEffect(() => {
	// 	getProductFunc();
	// }, []);

	return (
		<>
			<View style={{ height: insets.top, backgroundColor: "red" }} />
			<View style={{ flex: 1 }}>
				<View
					style={{
						flexDirection: "row",
						marginHorizontal: 20,
						justifyContent: "space-between",
						marginTop: 20,
						alignContent: "center",
					}}
				>
					<Ionicons name='arrow-back-outline' size={30} color='black' />
					<Ionicons name='bookmark-outline' size={24} color='black' />
				</View>
				<View
					style={{
						marginTop: 20,
						marginHorizontal: 20,
						flexDirection: "row",
					}}
				>
					<Image
						source={{
							uri: "https://images.unsplash.com/photo-1600572332000-e84eb5d63843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
						}}
						style={{ height: 150, width: 100, borderRadius: 5 }}
					/>
					<View style={{ marginLeft: 20 }}>
						<View
							style={{
								flexDirection: "row",
								backgroundColor: "#2961C2",
								marginBottom: 10,
								alignItems: "center",
								paddingVertical: 2,
								justifyContent: "center",
								borderRadius: 3,
								// width: 200,
							}}
						>
							<Text style={{ color: "white", fontFamily: "Lato_400Regular", fontSize: 14 }}>
								Mobile -{" "}
							</Text>
							<Text style={{ color: "white", fontFamily: "Lato_400Regular", fontSize: 14 }}>
								SmartPhone
							</Text>
						</View>
						<View>
							<Text
								style={{ fontFamily: "SourceSansPro_400Regular", fontSize: 18, marginBottom: 10 }}
							>
								IPHONE 13
							</Text>
							<Text style={{ fontFamily: "SourceSansPro_300Light", fontSize: 14 }}>APPLE</Text>
						</View>
						<View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
							<View style={{ flexDirection: "row" }}>
								<Entypo name='thumbs-up' size={24} color='black' style={{ marginRight: 16 }} />
								<Entypo name='thumbs-down' size={24} color='black' />
							</View>
							<View style={styles.editButton}>
								<Octicons name='pencil' size={16} color='black' style={{ marginRight: 5 }} />
								<Text>Edit</Text>
							</View>
						</View>
						<View></View>
					</View>
				</View>
			</View>
			<View style={{ flex: 2, backgroundColor: "#E8E5E5", borderRadius: 20 }}>
				<View
					style={{ backgroundColor: "#8E8A8A", padding: 30, margin: 15, borderRadius: 10 }}
				></View>
			</View>
		</>
	);
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
	editButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#ffffff",
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "#000000",
		justifyContent: "space-between",
		marginLeft: 30,
	},
});
