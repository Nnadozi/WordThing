import MyButton from '@/components/MyButton'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const EnableNotifications = () => {
  return (
    <Page>
      <MyText>Enable Notifications</MyText>
      <MyButton title='Next' onPress={ () => router.push("/(onboard)/CreateAccount")} />
    </Page>
  )
}

export default EnableNotifications

const styles = StyleSheet.create({})