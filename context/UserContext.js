import { getApp } from '@react-native-firebase/app'
import { getAuth, signOut } from '@react-native-firebase/auth'
import {
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
} from '@react-native-firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'

const auth = getAuth(getApp())
const db = getFirestore()

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userDoc, setUserDoc] = useState(null)

  const fetchUserDoc = async (uid) => {
    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      setUserDoc(docSnap.data())
    } else {
      console.warn('User document not found in Firestore.')
      setUserDoc(null)
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      setUser(firebaseUser)
      if (firebaseUser) {
        await fetchUserDoc(firebaseUser.uid)
      } else {
        setUserDoc(null)
      }
    })
    return unsubscribe
  }, [])

  const refreshUser = async () => {
    const current = auth.currentUser
    if (current) {
      await current.reload()
      setUser(auth.currentUser)
      await fetchUserDoc(current.uid)
    }
  }

  const signOutUser = async () => {
    try {
      await signOut(auth)
      console.log('User signed out successfully')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const deleteAccount = async () => {
    const currentUser = auth.currentUser
    if (!currentUser) {
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
              await deleteDoc(doc(db, 'users', currentUser.uid))
              await currentUser.delete()
              console.log(`User account ${currentUser.email} deleted successfully`)
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
    <UserContext.Provider
      value={{ user, userDoc, signOutUser, deleteAccount, refreshUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
