import { Stack } from "expo-router";
import React from "react";


export default function SettingsLayout() {
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="Settings" />
            <Stack.Screen name="AccountSettings" />
            <Stack.Screen name="Notifications" />
            <Stack.Screen options={{presentation:"transparentModal"}} name="Appearance" />
            <Stack.Screen name="Feedback" />
            <Stack.Screen name="Rate" />
        </Stack>
    )
}