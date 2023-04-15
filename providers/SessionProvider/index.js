import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const SessionContext = createContext();

export const SessionProvider = ({ children, expoToken }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  
  const signIn = async ({ email, password }) => {
    const user = await AsyncStorage.getItem("@Pex: user");
  
    if (user) {
      const parsedUser = JSON.parse(user);
  
      if (parsedUser.email === email && parsedUser.password === password) {
        Alert.alert('Sucesso', 'Você fez login com sucesso.');
        setUserData(parsedUser);
      } else if (parsedUser.email === email && parsedUser.password !== password) {
        Alert.alert('Erro', 'Senha incorreta. Por favor, tente novamente.');
      } else if (parsedUser.email !== email && parsedUser.password === password) {
        Alert.alert('Erro', 'E-mail incorreto. Por favor, tente novamente.');
      } else {
        Alert.alert('Erro', 'Usuário não encontrado. Por favor, cadastre-se primeiro.');
      }
    } else {
      Alert.alert('Erro', 'Usuário não encontrado. Por favor, cadastre-se primeiro.');
    }
  };
  

  const register = async ({ data }) => {
    await AsyncStorage.setItem(
      "@Pex: user",
      JSON.stringify(data)
    );

    setUserData(data);
  };
  
  const signOut = async () => {
    await AsyncStorage.removeItem("@Pex: user");
    setUserData(null);
  };


  return (
    <SessionContext.Provider
      value={{
        signIn,
        signOut,
        user: userData,
        loading,
        register
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
export const UserConsumer = SessionContext.Consumer;
