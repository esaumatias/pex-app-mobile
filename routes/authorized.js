import { useContext } from "react";
import Feather from "@expo/vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SessionContext } from "../providers/SessionProvider";


const MainBottomTab = createBottomTabNavigator();

export const AuthorizedRoutes = () => {
  const { user } = useContext(SessionContext);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MainBottomTab.Navigator
        initialRouteName={
          user.hasProperties ? "ReviewRoutes" : "PropertiesRoutes"
        }
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.primary_alt,
            minHeight: 55,
          },
          tabBarInactiveTintColor: "#fff",
          tabBarActiveTintColor: theme.colors.accent,
          tabBarLabelStyle: { fontSize: 12, marginBottom: "2%" },
          tabBarHideOnKeyboard: true,
        }}
      >
       
      </MainBottomTab.Navigator>
    </NavigationContainer>
  );
};
