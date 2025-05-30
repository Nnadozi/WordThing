import MyButton from '@/components/MyButton'
import MyIcon from '@/components/MyIcon'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import { useUser } from '@/context/UserContext'
import HeatMap from '@ncuhomeclub/react-native-heatmap'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar } from 'react-native-paper'

const Profile = () => {
  const {user, userDoc} = useUser()
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
  const data = [12, 423, 42, 0, 0, 0, 0, 23, 0, 0, 0]
  return (
    <Page style={styles.con}>
      <View style = {styles.topRow}>
        <MyText fontSize='large' bold>Profile</MyText>
        <MyIcon onPress={() => router.navigate('/(settings)/Settings')} name="settings-sharp" type='Ionicons' />
      </View>
      {
        user ? 
        <>
          <View style = {styles.box}>
            <View style = {{flexDirection:"row",width:"100%",gap:"5%"}}>
              <Avatar.Text size={65} label={user.displayName[0]} style={{backgroundColor:"black"}} />
              <View style = {{justifyContent:"center"}}>
                <MyText bold>Display name: {user.displayName}</MyText>
                <MyText>Joined {formattedDate}</MyText>
              </View>
            </View>
          </View>
          <View style ={{flexDirection:"row",justifyContent:"space-between",width:"100%"}}>
            <View style = {[styles.box,{marginVertical:"3%",width:"49%"}]}>
              <View style = {styles.label}>
                <MyIcon name='local-fire-department' type='MaterialIcons' size={15} />
                <MyText bold >Current Streak</MyText>
              </View>
              <MyText fontSize='xlarge'>{userDoc?.streak?.current} </MyText>
              <MyText fontSize='small'>Longest: {userDoc?.streak?.longest} </MyText>
            </View>
            <View style = {[styles.box,{marginVertical:"3%",width:"49%"}]}>
              <View style = {styles.label}>
                <MyIcon name='book' size={15} />
                <MyText bold >Words Learned</MyText>
              </View>
              <MyText fontSize='xlarge'>{userDoc?.wordsLearned} </MyText>
              <MyText onPress={() => console.log(3)} fontSize='small' bold> See all words →</MyText>
            </View>
          </View>
          <MyText bold>Daily Usey</MyText>
          <HeatMap data={data} shape='circle' direction='horizontal'/>
        </>
        : 
        <View style = {styles.centeredView}>
            <MyText marginVertical={"3%"} bold textAlign='center'>Sign in to view your profile</MyText>
            <MyButton title='Sign in' onPress={() => router.navigate('/(auth)/Authenticate')} />
        </View>
      }
    </Page>
  )
}

export default Profile

const styles = StyleSheet.create({
  con:{
    justifyContent:"flex-start",
    alignItems:"flex-start",
  },
  topRow:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
    marginBottom:"5%"
  },
  centeredView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
  },
  box:{
    borderWidth:1,
    borderColor:"lightgray",
    borderRadius:10,
    width:"100%",
    paddingVertical:"5%",
    paddingHorizontal:"3%"
  },
  label:{
    flexDirection:"row", 
    alignItems:"center",
    gap:"5%"
  }
})

