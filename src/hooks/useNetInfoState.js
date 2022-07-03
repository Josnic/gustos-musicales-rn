import React, { useState, useEffect } from "react";

import NetInfo from "@react-native-community/netinfo";

export default () => {
    const [netInfoSate, setNetInfoSate] = useState({ type: 'NONE', isConnected: false});

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setNetInfoSate({ type: state.type, isConnected: state.isConnected});
        });

        return () => {
            unsubscribe();
        };
    },[]);
    
    return netInfoSate;
}