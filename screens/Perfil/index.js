import React, { useContext, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { TopBar } from "../../components/TopBar";
import { SessionContext } from "../../providers/SessionProvider";
import logoHome from "../../assets/logoHome.png";
import userIcon from "../../assets/userIcon.png";
import setaIcon from "../../assets/Icon.png";
import cotIcon from "../../assets/Icon-1.png";
import phoneIcon from "../../assets/Icon-2.png";
import ajudaIcon from "../../assets/Icon-3.png";
import sairIcon from "../../assets/sairIcon.png";

const { width, height } = Dimensions.get("window");

export const Perfil = ({ navigation, route }) => {
  const { user, setUserData } = useContext(SessionContext);

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
          </View>

          <View style={styles.containerPerfil}>
            <View style={styles.containerImages}>
              <Image source={userIcon} />
            </View>
            <View style={styles.containerText}>
              <Text style={styles.texto}>
                {user.name ? `Olá, ${user.name}` : "Olá"}
              </Text>
              <Text style={styles.subtitle}>
                {user.email ? user.email : "Undefined"}
              </Text>
            </View>
          </View>

          <Text style={{ ...styles.texto, marginTop: 30, marginBottom: 20 }}>
            Sua conta PEX
          </Text>

          <View>
            <View style={styles.containerMenu}>
              <View style={styles.containerIconMenu}>
                <Image source={cotIcon} style={{ marginRight: 10 }} />
                <Text style={styles.texto}>Cotações</Text>
              </View>
              <Image source={setaIcon} />
            </View>

            <View style={styles.line}></View>

            <View style={styles.containerMenu}>
              <View style={styles.containerIconMenu}>
                <Image source={ajudaIcon} style={{ marginRight: 10 }} />
                <Text style={styles.texto}>Ajuda e suporte</Text>
              </View>
              <Image source={setaIcon} />
            </View>

            <View style={styles.line}></View>

            <View style={styles.containerMenu}>
              <View style={styles.containerIconMenu}>
                <Image source={phoneIcon} style={{ marginRight: 10 }} />
                <Text style={styles.texto}>FAQ</Text>
              </View>
              <Image source={setaIcon} />
            </View>
          </View>

          <TouchableOpacity
            style={{ ...styles.containerIconMenu, marginTop: 50 }}
            onPress={() => setUserData(null)}
          >
            <Image source={sairIcon} style={{ marginRight: 10 }} />
            <Text style={{ ...styles.texto, color: "#EA5B5B" }}>
              Sair da conta
            </Text>
          </TouchableOpacity>
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
    textAlign: "left",
    color: "#000",
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
  },
  containerPerfil: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  containerText: {
    gap: 5,
    paddingHorizontal: 10,
  },
  containerImages: {
    width: 58,
    height: 58,
    backgroundColor: "#999999",
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
  },
  containerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  containerIconMenu: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    backgroundColor: "#F1F0F3",
    height: 1,
    width: "100%",
    marginTop: 20,
  },
});
