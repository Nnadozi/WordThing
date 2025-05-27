import MyButton from '@/components/MyButton'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { useUser } from '@/context/UserContext'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const Profile = () => {
  const {user, signOutUser} = useUser()
  return (
    <Page>
      {
        user ? 
        <>
          <MyText marginVertical={"3%"} bold textAlign='center'>Profile, {user.email}!</MyText>
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