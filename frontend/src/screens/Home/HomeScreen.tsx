import { Animated, Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";

import Endorsed from "../../assets/icons/Endorsed";
import { Ionicons } from "@expo/vector-icons";
import ProductCard from "../../components/ProductCard";
import ProductContext from "../../context/ProductContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const scrollY = new Animated.Value(0);
	const HEADER_HEIGHT = 50;
	const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
	const translateY = diffClamp.interpolate({
		inputRange: [0, HEADER_HEIGHT],
		outputRange: [0, -HEADER_HEIGHT],
		extrapolate: "clamp",
	});
	const product = useContext(ProductContext);
	// const [headerHeight, setHeaderHeight] = useState < number > 50;
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

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					height: insets.top,
					backgroundColor: "#f3f3f3",
					zIndex: 2,
				}}
			/>
			<Animated.View
				style={[
					styles.headerBox,
					{
						top: insets.top,
						height: HEADER_HEIGHT,
						transform: [{ translateY: translateY }],
					},
				]}
			>
				<Endorsed />
				<Text style={styles.headerText}>ENDORSED</Text>
				<Ionicons name='bookmarks' size={24} color='black' />
			</Animated.View>

			<FlatList
				scrollEventThrottle={16}
				style={{ paddingTop: HEADER_HEIGHT }}
				bounces={false}
				onScroll={(e) => {
					scrollY.setValue(e.nativeEvent.contentOffset.y);
				}}
				data={product}
				keyExtractor={(product) => product.id.toString()}
				renderItem={({ item }) => {
					return <ProductCard item={item} navigation={navigation} />;
				}}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={true}
				ItemSeparatorComponent={() => {
					return <View style={{ height: 10 }} />;
				}}
				contentContainerStyle={{
					// padding: 5,
					paddingTop: 5,
				}}
				ListFooterComponent={<View style={{ height: 60 }} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	headerBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
		paddingHorizontal: 20,
		zIndex: 1,
		backgroundColor: "#f3f3f3",
		width: windowWidth,
		overflow: "hidden",
		left: 0,
		right: 0,
		borderBottomColor: "#D0D0D0",
		borderBottomWidth: 1,
	},
	headerText: {
		fontSize: 20,
		fontFamily: "RobotoMono_400Regular",
		letterSpacing: 3,
		color: "#005245",
	},
	welcomeText: {
		fontFamily: "RobotoMono_500Medium",
		fontSize: 24,
		color: "#707070",
		marginTop: 10,
	},
	recomText: {
		fontFamily: "SourceSansPro_700Bold",
		fontSize: 18,
		marginTop: 10,
	},
});

export default HomeScreen;
