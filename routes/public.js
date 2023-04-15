import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Onboarding } from '../screens/Onboarding';

//Register
import { TermosServico } from '../screens/SignUp/components/TermosServico';
import { SignUp } from '../screens/SignUp';
import { Step1 } from '../screens/SignUp/Step1';

const Stack = createNativeStackNavigator();

export const PublicRoutes = () => (
  <>
    <StatusBar />
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

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Step1"
          component={Step1}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="TermosServico"
          component={TermosServico}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
