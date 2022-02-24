import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Card, Header, HeaderProps, Icon} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';

//import dataOverview from './Screen1Overview';
import DataOverview from './Screen1Overviewtrial';
import getPositiveCasesCountAPI from './Screen2PositiveCount';
import getVaccineDistricts from './Screen4VaccineDistricts';
import getReffectiveValue from './Screen4Reff';
import getWarningLevelDataAPI from './getCoronaWarningLevel';
import ModelParamSelection from './modal';

const Stack1 = createStackNavigator();
function DataOverviewStack() {
  /*
    const warnLevel =
    'https://www.data.gv.at/katalog/dataset/52abfc2b-031c-4875-b838-653abbfccf4e';
  const vaccination =
    'https://www.data.gv.at/katalog/dataset/d230c9e8-745a-4da3-a3b4-86842591d9f0';
  //'https://www.data.gv.at/katalog/dataset/7effe370-ce79-4286-b299-c5d851f546ff';
  const REffective =
    'https://www.ages.at/wissen-aktuell/publikationen/epidemiologische-parameter-des-covid19-ausbruchs-oesterreich-20202021/';
 
  const modalCalculation = 'https://www.mpic.de/4747361/risk-calculator';
 */
  return (
    <View style={styles.container}>
      <Stack1.Navigator
        initialRouteName="App Overview"
        screenOptions={{
          headerMode: 'screen',
          headerStyle: {
            backgroundColor: '#005fff',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 17,
            //fontWeight: 'bold',
            textAlign: 'justify',
            alignItems: 'center',
          },
        }}>
        <Stack1.Screen
          name="App Overview"
          component={DataOverview}
          options={{
            title: 'App Overview',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#005fff',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 17,
              //fontWeight: 'bold',
              textAlign: 'justify',
              alignItems: 'center',
            },
          }}
        />
        <Stack1.Screen
          name="COVID-19 Positive Cases Count"
          component={getPositiveCasesCountAPI}
          options={{
            title: 'COVID-19 Positive Cases Count',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FF5733',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 17,
              //fontWeight: 'bold',
              textAlign: 'justify',
              alignItems: 'center',
            },
          }}
        />
        <Stack1.Screen
          name="Vaccinated Count"
          component={getVaccineDistricts}
          options={{
            title: 'Vaccinated Count',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 17,
              //fontWeight: 'bold',
              textAlign: 'justify',
              alignItems: 'center',
            },
          }}
        />
        <Stack1.Screen
          name="REffective Value"
          component={getReffectiveValue}
          options={{
            title: 'REffective Value',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0597D8',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 17,
              //fontWeight: 'bold',
              textAlign: 'justify',
              alignItems: 'center',
            },
          }}
        />
        <Stack1.Screen
          name="Warning Level"
          component={getWarningLevelDataAPI}
          options={{
            title: 'Warning Level',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#d78700',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 17,
              //fontWeight: 'bold',
              textAlign: 'justify',
              alignItems: 'center',
            },
          }}
        />
        <Stack1.Screen
          name="Modal Parameters"
          component={ModelParamSelection}
          options={{
            title: 'Risk Infection & Simulation',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#9239FE',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 17,
              //fontWeight: 'bold',
              textAlign: 'justify',
              alignItems: 'center',
            },
          }}
        />
      </Stack1.Navigator>
    </View>
  );
}
export const OverviewStackNavigator = () => {
  return <DataOverviewStack />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
  textStyle: {
    color: 'black',
    fontSize: 14,
  },
  Heading: {
    fontWeight: 'bold',
    color: '#0087ff',
    fontSize: 15,
  },
  cardRow: {
    //flex: 1,
    flexDirection: 'row',
  },
  modelCard: {
    borderRadius: 20,
    borderColor: 'lightgrey',
    marginRight: 0,
    marginLeft: 10,
    width: 370,
    paddingTop: 6,
    paddingBottom: 15,
  },
  cardStyle: {
    paddingTop: 6,
    borderRadius: 20,
    width: 180,
    marginRight: 0,
    marginLeft: 10,
    borderColor: 'lightgrey',
  },
  cardTitle: {
    color: '#0087ff',
    fontSize: 15,
  },
  subHeading: {
    fontWeight: 'bold',
    color: 'black',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
});
