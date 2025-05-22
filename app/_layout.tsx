import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from "react";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'DMSans-Regular': require('../assets/fonts/DMSans-Regular.ttf'),
    'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <PaperProvider>
      <Stack initialRouteName='(onboard)' screenOptions={{headerShown: false, gestureEnabled:false}}>
        <Stack.Screen name="(onboard)"/>
        <Stack.Screen name="(main)"/>
        <Stack.Screen name="(auth)"/>
      </Stack>
    </PaperProvider>
  )
}
