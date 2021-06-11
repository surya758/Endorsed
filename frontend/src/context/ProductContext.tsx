import { StyleSheet, Text, View } from "react-native";

import React from "react";
import axios from "axios";

const ProductContext = React.createContext({});

export const ProductContextProvider = ({ children }) => {
	const getProductFunc = async () => {
		try {
			await axios.get(
				"http://10.0.2.2:3000/v1/products/60c1e7d11ab7af2f84f486d7"
			);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<ProductContext.Provider value={{ getProductFunc }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContext;

const styles = StyleSheet.create({});
