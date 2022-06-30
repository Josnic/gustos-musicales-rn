import React from "react";
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

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
        <KeyboardAvoidingView style={styles.container} >
            {navigationButtons.map((ele, index) => {
                return (
                    <Button mode="contained" key={index} onPress={() => navigation.navigate(ele.path)}>
                    {ele.text}
                    </Button>
                );
            })}
        </KeyboardAvoidingView>
    );
    
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });