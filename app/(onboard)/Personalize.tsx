import MyButton from '@/components/MyButton'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const Personalize = () => {
  return (
    <Page>
      <MyText>Personalize</MyText>
      <MyButton title='Next' onPress={ () => router.push("/(onboard)/CreateAccount")} />
    </Page>
  )
}

export default Personalize

const styles = StyleSheet.create({})