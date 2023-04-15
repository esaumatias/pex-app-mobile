import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const { width, height } = Dimensions.get("window");

import Obras from "../../../assets/Image.jpg";

const MyCarousel = ({ value }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(value);

  const data = [
    { id: 1, image: value.image, title: "Tudo com frete grátis" },
    { id: 2, image: value.image, title: "Não perca a oportunidade de economizar!" },
    { id: 3, image: value.image, title: "Só hoje: descontos de até 50%!" },
    { id: 4, image: value.image, title: "Ofertas exclusivas para nossos clientes!" },
  ];
  
  const CarouselNavigation = ({ currentIndex, data, onPress }) => {
    return (
      <View style={styles.carouselNavigation}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={item.id} onPress={() => onPress(index)}>
              <View
                style={[
                  styles.carouselNavigationDot,
                  index === currentIndex && styles.carouselNavigationDotActive,
                ]}
                />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  
  const CarouselItem = ({ item, index }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} />
       
      </View>
    );
  };

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
        sliderWidth={311}
        itemWidth={311}
        sliderHeight={334}
        itemHeight={334}
        onSnapToItem={handleSnapToItem}
      />
       <CarouselNavigation
        currentIndex={currentIndex}
        data={data}
        onPress={handleCarouselItemPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: 'center',
    width: 311,
    height: 334,
  },
  carouselItem: {
    alignSelf: 'center',
  },
  carouselImage: {
    width: 311,
    height: 334,
    borderRadius: 30,

  },
  carouselNavigation: {
    position: "absolute",
    top: 280,
    right: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 56,
    height: 21,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  carouselNavigationDot: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
  carouselNavigationDotActive: {
    backgroundColor: "#000",
  },
});

export default MyCarousel;
