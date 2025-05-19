import { StatusBar } from "expo-status-bar"
import React from 'react'
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native'

interface PageProps {
    style?:ViewStyle
    children?: React.ReactNode  
}

const Page = ({style, children}: PageProps) => {
  return (
    <>
     <StatusBar style="auto" />
      <SafeAreaView style={[styles.con, style]}>
          {children}
      </SafeAreaView>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white",
        padding:'5%'
    }
})