import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout(){
    return(
        <Stack screenOptions={{headerShown: false, gestureEnabled:false}}>
            <Stack.Screen name="Login"/>
            <Stack.Screen name="Register"/>
            <Stack.Screen name="NameScreen"/>
        </Stack>
    )
}