import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { TopBar } from "../../components/TopBar";
import Logo from "../../assets/Logo.png";
import Arrow from "../../assets/arrow.png";

export const Onboarding = ({ navigation }) => {
  return (
    <>
      <TopBar />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.containerTop}
        >
          <Text style={styles.texto}>Pular</Text>
        </TouchableOpacity>

        <View style={styles.containerBottom}>
          <Image source={Logo} style={styles.logo} />

          <View>
            <Text style={styles.title}>Bem vindo a PEX</Text>
            <Text style={styles.subtitle}>
              Economize tempo e dinheiro em todas as etapas da sua obra. Na
              reforma ou construção nós iremos te auxiliar em tudo.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.buttonArrow}
          >
            <Image source={Arrow} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#ffffff'
  },
  containerTop: {
    flex: 1,
    display: "flex",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBottom: {
    flex: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: 224,
    height: 121,
  },
  buttonArrow: {
    height: 62,
    width: 62,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f09200",
    alignSelf: "flex-end",
    borderRadius: 30,
  },
  texto: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 41,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  subtitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#999999",
    marginTop: 20,
    width: 311,
  },
});
