import React, { useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const RootContext = React.createContext({});

export const RootContextProvider = ({
	children,
	state,
	setState,
	userData,
	getUserDataFromLocalStorage,
}) => {
	return (
		<RootContext.Provider value={{ state, setState, userData, getUserDataFromLocalStorage }}>
			{children}
		</RootContext.Provider>
	);
};

export default RootContext;

export const useStore = () => useContext(RootContext);
