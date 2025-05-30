import OnboardingPage from '@/components/OnboardingPage'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const Finish = () => {
  return (
    <OnboardingPage
      title="Onboarding Finished"
      subTitle="Enjoy using Termy!"
      progress={1}
      onPress={() => router.replace("/(main)/Home")}>
  
    </OnboardingPage>
  )
}

export default Finish

const styles = StyleSheet.create({})