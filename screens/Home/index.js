import React, { useContext, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import { TopBar } from "../../components/TopBar";
import { SessionContext } from "../../providers/SessionProvider";
import MyCarousel from "../../components/MyCarousel";
import CarouselCartItem from "./components/CarouselCartItem";
import CarouselLogos from "./components/CarouselLogos";

import logoHome from "../../assets/logoHome.png";
import sinoIcon from "../../assets/sinoIcon.png";
import cartIcon from "../../assets/cartIcon.png";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import ArrowLeft from "../../assets/ArrowLeft.png";

const { width, height } = Dimensions.get("window");

export const Home = ({ navigation, route }) => {
  const { register } = useContext(SessionContext);

  const data = [
    {
      id: 1,
      image: card1,
      title: "LANÇAMENTOS",
      subtitle: "SUPER OFERTAS",
      frist: true,
      offer: "",
    },
    {
      id: 2,
      image: card2,
      title: "COZINHA",
      subtitle: "ATÉ 80% OFF",
      frist: false,
      offer: "SEMANA ESPECIAL",
      tam: 150
    },
    {
      id: 3,
      image: card3,
      title: "TODAS AS TINTAS",
      subtitle: "COLEÇÃO OUTONO",
      frist: false,
      offer: "50% Off",
      tam: 80
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopBar />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        indicatorStyle="#F09200"
      >
        <View style={styles.container}>
          <View style={styles.containerIconTop}>
            <Image source={logoHome} />

            <View style={{ flexDirection: "row", gap: 20 }}>
              <Image source={cartIcon} />
              <Image source={sinoIcon} />
            </View>
          </View>
        </View>

        <MyCarousel />

        <Text style={{ ...styles.texto, marginTop: 20 }}>Categorias</Text>

        <View style={styles.containerButons}>
          <View style={styles.buttonCadatrar}>
            <Text style={{ ...styles.texto, color: "#FFFFFF" }}>Todas</Text>
          </View>

          <View style={styles.buttonPular}>
            <Text style={styles.texto}>Ofertas</Text>
          </View>

          <View style={styles.buttonPular}>
            <Text style={styles.texto}>Pisos e porcelanatos</Text>
          </View>
        </View>

        <Text
          style={{ ...styles.texto, textAlign: "left", paddingHorizontal: 32 }}
        >
          Produtos populares
        </Text>

        <CarouselCartItem />

        <CarouselLogos />

        {data.map((item, idx) => (
          <View style={styles.carouselItem} key={idx}>
            <Image source={item.image} style={styles.carouselImage} />
            <View style={styles.carouselText}>
              {!item.frist && (
                <View style={{...styles.carouselTitleOffer, width: item.tam}}>
                  <Text style={{...styles.texto, textAlign: 'left'}}>{item.offer}</Text>
                </View>
              )}
              <Text style={styles.carouselTitle}>{item.title}</Text>
              <Text
                style={{
                  ...styles.carouselSubtitle,
                  fontSize: item.frist ? 16 : 12,
                }}
              >
                {item.subtitle}
              </Text>
            </View>
            <View style={styles.ArrowRIgth}>
              <Image source={ArrowLeft} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 32,
    justifyContent: "space-between",
  },
  containerIconTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  texto: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000",
  },
  containerButons: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 32,
    marginBottom: 30,
    // gap: 6,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  buttonCadatrar: {
    paddingHorizontal: 10,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7B61FF",
    borderRadius: 52,
  },
  buttonPular: {
    paddingHorizontal: 10,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#F1F0F3",
    borderRadius: 52,
  },
  carouselItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#16161E",
    marginTop: 5,
    position: 'relative',
  },
  carouselImage: {
    width: width,
    opacity: 0.4,
  },
  carouselText: {
    position: "absolute",
    top: 10,
    left: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
  },
  carouselTitle: {
    color: "#fff",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 27,
    lineHeight: 31,
    width: 150,
  },
  carouselSubtitle: {
    color: "#fff",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 15,
    textDecorationColor: "#fff",
  },
  carouselTitleOffer: {
    color: "#000",
    fontStyle: "italic",
    fontWeight: "500",
    lineHeight: 18,
    fontSize: 14,
    textDecorationColor: "#fff",
    backgroundColor: "#fff",
    opacity: 0.4,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  ArrowRIgth: {
    position: 'absolute',
    transform: [{ rotate: '180deg' }],
    backgroundColor: '#fff',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    right: 50,
    borderRadius: 76
  }
});
