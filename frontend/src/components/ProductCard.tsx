import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
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
	return (
		<View
			style={{
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
			}}
		>
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
					/>
					<View style={{ justifyContent: "space-evenly", marginLeft: 15 }}>
						<Text style={{ fontFamily: "Lato_400Regular", fontSize: 16 }}>{props.item.title}</Text>
						<Text style={{ fontFamily: "Lato_400Regular", fontSize: 14 }}>
							{props.item.manufacturer}
							{/* Google */}
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
							>
								<AntDesign name='pluscircle' size={15} color='#191970' />
								<Text style={styles.saveText}>SAVE</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.ratingAndViewsBox}>
							<Ionicons name='star' size={14} color='grey' />

							<Text style={styles.rating}>
								{props.item.rating}
								{/* 2.9 */}
							</Text>
							<AntDesign name='eye' size={14} color='grey' />
							<Text style={styles.views}>
								{props.item.views}
								{/* 1500 */}
							</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ProductCard;

const styles = StyleSheet.create({
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
