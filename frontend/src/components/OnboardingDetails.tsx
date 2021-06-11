import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import {
	SourceSansPro_300Light,
	SourceSansPro_400Regular,
	useFonts,
} from "@expo-google-fonts/source-sans-pro";

import Apploading from "expo-app-loading";
import React from "react";
import { RobotoMono_500Medium } from "@expo-google-fonts/roboto-mono";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;

const OnboardingDetails = (props) => {
	let [fontsLoaded] = useFonts({
		RobotoMono_500Medium,
		SourceSansPro_300Light,
		SourceSansPro_400Regular,
	});

	const insets = useSafeAreaInsets();
	if (!fontsLoaded) {
		return <Apploading />;
	}

	return (
		<View style={{ width: windowWidth }}>
			<View style={{ backgroundColor: "red", height: insets.top }} />
			<View style={styles.topContainer}></View>

			<View style={styles.bottomContainer}>
				<View>
					<View style={styles.line} />
					<Text style={styles.header}>{props.item.title}</Text>
					<Text style={styles.body}>{props.item.bodyDetails}</Text>
				</View>
				<View style={styles.skipAndNext}>
					<TouchableOpacity
						onPress={() => {
							props.navigation.navigate("Welcome");
						}}
					>
						<Text>Skip</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.nextButton}
						onPress={() => props.onPressedNext()}
					>
						<Text>Next</Text>
					</TouchableOpacity>
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
