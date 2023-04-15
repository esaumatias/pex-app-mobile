import React, { useContext, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { TopBar } from "../../components/TopBar";
import { SessionContext } from "../../providers/SessionProvider";
import MyCarousel from '../../components/MyCarousel';
import CarouselCartItem from './components/CarouselCartItem';

import logoHome from "../../assets/logoHome.png";
import sinoIcon from "../../assets/sinoIcon.png";
import cartIcon from "../../assets/cartIcon.png";

export const Home = ({ navigation, route }) => {
  const { register } = useContext(SessionContext);

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

        <Text style={{...styles.texto, marginTop: 20}}>Categorias</Text>

        <View style={styles.containerButons}>
          <View
            style={styles.buttonCadatrar}
          >
            <Text style={{ ...styles.texto, color: "#FFFFFF" }}>Todas</Text>
          </View>

          <View style={styles.buttonPular}>
            <Text style={styles.texto}>Ofertas</Text>
          </View>

          <View style={styles.buttonPular}>
            <Text style={styles.texto}>Pisos e porcelanatos</Text>
          </View>
        </View>

        <Text style={{...styles.texto, textAlign: 'left', paddingHorizontal: 32}}>Produtos populares</Text>
        <CarouselCartItem />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 32,
    marginBottom: 30,
    // gap: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    borderColor: '#F1F0F3', 
    borderRadius: 52,
  },
});
