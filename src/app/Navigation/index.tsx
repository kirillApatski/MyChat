import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {SignUp} from '../../screens/SignUp.tsx';
import {SignIn} from '../../screens/SignIn.tsx';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
