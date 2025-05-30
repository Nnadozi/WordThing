import OnboardingPage from '@/components/OnboardingPage'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const Personalize = () => {
  return (
    <OnboardingPage
      title="Personalize"
      subTitle="What words do you want to see?"
      progress={0.4}
      onPress={() => router.navigate("/(onboard)/EnableNotifications")}>
  
    </OnboardingPage>
  )
}

export default Personalize

const styles = StyleSheet.create({})