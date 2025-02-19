import {SplashScreen, Stack} from "expo-router";

import "./globals.css";
import {useFonts} from "expo-font";
import {useEffect} from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts( {
    "Rubik-Bold": require('./fonts/Rubik-Bold.ttf'),
    "Rubik-ExtraBold": require('./fonts/Rubik-ExtraBold.ttf'),
    "Rubik-Light": require('./fonts/Rubik-Light.ttf'),
    "Rubik-Medium": require('./fonts/Rubik-Medium.ttf'),
    "Rubik-Regular": require('./fonts/Rubik-Regular.ttf'),
    "Rubik-SemiBold": require('./fonts/Rubik-SemiBold.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();

    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
}
