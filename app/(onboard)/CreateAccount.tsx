import MyButton from '@/components/MyButton'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const CreateAccount = () => {
  return (
    <Page>
      <MyText>Create Account</MyText>
      <MyButton title='Create' onPress={ () => router.push("/(auth)/Register")} />
      <MyButton title='Later' onPress={ () => router.push("/(onboard)/Finish")} />
    </Page>
  )
}

export default CreateAccount

const styles = StyleSheet.create({})