import React from "react";
import { Alert } from "react-native";

export const showAlert = (title, message, textButton, callback = null) => {
    Alert.alert(
        title,
        message,
        [
            { 
                text: textButton, 
                onPress: () => {
                    if (callback){
                        callback();
                    }
                } 
            }
        ]
      );
}

export const tranformMusicalStyles = (data) => {
    let newArray = [];
    data.map(ele => newArray.push({
        value: ele.id,
        label: ele.name
    }))
    return newArray;
}

export const hexColor = () => {
    return Math.floor(Math.random()*16777215).toString(16);
}

export const transformMusicalStyleSelected = (item) => {
    console.log(item)
    return {
        id: item.value,
        name: item.label
    }
}