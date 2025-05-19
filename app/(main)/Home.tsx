import MyText from '@/components/MyText'
import Page from '@/components/Page'
import React from 'react'
import { StyleSheet } from 'react-native'

const Home = () => {
  return (
    <Page>
      <MyText bold>Todays Word: Eloquent</MyText>
      <MyText textAlign="center">Definition: Fluent or persuasive in speaking or writing.</MyText>
    </Page>
  )
}

export default Home

const styles = StyleSheet.create({})