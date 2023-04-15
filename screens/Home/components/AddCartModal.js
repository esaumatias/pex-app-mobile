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

import Illustration from "../../../assets/Illustration.jpg";

const AddCartModal = ({ cardInfo, visible, onClose, navigation }) => {
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
          <Image source={Illustration} style={styles.imagem} />

          <View>
            <Text style={{ ...styles.text, marginTop: 40 }}>
              Adicionado ao carrinho
            </Text>
            <Text style={styles.subtitle}>
              Clique no botão de finalizar para solicitar sua cotação ou
              continue navegando pela PEX
            </Text>
          </View>

          <View>
          <Text style={{ ...styles.text, marginBottom: 20, fontSize: 14 }}>
            Continuar comprando
            </Text>
          <TouchableOpacity
              onPress={onClose}
              style={styles.buttomAcess}
            >
              <Text style={{...styles.text, fontSize: 14, color: '#fff'}}>Finalizar cotação</Text>
            </TouchableOpacity>
          </View>
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
    top: 220,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 32,
    justifyContent: "space-between",
  },
  imagem: {
    alignSelf: "center",
    marginTop: 30,
  },
  text: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 31,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  subtitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#999999",
    marginTop: 10,
  },
  buttomAcess: {
    width: "100%",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f09200",
    alignSelf: "flex-end",
    borderRadius: 12,
  },
});

export default AddCartModal;
