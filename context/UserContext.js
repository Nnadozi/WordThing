import { getApp } from '@react-native-firebase/app'
import { getAuth, signOut } from '@react-native-firebase/auth'
import { deleteDoc, doc, getFirestore } from '@react-native-firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'

const auth = getAuth(getApp())
const db = getFirestore()
const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Listen for Firebase auth changes. When a user signs in/out, setUser is triggered to update the state
    const unsubscribe = auth.onAuthStateChanged(setUser)
    return unsubscribe 
  }, [])

  const signOutUser = async () => {
    try {
      await signOut(auth)
      console.log('User signed out successfully')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const refreshUser = async () => {
    //Helps trigger UI updates
    const current = auth.currentUser
    if (current) {
      await current.reload()
      setUser(auth.currentUser) 
    }
  }

  const deleteAccount = async () => {
    const user = auth.currentUser
    if (!user) {
      console.error('No user is currently signed in')
      return
    }

    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'users', user.uid))
              await user.delete()
              console.log(`User account ${user.email} deleted successfully`)
            } catch (error) {
              if (error.code === 'auth/requires-recent-login') {
                Alert.alert('Please sign in again to delete your account.')
              } else {
                console.error('Error deleting user account:', error)
                Alert.alert('Failed to delete account:', error.message)
              }
            }
          },
        },
      ]
    )
  }

  return (
    <UserContext.Provider value={{user, signOutUser, deleteAccount, refreshUser}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
