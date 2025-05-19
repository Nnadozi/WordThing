import MyButton from '@/components/MyButton'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Welcome = () => {
  return (
    <Page>
      <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/icon.png')} />
      <MyText bold fontSize='large'>Welcome to Termly</MyText>
      <MyText>A smarter word a day That's all it takes.</MyText>
      <MyButton marginVertical={"3%"} title='Get Started' onPress={ () => router.push('/(onboard)/Breakdown')} />
    </Page>
  )
}

export default Welcome

const styles = StyleSheet.create({
  img:{
    width: 150,
    height: 150,
    borderRadius:30,
    marginBottom: "3%",
  }
})