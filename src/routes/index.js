import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../views/HomeScreen';

const Stack = createNativeStackNavigator();

export const NavigationContainerApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
            </Stack.Navigator>
      </NavigationContainer>
    );
}