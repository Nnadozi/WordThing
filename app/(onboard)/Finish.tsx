import OnboardingPage from '@/components/OnboardingPage'
import { router } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'

const Finish = () => {
  const confettiRef = useRef(null)

  useEffect(() => {
    confettiRef.current?.start()
  }, [])

  return (
    <View style={styles.container}>
      <OnboardingPage
        title="Onboarding Finished"
        subTitle="Enjoy using Termy!"
        progress={1}
        onPress={() => router.replace("/(main)/Home")}
      />
      <ConfettiCannon
        count={100}
        origin={{ x: 0, y: 0 }}
        fadeOut={true}
        autoStart={true}
        explosionSpeed={400}
        fallSpeed={4000}
      />
    </View>
  )
}

export default Finish

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
