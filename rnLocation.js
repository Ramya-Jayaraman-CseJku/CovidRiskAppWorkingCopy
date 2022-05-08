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

import Geolocation from 'react-native-geolocation-service';

import * as cityNames from './dropDownValues.json';
import * as muninames from './municipalities.json';
export const RNLocation = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.white : Colors.black,
  };

  let watchID = null;

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [locationDisabled, setLocationDisabled] = useState();
  const [revGeocoding, setRevGeocoding] = useState();
  const [regExp, setRegExp] = useState();
  const [districtName, setDistrictName] = useState();
  const [muniName, setMuniName] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Geolocation.clearWatch(watchID);

    /*  return () => {
      Geolocation.clearWatch(watchID);
    };*/
  }, [watchID, latitude, longitude]);
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
          // console.log(location, 'location resolved');
          setLocationDisabled(false);
        } else {
          //default linz-land and linz

          global.municipalityName = 'Linz';
          global.districtName = 'Linz-Land';
          setLocationDisabled(true);
          console.log("You don't have access for the location", granted);
        }
      } else {
        geolocation();
        setLocationDisabled(false);
        // console.log('brkpoint hits here first');
      }
      return Promise.resolve();
    } catch (err) {
      global.municipalityName = 'Linz';
      global.districtName = 'Linz-Land';
      //  setLocationDisabled(true);
      //console.log(err);
    }
  };
  locationgranted();
  //native geolocation service
  const geolocation = () => {
    try {
      Geolocation.getCurrentPosition(
        position => {
          var coordinates = position.coords;
          setLatitude(coordinates['latitude']);
          setLongitude(coordinates['longitude']);
          /*  if (latitude && longitude) {
            getAddress(latitude, longitude);
            console.log('address resolved');
          } else {
            global.locationVaccine = 'Linz';
            global.locationCases = 'Linz-Land';
          } */
          //console.log('brkpoint hits here 2nd');
        },
        error => {
          console.log(
            "You don't have access for the location,enable by default",
          );
          global.municipalityName = 'Linz';
          global.districtName = 'Linz-Land';
          //locationSubscription && locationSubscription();
          //locationTimeout && clearTimeout(locationTimeout);
          //  console.log('location error', error);
          //  console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (err) {
      console.log(err);
    }

    //continuous monitoring of position
    watchID = Geolocation.watchPosition(
      position => {
        var updatedcoordinates = position.coords;
        setLatitude(updatedcoordinates['latitude']);
        setLongitude(updatedcoordinates['longitude']);
      },
      error => {
        global.locationVaccine = 'Linz';
        global.locationCases = 'Linz-Land';
        console.log('it hits here', error);
      },
      {
        accuracy: {
          android: 'high',
        },
        enableHighAccuracy: false,
        distanceFilter: 500,
        interval: 10000,
        fastestInterval: 5000,
        showLocationDialog: true,
        forceRequestLocation: true,
      },
    );
  };
  //Geolocation.stopObserving();
  // locationgranted();

  const getAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
      );
      const json = await response.json();
      // console.log('response', json);
      var locality = json['city'];
      // console.log('city', json['city']);
      //console.log('brkpoint hits here ga');
      setRevGeocoding(locality);

      if (revGeocoding) {
        matchCity(revGeocoding);
        getmunname(revGeocoding);

        //console.log('brkpoint hits here 3rd');
      }
      return Promise.resolve();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  function matchCity(revGeocoding) {
    const stm = revGeocoding.toString();

    const cn = cityNames['Districts'];

    const regex = new RegExp(stm + '.*');
    for (var i = 0; i < cn.length; i++) {
      //console.log(cn[i].districtName);
      let result = cn[i].districtName.match(regex, i);
      if (result) {
        setDistrictName(result);
        // console.log('brkpoint hits here mc');
        global.districtName = districtName;
        break;
      }
    }
  }
  function getmunname(revGeocoding) {
    const mtm = revGeocoding.toString();
    const mn = muninames['Municipalities'];
    const regex = new RegExp(mtm + '.*');
    for (var j = 0; j < mn.length; j++) {
      //console.log(cn[i].districtName);
      let munresult = mn[j].municipality_name.match(regex, j);
      if (munresult) {
        setMuniName(munresult);
        // console.log('brkpoint hits here mc');
        global.municipalityName = muniName;
        break;
      }
    }
  }
  if (latitude && longitude) {
    getAddress(latitude, longitude);
    // console.log('address resolved');
  } else {
    global.municipalityName = 'Linz';
    global.districtName = 'Linz-Land';
  }
  LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
  LogBox.ignoreAllLogs();
  return null;
};

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
