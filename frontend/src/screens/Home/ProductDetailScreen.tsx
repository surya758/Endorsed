import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStore } from "../../context/RootContext";

const ProductDetailScreen = ({ route, navigation }) => {
	const isFocused = useIsFocused();
	const { userData } = useStore();
	const insets = useSafeAreaInsets();
	const windowWidth = Dimensions.get("window").width;
	const currentProductId = route.params.productId;
	const [productFullData, setProductFullData] = useState({});
	const getProductFunc = async () => {
		try {
			await axios
				.get(`http://10.0.2.2:3000/v1/products/${currentProductId}`, {
					headers: {
						Authorization: "Bearer " + userData.tokens.access.token,
					},
				})
				.then((res) => {
					setProductFullData(res.data);
					manageViewsFunc(res.data.views);
				});
		} catch (err) {
			// console.log(err);
		}
	};

	const manageViewsFunc = async (views) => {
		try {
			await axios
				.patch(
					`http://10.0.2.2:3000/v1/products/${currentProductId}`,
					{
						views: views + 1,
					},
					{
						headers: {
							Authorization: "Bearer " + userData.tokens.access.token,
						},
					}
				)
				.then((res) => {
					setProductFullData(res.data);
				});
		} catch (err) {}
	};

	const manageUpvoteFunc = async (upvotes) => {
		try {
			await axios
				.patch(
					`http://10.0.2.2:3000/v1/products/${currentProductId}`,
					{
						upvotes: upvotes + 1,
					},
					{
						headers: {
							Authorization: "Bearer " + userData.tokens.access.token,
						},
					}
				)
				.then((res) => {
					setProductFullData(res.data);
				});
		} catch (err) {}
	};

	useEffect(() => {
		getProductFunc();
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<View style={{ height: insets.top, backgroundColor: "red" }} />

			{/* <View
				style={{
					width: 0.8 * windowWidth,
					height: 60,
					position: "absolute",
					alignSelf: "center",
					bottom: 30,
					backgroundColor: "#fff",
					zIndex: 10,
					shadowOpacity: 0.5,
					shadowRadius: 5,
					shadowColor: "black",
					shadowOffset: { width: 0, height: 0 },
					elevation: 10,
					borderRadius: 30,
				}}
			/> */}
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
					<TouchableOpacity onPress={() => navigation.pop()}>
						<Ionicons name='arrow-back-outline' size={30} color='black' />
					</TouchableOpacity>
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
							uri: `${productFullData.imageURL}`,
						}}
						style={{ height: 150, width: 100, borderRadius: 5, resizeMode: "cover" }}
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
								padding: 3,
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
								style={{ fontFamily: "SourceSansPro_600SemiBold", fontSize: 18, marginBottom: 10 }}
							>
								{productFullData.title}
							</Text>
							<Text style={{ fontFamily: "SourceSansPro_400Regular", fontSize: 14 }}>
								{productFullData.manufacturer}
							</Text>
						</View>
						<View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
							<View style={{ flexDirection: "row" }}>
								<TouchableOpacity onPress={() => manageUpvoteFunc(productFullData.upvotes)}>
									<MaterialIcons
										name='thumb-up'
										size={24}
										color='#a09a9a'
										style={{ marginRight: 16 }}
									/>
								</TouchableOpacity>

								<MaterialIcons name='thumb-down' size={24} color='#a09a9a' />
							</View>
							{/* <View style={styles.editButton}>
								<Octicons name='pencil' size={16} color='black' style={{ marginRight: 5 }} />
								<Text>Edit</Text>
							</View> */}
						</View>
						<View></View>
					</View>
				</View>
			</View>
			<View style={{ flex: 2, backgroundColor: "#E8E5E5", borderRadius: 20 }}>
				<View
					style={{
						backgroundColor: "#beb9b9",
						paddingVertical: 10,
						margin: 15,
						borderRadius: 15,
						flexDirection: "row",
						justifyContent: "space-evenly",
					}}
				>
					<View style={{ alignItems: "center" }}>
						<Text style={styles.infoTextStyle}>{productFullData.upvotes}</Text>
						<Text>Upvotes</Text>
					</View>
					<View style={{ alignItems: "center" }}>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Text style={styles.infoTextStyle}>{productFullData.rating}</Text>
							<Ionicons name='star' size={14} color='white' />
						</View>
						<Text>Ratings</Text>
					</View>
					<View style={{ alignItems: "center" }}>
						<Text style={styles.infoTextStyle}>{productFullData.views}</Text>
						<Text>Views</Text>
					</View>
				</View>
				<View>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text style={styles.subHeadingTextStyle}>Release Date: </Text>
						<Text
							style={{
								color: "#474444",
								fontSize: 14,
								fontFamily: "Lato_400Regular",
								margin: 5,
							}}
						>
							{productFullData.releaseDate}
						</Text>
					</View>
					<View style={styles.line} />
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Ionicons name='pricetag' size={18} color='black' style={{ marginLeft: 15 }} />
							<Text style={[styles.subHeadingTextStyle, { marginLeft: 5 }]}>Price: </Text>
						</View>
						<Text
							style={{ color: "#474444", fontSize: 14, fontFamily: "Lato_700Bold", marginLeft: 5 }}
						>
							{productFullData.price}
						</Text>
					</View>
					<View style={styles.line} />
					<View>
						<Text style={styles.subHeadingTextStyle}>Description </Text>
						<Text
							style={{
								color: "#474444",
								fontSize: 14,
								fontFamily: "Lato_400Regular",
								marginHorizontal: 15,
								marginVertical: 10,
							}}
						>
							{productFullData.description}
						</Text>
						<View style={styles.line} />
					</View>
					<View>
						<Text style={styles.subHeadingTextStyle}>Specification </Text>
						<View>
							<Text>Ram</Text>
						</View>
					</View>
					<View style={styles.line} />
					<View>
						<Text style={styles.subHeadingTextStyle}>Specification </Text>
						<View>
							<Text>Ram</Text>
						</View>
					</View>
					<View style={styles.line} />
				</View>
			</View>
		</View>
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
	infoTextStyle: {
		color: "#fff",
		fontFamily: "SourceSansPro_700Bold",
		fontSize: 20,
	},
	infoTitleStyle: {
		color: "#474444",
		fontFamily: "RobotoMono_400Regular",
		fontSize: 8,
	},
	line: {
		borderBottomWidth: 0.5,
		borderBottomColor: "#000",
		marginHorizontal: 15,
		marginVertical: 10,
	},
	subHeadingTextStyle: {
		fontFamily: "SourceSansPro_600SemiBold",
		fontSize: 16,
		marginLeft: 15,
	},
});
