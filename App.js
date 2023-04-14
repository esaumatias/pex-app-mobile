import { Provider as ThemeProvider } from "react-native-paper";
import { Router } from "./routes";
import { theme } from "./utils/theme";
import { SessionProvider } from "./providers/SessionProvider";
import { SafeAreaView } from "react-native";
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary_alt,
      }}
    >
      <ThemeProvider theme={theme}>
        <SessionProvider>
          <Router />
        </SessionProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}
