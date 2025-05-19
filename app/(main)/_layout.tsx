import { Tabs } from "expo-router";
import React from "react";
import { Icon } from "react-native-paper";

export default function MainLayout(){
    return(
        <Tabs screenOptions={{headerTitleAlign: "center",headerTitleStyle: {fontFamily:"DMSans-Bold"}}}>
            <Tabs.Screen 
            name="Home"
            options={{
                tabBarIcon: ({color}) => <Icon source={"home"} color={color} size={30} />,
            }}
            />
            <Tabs.Screen
            name="Dictionary"
            options={{
                tabBarIcon: ({color}) => <Icon source={"book"} color={color} size={26} />,
                title: "My Dictionary",
            }}
            />
        </Tabs>
    )
}