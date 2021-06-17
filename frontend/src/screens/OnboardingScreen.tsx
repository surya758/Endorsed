import { FlatList, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";

import OnboardingDetails from "../components/OnboardingDetails";

const ONBOARDING_DATA = [
	{
		title: "Get Recommendations.",
		bodyDetails: "Receive recommendation according to the your needs.",
		image: require("../assets/images/onb1.jpeg"),
	},
	{
		title: "Place Recommendation.",
		bodyDetails: "Tried out a new product and like it? Recommend it to others!",
		image: require("../assets/images/onb2.jpeg"),
	},
	{
		title: "Share Opinions.",
		bodyDetails: "Got something to share about a particular product? Be it good or bad...",
		image: require("../assets/images/ob3.jpg"),
	},
];

const OnboardingScreen = ({ navigation }) => {
	const myList = useRef();
	const onPressedNext = (index: number) => {
		if (index < ONBOARDING_DATA.length - 1) {
			myList.current.scrollToIndex({ index: index + 1 });
			return;
		} else {
			navigation.navigate("Welcome");
		}
	};
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
							onPressedNext={() => onPressedNext(index)}
							index={index}
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
