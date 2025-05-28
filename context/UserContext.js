import { getApp } from '@react-native-firebase/app'
import { getAuth, signOut } from '@react-native-firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'

const auth = getAuth(getApp())
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
  const deleteAccount = async () => {
    const user = auth.currentUser
    if (!user) {
      console.error('No user is currently signed in')
      return
    } else {
      try {
        Alert.alert(
          'Delete Account',
          'Are you sure you want to delete your account? This action cannot be undone.',
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Delete',
              style: 'destructive',
              onPress: async () => {
                  await user.delete()
                  console.log(`User account ${user.email} deleted successfully`)
              },
            },
          ]
        )
      } catch (error) {
        console.error('Error deleting user account:', error)
      }
    }
  }
  return (
    <UserContext.Provider value={{user, signOutUser, deleteAccount}}>
      {children}
    </UserContext.Provider>
  )
}

// Hook to use the current user
export const useUser = () => useContext(UserContext)
