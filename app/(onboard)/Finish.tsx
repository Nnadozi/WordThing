import MyButton from '@/components/MyButton'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const Finish = () => {
  return (
    <Page>
      <MyText>Onboarding Finished</MyText>
      <MyButton title='Go Main Nav' onPress={() => router.navigate('/(main)/Home')} />
    </Page>
  )
}

export default Finish

const styles = StyleSheet.create({})