import { Animated, Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";

import Endorsed from "../../assets/icons/Endorsed";
import { Ionicons } from "@expo/vector-icons";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStore } from "../../context/RootContext";

const windowWidth = Dimensions.get("window").width;

type productType = {
	title: string;
	manufacturer: string;
	views: number;
	rating: number;
	imageURL: string;
	id: string;
};

const HomeScreen = ({ navigation }) => {
	const isFocused = useIsFocused();

	const { userData } = useStore();
	const insets = useSafeAreaInsets();
	const scrollY = new Animated.Value(0);
	const HEADER_HEIGHT = 50;
	const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
	const translateY = diffClamp.interpolate({
		inputRange: [0, HEADER_HEIGHT],
		outputRange: [0, -HEADER_HEIGHT],
		extrapolate: "clamp",
	});
	// const product = useContext(ProductContext);
	const [testFlatData, setTestFlatData] = useState<Array<productType>>([
		{ title: "", manufacturer: "", views: 0, rating: 0, imageURL: "", id: "" },
	]);
	const getProductFunc = async () => {
		try {
			await axios
				.get("http://10.0.2.2:3000/v1/products?fields=title,manufacturer,rating,views,imageURL", {
					headers: {
						Authorization: "Bearer " + userData.tokens.access.token,
					},
				})
				.then((res) => {
					setTestFlatData(res.data.results);
				});
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getProductFunc();
	}, [isFocused]);

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
				data={testFlatData}
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
