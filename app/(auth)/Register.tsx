import MyButton from '@/components/MyButton'
import MyIcon from '@/components/MyIcon'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication'
import { AppleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

async function signUpWithApple() {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
  });

  if (!appleAuthRequestResponse.identityToken) {
    throw new Error('Apple Sign-In failed - no identify token returned');
  }

  const { identityToken, nonce } = appleAuthRequestResponse;
  const appleCredential = AppleAuthProvider.credential(identityToken, nonce);

  console.log("Apple sign up complete");
  console.log("appleCredential", appleCredential);
  
  return signInWithCredential(getAuth(), appleCredential);
}

const Register = () => {
  return (
    <Page>
      <MyIcon size={35} style={styles.icon} type='Ionicons' name={"chevron-back"} onPress={router.back} />
      <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/icon.png')} />
      <MyText fontSize='large' bold >Create an Account</MyText>
      <View style = {styles.buttonColumn}>
        <MyButton icon='google' style={{width:350 }} title='Sign up with Google'  />
        <MyButton icon='email' style={{width:350}} title='Sign up with Email'  />
        <AppleButton
            buttonStyle={AppleButton.Style.BLACK}
            buttonType={AppleButton.Type.SIGN_UP}
            style={{
              width: 160,
              height: 45,
            }}
            onPress={() => signUpWithApple()}
        />
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
    marginTop:"5%"
  },
  icon: {
    position: 'absolute',
    top: "6%", 
    left:"3%"
  },
})

