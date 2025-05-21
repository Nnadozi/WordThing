import MyButton from '@/components/MyButton'
import MyIcon from '@/components/MyIcon'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Login = () => {
  return (
    <Page>
      <MyIcon size={40} style={styles.icon} type='Ionicons' name={"chevron-back"} onPress={router.back} />
      <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/icon.png')} />
      <MyText fontSize='large' bold >Sign in to Termy</MyText>
      <View style = {styles.buttonColumn}>
        <MyButton icon='google' style={{width:350 }} title='Sign in with Google'  />
        <MyButton icon='apple' title='Sign in with Apple'  />
        <MyButton icon='email' title='Sign in with Email'  />
      </View>
      <MyText color='gray' marginVertical={"5%"}>Don't Have an Account? 
        <MyText onPress={() => router.navigate('/(auth)/Register')} bold> Create One </MyText>
      </MyText>
    </Page>
  )
}

export default Login

const styles = StyleSheet.create({
  img:{
    width: 100,
    height: 100,
    borderRadius:30,
    marginBottom: "3%",
  },
  buttonColumn:{
    gap:10,
    marginTop:"5%"
  },
  icon: {
    position: 'absolute',
    top: "6%", 
    left:"3%"
  },
})