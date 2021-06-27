import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStore } from "../../context/RootContext";

const BookmarkScreen = ({ navigation }) => {
	const { userData } = useStore();
	const isFocused = useIsFocused();
	let componentMounted = true;
	const [bookMarkDataFromDB, setBookMarkDataFromDB] = useState([]);
	const insets = useSafeAreaInsets();
	const HEADER_HEIGHT = insets.top + 40;
	const getBookMarkData = async () => {
		const bookmarkStr = await AsyncStorage.getItem("bookmark");
		const bookmark = JSON.parse(bookmarkStr);
		const bookmarkArr: any = [];
		try {
			bookmark.forEach(async function (item, index) {
				await axios
					.get(`http://10.0.2.2:3000/v1/products/${item}?field=imageURL,title`, {
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

	useEffect(() => {
		getBookMarkData();
	}, []);

	return (
		<View>
			<View
				style={{
					left: 0,
					right: 0,
					top: 0,
					height: HEADER_HEIGHT,
					backgroundColor: "#e60026",
					position: "absolute",
					zIndex: 10,
				}}
			></View>
			<View style={{ top: HEADER_HEIGHT }}>
				<Text>Bookmark</Text>
				<Text>Bookmark</Text>
				<Text>Bookmark</Text>
				<Text>Bookmark</Text>
				<Text>Bookmark</Text>
			</View>
		</View>
	);
};

export default BookmarkScreen;

const styles = StyleSheet.create({});
