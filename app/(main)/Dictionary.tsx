import MyText from '@/components/MyText'
import Page from '@/components/Page'
import React from 'react'
import { StyleSheet } from 'react-native'

const Dictionary = () => {
  return (
    <Page>
        <MyText>Browse past words (signed in only)</MyText>
        <MyText>Filter my date learned, part of speech, difficulty, etc</MyText>
        <MyText>Make a list</MyText>
    </Page>
  )
}

export default Dictionary

const styles = StyleSheet.create({})