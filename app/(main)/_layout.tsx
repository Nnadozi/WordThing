import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from "expo-router";
import React from "react";
import { Icon } from "react-native-paper";

export default function MainLayout(){
    return(
        <Tabs screenOptions={{
            headerTitleAlign: "center",headerTitleStyle: {fontFamily:"DMSans-Bold"},
            tabBarActiveTintColor:"black",tabBarInactiveTintColor:"lightgray"
            }}>
            <Tabs.Screen
            name="Dictionary"
            options={{
                tabBarIcon: ({color}) => <Icon source={"book"} color={color} size={26} />,
                title: "My Dictionary",
            }}
            />
            <Tabs.Screen 
            name="Home"
            options={{
                tabBarIcon: ({color}) => <Icon source={"home"} color={color} size={30} />,
            }}
            />
            <Tabs.Screen
            name="Profile"
            options={{
                tabBarIcon: ({color}) => <FontAwesome5 color={color} name="user-alt" size={24} />,
                title:"Profile & Settings"
            }}
            />
        </Tabs>
    )
}