import { Stack } from "expo-router";
import React from "react";

export default function OnboardingLayout() {
    return(
        <Stack screenOptions={{headerShown: false, gestureEnabled:false}}>
            <Stack.Screen name="Welcome"/>
            <Stack.Screen name="Breakdown"/>
            <Stack.Screen name="Personalize"/>
            <Stack.Screen name="CreateAccount"/>
            <Stack.Screen name="Finish"/>
        </Stack>
    )
}