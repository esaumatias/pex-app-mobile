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

            <View style={{ flexDirection: 'row', gap: 20}}>
              <Image source={cartIcon} />
              <Image source={sinoIcon} />
            </View>

          </View>
        </View>

        <MyCarousel />
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
  }
});
