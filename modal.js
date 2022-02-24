import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import BehavioralProperties from './BehavioralProperties';
import RoomProperties from './RoomProperties';
import InfectedPersonProperties from './InfectedPersonProperties';
import ModalParameters from './data';
import RiskInfoandSimulation from './riskInfectionCalculation';

export default function ModelParamSelection() {
  //behavior
  const [maskCateogoryPpl, setMaskCategoryPpl] = useState('None');
  const [maskEfficiencyI, setMaskEfficiencyI] = useState(0);
  const [maskEfficiencyN, setMaskEfficiencyN] = useState(0);
  const [maskTypeI, setMaskTypeI] = useState('None');
  const [maskTypeN, setMaskTypeN] = useState('None');
  const [vaccination, setVaccination] = useState('None');
  //room
  const [eventType, setEventType] = useState('Classroom');
  const [roomSize, setRoomSize] = useState(60);
  const [durationofStay, setDurationofStay] = useState(12);
  const [noOfPeople, setNoOfPeople] = useState(24);
  const [ventilation, setVentilation] = useState(0.35);
  const [ventilationType, setVentilationType] = useState('None');
  const [ceilingHeight, setCeilingHeight] = useState(3);
  //infected person
  const [speechVolume, setSpeechVolume] = useState(2);
  const [speechDuration, setSpeechDuration] = useState(10);
  //modal parameters text
  const [speechDurationinTime, setSpeechDurationinTime] = useState('None');
  const [speechVolumeText, setSpeechVolumeText] = useState('None');
  const behavioralProps = {
    maskCateogoryPpl,
    maskEfficiencyI,
    maskEfficiencyN,
    vaccination,
    eventType,
    roomSize,
    durationofStay,
    noOfPeople,
    ventilation,
    ceilingHeight,
    speechVolume,
    speechDuration,
    maskTypeI,
    maskTypeN,
    ventilationType,
    speechDurationinTime,
    speechVolumeText,
    setMaskCategoryPpl,
    setMaskEfficiencyI,
    setMaskEfficiencyN,
    setVaccination,
    setEventType,
    setRoomSize,
    setDurationofStay,
    setNoOfPeople,
    setVentilation,
    setCeilingHeight,
    setSpeechVolume,
    setSpeechDuration,
    setMaskTypeI,
    setMaskTypeN,
    setVentilationType,
    setSpeechDurationinTime,
    setSpeechVolumeText,
  };
  /* console.log({selectedEventType});
  console.log({maskCateogoryPpl});
  console.log({roomSize});
  console.log({durationofStay});
  console.log({noOfPeople});
  console.log({maskEfficiencyI});
  console.log({maskEfficiencyN});
  console.log({vaccination});
  console.log({ventilation});
  console.log({ceilingHeight});
  console.log({speechDuration});
  console.log({speechVolume}); */
  return (
    <View styles={styles.container}>
      <ScrollView>
        <>
          <BehavioralProperties todos={behavioralProps} />
          <RoomProperties roomprops={behavioralProps} />
          <InfectedPersonProperties infectedpplprops={behavioralProps} />
          <ModalParameters todos={behavioralProps} />
          <RiskInfoandSimulation todos={behavioralProps} />
        </>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#DAE1DE',
  },

  default: {
    color: 'black',
  },
});
