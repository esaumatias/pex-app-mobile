import React, { useState, useRef } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

import ArrowLeft from "../../../assets/ArrowLeft.png";


const CardModal = ({ cardInfo, visible, onClose, navigation }) => {
  const [modalHeight, setModalHeight] = useState(0);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const handleModalShow = () => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleModalClose = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setModalHeight(height);
  };

  const animatedStyle = {
    transform: [
      {
        translateY: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [modalHeight, 0],
        }),
      },
    ],
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onShow={handleModalShow}
      onRequestClose={handleModalClose}
    >
      <View style={styles.backdrop} onTouchEnd={handleModalClose} />
      <Animated.View
        style={[styles.modal, animatedStyle]}
        onLayout={handleLayout}
      >
        <View style={styles.container}>
          <View style={styles.containerIconTop}>
            <TouchableOpacity onPress={onClose} style={styles.buttomAcess}>
              <Image source={ArrowLeft} />
            </TouchableOpacity>
            <Text style={styles.text}>Detalhes do produto</Text>
            <View></View>
          </View>

          <Text style={{...styles.text, marginTop: 40}}>Descrição</Text>
          <Text style={styles.subtitle}>Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.</Text>

          <Text style={{...styles.text, marginTop: 40}}>Detalhes</Text>
          <Text style={styles.subtitle}>• Materials: 100% cotton, and lining Structured</Text>
          <Text style={styles.subtitle}>• Adjustable cotton strap closure</Text>
          <Text style={styles.subtitle}>• High quality embroidery stitching</Text>
          <Text style={styles.subtitle}>• Head circumference: 21” - 24” / 54-62 cm</Text>
          <Text style={styles.subtitle}>• Embroidery stitching</Text>
          <Text style={styles.subtitle}>• One size fits most</Text>

          <Text style={{...styles.text, marginTop: 40}}>Outras informações</Text>
          <Text style={styles.subtitle}>Style: Summer Hat</Text>
          <Text style={styles.subtitle}>Design: Plain</Text>
          <Text style={styles.subtitle}>Fabric: Jersey</Text>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 100,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 40, // ajuste conforme necessário
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 32,
  },
  containerIconTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  text: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: "#000000",
  },
  subtitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: "#999999",
    marginTop: 10
  }
});

export default CardModal;
