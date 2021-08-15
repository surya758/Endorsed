import {
	Button,
	Dimensions,
	Image,
	SafeAreaView,
	ScrollView,
	Share,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStore } from "../../context/RootContext";

const ProductDetailScreen = ({ route, navigation }) => {
	const refToBottomSheet: any = useRef(null);
	const fall = new Animated.Value(1);
	const isFocused = useIsFocused();
	const { userData } = useStore();
	const insets = useSafeAreaInsets();
	const windowWidth = Dimensions.get("window").width;
	const currentProductId = route.params.productId;
	const [productFullData, setProductFullData] = useState({});

	const ratingCompleted = (rating) => {
		console.log("Rating is: " + rating);
	};

	const renderHeader = () => (
		<View style={styles.bottomSheetHeader}>
			<View style={{ alignItems: "center" }}>
				<View style={styles.bottomSheetBean} />
			</View>
		</View>
	);

	const renderContent = () => (
		<View style={styles.bottomSheetContent}>
			<Rating
				type='star'
				ratingCount={5}
				imageSize={60}
				showRating
				jumpValue={0.5}
				fractions={1}
				onFinishRating={ratingCompleted}
			/>
			<View style={{ marginVertical: 15, marginHorizontal: 30 }}>
				<Button title='Submit' onPress={ratingFunc} />
			</View>
		</View>
	);

	const onShare = async () => {
		try {
			const result = await Share.share({
				title: "Share Product",
				message: "This is a testing share text!",
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const ratingFunc = () => {
		refToBottomSheet.current.snapTo(1);
	};

	const getProductFunc = async () => {
		try {
			await axios
				.get(`http://13.126.33.1:3000/v1/products/${currentProductId}`, {
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
						upvotes: upvotes,
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
		<SafeAreaView style={{ flex: 1 }}>
			{/* <View style={{ height: insets.top, backgroundColor: "red" }} /> */}
			<BottomSheet
				ref={refToBottomSheet}
				snapPoints={[230, 0]}
				renderContent={renderContent}
				renderHeader={renderHeader}
				initialSnap={1}
				callbackNode={fall}
				enabledGestureInteraction={true}
			/>

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

			<View style={[styles.headerStyle, { height: insets.top + 40 }]}>
				<TouchableOpacity onPress={() => navigation.pop()}>
					<Ionicons name='arrow-back-outline' size={30} color='black' />
				</TouchableOpacity>
				<TouchableOpacity onPress={onShare}>
					<Ionicons name='share-outline' size={24} color='black' />
				</TouchableOpacity>
			</View>
			<ScrollView contentContainerStyle={{ flexGrow: 1, top: 40 }}>
				<View style={styles.scrollBox}>
					<View style={styles.topContainer}>
						<Image
							source={{
								uri: `${productFullData.imageURL}`,
							}}
							style={{ height: 150, width: 100, borderRadius: 5, resizeMode: "cover" }}
						/>
						<View style={{ marginLeft: 20 }}>
							<View style={styles.categoryBox}>
								<Text style={{ color: "white", fontFamily: "Lato_400Regular", fontSize: 14 }}>
									Mobile -{" "}
								</Text>
								<Text style={{ color: "white", fontFamily: "Lato_400Regular", fontSize: 14 }}>
									SmartPhone
								</Text>
							</View>
							<View>
								<Text style={styles.titleStyle}>{productFullData.title}</Text>
								<Text style={{ fontFamily: "SourceSansPro_400Regular", fontSize: 14 }}>
									{productFullData.manufacturer}
								</Text>
							</View>
							<View style={styles.votesBox}>
								<TouchableOpacity onPress={() => manageUpvoteFunc(productFullData.upvotes + 1)}>
									<MaterialIcons
										name='thumb-up'
										size={24}
										color='#a09a9a'
										style={{ paddingRight: 16 }}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => manageUpvoteFunc(productFullData.upvotes - 1)}>
									<MaterialIcons name='thumb-down' size={24} color='#a09a9a' />
								</TouchableOpacity>
							</View>
							<View></View>
						</View>
					</View>
				</View>
				<View style={{ flex: 1, backgroundColor: "#E8E5E5", borderRadius: 20 }}>
					<View style={styles.infoBox}>
						<View style={{ alignItems: "center" }}>
							<Text style={styles.infoTextStyle}>{productFullData.upvotes}</Text>
							<Text>Votes</Text>
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
							<Text style={styles.releaseDateBox}>{productFullData.releaseDate}</Text>
						</View>
						<View style={styles.line} />
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Ionicons name='pricetag' size={18} color='black' style={{ marginLeft: 15 }} />
								<Text style={[styles.subHeadingTextStyle, { marginLeft: 5 }]}>Price: </Text>
							</View>
							<Text style={styles.priceBox}>{productFullData.price}</Text>
						</View>
						<View style={styles.line} />
						<View>
							<Text style={styles.subHeadingTextStyle}>Description </Text>
							<Text style={styles.descriptionBox}>{productFullData.description}</Text>
							<View style={styles.line} />
						</View>
						<View>
							<Text style={styles.subHeadingTextStyle}>Specification </Text>
							<View style={{ marginHorizontal: 15, marginVertical: 10 }}>
								<Text>Ram</Text>
							</View>
						</View>
						<View style={styles.line} />
						<View>
							<Text style={styles.subHeadingTextStyle}>Reviews</Text>
							<View style={styles.reviewBox}>
								<Text>Rate this product!</Text>
								<Button title='Rate' onPress={() => refToBottomSheet.current.snapTo(0)} />
							</View>
						</View>
						<View style={styles.line} />
					</View>
				</View>
				<View style={{ height: 40 }} />
			</ScrollView>
			{/* </View> */}
		</SafeAreaView>
	);
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
	bottomSheetHeader: {
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: "#ffff",
		shadowColor: "black",
		shadowOffset: { width: -1, height: -3 },
		paddingTop: 20,
	},
	bottomSheetBean: {
		width: 40,
		height: 8,
		borderRadius: 4,
		backgroundColor: "#191970",
		marginBottom: 10,
	},
	bottomSheetContent: {
		backgroundColor: "white",
		padding: 16,
		height: 200,
	},
	headerStyle: {
		flexDirection: "row",
		left: 0,
		right: 0,
		justifyContent: "space-between",
		alignItems: "flex-end",
		position: "absolute",
		top: 0,
		paddingBottom: 8,
		paddingHorizontal: 15,
		zIndex: 5,
		backgroundColor: "#E8E5E5",
	},
	scrollBox: {
		justifyContent: "center",
		marginVertical: 30,
		top: 15,
	},
	topContainer: {
		marginTop: 20,
		marginHorizontal: 20,
		flexDirection: "row",
	},
	reviewBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 15,
	},
	descriptionBox: {
		color: "#474444",
		fontSize: 14,
		fontFamily: "Lato_400Regular",
		marginHorizontal: 15,
		marginVertical: 10,
	},
	priceBox: {
		color: "#474444",
		fontSize: 14,
		fontFamily: "Lato_700Bold",
		marginLeft: 5,
	},
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
	releaseDateBox: {
		color: "#474444",
		fontSize: 14,
		fontFamily: "Lato_400Regular",
		margin: 5,
	},
	infoBox: {
		backgroundColor: "#beb9b9",
		paddingVertical: 10,
		margin: 15,
		borderRadius: 15,
		flexDirection: "row",
		justifyContent: "space-evenly",
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
	votesBox: {
		flexDirection: "row",
		marginTop: 20,
		alignItems: "center",
	},
	categoryBox: {
		flexDirection: "row",
		backgroundColor: "#191970",
		marginBottom: 10,
		alignItems: "center",
		paddingVertical: 2,
		justifyContent: "center",
		borderRadius: 3,
		padding: 3,
	},
	titleStyle: {
		fontFamily: "SourceSansPro_600SemiBold",
		fontSize: 18,
		marginBottom: 10,
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
