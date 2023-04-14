import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SessionContext = createContext();

export const SessionProvider = ({ children, expoToken }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  
  const signIn = async ({ email, password }) => {
    setLoading(true);

    const parsedUser = {
      email: email,
      password: password,
    };

    await AsyncStorage.setItem(
      "@Pex: user",
      JSON.stringify(parsedUser)
    );

    setUserData(parsedUser);

    setLoading(false);
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
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
export const UserConsumer = SessionContext.Consumer;
