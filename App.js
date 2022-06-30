/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {  NavigationContainerApp } from './src/routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#600EE6',
    secondary: '#414757',
    error: '#f13a59'
  },
};

const App = ()=> {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainerApp />
    </PaperProvider>
  );
};

export default App;
