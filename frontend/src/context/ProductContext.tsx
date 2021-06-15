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
			"https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
		title: "JOIN US ONLINE?",
		description: "des1",
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80",
		title: "MACBOOK PRO",
		description: "des2",
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1581993192008-63e896f4f744?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2094&q=80",
		title: "FOLDABLE PHONE",
		description: "des3",
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1533228100845-08145b01de14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=978&q=80",
		title: "PIXEL PRO",
		description: "des1",
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1513908957990-b2790723edbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		title: "SOME MOBILE",
		description: "des2",
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1543331858-d844b6d0234e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
		title: "MIXTURE?",
		description: "des3",
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1454997423871-b5215756e54d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		title: "BRRRRRRRRRR",
		description: "des1",
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
		title: "NOT-A-PHONE PHONE",
		description: "des2",
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=583&q=80",
		title: "MEMEABLE",
		description: "des3",
	},
];

export const ProductContextProvider = ({ children }) => {
	const [testFlatData, setTestFlatData] =
		useState<Array<productType>>(testFlatData0);
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
