import MyButton from '@/components/MyButton'
import MyIcon from '@/components/MyIcon'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { useUser } from '@/context/UserContext'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar } from 'react-native-paper'

const AccountSettings = () => {
  const {user, userDoc, signOutUser, deleteAccount} = useUser()
  const createdAtTimestamp = user && userDoc ? userDoc.createdAt : null;
  let formattedDate;
  if (createdAtTimestamp) {
    const createdAtDate = createdAtTimestamp.toDate();  
    formattedDate = createdAtDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  return (
    <Page style={styles.con}>
      <View style={styles.topRow}>
        <MyIcon size={25} onPress={router.back} name="chevron-back" type="Ionicons" />
        <View style={styles.labelRow}>
          <MyIcon name='person' type="Ionicons" size={20}/>
          <MyText  style={{marginLeft:10}}  bold>Account Settings</MyText>
        </View>
        <View/>
      </View>
      {
        user ?
      <View style = {{width:"100%",gap:20}}>
        <Avatar.Text size={125} label={user.displayName[0]} style={{backgroundColor:"black",alignSelf:"center"}} />
        <MyText bold>DisTplay Name</MyText>
        <View style = {styles.row}>
          <MyText>{user.displayName}</MyText>
          <MyText bold onPress={() => router.replace("/(auth)/NameScreen")}>Update</MyText>
        </View>
        <MyText bold>Email Address</MyText>
        <MyText>{user.email}</MyText>
        <MyText bold>Authentication Type </MyText>
        <MyText>
          {userDoc && userDoc.authType
            ? userDoc.authType[0].toUpperCase() + userDoc.authType.slice(1)
            : 'Unknown'}
        </MyText>
        <MyText bold>Date Joined</MyText>
        <MyText>{formattedDate}</MyText>
        <View style = {{gap:10, marginTop:"5%"}}>
          <MyButton title='Sign out' onPress={signOutUser} />
          <MyButton title='Delete Account' onPress={deleteAccount} />
        </View>
      </View>
      : 
        <View style = {styles.centeredView}>
          <MyIcon name='emoji-sad' type='Entypo' color='darkgray' size={50} style={{marginVertical:"3%"}} />
          <MyText color='darkgray'>No account data (are you signed in?)</MyText>
        </View>
      }
    </Page>
  )
}

export default AccountSettings

const styles = StyleSheet.create({
  con: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom:"10%"
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
  },
  centeredView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
  }
})

/**
#### 1. **Profile**
* Display Name
* Email Address
* Authentication Type (Google, Apple, Email/Password)
* Sign Out
* Delete Account (with confirmation)

#### 2. **Subscription & Billing**
* Current Plan Name (Free / Pro)
* Features Included (list of perks for current plan)
* Billing Information

  * Payment Method (card on file or app store subscription)
  * Billing Address (if applicable)
* Payment History (past invoices, receipts)
* Renewal & Cancellation

  * Auto-renewal status toggle
  * Cancel Subscription button
* Trial Status (if user is on a free trial)

  * Trial expiration date
  * Benefits during trial


 */