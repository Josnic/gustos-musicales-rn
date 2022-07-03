import React from "react";
import { StyleSheet, Text } from 'react-native';

import { Container } from '../../components/Container';
import Button from '../../components/Button';

import useNetInfoState from '../../hooks/useNetInfoState';

export const HomeScreen = ({navigation}) => {

    const netInfo = useNetInfoState();

    const navigationButtons = [
        {
            text: "ENCUESTA",
            path: "PollScreen"
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
             <Text style={styles.text}>{netInfo.isConnected ? `Conectado a internet` : `Desconectado`}</Text>
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

const styles = StyleSheet.create({
    text: {
      marginBottom: 24,
    },
  });