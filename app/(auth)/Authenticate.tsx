import MyButton from '@/components/MyButton';
import MyIcon from '@/components/MyIcon';
import MyText from '@/components/MyText';
import Page from '@/components/Page';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { AppleAuthProvider, getAuth, GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth';
import { doc, getDoc, getFirestore, serverTimestamp, setDoc } from '@react-native-firebase/firestore';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const db = getFirestore();
GoogleSignin.configure({
  webClientId: '633127745699-m2hnpf22msjg191cqjcehes487uoap4m.apps.googleusercontent.com',
});

async function signUpWithGoogle() {
  try {
    // Step 1: Ensure device has Google Play Services
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Step 2: Prompt user to select Google account
    await GoogleSignin.signOut();
    const userInfo = await GoogleSignin.signIn();
    // Step 3: Get ID token and generate Firebase credential
    const { idToken } = await GoogleSignin.getTokens();
    const googleCredential = GoogleAuthProvider.credential(idToken);
    // Step 4: Sign in with Firebase
    const userCredential = await signInWithCredential(getAuth(), googleCredential);
    const user = userCredential.user;
    console.log('✅ Google Sign-in complete:', user.email);
    // Step 5: Check if user already exists in Firestore
    const userDocRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(userDocRef);
    if (!docSnap.exists()) {
      // New user: create Firestore doc and go to NameScreen
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        displayName: null,
        authType: 'google',
        createdAt: serverTimestamp(),
        lastActive: null,
        wordsLearned: 0,
        streak: {
          current: 0,
          longest: 0,
          lastCompleted: null,
        },
        subscription: {
          isPro: false,
          startedAt: null,
          expiresAt: null,
        },
      });
      router.replace({pathname:"/(auth)/NameScreen",params:{isNew:"true"}});
    } else {
      // Existing user: go to home
      router.replace('/(main)/Home');
    }
  } catch (error: any) {
    handleGoogleError(error);
  }
}

async function signUpWithApple() {
  try {
    // Step 1: Perform Apple Sign-In request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-Up failed - no identity token returned');
    }
    // Step 2: Generate Firebase credential
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = AppleAuthProvider.credential(identityToken, nonce);
    // Step 3: Sign in with Firebase
    const userCredential = await signInWithCredential(getAuth(), appleCredential);
    const user = userCredential.user;
    console.log('✅ Apple Sign-in complete:', user.email);
    // Step 4: Check if user already exists in Firestore
    const userDocRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(userDocRef);
    if (!docSnap.exists()) {
      // New user: create Firestore doc and go to NameScreen
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        displayName: null,
        authType: 'apple',
        createdAt: serverTimestamp(),
        lastActive: null,
        wordsLearned: 0,
        streak: {
          current: 0,
          longest: 0,
          lastCompleted: null,
        },
        subscription: {
          isPro: false,
          startedAt: null,
          expiresAt: null,
        },
      });
      router.replace({pathname:"/(auth)/NameScreen",params:{isNew:"true"}});
    } else {
      // Existing user: go to home
      router.replace('/(main)/Home');
    }
  } catch (error: any) {
    handleAppleError(error);
  }
}

function handleGoogleError(error: any) {
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

function handleAppleError(error: any) {
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


const Authenticate = () => {
  return (
    <Page>
      <MyIcon
        style={styles.icon}
        type="Ionicons"
        name="chevron-back"
        onPress={router.back}
      />
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../../assets/images/icon.png')}
      />
      <MyText fontSize="large" bold>
        Authenticate for Termy
      </MyText>
      <View style={styles.buttonColumn}>
        <MyButton
          icon="google"
          title="Sign in / up with Google"
          onPress={signUpWithGoogle}
          style={{ width: 350 }}
        />
        <MyButton
          icon="apple"
          title="Sign in / up with Apple"
          onPress={signUpWithApple}
        />
      </View>
    </Page>
  );
};

export default Authenticate;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginBottom: '3%',
  },
  buttonColumn: {
    gap: 10,
    marginTop: '3%',
  },
  icon: {
    position: 'absolute',
    top: '6%',
    left: '3%',
  },
});
