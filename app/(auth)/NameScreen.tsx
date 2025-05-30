import MyButton from '@/components/MyButton'
import MyInput from '@/components/MyInput'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { useUser } from '@/context/UserContext'
import { getAuth, updateProfile } from '@react-native-firebase/auth'
import { doc, getFirestore, updateDoc } from '@react-native-firebase/firestore'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Alert, StyleSheet } from 'react-native'

const NameScreen = () => {
  const [displayName, setDisplayName] = useState('')
  const [loading, setLoading] = useState(false)
  const db = getFirestore()
  const { user, refreshUser, userDoc } = useUser()
  const {isNew} = useLocalSearchParams()
  
  async function handleSetName() {
    const trimmedName = displayName.trim()
    try {
      setLoading(true)
      const auth = getAuth()
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: trimmedName,
        })
      }

      await updateDoc(doc(db, 'users', user.uid), {
        displayName: trimmedName,
      })

      await refreshUser()

      console.log(`✅ Display name successfully set as ${trimmedName}`)
      {isNew ?
      Alert.alert('Welcome to Termy', `Enjoy your stay, ${trimmedName}!`)
      : Alert.alert('Name updated', `Display name updated to ${trimmedName}!`)
      }
      router.replace('/(main)/Home')
    } catch (error) {
      console.error('❌ Error setting display name:', error)
      Alert.alert('Error', 'Something went wrong while setting your display name.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Page>
      <MyText fontSize="large" bold>
        What should we call you?
      </MyText>
      <MyText>This is for personalization purposes</MyText>
      <MyInput
        style={{ marginVertical: '5%' }}
        placeholder="Ex: Zixon77"
        value={displayName}
        onChangeText={setDisplayName}
        maxLength={50}
      />
      <MyButton disabled={!displayName} title={loading ? 'Setting...' : 'Set Name'} onPress={handleSetName} />
    </Page>
  )
}

export default NameScreen

const styles = StyleSheet.create({})
