import MyButton from '@/components/MyButton'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const Breakdown = () => {
  return (
    <Page>
      <MyText>Breakdown</MyText>
      <MyButton title='Next' onPress={ () => router.push("/(onboard)/Personalize")} />
    </Page>
  )
}

export default Breakdown

const styles = StyleSheet.create({})