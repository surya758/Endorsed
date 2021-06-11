import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import React, { useEffect, useState } from "react";

type PropType = {
	item: { imageURL: string; title: String; description: String };
};

const ProductCard = (props: PropType) => {
	let [fontsLoaded] = useFonts({
		Lato_400Regular,
	});
	if (!fontsLoaded) {
		return <View />;
	}
	return (
		<View style={{ flex: 1, marginHorizontal: 20 }}>
			<View style={styles.line} />
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate("ProductDetail", { item: props.item });
				}}
			>
				<View style={{ flexDirection: "row", marginTop: 5 }}>
					<Image
						source={{
							uri: props.item.imageURL,
						}}
						style={{
							width: 100,
							height: 150,
							borderRadius: 10,
						}}
					/>
					<View style={{ justifyContent: "space-evenly", marginLeft: 20 }}>
						<Text style={{ fontFamily: "Lato_400Regular", fontSize: 16 }}>
							{props.item.title}
						</Text>
						<Text style={{ fontFamily: "Lato_400Regular", fontSize: 14 }}>
							{props.item.description}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ProductCard;

const styles = StyleSheet.create({
	line: {
		borderBottomColor: "#707070",
		borderBottomWidth: 1,
		opacity: 0.3,
		marginTop: 15,
	},
});
