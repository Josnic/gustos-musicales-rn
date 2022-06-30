import React from "react";
import { Container } from '../../components/Container';

import Button from '../../components/Button';

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
        <Container>
            {navigationButtons.map((ele, index) => {
                return (
                    <Button mode="contained" key={index} onPress={() => navigation.navigate(ele.path)}>
                    {ele.text}
                    </Button>
                );
            })}
        </Container>
    );
}