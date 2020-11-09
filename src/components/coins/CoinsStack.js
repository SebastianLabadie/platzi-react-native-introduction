import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from '../coinDetail/CoinDetailScreen';
import {colors} from '../../res/colors';

const Stack = createStackNavigator();

export default function CoinsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerStyle: {backgroundColor: colors.blackPearl},
          headerTintColor:colors.white,
          
          }}>
      <Stack.Screen name="Coin" component={CoinsScreen} />
      <Stack.Screen name="Coin Detail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
}
