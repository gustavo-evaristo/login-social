import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import Sign from '../screens/Sign';
import Home from '../screens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        animation: 'fade',
      }}
      initialRouteName="welcome">
      <Screen name="welcome" component={Welcome} />
      <Screen name="register" component={Register} />
      <Screen name="sign" component={Sign} />
      <Screen name="home" component={Home} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
