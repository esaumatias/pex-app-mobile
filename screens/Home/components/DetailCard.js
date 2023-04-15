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

import MyCarousel from "./MyCarousel";
import CardModal from "./CardModal";
import AddCartModal from './AddCartModal';
import { TopBar } from "../../../components/TopBar";

import phoneIcon from "../../../assets/phoneIcon.png";
import Bookmark from "../../../assets/Bookmark.png";
import ArrowLeft from "../../../assets/ArrowLeft.png";
import IconEmail from "../../../assets/IconEmail.png";
import calendarIcon from "../../../assets/calendarIcon.png";
import userIcon from "../../../assets/userIcon.png";
import camIcon from "../../../assets/camIcon.png";

export const DetailCard = ({ navigation, route }) => {
  const { value } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handlePress2 = () => {
    setModalVisible2(true);
  };

  const handleClose2 = () => {
    setModalVisible2(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopBar />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        indicatorStyle="#F09200"
      >
        <View style={styles.container}>
          <View style={styles.containerIconTop}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.buttomAcess}
            >
              <Image source={ArrowLeft} />
            </TouchableOpacity>
            <Image source={Bookmark} />
          </View>

          <MyCarousel value={value} />

          <TouchableOpacity onPress={handlePress}>
            <Text
              style={{
                ...styles.texto,
                color: "#999999",
                marginTop: 15,
                textAlign: "left",
                fontSize: 12,
              }}
            >
              {value.subtitle}
            </Text>

            <Text
              style={{
                color: "#000000",
                marginTop: 1,
                textAlign: "left",
                fontSize: 24,
                fontWeight: "500",
              }}
            >
              {value.title}
            </Text>

            <Text
              style={{
                ...styles.texto,
                color: "#000000",
                marginTop: 10,
                textAlign: "left",
                fontSize: 14,
              }}
            >
              Informações
            </Text>
            <Text
              style={{
                ...styles.texto,
                color: "#999999",
                marginTop: 0,
                textAlign: "left",
                fontSize: 14,
                marginBottom: 20,
              }}
            >
              Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris
              amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.
            </Text>
          </TouchableOpacity>

          <CardModal
            cardInfo={value}
            visible={modalVisible}
            onClose={handleClose}
            navigation={navigation}
          />


          <AddCartModal
            cardInfo={value}
            visible={modalVisible2}
            onClose={handleClose2}
            navigation={navigation}
          />

          <View style={styles.containerButons}>
            <TouchableOpacity
              onPress={handlePress2}
              style={styles.buttonCadatrar}
            >
              <Text style={{ ...styles.texto, color: "#FFFFFF" }}>
                Comprar agora
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  scrollViewContent: { flex: 1 },
  textHeader: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    color: "#000000",
    marginTop: 10,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    color: "#000000",
    marginTop: 20,
  },
  containerIconTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  titleHeader: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 31,
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    color: "#000000",
    marginTop: 10,
    marginBottom: 20,
  },
  containerButons: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 100,
  },
  buttonCadatrar: {
    width: "100%",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f09200",
    alignSelf: "flex-end",
    borderRadius: 12,
  },
  texto: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
});
