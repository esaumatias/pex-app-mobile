import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');

import Obras from '../assets/Image.jpg';

const data = [
  { id: 1, image: Obras, title: 'Tudo com frete grátis' },
  { id: 2, image: Obras, title: 'Não perca a oportunidade de economizar!' },
  { id: 3, image: Obras, title: 'Só hoje: descontos de até 50%!' },
  { id: 4, image: Obras, title: 'Ofertas exclusivas para nossos clientes!' },
];

const CarouselItem = ({ item, index }) => {
  return (
    <View style={styles.carouselItem}>
    <Image source={item.image} style={styles.carouselImage} />
    <View style={styles.carouselText}>
      <Text style={styles.carouselTitle}>{item.title}</Text>
      <Text style={styles.carouselSubtitle}>Comprar agora</Text>
      <View style={styles.line}></View>
    </View>
  </View>
  );
};

const CarouselNavigation = ({ currentIndex, data, onPress }) => {
  return (
    <View style={styles.carouselNavigation}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity key={item.id} onPress={() => onPress(index)}>
            <View style={[styles.carouselNavigationDot, index === currentIndex && styles.carouselNavigationDotActive]} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarouselItemPress = (index) => {
    carouselRef.current.snapToItem(index);
  };

  const handleSnapToItem = (index) => {
    setCurrentIndex(index);
  };

  const carouselRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={CarouselItem}
        sliderWidth={width}
        itemWidth={width}
        sliderHeight={height}
        itemHeight={height}
        onSnapToItem={handleSnapToItem}
      />
      <CarouselNavigation currentIndex={currentIndex} data={data} onPress={handleCarouselItemPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16161E',
  },
  carouselImage: {
    width: width,
    opacity: 0.5,
  },
  carouselText: {
    position: 'absolute',
    top: 20,
    left: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    width: 215
  },
  carouselTitle: {
    color: '#fff',
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 31,
  },
  carouselTitle: {
    color: '#fff',
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 31,
  },
  carouselSubtitle: {
    color: '#fff',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    marginTop: 20,
    textDecorationColor: '#fff',
  },
  line: {
    backgroundColor: '#FFFFFF',
    height: 1,
    width: 100,
    marginTop: 5
  }, 
  carouselNavigation: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: 0,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
  },
  carouselNavigationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 30,
    backgroundColor: '#ccc',
  },
  carouselNavigationDotActive: {
    backgroundColor: '#fff',
  },
});

export default MyCarousel;
