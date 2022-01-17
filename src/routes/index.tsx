import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './stack.routes';

const Routes: React.FC = () => (
  <NavigationContainer>
    <StatusBar hidden />
    <AppRoutes />
  </NavigationContainer>
);

export default Routes;
