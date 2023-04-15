import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

import { TopBar } from "../../components/TopBar";
import { Input } from "../../components/Input";
import { SessionContext } from "../../providers/SessionProvider";

import HeaderImage from "../../assets/HeaderSigUp.png";
import IconEmail from "../../assets/IconEmail.png";
import IconSenha from "../../assets/IconSenha.png";

const screenWidth = Dimensions.get("window").width;

export const SignUp = ({ navigation }) => {
  const { signIn } = useContext(SessionContext);

  const signInForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Formato de email inválido.")
        .required("E-mail é obrigatório!"),
      password: yup
        .string()
        .min(8, "A senha deve conter pelo menos 8 caracteres.")
        .required("Senha é obrigatório!"),
    }),
    onSubmit: (values) => signIn(values),
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor : '#ffffff' }}>
      <TopBar />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.container}>
          <View style={styles.containerTop}>
            <Image source={HeaderImage} style={styles.header} />
          </View>

          <View style={styles.containerBottom}>
            <View>
              <Text style={styles.title}>Crie sua conta na PEX</Text>
              <Text style={styles.subtitle}>
                Informe os seus dados para ter acesso a um mundo de economia
                para sua obra
              </Text>
              <View style={styles.containerInput}>
                <Input
                  placeholder="Email"
                  field="email"
                  form={signInForm}
                  autoCapitalize="none"
                  image={IconEmail}
                />

                <Input
                  placeholder="Senha"
                  field="password"
                  secureTextEntry={true}
                  form={signInForm}
                  image={IconSenha}
                />

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ ...styles.texto, color: "#999999" }}>
                Li e aceito os{" "}
                <Text style={{ color: "#F09200" }}>Termos de serviço</Text>{" "}
                e políticia de privacidade
              </Text>
            </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.buttomAcess}
            >
              <Text style={{...styles.texto, textAlign: 'center'}}>Continuar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{...styles.texto, textAlign: 'center', color: "#999999"}}>
                Já possui uma conta?{" "}
                <Text style={{ color: "#F09200" }}>Acessar</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingHorizontal: 31,
    backgroundColor: "#ffffff",
  },
  containerTop: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBottom: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  header: {
    width: screenWidth,
    position: "absolute",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 31,
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    color: "#000000",
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10
  },
  subtitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    color: "#999999",
    marginTop: 8,
    width: 311,
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  containerInput: {
    marginTop: 32,
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
  texto: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "center",
    textAlign: "justify",
    color: "#FFFFFF",
    width: 271,
    alignSelf: 'center'
  },
});
