import MyText from '@/components/MyText'
import Page from '@/components/Page'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Dictionary = () => {
  return (
    <Page style={styles.con}>
      <View style = {styles.topRow}>
        <MyText fontSize='large' bold>My Dictionary</MyText>
      </View>
        <MyText>Browse past words (signed in only)</MyText>
        <MyText>Filter my date learned, part of speech, difficulty, etc</MyText>
        <MyText>Make a list</MyText>
    </Page>
  )
}

export default Dictionary

const styles = StyleSheet.create({
    con:{
    justifyContent:"flex-start",
    alignItems:"flex-start",
  },
  topRow:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
    marginBottom:"5%"
  }
})