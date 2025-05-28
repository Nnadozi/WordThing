import { StatusBar } from "expo-status-bar"
import React from 'react'
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native'

interface OnboardingPageProps {
    style?:ViewStyle
    children?: React.ReactNode  
}

const OnboardingPage = ({style, children}: OnboardingPageProps) => {
  return (
    <>
        <StatusBar style="auto" />
        <SafeAreaView style={[styles.con, style]}>
            {children}
        </SafeAreaView>
    </>
  )
}

export default OnboardingPage

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white",
        padding:'5%'
    }
})

