import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      // contentStyle: {
      //   backgroundColor: 'white',
      // },
      animation: 'fade',
    }}
    initialRouteName={'Welcome'}>
    <Stack.Screen name="Welcome" component={Welcome} />
  </Stack.Navigator>
);
