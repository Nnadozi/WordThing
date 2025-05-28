import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React from 'react'
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native'
import { ProgressBar } from "react-native-paper"
import MyButton from "./MyButton"
import MyIcon from "./MyIcon"
import MyText from "./MyText"

interface OnboardingPageProps {
    style?:ViewStyle
    children?: React.ReactNode  
    onPress?:() => void;
    title?: string;
    subTitle?: string;
    progress?: number;
}

const OnboardingPage = ({style, children, onPress, title, subTitle, progress}: OnboardingPageProps) => {
  return (
    <>
        <StatusBar style="auto" />
        <SafeAreaView style={[styles.con, style]}>
            <View style = {styles.top}>
                <View style={styles.row}>
                    <MyIcon onPress={router.back} name={"chevron-back"} type="Ionicons" />
                    <ProgressBar 
                    style={styles.progress} 
                    progress={progress} color = {"black"} 
                    />
                </View>
                <MyText textAlign="center" fontSize="large" bold>{title}</MyText>
                <MyText textAlign="center">{subTitle}</MyText>
            </View>
            <View style = {[styles.main, style]}>
             {children}
            </View>
            <View style = {styles.bottom}>
                <MyButton onPress={onPress} title="Next" />
            </View>
        </SafeAreaView>
    </>
  )
}

export default OnboardingPage

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"white",
        padding:'5%',
        paddingVertical:"10%",
    },
    progress:{
        width:300, 
        height:7.5,
        borderRadius:100,
        marginHorizontal:"2%",
        backgroundColor:"lightgray"
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
    },
    top:{
        //borderWidth:1,
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
    },
    main:{
        //borderWidth:1,
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
    },
    bottom:{
        //borderWidth:1,
        width:"100%"
    }
})

