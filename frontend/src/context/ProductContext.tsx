import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import axios from "axios";

const ProductContext = React.createContext({});
type productType = {
	imageURL: string;
	title: string;
	description: string;
};

const testFlatData0 = [
	{
		imageURL:
			"https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
		title: "title1",
		description: "des1",
	},
	{
		imageURL:
			"https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
		title: "title2",
		description: "des2",
	},
	{
		imageURL:
			"https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
		title: "title3",
		description: "des3",
	},
];

export const ProductContextProvider = ({ children }) => {
	const [testFlatData, setTestFlatData] =
		useState<Array<productType>>(testFlatData0);
	const getProductFunc = async () => {
		try {
			await axios.get("http://10.0.2.2:3000/v1/products").then((res) => {
				setTestFlatData(res.data);
			});
		} catch (err) {
			// console.log(err);
		}
	};

	useEffect(() => {
		getProductFunc();
	}, []);
	// const getProductsFunc = async () => {
	// 	try {
	// 		await axios.get("http://10.0.2.2:3000/v1/products/");
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	return (
		<ProductContext.Provider value={testFlatData}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContext;

const styles = StyleSheet.create({});
