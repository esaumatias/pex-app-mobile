import React, { useContext, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { TopBar } from "../../components/TopBar";
import { Input } from "../../components/Input";
import { SessionContext } from "../../providers/SessionProvider";
import DatePickerField from "../../components/DatePickerField";

import phoneIcon from "../../assets/phoneIcon.png";
import RightIcons from "../../assets/RightIcons.png";
import ArrowLeft from "../../assets/ArrowLeft.png";
import IconEmail from "../../assets/IconEmail.png";
import calendarIcon from "../../assets/calendarIcon.png";
import userIcon from "../../assets/userIcon.png";
import camIcon from "../../assets/camIcon.png";

export const Step1 = ({ navigation, route }) => {
  const { signIn } = useContext(SessionContext);
  const { value } = route.params;

  const signInForm = useFormik({
    initialValues: {
      name: "",
      date: "",
      phone: "",
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Por favor, insira o seu nome."),
      date: yup
        .string()
        .trim()
        .required("Por favor, insira a sua data de nascimento.")
        .matches(
          /^(?:(?:(?:0?[13578]|1[02])(\/)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
          "Por favor, insira uma data de nascimento válida."
        ),
      phone: yup
        .string()
        .trim()
        .required("Por favor, insira o seu número de telefone.")
        .matches(
          /^[0-9]{10,11}$/,
          "Por favor, insira um número de telefone válido."
        ),
    }),
    onSubmit: (values) => signIn({ data: { ...value, values } }),
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopBar />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        indicatorStyle="#F09200"
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.container}>
            <View style={styles.containerIconTop}>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}
                style={styles.buttomAcess}
              >
                <Image source={ArrowLeft} />
              </TouchableOpacity>

              <Text style={styles.textHeader}>Dados pessoais</Text>

              <Image source={RightIcons} />
            </View>

            <View style={styles.containerInput}>
              <View style={styles.containerPhoto}>
                <Image source={userIcon} style={styles.userIcon} />
                <Image source={camIcon} style={styles.camIcon} />
                {/* <View>
              </View> */}
              </View>

              <Text style={styles.textPhoto}>Enviar foto</Text>

              <Input
                placeholder="Nome completo"
                field="name"
                form={signInForm}
                autoCapitalize="none"
                image={IconEmail}
              />

              <DatePickerField
                label="Data de nascimento"
                name="date"
                form={signInForm}
                image={calendarIcon}
              />

              <Input
                placeholder="Telefone"
                field="phone"
                form={signInForm}
                image={phoneIcon}
                keyboardType="phone-pad"
                type="phone"
              />
            </View>

            <View style={styles.containerButons}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.buttonPular}
              >
                <Text style={styles.texto}>Pular</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.buttonCadatrar}
              >
                <Text style={{...styles.texto, color: '#FFFFFF'}}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 32,
    justifyContent: 'space-between'
  },
  scrollViewContent: {flex: 1},
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
  containerInput: {
    marginTop: 32,
  },
  containerPhoto: {
    position: "relative",
    width: 120,
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 5,
  },
  camIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  textPhoto: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    color: "#F09200",
    marginTop: 10,
    marginBottom: 50,
  },
  containerButons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30
  },
  buttonCadatrar: {
    width: "50%",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f09200",
    alignSelf: "flex-end",
    borderRadius: 12,
  },
  buttonPular: {
    width: "50%",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5, 
    borderColor: '#F1F0F3', 
    borderRadius: 12 
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
