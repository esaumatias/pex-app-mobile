import { useContext } from "react";
import Feather from "@expo/vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import { theme } from "../utils/theme";
import { SessionContext } from "../providers/SessionProvider";

import { Home } from "../screens/Home";
import { DetailCard } from '../screens/Home/components/DetailCard';
import { Perfil } from "../screens/Perfil";

import cartIcon from "../assets/cartIcon.png";
import Profile from "../assets/Profile.png";
import Bookmark from "../assets/Bookmark.png";
import Discover from "../assets/Discover.png";

const MainBottomTab = createBottomTabNavigator();

export const AuthorizedRoutes = () => {
  const { user } = useContext(SessionContext);

  return (
    <NavigationContainer
      style={{ backgroundColor: "#fff" }}
      options={{ headerStyle: { backgroundColor: "#fff" } }}
    >
      {/* <StatusBar style="" /> */}
      <MainBottomTab.Navigator
        initialRouteName={"HomeRoutes"}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.primary_alt,
            minHeight: 0,
          },
          tabBarInactiveTintColor: "#000000",
          tabBarActiveTintColor: "#7B61FF",
          tabBarLabelStyle: {
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: 16,
          },
          tabBarHideOnKeyboard: true,
          tabBarIconStyle: {
            borderWidth: 0,
          },
        }}
      >
        <MainBottomTab.Screen
          name="HomeRoutes"
          component={HomeRoutes}
          options={{
            headerShown: false,
            tabBarLabel: "Comprar",
            tabBarIcon: ({ color, size }) => <Image source={cartIcon} />,
          }}
        />

        <MainBottomTab.Screen
          name="HomeRoutes1"
          component={HomeRoutes}
          options={{
            headerShown: false,
            tabBarLabel: "Discover",
            tabBarIcon: ({ color, size }) => <Image source={Discover} />,
          }}
        />

        <MainBottomTab.Screen
          name="HomeRoutes2"
          component={HomeRoutes}
          options={{
            headerShown: false,
            tabBarLabel: "Salvo",
            tabBarIcon: ({ color, size }) => <Image source={Bookmark} />,
          }}
        />

        <MainBottomTab.Screen
          name="PerfilRoutes"
          component={PerfilRoutes}
          options={{
            headerShown: false,
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color, size }) => <Image source={Profile} />,
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
          // backgroundColor: theme.colors.primary_alt,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTransparent: true,
      }}
    />

    <HomeStack.Screen
      name="DetailCard"
      options={{
        headerTitle: "",
        headerStyle: {
          backgroundColor: theme.colors.primary_alt,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
      component={DetailCard}
    />
  </HomeStack.Navigator>
);

const PerfilStack = createNativeStackNavigator();

export const PerfilRoutes = () => (
  <PerfilStack.Navigator initialRouteName="Perfil">
    <PerfilStack.Screen
      name="Perfil"
      component={Perfil}
      options={{
        headerStyle: {
          // backgroundColor: theme.colors.primary_alt,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTransparent: true,
      }}
    />

  </PerfilStack.Navigator>
);

