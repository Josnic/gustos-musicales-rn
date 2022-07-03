import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../views/HomeScreen';
import { AboutScreen } from '../views/AboutScreen';
import { PollScreen } from '../views/PollScreen';
import { ResultScreen } from '../views/ResultScreen';

const Stack = createNativeStackNavigator();

export const NavigationContainerApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="AboutScreen" component={AboutScreen} options={{headerShown: true, title: "Acerca de"}} />
                <Stack.Screen name="PollScreen" component={PollScreen} options={{headerShown: true, title: "Encuesta"}} />
                <Stack.Screen name="ResultScreen" component={ResultScreen} options={{headerShown: true, title: "Resultados"}} />
            </Stack.Navigator>
      </NavigationContainer>
    );
}