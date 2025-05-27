import MyButton from '@/components/MyButton'
import MyIcon from '@/components/MyIcon'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { appleAuth } from '@invertase/react-native-apple-authentication'
import { AppleAuthProvider, getAuth, GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth'
import { doc, getFirestore, serverTimestamp, setDoc } from '@react-native-firebase/firestore'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const db = getFirestore();
GoogleSignin.configure({
  webClientId: '633127745699-m2hnpf22msjg191cqjcehes487uoap4m.apps.googleusercontent.com',
})

async function signUpWithGoogle() {
  try {
    // ✅ Step 1: Check if device has Google Play Services. Show a dialog if the services are not available.
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // ✅ Step 2: Prompt the user to select a Google account and sign in
    const userInfo = await GoogleSignin.signIn();
    // ✅ Step 3: Retrieve the ID token for authentication with Firebase
    const { idToken } = await GoogleSignin.getTokens();
    // ✅ Step 4: Create a Firebase credential using the Google ID token
    const googleCredential = GoogleAuthProvider.credential(idToken);
    // ✅ Step 5: Use credential to sign in with Firebase
    const userCredential = await signInWithCredential(getAuth(), googleCredential);
    const user = userCredential.user;
    console.log("✅ Google Sign-up complete:",  user.email);
    // ✅ Now safely write to Firestore
    await setDoc(doc(db, 'users', user.uid), {
      id: user.uid,
      email: user.email,
      accountType: 'google',
      createdAt: serverTimestamp(),
    });
  } catch (error:any) {
    if (error.code) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.warn('⚠️ User cancelled the login flow');
          break;
        case statusCodes.IN_PROGRESS:
          console.warn('⚠️ Sign-in already in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.warn('❌ Play services not available or outdated');
          break;
        default:
          console.error('❌ Unknown Google Sign-In error:', error);
      }
    } else {
      console.error('❌ Non-Google Sign-In error:', error);
    }
  }
}

async function signUpWithApple() {
  try{
   // ✅ Step 1: Perform Apple authentication request
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
  });
  // ✅ Step 2: Check if the identity token is returned
  if (!appleAuthRequestResponse.identityToken) {
    throw new Error('Apple Sign-Up failed - no identify token returned');
  }
  // ✅ Step 3: Extract the identity token and nonce
  const { identityToken, nonce } = appleAuthRequestResponse;
  // ✅ Step 4: Create a Firebase credential using the Apple identity token
  const appleCredential = AppleAuthProvider.credential(identityToken, nonce);
  // ✅ Step 5: Use credential to sign in with Firebase
  const userCredential = await signInWithCredential(getAuth(), appleCredential);
  const user = userCredential.user;
  console.log("✅ Apple Sign-Up complete:", user.email);
  // ✅ Now safely write to Firestore
  await setDoc(doc(db, 'users', user.uid), {
    id: user.uid,
    email: user.email,
    accountType: 'apple',
    createdAt: serverTimestamp(),
  });
  } catch (error:any) {
    if (error.code) {
      switch (error.code) {
        case '1001': 
          console.warn('⚠️ User cancelled Apple Sign-In');
          break;
        case '1002':
          console.warn('❌ Apple Sign-In authorization failed');
          break;
        default:
          console.error('❌ Unknown Apple Sign-In error:', error);
      }
    } else {
      console.error('❌ Non-Apple Sign-In error:', error);
    }
  }
}


const Register = () => {
  return (
    <Page>
      <MyIcon size={35} style={styles.icon} type='Ionicons' name={"chevron-back"} onPress={router.back} />
      <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/icon.png')} />
      <MyText fontSize='large' bold >Create an Account</MyText>
      <View style = {styles.buttonColumn}>
        <MyButton onPress={signUpWithGoogle} icon='google' style={{width:350 }} title='Sign up with Google'  />
        <MyButton icon='apple' title='Sign up with Apple' onPress={signUpWithApple} />
      </View>
      <MyText color='gray' marginVertical={"5%"}>Already Have an Account? 
        <MyText onPress={() => router.navigate('/(auth)/Login')} bold> Log in </MyText>
      </MyText>
    </Page>
  )
}

export default Register


const styles = StyleSheet.create({
  img:{
    width: 100,
    height: 100,
    borderRadius:30,
    marginBottom: "3%",
  },
  buttonColumn:{
    gap:10,
    marginTop:"3%"
  },
  icon: {
    position: 'absolute',
    top: "6%", 
    left:"3%"
  },
})

