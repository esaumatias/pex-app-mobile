import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Onboarding } from '../screens/Onboarding';

const Stack = createNativeStackNavigator();

export const PublicRoutes = () => (
  <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Onboarding"
          component={Onboarding}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
