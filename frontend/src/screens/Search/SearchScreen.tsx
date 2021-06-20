import {
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SearchScreen = () => {
	const [filter, setFilter] = useState("");
	const insets = useSafeAreaInsets();

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<>
				<View style={{ height: insets.top, backgroundColor: "red" }} />
				<View style={styles.headerBox}>
					<Text style={styles.headerText}>SEARCH</Text>
				</View>
				<View style={{ flex: 1 }}>
					<View style={styles.searchBox}>
						<Ionicons
							name='search-outline'
							size={30}
							color='#404040'
							style={{ marginHorizontal: 20 }}
						/>
						<TextInput
							style={styles.searchText}
							value={filter}
							onChangeText={setFilter}
							placeholder='Search...'
							placeholderTextColor='#707070'
							autoFocus={true}
						/>
					</View>
				</View>
			</>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	line: {
		borderBottomColor: "#707070",
		borderBottomWidth: 1,
		opacity: 0.3,
		marginHorizontal: 20,
	},
	headerText: {
		fontSize: 20,
		fontFamily: "RobotoMono_500Medium",
		letterSpacing: 3,
	},
	headerBox: {
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderBottomColor: "#D0D0D0",
		borderBottomWidth: 1,
		marginHorizontal: 20,
	},
	searchBox: {
		height: 40,
		borderRadius: 10,
		backgroundColor: "#E0E0E0",
		marginHorizontal: 16,
		flexDirection: "row",
		marginTop: 20,
		alignItems: "center",
	},
	searchText: {
		fontSize: 16,
		fontFamily: "SourceSansPro_400Regular",
	},
});

export default SearchScreen;
