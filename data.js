import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Button,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
export const SLIDER_WIDTH = Dimensions.get('window').width - 50;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH + 30);
export default function ModalParameters({todos}) {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = useState({activeIndex: 0});

  const maskCategory = todos.maskCateogoryPpl;
  const maskEffInf = todos.maskEfficiencyI;
  const maskEffNormal = todos.maskEfficiencyN;
  const vaccine = todos.vaccination;
  const eventType = todos.eventType;
  const roomSize = todos.roomSize;
  const duration = todos.durationofStay;
  const noOfPpl = todos.noOfPeople;
  const ventilation = todos.ventilation;
  const ceilingHt = todos.ceilingHeight;
  const speechVolume = todos.speechVolume;
  const speechDuration = todos.speechDuration;

  /*  const enabled =
    errorRoomSize.length < 1 &&
    errorDuration.length < 1 &&
    errorPplCount.length < 1; */
  const data = [
    {
      title: 'Behavioral Properties',
      text:
        'Mask for People -' +
        maskCategory +
        '\n' +
        'Mask Efficiency for Infected People -' +
        maskEffInf +
        '\n' +
        'Mask Efficiency for Normal People -' +
        maskEffNormal +
        '\n' +
        'Vaccination -' +
        vaccine +
        '\n',
    },
    {
      title: 'Room Properties',
      text:
        'Event Type -' +
        eventType +
        '\n' +
        'Room size -' +
        roomSize +
        '\n' +
        'Duration of stay -' +
        duration +
        '\n' +
        'Number of people -' +
        noOfPpl +
        '\n' +
        'Ventilation -' +
        ventilation +
        '\n' +
        'Ceiling Height -' +
        ceilingHt,
    },
    {
      title: 'Infected Person Properties',
      text:
        'Speech volume -' +
        speechVolume +
        '\n' +
        'Speech Duration -' +
        speechDuration +
        '\n' +
        'Respiratory volume - 10',
    },
  ];
  const CarouselCardItem = ({item, index}) => {
    return (
      <View style={styles.container} key={index}>
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.text}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.CarousalContainer}>
        <Carousel
          layout={'default'}
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
          onSnapToItem={index => setIndex({activeIndex: index})}
        />
      {/*   <View style={styles.buttonStyle1}>
          <Button
            disabled={false}
            title="Start Simulation"
            color="#2C76F0"
            onPress={() => {
              navigation.navigate('Simulation', {
                selectedeventType: selectedEventType,
                maskForCategory: maskCateogoryPpl,

                roomSize: roomSize,

                durationOfStay: durationofStay,

                noOfPeople: noOfPeople,

                maskEfficiencyInfected: maskEfficiencyI,

                maskEfficiencyNormal: maskEfficiencyN,
                vaccine: vaccination,

                ventilation: ventilation,

                ceilingHeight: ceilingHeight,

                speechDuration: speechDuration,

                speechVolume: speechVolume,
              });
            }}
          />
        </View> */}
        <View style={styles.CarousalPagination}>
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index.activeIndex}
            carouselRef={isCarousel}
            dotStyle={{
              marginLeft: 15,
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.92)',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F3F6',
    borderRadius: 8,
    width: 280,
    marginTop: 10,
    padding: 5,
    paddingTop: 10,
    marginBottom: 15,
    paddingBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    // borderWidth: 1,
    //borderColor: 'black',
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  header: {
    color: 'blue',
    fontSize: 19,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,

    paddingTop: 10,
  },
  CarousalContainer: {
    paddingTop: 50,
  },
  CarousalPagination: {
    paddingTop: 40,
  },
  buttonStyle1: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
});
