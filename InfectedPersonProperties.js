import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import {Icon, Card} from 'react-native-elements';
import {TextInput, HelperText, List} from 'react-native-paper';

function InfectedPersonProperties({infectedpplprops}) {
  const [showSpeechTime, setShowSpeechTime] = useState(false);
  const [showSpeechVolume, setShowSpeechVolume] = useState(false);
  const [bg, setBg] = useState({colorId: 0});
  const selectedSpeechVolume = (value, speechVolume, id) => {
    infectedpplprops.setSpeechVolume(value);
    setBgColor(speechVolume);
    setBg({colorId: id});
  };
  const selectedSpeechDuration = (value, speechTime, id) => {
    infectedpplprops.setSpeechDuration(value);
    setBgColor(speechTime);
    setBg({colorId: id});
  };

  const [mainbg, setMainBg] = useState({
    vaccine: '',
    mask: '',
    window: '',
    ceilingHeight: '',
    speechTime: '',
    speechVolume: '',
  });

  const setBgColor = selectedParam => {
    if (selectedParam == 'vaccine') {
      setMainBg({vaccine: selectedParam});
    } else if (selectedParam == 'mask') {
      setMainBg({mask: selectedParam});
    } else if (selectedParam == 'window') {
      setMainBg({window: selectedParam});
    } else if (selectedParam == 'ceilingHeight') {
      setMainBg({ceilingHeight: selectedParam});
    } else if (selectedParam == 'speechTime') {
      setMainBg({speechTime: selectedParam});
    } else {
      setMainBg({speechVolume: selectedParam});
    }
  };

  const showHideParameters = selectedValue => {
    if (selectedValue == 'speechTime') {
      setShowSpeechTime(!showSpeechTime);

      setShowSpeechVolume(false);
    } else if (selectedValue == 'speechVolume') {
      setShowSpeechVolume(!showSpeechVolume);
      setShowSpeechTime(false);
    }
  };

  return (
    <View>
      <CollapsibleView
        title={<Text style={styles.textstyle}>Infected Person Properties</Text>}
        style={{
          borderWidth: 0,
          backgroundColor: 'milkwhite',
          borderRadius: 5,
        }}
        arrowStyling={{
          size: 18,
          rounded: true,
          thickness: 5,
          color: 'blue',
        }}
        titleStyle={{paddingLeft: 5, marginLeft: 5, alignContent: 'center'}}>
        <Card containerStyle={styles.cardContainer}>
          <Text style={styles.textstyle}>
            These properties applies only to infected person in room
          </Text>
          <View style={styles.cardrow}>
            <View style={styles.spaceImagesthree}>
              <TouchableOpacity
                onPress={() => showHideParameters('speechTime')}
                style={
                  mainbg.speechTime === 'speechTime'
                    ? styles.red
                    : styles.defaultBg
                }>
                <Image
                  source={require('./images/speech-bubble.png')}
                  style={styles.imgDimensions}
                />
                <Text style={styles.textStyle}>
                  {'\n'}Speech{'\n'}Time
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceImagesthree}>
              <TouchableOpacity
                onPress={() => showHideParameters('speechVolume')}
                style={
                  mainbg.speechVolume === 'speechVolume'
                    ? styles.red
                    : styles.defaultBg
                }>
                <Image
                  source={require('./images/speech.png')}
                  style={styles.imgDimensions}
                />
                <Text style={styles.textStyle}>
                  {'\n'}Speech{'\n'}Volume
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {showSpeechTime ? (
            <View style={styles.cardrow}>
              <View style={styles.spaceImagesinSubset}>
                <TouchableOpacity
                  onPress={() => selectedSpeechDuration(0, 'speechTime', 1)}
                  style={bg.colorId === 1 ? styles.red : styles.defaultBg}>
                  <Image
                    source={require('./images/00Time.png')}
                    style={styles.imgDimensionsinSubset}
                  />
                  <Text style={styles.textStyle}>{'\n'}None</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.spaceImagesinSubset}>
                <TouchableOpacity
                  onPress={() => selectedSpeechDuration(25, 'speechTime', 2)}
                  style={bg.colorId === 2 ? styles.red : styles.defaultBg}>
                  <Image
                    source={require('./images/15mintime.png')}
                    style={styles.imgDimensionsinSubset}
                  />
                  <Text style={styles.textStyle}>{'\n'}25 %</Text>
                  <Text style={styles.textStyle}>
                    {(infectedpplprops.durationofStay * 60 * 0.25).toFixed(2) >
                    59
                      ? (infectedpplprops.durationofStay * 60 * 0.25) / 60 +
                        ' hr'
                      : infectedpplprops.durationofStay * 60 * 0.25 + ' min'}
                  </Text>
                  {/* <Text style={styles.textStyle}>1:15 hr</Text> */}
                </TouchableOpacity>
              </View>
              <View style={styles.spaceImagesinSubset}>
                <TouchableOpacity
                  onPress={() => selectedSpeechDuration(50, 'speechTime', 3)}
                  style={bg.colorId === 3 ? styles.red : styles.defaultBg}>
                  <Image
                    source={require('./images/30mintime.png')}
                    style={styles.imgDimensionsinSubset}
                  />
                  <Text style={styles.textStyle}>{'\n'}50 %</Text>
                  <Text style={styles.textStyle}>
                    {(infectedpplprops.durationofStay * 60 * 0.5).toFixed(0) >
                    59
                      ? (infectedpplprops.durationofStay * 60 * 0.5) / 60 +
                        ' hr'
                      : infectedpplprops.durationofStay * 60 * 0.5 + ' min'}
                  </Text>
                  {/* <Text style={styles.textStyle}>2:30 hr</Text> */}
                </TouchableOpacity>
              </View>
              <View style={styles.spaceImagesinSubset}>
                <TouchableOpacity
                  onPress={() => selectedSpeechDuration(90, 'speechTime', 4)}
                  style={bg.colorId === 4 ? styles.red : styles.defaultBg}>
                  <Image
                    source={require('./images/00Time.png')}
                    style={styles.imgDimensionsinSubset}
                  />
                  <Text style={styles.textStyle}>{'\n'}90 %</Text>
                  <Text style={styles.textStyle}>
                    {(infectedpplprops.durationofStay * 60 * 0.9).toFixed(2) >
                    59
                      ? (infectedpplprops.durationofStay * 60 * 0.9) / 60 +
                        ' hr'
                      : infectedpplprops.durationofStay * 60 * 0.9 + ' min'}
                  </Text>
                  {/* <Text style={styles.textStyle}>4:30 hr</Text> */}
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          {showSpeechVolume ? (
            <View style={styles.cardrow}>
              <View style={styles.spaceImagesinSubset}>
                <TouchableOpacity
                  onPress={() => selectedSpeechVolume(1, 'speechVolume', 1)}
                  style={bg.colorId === 1 ? styles.red : styles.defaultBg}>
                  <Image
                    source={require('./images/volume-quiet.png')}
                    style={styles.imgDimensions}
                  />
                  <Text style={styles.textStyle}>{'\n'}Quiet</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.spaceImagesinSubset}>
                <TouchableOpacity
                  onPress={() => selectedSpeechVolume(2, 'speechVolume', 2)}
                  style={bg.colorId === 2 ? styles.red : styles.defaultBg}>
                  <Image
                    source={require('./images/volume-low.png')}
                    style={styles.imgDimensions}
                  />
                  <Text style={styles.textStyle}>{'\n'}Normal</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.spaceImagesinSubset}>
                <TouchableOpacity
                  onPress={() => selectedSpeechVolume(3, 'speechVolume', 3)}
                  style={bg.colorId === 3 ? styles.red : styles.defaultBg}>
                  <Image
                    source={require('./images/volume-medium.png')}
                    style={styles.imgDimensions}
                  />
                  <Text style={styles.textStyle}>{'\n'}Loud</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.spaceImagesinSubset}>
                <TouchableOpacity
                  onPress={() => selectedSpeechVolume(4, 'speechVolume', 4)}
                  style={bg.colorId === 4 ? styles.red : styles.defaultBg}>
                  <Image
                    source={require('./images/volume-high.png')}
                    style={styles.imgDimensions}
                  />
                  <Text style={styles.textStyle}>{'\n'}Yelling</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </Card>
      </CollapsibleView>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    width: 350,
    marginLeft: 5,
    marginRight: 5,
  },
  imgDimensions: {
    width: 45,
    height: 45,
  },
  cardrow: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 20,
  },
  spaceImagesthree: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 30,
    padding: 10,
  },
  red: {
    backgroundColor: '#58D68D',

    borderRadius: 50,
    width: 70,
    height: 72,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  defaultBg: {
    //backgroundColor: '#FF8661',
    backgroundColor: '#add8e6',
    borderRadius: 50,
    width: 70,
    height: 72,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textStyle: {color: 'black'},
  spaceImagesinSubset: {
    paddingTop: 34,
    paddingLeft: 5,
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  imgDimensionsinSubset: {
    width: 45,
    height: 45,
  },
  textstyle: {
    color: 'blue',
    fontSize: 18,
    fontStyle: 'normal',
    paddingLeft: 3,
    padding: 5,
  },
});
export default InfectedPersonProperties;
