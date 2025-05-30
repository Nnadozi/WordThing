import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import OnboardingPage from '../../components/OnboardingPage'

const Breakdown = () => {
  return (
    <OnboardingPage
      title="Breakdown"
      subTitle="Here's how Termy works"
      progress={0.2}
      onPress={() => router.navigate("/(onboard)/Personalize")}>
  
    </OnboardingPage>
  )
}

export default Breakdown

const styles = StyleSheet.create({})
