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

export const transformMusicalStyleSelected = (item) => {
    console.log(item)
    return {
        id: item.value,
        name: item.label
    }
}

const randomIntFromInterval = (min, max) =>{ // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const randomHexColor = (numOfSteps, step) => {
    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    let c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return (c);
}

export const tranformChartData = (data) => {
    let newArray = [];
    data.map((ele) => {
        let color = randomHexColor(randomIntFromInterval(0,100), randomIntFromInterval(0,100));
        newArray.push({
        value: ele.total,
        label: ele.name,
        frontColor: color,
        sideColor: color,
        topColor: color

    })})
    return newArray;
}