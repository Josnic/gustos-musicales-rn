import React from "react";
import { StyleSheet, View, ScrollView } from 'react-native';

export const Container = ({ children }) => (
    
        <ScrollView contentContainerStyle={styles.container}>
          {children}
        </ScrollView>
    
  );

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height:'auto'
    },
  });