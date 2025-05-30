import OnboardingPage from '@/components/OnboardingPage'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const EnableNotifications = () => {
  return (
    <OnboardingPage
      title="Enable Notifications"
      subTitle="Get notified about new words and updates"
      progress={0.6}
      onPress={() => router.navigate("/(onboard)/CreateAccount")}>
  
    </OnboardingPage>
  )
}

export default EnableNotifications

const styles = StyleSheet.create({})