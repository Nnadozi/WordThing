import MyButton from '@/components/MyButton'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Checkbox } from 'react-native-paper'

const Home = () => {
   const [checked, setChecked] = React.useState(false);
  return (
    <Page style={styles.con}>
      <View style = {styles.topRow}>
        <MyText fontSize='large' bold>Home</MyText>
      </View>
      <MyText bold>Todays Word: Eloquent</MyText>
      <MyText>
        Definition: Fluent or persuasive in speaking or writing.
      </MyText>
      <MyText>
        Part of speech: Adjective
      </MyText>
      <MyText>
        Example sentence: The professor gave an eloquent speech that inspired everyone in the audience.
      </MyText>
      <MyText>pronunciation</MyText>
      <View style={{flexDirection:"row", alignItems: 'center', justifyContent: 'center'}}>
        <Checkbox 
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />
        <MyText>Got it</MyText>
      </View>
      {checked && (
        <MyButton title='Quiz' onPress={() => router.navigate('/WordQuiz')} />
      )}
    </Page>
  )
}

export default Home

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