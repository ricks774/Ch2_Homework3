import react from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// navigation套件
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
// icon套件
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import WeatherScreen from './src/screens/WeatherScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: true, cardOverlayEnabled: 'true' }}>
        <Stack.Screen name="HomePage" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WeatherPage" component={WeatherScreen} options={{ headerShown: false, presentation: 'transparentModal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
