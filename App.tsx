import React from "react";
import { StatusBar, LogBox } from "react-native";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";

import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

LogBox.ignoreLogs([
  "No momento, você não está conectado à Expo em sua máquina de desenvolvimento.",
]);

import { AuthProvider } from "./src/hooks/auth";

import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
