import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type productType = {
	id: string;
};

const productDataStyle = {
	//many params
};
const ProductDetailScreen = ({ route }) => {
	const Insets = useSafeAreaInsets();
	const currentProductId = route.params.item.id;
	// console.log(currentProductId);

	const [productFullData, setProductFullData] = useState(productDataStyle);
	const getProductFunc = async () => {
		try {
			await axios
				.get(`http://10.0.2.2:3000/v1/products/${currentProductId}`)
				.then((res) => {
					setProductFullData(res.data);
				});
		} catch (err) {
			// console.log(err);
		}
	};

	useEffect(() => {
		getProductFunc();
	}, []);

	return (
		<View>
			<View style={{ height: Insets.top, backgroundColor: "red" }} />
			<Text>ProductDetail</Text>
			<Text>ProductDetail</Text>
			<Text>ProductDetail</Text>
			<Text>ProductDetail</Text>
		</View>
	);
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
