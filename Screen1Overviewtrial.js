import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Card, Header} from 'react-native-elements';

export default function DataOverview({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('COVID-19 Positive Cases Count');
          }}>
          <Card containerStyle={styles.cardStyle}>
            <View style={styles.row}>
              <View style={styles.ImageView}>
                <Image
                  source={require('./images/sick-boy-covid-infected.png')}
                  style={styles.imgDimensions}
                />
              </View>
              <Card.Title style={styles.cardTitle}>Positive Cases</Card.Title>
            </View>

            <View style={styles.cardRow}>
              <Text style={styles.textStyle}>
                <Text style={styles.subHeading}>Granularity:</Text>
                District
              </Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.subHeading}>Update Interval:</Text>
              <Text style={styles.textStyle}>Daily</Text>
            </View>

            <Text style={styles.subHeading}>Availability:</Text>
            <Text style={styles.textStyle}>Lagging By Two Days</Text>
            <View style={styles.cardRow}>
              <Text style={styles.textStyle}>
                <Text style={styles.subHeading}>Graph Interval: </Text>
                {'\n'}Day-Week-Month-Year
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Vaccinated Count');
          }}>
          <Card containerStyle={styles.cardStyle}>
            <View style={styles.row}>
              <View style={styles.ImageView}>
                <Image
                  source={require('./images/covid_vaccine.png')}
                  style={styles.imgDimensions}
                />
              </View>
              <Card.Title style={styles.cardTitle}>Vaccination </Card.Title>
            </View>

            <View style={styles.cardRow}>
              <Text style={styles.subHeading}>Granularity:</Text>
              <Text style={styles.textStyle}>District</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.subHeading}>Update Interval:</Text>
              <Text style={styles.textStyle}>Daily</Text>
            </View>
            <View>
              <Text style={styles.subHeading}>Availability:</Text>
              <Text style={styles.textStyle}>Lagging By Two Days</Text>
            </View>
            <View>
              <Text style={styles.subHeading}>Graph Interval: </Text>
              <Text style={styles.textStyle}>For Specific Date</Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.cardRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('REffective Value');
          }}>
          <Card containerStyle={styles.cardStyle}>
            <View style={styles.row}>
              <View style={styles.ImageView}>
                <Image
                  source={require('./images/REff_prediction.png')}
                  style={styles.imgDimensions}
                />
              </View>
              <Card.Title style={styles.cardTitle}>REffective</Card.Title>
            </View>

            <View style={styles.cardRow}>
              <Text style={styles.subHeading}>Granularity:</Text>
              <Text style={styles.textStyle}>Country</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.subHeading}>Update Interval:</Text>
              <Text style={styles.textStyle}>Daily</Text>
            </View>

            <Text style={styles.subHeading}>Availability:</Text>
            <Text style={styles.textStyle}>Lagging By One Week</Text>

            <View style={styles.cardRow}>
              <Text style={styles.subHeading}>Graph Interval: </Text>
              <Text style={styles.textStyle}>Daily</Text>
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Warning Level');
          }}>
          <Card containerStyle={styles.cardStyle}>
            <View style={styles.row}>
              <View style={styles.ImageView}>
                <Image
                  source={require('./images/warn_level.png')}
                  style={styles.imgDimensions}
                />
              </View>
              <Card.Title style={styles.cardTitle}> Warning Level </Card.Title>
            </View>

            <View style={styles.cardRow}>
              <Text style={styles.subHeading}>Granularity: </Text>
              <Text style={styles.textStyle}>District</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.subHeading}>Update Interval: </Text>

              <Text style={styles.textStyle}>Week </Text>
            </View>
            <View>
              <Text style={styles.subHeading}>Availability:</Text>
              <Text style={styles.textStyle}>Lagging By One Week</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.subHeading}>Map Interval:</Text>
              <Text style={styles.textStyle}>Week</Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Modal Parameters');
          }}>
          <Card containerStyle={styles.modelCard}>
            <View style={styles.row}>
              <View style={styles.ImageView}>
                <Image
                  source={require('./images/risk_prediction.png')}
                  style={styles.imgDimensions}
                />
              </View>
              <Card.Title style={styles.cardTitle}>
                Indoor Risk Infection and Simulation
              </Card.Title>
            </View>

            <View style={{paddingTop: 5}}>
              <View style={styles.cardRow}>
                <Text style={styles.subHeading}>Granularity: </Text>
                <Text style={styles.textStyle}>Indoor Environments</Text>
              </View>

              <View style={styles.cardRow}>
                <Text style={styles.subHeading}>Infected Person: </Text>
                <Text style={styles.textStyle}>
                  Speech Volume, Speech Duration
                </Text>
              </View>

              <View style={styles.cardRow}>
                <Text style={styles.subHeading}>Own Behavior:</Text>
                <Text style={styles.textStyle}>Masks and Vaccination</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.subHeading}>Room: </Text>
                <Text style={styles.textStyle}>
                  Event type, Size, Ventilation, Ceiling Height, {'\n'} People
                  count, Stay duration
                </Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
        {/* <Text>
          {global.districtName},{global.municipalityName}
        </Text> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fafafa',
  },
  textStyle: {
    color: 'black',
    fontSize: 14,
    padding: 3,
  },
  Heading: {
    fontWeight: 'bold',
    color: '#0087ff',
    fontSize: 14,
  },
  cardRow: {
    //flex: 1,
    flexDirection: 'row',
    padding: 1,
  },
  modelCard: {
    borderRadius: 20,
    borderColor: 'lightgrey',
    marginRight: 0,
    marginLeft: 10,
    width: 370,
    height: 230,
    paddingTop: 6,
    paddingBottom: 15,
    marginBottom: 20,
  },
  cardStyle: {
    paddingTop: 6,
    borderRadius: 20,
    width: 180,
    marginRight: 1,
    marginLeft: 10,
    borderColor: 'lightgrey',
  },
  cardTitle: {
    color: '#0087ff',
    fontSize: 15,
    paddingTop: 15,
  },
  subHeading: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  imgDimensions: {
    width: 50,
    height: 50,
  },
  ImageView: {
    // justifyContent: 'left',

    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 1,
  },
});
