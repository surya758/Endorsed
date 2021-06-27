import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

type PropType = {
	item: {
		id: string;
		imageURL: string;
		title: String;
		manufacturer: String;
		views: number;
		rating: number;
	};
};

const ProductCard = (props: PropType) => {
	const saveBookMark = async (productId) => {
		const bookmarkStr = await AsyncStorage.getItem("bookmark");
		const bookmark = JSON.parse(bookmarkStr);
		const bookMarkData = [];

		if (bookmark) {
			bookMarkData.push(...bookmark);
		}
		try {
			if (bookMarkData.indexOf(productId) === -1) {
				bookMarkData.push(productId);
				await AsyncStorage.setItem("bookmark", JSON.stringify(bookMarkData));
			}
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate("ProductDetail", { productId: props.item.id });
				}}
				activeOpacity={0.8}
			>
				<View style={{ flexDirection: "row", marginVertical: 8 }}>
					<Image
						source={{
							uri: props.item.imageURL,
						}}
						style={styles.image}
						PlaceholderContent={<ActivityIndicator />}
					/>
					<View style={{ justifyContent: "space-evenly", marginLeft: 15 }}>
						<Text style={{ fontFamily: "Lato_400Regular", fontSize: 16 }}>
							{props.item.title.toUpperCase()}
						</Text>
						<Text style={{ fontFamily: "Lato_400Regular", fontSize: 14 }}>
							{props.item.manufacturer}
						</Text>
						<View style={styles.category}>
							<Text style={{ fontFamily: "Lato_400Regular", fontSize: 10 }}>
								{/* {props.item.category} */} Mobiles
							</Text>

							<Entypo name='dot-single' size={12} color='#303030' />

							<Text style={{ fontFamily: "Lato_400Regular", fontSize: 10 }}>
								{/* {props.item.subcategory} */} Smart Phones
							</Text>
							<TouchableOpacity
								style={{
									flexDirection: "row",
									paddingLeft: 20,
								}}
								onPress={() => saveBookMark(props.item.id)}
							>
								<AntDesign name='pluscircle' size={15} color='#191970' />
								<Text style={styles.saveText}>SAVE</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.ratingAndViewsBox}>
							<Ionicons name='star' size={14} color='grey' />

							<Text style={styles.rating}>{props.item.rating}</Text>
							<AntDesign name='eye' size={14} color='grey' />
							<Text style={styles.views}>{props.item.views}</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ProductCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		elevation: 10,
		shadowRadius: 5,
		shadowOpacity: 0.1,
		shadowColor: "#000",
		shadowOffset: { height: 0, width: 0 },
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 5,
		marginHorizontal: 5,
	},
	image: {
		width: 80,
		height: 100,
		borderRadius: 10,
		marginLeft: 5,
	},
	category: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	saveText: {
		fontSize: 12,
		fontFamily: "Lato_400Regular",
		marginLeft: 5,
		color: "#191970",
	},
	ratingAndViewsBox: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	rating: {
		fontFamily: "Lato_400Regular",
		fontSize: 14,
		marginLeft: 5,
		marginRight: 20,
	},
	views: {
		fontFamily: "Lato_400Regular",
		fontSize: 14,
		marginLeft: 5,
	},
});
