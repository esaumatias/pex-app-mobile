import React from 'react';
import { View, Dimensions, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');

import product1 from '../../../assets/product1.jpg';
import product2 from '../../../assets/product2.jpg';

const data = [
  { id: 1, image: product1, title: 'Torneira Puravida Hansgrohe', subtitle: 'Louças e metais' },
  { id: 2, image: product2, title: 'Portobello Mont blanc Natural 90x...', subtitle: 'Pisos e porcelanato' },
  { id: 3, image: product1, title: 'Torneira Puravida Hansgrohe', subtitle: 'Louças e metais' },
  { id: 4, image: product2, title: 'Portobello Mont blanc Natural 90x...', subtitle: 'Pisos e porcelanato' },
];


const CarouselCartItem = ({ navigation, user }) => {
  const carouselRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const handleSnapToItem = (index) => {
    setCurrentIndex(index);
  };
  
  const CarouselItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.carouselItem} onPress={() => navigation.navigate("DetailCard", { value: {...item}})}>
        <Image source={item.image} style={styles.carouselImage} />
        <View style={styles.carouselContent}>
          <Text style={styles.carouselSubtitle}>{item.subtitle}</Text>
          <Text style={styles.carouselTitle}>{item.title}</Text>
          <TouchableOpacity style={styles.carouselButton}>
            <Text style={styles.carouselButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={CarouselItem}
        sliderWidth={width}
        itemWidth={150}
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
  },
  carouselItem: {
    borderWidth: 1.5,
    borderColor: '#F1F0F3',
    borderRadius: 12,
    width: 141,
    height: 223,
    alignItems: 'center',
    paddingVertical: 5,
  },
  carouselImage: {
    width: 125,
    height: 108,
    borderRadius: 8
  },
  carouselTextContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 80,
    marginLeft: 25,
  },
  carouselTitle: {
    color: '#000',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
  },
  carouselSubtitle: {
    color: '#999999',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 8,
    lineHeight: 10,
    marginTop: 5
  },
  carouselContent: {
    paddingHorizontal: 8,
  },
  carouselButtonContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    right: 20,
    zIndex: 2,
  },
  carouselButton: {
    backgroundColor: '#F09200',
    borderRadius: 12,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  carouselButtonText: {
    color: '#FFFFFF',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 8,
    lineHeight: 10,
  },
});

export default CarouselCartItem;
