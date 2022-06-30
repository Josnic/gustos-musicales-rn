import React from "react";
import { StyleSheet, Text } from 'react-native';

import { Container } from '../../components/Container';

export const AboutScreen = () => {

    return (
        <Container>
            <Text style={styles.text}>Nicolás Herrera</Text>
            <Text style={styles.text}>FullStack Developer</Text>
        </Container>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      lineHeight: 26,
      textAlign: 'center',
      marginBottom: 14,
    },
  });