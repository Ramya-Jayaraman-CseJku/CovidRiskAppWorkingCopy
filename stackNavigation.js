import * as React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import modelParamSelection from './modalParameters';
import Simulation from './modalSimulation';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#8d4bba"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Stack.Navigator
        initialRouteName="Modal Parameters"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#8d4bba',
          },
        }}>
        <Stack.Screen
          name="Modal Parameters"
          component={modelParamSelection}
          options={{
            backgroundColor: '#8d4bba',

            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Simulation"
          component={Simulation}
          options={{
            backgroundColor: '#8d4bba',

            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </View>
  );
}
export const MainStackNavigator = () => {
  return <MyStack />;
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    paddingTop: 0,
  },
});
