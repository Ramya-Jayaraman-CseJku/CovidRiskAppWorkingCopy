import React, {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  LogBox,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import RNLocation from 'react-native-location';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import * as cityNames from './dropDownValues.json';
export default function rnLocation() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.white : Colors.black,
  };

  let locationSubscription = null;
  let locationTimeout = null;
  let permission = null;
  let location = null;
  let permissiongranted = null;
  let request = null;
  let watchID = null;

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [locationDisabled, setLocationDisabled] = useState();
  const [revGeocoding, setRevGeocoding] = useState();
  const [regExp, setRegExp] = useState();
  const [districtName, setDistrictName] = useState();
  //const [state, setState] = useState({data: cityNames['Districts']});
  global.location = districtName;
  Geocoder.init('AIzaSyAxDlg-Kmq69s8lORg8IXjWsiNkiHeaan8'); // use a valid API key
  useEffect(() => {
    locationgranted();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  });
  function matchCity(revGeocoding) {
    const stm = revGeocoding.toString();

    const cn = cityNames['Districts'];
    const regex = new RegExp(stm + '.*');
    for (var i = 0; i < cn.length; i++) {
      //console.log(cn[i].districtName);
      let result = cn[i].districtName.match(regex, i);
      if (result) {
        setDistrictName(result);
        break;
      }
    }
  }
  //rev geocoding -city name from coorodinates
  function getAddress(latitude, longitude) {
    Geocoder.from(latitude, longitude)
      .then(json => {
        var addressComponent = json.results[0].address_components;

        for (var i = 0; i < addressComponent.length; i++) {
          var types = addressComponent[i].types;

          for (var j = 0; j < types.length; j++) {
            if (types[j] == 'locality') {
              var locality = addressComponent[i].long_name;
              setRevGeocoding(locality);
            }
          }
        }
        if (revGeocoding) {
          // console.log('call match city');
          matchCity(revGeocoding);
        }
      })
      .catch(error => console.warn(error));
  }
  //native geolocation service
  const geolocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        var coordinates = position.coords;

        setLatitude(coordinates['latitude']);
        setLongitude(coordinates['longitude']);
        if (latitude && longitude) {
          // getAddress(latitude, longitude);
          getAddress(48.1853, 16.37663);
        }
      },
      error => {
        console.log("You don't have access for the location,enable by default");
        //locationSubscription && locationSubscription();
        //locationTimeout && clearTimeout(locationTimeout);
        //  console.log('location error', error);
        //  console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    watchID = Geolocation.watchPosition(
      position => {
        var updatedcoordinates = position.coords;
        setLatitude(updatedcoordinates['latitude']);
        setLongitude(updatedcoordinates['longitude']);
      },
      error => {
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
        },
        enableHighAccuracy: false,
        distanceFilter: 500,
        interval: 10000,
        fastestInterval: 5000,
      },
    );
  };

  //request the permission from android before starting the service.
  const locationgranted = async () => {
    try {
      const checkPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (!checkPermission) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Background Location Permission',
            message:
              'We need access to your location so you can get location-aware covid updates.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You have access for the location', granted);
          geolocation();
          setLocationDisabled(false);
        } else {
          //default linz-land
          setRevGeocoding('Linz-Land');
          setLocationDisabled(true);
          console.log("You don't have access for the location", granted);
        }
      } else {
        geolocation();
        setLocationDisabled(false);
      }
    } catch (err) {
      setRevGeocoding('Linz-Land');
      setLocationDisabled(true);
      //console.log(err);
    }
  };
  // locationgranted();

  LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
  LogBox.ignoreAllLogs();
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        {!locationDisabled ? (
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.white : Colors.black,
            }}>
            <Text>lat: {latitude}</Text>
            <Text>lon: {longitude}</Text>
            <Text>Reverse Geocode Address Information</Text>
            <Text>{revGeocoding}</Text>
            <Text>districtName</Text>
            <Text>{districtName}</Text>
          </View>
        ) : (
          <View>
            <Text>Linz-Land</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
