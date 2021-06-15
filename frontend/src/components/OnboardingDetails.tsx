import Buttons, { SkipButton } from "./Buttons";
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import Apploading from "expo-app-loading";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;

const OnboardingDetails = (props) => {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ width: windowWidth }}>
			<View style={styles.topContainer}>
				<Image
					source={props.item.image}
					style={{
						flex: 1,
						width: undefined,
						height: undefined,
						resizeMode: "cover",
					}}
				/>
			</View>

			<View style={styles.bottomContainer}>
				<View>
					<View style={styles.line} />
					<Text style={styles.header}>{props.item.title}</Text>
					<Text style={styles.body}>{props.item.bodyDetails}</Text>
				</View>
				<View style={styles.skipAndNext}>
					{props.index === 2 ? (
						<SkipButton
							onPress={() => {
								props.navigation.navigate("AuthRoute");
							}}
							skip={null}
						/>
					) : (
						<SkipButton
							onPress={() => {
								props.navigation.navigate("AuthRoute");
							}}
							skip='Skip'
						/>
					)}
					{props.index === 2 ? (
						<Buttons onPress={() => props.onPressedNext()} text='Get Started' />
					) : (
						<Buttons onPress={() => props.onPressedNext()} text='Next' />
					)}
				</View>
			</View>

			<View style={{ height: insets.bottom }} />
		</View>
	);
};

const styles = StyleSheet.create({
	topContainer: {
		flex: 3,
	},
	bottomContainer: {
		flex: 2,
		justifyContent: "space-between",
	},
	line: {
		height: 1,
		backgroundColor: "rgba(0,0,0,1)",
		opacity: 0.3,
		alignSelf: "stretch",
		padding: 0,
	},
	header: {
		fontFamily: "RobotoMono_500Medium",
		color: "black",
		fontSize: 24,
		marginTop: 40,
		marginHorizontal: 40,
	},
	body: {
		fontFamily: "SourceSansPro_300Light",
		fontSize: 18,
		marginTop: 20,
		color: "#707070",
		textAlign: "left",
		marginHorizontal: 40,
	},
	nextButton: {
		alignItems: "center",
		backgroundColor: "#ffffff",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "#000000",
	},
	skipAndNext: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 40,
		fontSize: 16,
		fontFamily: "SourceSansPro_400Regular",
		marginBottom: 20,
		alignItems: "center",
	},
});

export default OnboardingDetails;
