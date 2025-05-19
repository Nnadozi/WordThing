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
      <MyButton title='Next' onPress={ () => router.push("/(onboard)/Finish")} />
    </Page>
  )
}

export default CreateAccount

const styles = StyleSheet.create({})