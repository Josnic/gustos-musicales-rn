import React from 'react';
import { StyleSheet } from 'react-native';
import { DefaultTheme, Button as PaperButton } from 'react-native-paper';

const Button = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: DefaultTheme.colors.primary },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: '90%',
    marginVertical: 10,
    alignSelf: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export default Button;