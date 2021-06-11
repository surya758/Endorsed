import { FlatList, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";

import OnboardingDetails from "../components/OnboardingDetails";

const ONBOARDING_DATA = [
	{
		title: "Get Recommendations.",
		bodyDetails: "Receive recommendation according to the your needs.",
	},
	{
		title: "Place Recommendation.",
		bodyDetails: "Tried out a new product and like it? Recommend it to others!",
	},
	{
		title: "Share Opinions.",
		bodyDetails:
			"Got something to share about a particular product? Be it good or bad...",
	},
];

const OnboardingScreen = ({ navigation }) => {
	const myList = useRef();
	const onPressedNext = (index: number) => {
		if (index < ONBOARDING_DATA.length - 1) {
			myList.current.scrollToIndex({ index: index + 1 });
		} else {
			navigation.navigate("Welcome");
		}
	};
	const [CurrentPage, setCurrentPage] = useState<number>(0);
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={ONBOARDING_DATA}
				keyExtractor={(pages) => pages.title}
				ref={myList}
				bounces={false}
				renderItem={({ item, index }) => {
					return (
						<OnboardingDetails
							item={item}
							navigation={navigation}
							index={ONBOARDING_DATA.length}
							onPressedNext={() => onPressedNext(index)}
						/>
					);
				}}
				showsHorizontalScrollIndicator={false}
				horizontal
				pagingEnabled
				style={{ flex: 1 }}
			/>
		</View>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
