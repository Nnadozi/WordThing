import MyButton from '@/components/MyButton'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { useUser } from '@/context/UserContext'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const Profile = () => {
  const {user, signOutUser,deleteAccount} = useUser()
  return (
    <Page>
      {
        user ? 
        <>
          <MyText bold textAlign='center'>Profile of {user.email}!</MyText>
          <MyText>Current Streak: </MyText>
          <MyText>Longest Streak: </MyText>
          <MyText>Words Learned: </MyText>
          <MyText>Learner since: </MyText>
          <MyText bold textAlign='center'>Settings</MyText>
          <MyText>Dark mode toggle</MyText>
          <MyText>Notifications toggle</MyText>
          <MyText>Language selection</MyText>
          <MyText>Manage subscription</MyText>
          <MyButton title='Delete Account' onPress={deleteAccount} />
          <MyButton title='Sign Out' onPress={signOutUser} />
        </>
        : 
          <>
            <MyText marginVertical={"3%"} bold textAlign='center'>Sign in to access this feature</MyText>
            <MyButton title='Log in' onPress={() => router.navigate('/(auth)/Login')} />
          </>
      }
    </Page>
  )
}

export default Profile

const styles = StyleSheet.create({})

