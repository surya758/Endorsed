import {
	Alert,
	FlatList,
	ImageBackground,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import Animated from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BookmarkGrid from "../../components/BookmarkGrid";
import BottomSheet from "reanimated-bottom-sheet";
import { Divider } from "react-native-elements";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStore } from "../../context/RootContext";

const BookmarkScreen = ({ navigation }) => {
	const { userData } = useStore();
	const isFocused = useIsFocused();
	const numColumns = 3;
	let componentMounted = true;
	const refToBottomSheet: any = useRef(null);
	const fall = new Animated.Value(1);

	const [bookMarkDataFromDB, setBookMarkDataFromDB] = useState([]);

	const removeBookMark = async (productId) => {
		const bookmarkStr = await AsyncStorage.getItem("bookmark");
		const bookmark = JSON.parse(bookmarkStr);
		const bookMarkData = [];

		if (bookmark) {
			bookMarkData.push(...bookmark);
		}
		try {
			if (bookMarkData.indexOf(productId) === -1) {
				bookMarkData.push(productId);
				await AsyncStorage.setItem("bookmark", JSON.stringify(bookMarkData));
			}
		} catch (e) {
			console.error(e);
		}
	};

	const getBookMarkData = async () => {
		const bookmarkStr = await AsyncStorage.getItem("bookmark");
		const bookmark = JSON.parse(bookmarkStr);
		const bookmarkArr: any = [];
		try {
			bookmark.forEach(async function (item, index) {
				await axios
					.get(`http://13.126.33.1:3000/v1/products/${item}?field=imageURL,title`, {
						headers: {
							Authorization: "Bearer " + userData.tokens.access.token,
						},
					})
					.then((res) => bookmarkArr.push(res.data));
				if (componentMounted) {
					setBookMarkDataFromDB(bookmarkArr);
				}
			});
		} catch (error) {
			console.log(error);
		}
	};
	const renderHeader = () => {
		return (
			<View style={styles.bottomSheetHeader}>
				<View style={{ alignItems: "center" }}>
					<View style={styles.bottomSheetBean} />
				</View>
			</View>
		);
	};

	const renderContent = () => {
		return (
			<View style={styles.bottomSheetContent}>
				<View>
					<Pressable
						style={{ flexDirection: "row", alignItems: "center" }}
						onPress={() => console.log()}
					>
						<AntDesign name='delete' size={24} color='black' />
						<Text style={{ padding: 10, fontFamily: "Lato_400Regular", fontSize: 16 }}>
							Remove from bookmarks
						</Text>
					</Pressable>
					<Divider orientation='horizontal' />
					<Pressable
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
						onPress={() => refToBottomSheet.current.snapTo(1)}
					>
						<Text
							style={{ padding: 10, fontFamily: "Lato_700Bold", fontSize: 16, color: "#191970" }}
						>
							Cancel
						</Text>
					</Pressable>
				</View>
			</View>
		);
	};

	const renderItem = (item) => {
		return (
			<>
				<Pressable
					style={{
						alignItems: "center",
						justifyContent: "flex-start",
						flex: 1,
						margin: 8,
					}}
					onPress={() => navigation.navigate("ProductDetail", { productId: item.id })}
				>
					<View style={{ alignItems: "center" }}>
						<ImageBackground
							source={{
								uri: item.imageURL,
							}}
							style={[styles.image, { justifyContent: "flex-end" }]}
							imageStyle={styles.imageStyle}
						>
							<View
								style={{
									opacity: 0.8,
									backgroundColor: "#000",
									borderBottomLeftRadius: 10,
									borderBottomRightRadius: 10,
									alignItems: "flex-end",
									height: 20,
									justifyContent: "center",
								}}
							>
								<Pressable
									style={{ marginRight: 5 }}
									onPress={() => refToBottomSheet.current.snapTo(0)}
									hitSlop={8}
								>
									<Entypo name='dots-three-horizontal' size={16} color='#fff' />
								</Pressable>
							</View>
						</ImageBackground>
						<Text
							style={{
								fontSize: 12,
								paddingVertical: 5,
								textAlign: "left",
								fontFamily: "SourceSansPro_700Bold",
							}}
						>
							{item.title}
						</Text>
					</View>
				</Pressable>
			</>
		);
	};
	useEffect(() => {
		getBookMarkData();
	}, [navigation]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitleStyle: { ...styles.headerTitleStyle },
		});
	}, [navigation]);

	return (
		<>
			<BottomSheet
				ref={refToBottomSheet}
				snapPoints={[150, -10]}
				renderContent={renderContent}
				renderHeader={renderHeader}
				initialSnap={1}
				callbackNode={fall}
				enabledGestureInteraction={true}
			/>

			<FlatList
				data={bookMarkDataFromDB}
				key={"#"}
				numColumns={numColumns}
				keyExtractor={(product) => product.title.toString()}
				renderItem={({ item }) => renderItem(item)}
				bounces={false}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={true}
			/>
		</>
	);
};

export default BookmarkScreen;

const styles = StyleSheet.create({
	headerTitleStyle: {
		fontFamily: "SourceSansPro_600SemiBold",
		fontSize: 20,
	},
	headerStyle: {
		fontSize: 18,
		color: "#707070",
		fontFamily: "SourceSansPro_600SemiBold",
		marginLeft: 15,
	},
	image: {
		width: 100,
		height: 150,
	},
	imageStyle: {
		borderRadius: 6,
	},
	bottomSheetHeader: {
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: "#ffff",
		shadowColor: "black",
		shadowOffset: { width: -1, height: -3 },
		paddingTop: 20,
		shadowOpacity: 0.5,
		shadowRadius: 2,
	},
	bottomSheetContent: {
		backgroundColor: "white",
		padding: 16,
		height: 200,
	},
	bottomSheetBean: {
		width: 40,
		height: 8,
		borderRadius: 4,
		backgroundColor: "#191970",
		marginBottom: 10,
	},
});
