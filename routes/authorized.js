import { useContext } from "react";
import Feather from "@expo/vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from '../utils/theme';
import { SessionContext } from "../providers/SessionProvider";

import { Home } from '../screens/Home';


const MainBottomTab = createBottomTabNavigator();

export const AuthorizedRoutes = () => {
  const { user } = useContext(SessionContext);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MainBottomTab.Navigator
        initialRouteName={"HomeRoutes"}
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

      <MainBottomTab.Screen
          name="HomeRoutes"
          component={HomeRoutes}
          options={{
            headerShown: false,
            tabBarLabel: "Properties",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
       
      </MainBottomTab.Navigator>
    </NavigationContainer>
  );
};


const HomeStack = createNativeStackNavigator();

export const HomeRoutes = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerStyle: {
          backgroundColor: theme.colors.primary_alt,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    />
  </HomeStack.Navigator>
);