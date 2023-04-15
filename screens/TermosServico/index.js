import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TopBar } from "../../components/TopBar";

import Arrow from "../../assets/arrow.png";
import Upload from "../../assets/Upload.png";
import ArrowLeft from "../../assets/ArrowLeft.png";

const windowHeight = Dimensions.get("window").height;

export const TermosServico = ({ navigation }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [arrowRotation, setArrowRotation] = useState("90deg");

  const handleScroll = (event) => {
    const position = event.nativeEvent.contentOffset.y;
    setScrollPosition(position);

    const scrollViewHeight =
      event.nativeEvent.contentSize.height - windowHeight;
    if (position >= scrollViewHeight) {
      setArrowRotation("-90deg");
    } else {
      setArrowRotation("90deg");
    }
  };

  const handleButtonPress = () => {
    scrollViewRef.current.scrollTo({
      x: 0,
      y: arrowRotation === "90deg" ? scrollPosition + windowHeight : 0,
      animated: true,
    });
  };

  const scrollViewRef = React.useRef(null);

  return (
    <>
      <TopBar />
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          contentContainerStyle={styles.scrollViewContent}
          indicatorStyle="#F09200"
        >
          <View style={styles.containerIconTop}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={styles.buttomAcess}
            >
              <Image source={ArrowLeft} />
            </TouchableOpacity>

            <Image source={Upload} />
          </View>

          <Text style={{ ...styles.termos, fontSize: 12, marginTop: 50 }}>
            Última atualização: Outubro/2022
          </Text>

          <Text style={styles.titleHeader}>Termos de uso</Text>

          <Text style={styles.title}>1. Termos</Text>

          <Text style={styles.termos}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum convallis orci sed varius. In eget ante lacus. Vestibulum
            maximus libero et velit hendrerit tincidunt. Donec lobortis, nisi
            vel tincidunt ullamcorper, ex neque aliquet lectus, a imperdiet
            dolor nisi ut purus. Duis tincidunt ipsum nunc, id iaculis lorem
            venenatis a. Etiam ultricies bibendum tellus non facilisis. Nulla
            facilisi. Aenean non est nunc.
          </Text>

          <Text style={styles.title}>2. Licença de uso</Text>

          <Text style={styles.termos}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum convallis orci sed varius. In eget ante lacus. Vestibulum
            maximus libero et velit hendrerit tincidunt. Donec lobortis, nisi
            vel tincidunt ullamcorper, ex neque aliquet lectus, a imperdiet
            dolor nisi ut purus. Duis tincidunt ipsum nunc, id iaculis lorem
            venenatis a. Etiam ultricies bibendum tellus non facilisis. Nulla
            facilisi. Aenean non est nunc.
          </Text>

          <Text style={styles.title}>3. Concessão de licença</Text>

          <Text style={styles.termos}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum convallis orci sed varius. In eget ante lacus. Vestibulum
            maximus libero et velit hendrerit tincidunt. Donec lobortis, nisi
            vel tincidunt ullamcorper, ex neque aliquet lectus, a imperdiet
            dolor nisi ut purus. Duis tincidunt ipsum nunc, id iaculis lorem
            venenatis a. Etiam ultricies bibendum tellus non facilisis. Nulla
            facilisi. Aenean non est nunc.
          </Text>

          <Text style={styles.title}>4. Política de privacidade</Text>

          <Text style={styles.termos}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum convallis orci sed varius. In eget ante lacus. Vestibulum
            maximus libero et velit hendrerit tincidunt. Donec lobortis, nisi
            vel tincidunt ullamcorper, ex neque aliquet lectus, a imperdiet
            dolor nisi ut purus. Duis tincidunt ipsum nunc, id iaculis lorem
            venenatis a. Etiam ultricies bibendum tellus non facilisis. Nulla
            facilisi. Aenean non est nunc.
          </Text>

          <Text style={styles.title}>5. Disposições gerais</Text>

          <Text style={styles.termos}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum convallis orci sed varius. In eget ante lacus. Vestibulum
            maximus libero et velit hendrerit tincidunt. Donec lobortis, nisi
            vel tincidunt ullamcorper, ex neque aliquet lectus, a imperdiet
            dolor nisi ut purus. Duis tincidunt ipsum nunc, id iaculis lorem
            venenatis a. Etiam ultricies bibendum tellus non facilisis. Nulla
            facilisi. Aenean non est nunc.
          </Text>

          <Text style={styles.title}>6. Responsabilidade do usuário</Text>

          <Text style={styles.termos}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum convallis orci sed varius. In eget ante lacus. Vestibulum
            maximus libero et velit hendrerit tincidunt. Donec lobortis, nisi
            vel tincidunt ullamcorper, ex neque aliquet lectus, a imperdiet
            dolor nisi ut purus. Duis tincidunt ipsum nunc, id iaculis lorem
            venenatis a. Etiam ultricies bibendum tellus non facilisis. Nulla
            facilisi. Aenean non est nunc.
          </Text>
        </ScrollView>
        <LinearGradient
          style={styles.button}
          colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]}
        >
          <TouchableOpacity onPress={handleButtonPress}>
            <View style={styles.buttonContainer}>
              <Image
                source={Arrow}
                style={{ transform: [{ rotate: arrowRotation }] }}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 32,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  termos: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    color: "#999999",
    marginTop: 10,
  },
  button: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(240, 146, 0, 0.2)",
    backgroundColor: "#F09200",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 20
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
    marginBottom: 20
  }
});
