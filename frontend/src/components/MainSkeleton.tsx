import { StyleSheet, View } from "react-native";

import React from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const MainSkeleton = (props) => {
	const numberOfPlaceHolders = props.numberOfPlaceHolders;
	var rows = [];
	for (let index = 0; index < numberOfPlaceHolders; index++) {
		rows.push(
			<View style={{ flexDirection: "row", marginTop: 10 }} key={index}>
				<View style={styles.image} />
				<View style={{ justifyContent: "space-evenly", marginLeft: 10 }}>
					<View style={{ height: 16, width: 80, borderRadius: 4 }} />
					<View style={{ height: 16, width: 50, borderRadius: 4 }} />
					<View style={{ height: 16, width: 200, borderRadius: 4 }} />
					<View style={{ height: 16, width: 100, borderRadius: 4 }} />
				</View>
			</View>
		);
	}

	return (
		<SkeletonPlaceholder>
			<View style={{ alignItems: "flex-start", marginLeft: 15 }}>{rows}</View>
		</SkeletonPlaceholder>
	);
};

export default MainSkeleton;

const styles = StyleSheet.create({
	image: {
		width: 100,
		height: 120,
		borderRadius: 10,
		marginLeft: 5,
	},
});
