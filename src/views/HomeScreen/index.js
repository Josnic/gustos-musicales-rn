import React from "react";

import Button from '../components/Button';

export const HomeScreen = ({navigation}) => {

    const navigationButtons = [
        {
            text: "ENCUESTA",
            path: "PolScreen"
        },
        {
            text: "RESULTADOS",
            path: "ResultScreen"
        },
        {
            text: "ACERCA DE",
            path: "AboutScreen"
        }
    ];
    return (
        navigationButtons.map((ele, index) => {
            <Button mode="contained" key={index} onPress={() => navigation.navigate(ele.path)}>
            {ele.text}
            </Button>
        })
    );
}