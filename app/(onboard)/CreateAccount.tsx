import OnboardingPage from '@/components/OnboardingPage'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const CreateAccount = () => {
  return (
     <OnboardingPage
      title="Create Account"
      subTitle="Save your progress and preferences"
      progress={0.8}
      onPress={() => router.navigate("/(onboard)/Finish")}>
  
    </OnboardingPage>
  )
}

export default CreateAccount

const styles = StyleSheet.create({})

/**
 * 
 *   <Page>
      <MyText>Create Account</MyText>
      <MyButton title='Create' onPress={ () => router.push("/(auth)/Register")} />
      <MyButton title='Later' onPress={ () => router.push("/(onboard)/Finish")} />
    </Page>
 */