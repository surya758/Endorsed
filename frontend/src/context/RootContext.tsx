import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const RootContext = React.createContext({});

export const RootContextProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({});
	const getData = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("accessUserCred");
			jsonValue != null ? JSON.parse(jsonValue) : null;
			setUserInfo(JSON.parse(jsonValue));
		} catch (e) {
			// error reading value
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<RootContext.Provider value={{ userInfo }}>{children}</RootContext.Provider>
	);
};

export default RootContext;
