import React from 'react';
import { View, Dimensions, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');

import product1 from '../../../assets/brandList.png';
import product2 from '../../../assets/brandList.png';

const data = [
  { id: 1, image: product1},
  { id: 2, image: product2},
  { id: 3, image: product1},
  { id: 4, image: product2},
];

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
    </View>
  );
};

const CarouselLogos = () => {
  const carouselRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSnapToItem = (index) => {
    setCurrentIndex(index);
  };

  const handleCarouselItemPress = (index) => {
    carouselRef.current.snapToItem(index);
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={CarouselItem}
        sliderWidth={width}
        itemWidth={width}
        sliderHeight={height}
        itemHeight={height - 120}
        onSnapToItem={handleSnapToItem}
        loop={true}
        autoplay={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginBottom: 20,
  },
  carouselItem: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  carouselImage: {
    height: 25,
    borderRadius: 8
  },
});

export default CarouselLogos;
