import { getApp } from '@react-native-firebase/app'
import { getAuth, signOut } from '@react-native-firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

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
  return (
    <UserContext.Provider value={{user, signOutUser}}>
      {children}
    </UserContext.Provider>
  )
}

// Hook to use the current user
export const useUser = () => useContext(UserContext)
