import {
	ActivityIndicator,
	Dimensions,
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useRef } from "react";

import Animated from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";

const BookmarkGrid = (props) => {
	return (
		<>
			<Pressable
				style={{
					alignItems: "center",
					justifyContent: "flex-start",
					flex: 1,
					margin: 8,
				}}
				onPress={() => props.navigation.navigate("ProductDetail", { productId: props.item.id })}
			>
				<View style={{ alignItems: "center" }}>
					<ImageBackground
						source={{
							uri: props.item.imageURL,
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
							}}
						>
							<Pressable style={{ marginRight: 5 }} onPress={() => {}} hitSlop={8}>
								<Entypo name='dots-three-horizontal' size={15} color='#fff' />
							</Pressable>
						</View>
					</ImageBackground>
					<Text style={{ fontSize: 12, paddingVertical: 5, textAlign: "left" }}>
						{props.item.title}
					</Text>
				</View>
			</Pressable>
		</>
	);
};

export default BookmarkGrid;

const styles = StyleSheet.create({
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
	},
	bottomSheetContent: {
		backgroundColor: "white",
		padding: 16,
		height: 200,
	},
});
