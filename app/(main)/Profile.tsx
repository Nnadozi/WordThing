import MyButton from '@/components/MyButton'
import MyIcon from '@/components/MyIcon'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { useUser } from '@/context/UserContext'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'


const Profile = () => {
  const {user} = useUser()
  return (
    <Page style={styles.con}>
      <View style = {styles.topRow}>
        <MyText fontSize='large' bold>Profile</MyText>
        <MyIcon onPress={() => router.navigate('/(settings)/Settings')} name="settings-sharp" type='Ionicons' />
      </View>
      {
        user ? 
        <>
          <MyText bold textAlign='center'>Profile of {user.email}!</MyText>
          <MyText>Display name: {user.displayName}</MyText>
          <MyText>Current Streak: </MyText>
          <MyText>Longest Streak: </MyText>
          <MyText>Words Learned: </MyText>
          <MyText>Learner since: </MyText>
        </>
        : 
        <View style = {styles.centeredView}>
            <MyText marginVertical={"3%"} bold textAlign='center'>Sign in to view your profile</MyText>
            <MyButton title='Sign in' onPress={() => router.navigate('/(auth)/Authenticate')} />
        </View>
      }
    </Page>
  )
}

export default Profile

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
  },
  centeredView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
  }
})

/**
<BlurView experimentalBlurMethod='dimezisBlurView'  intensity={50} tint="light" style={styles.blurContainer}>
  <MyText marginVertical={"3%"} bold textAlign='center'>Sign in to view your profile</MyText>
  <MyButton title='Log in' onPress={() => router.navigate('/(auth)/Login')} />
</BlurView>    
  blurContainer: {
    ...StyleSheet.absoluteFillObject, 
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
     flex:1,
  },
*/