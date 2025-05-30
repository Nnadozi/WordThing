import MyIcon from '@/components/MyIcon'
import MyText from '@/components/MyText'
import Page from '@/components/Page'
import AppVersion from '@/constants/AppVersion'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'


const iconMap: Record<string, string> = {
  Appearance: 'sunny',
  Notifications: 'notifications',
  Language: 'language',
  Rate: 'star',
  Feedback: 'chatbox-ellipses',
  'Account Settings': 'person',
  Version: 'information-circle',
}

const options = [
  'Account Settings', //Make a seperate page
  'Notifications', // Push notifications toggle (MODAL)
  'Language', // Choose language (MODAL)
  'Appearance', //Theme selection (MODAL)
  'Feedback', //Feedback email (MODAL / REDIRECT)
  'Rate', //Direct to app store (REDIRECT)
  'Version',
];


const handleOptionPress = (option: string) => {
  option === "Version" ?
  ToastAndroid.show(`Your using Termy version ${AppVersion}`,ToastAndroid.SHORT)
  : router.navigate(`/(settings)/${option.replace(/\s+/g, '')}`)
}


function renderSetting(optionName: string, onPress: () => void) {
  return (
    <TouchableOpacity onPress={onPress} key={optionName} style={styles.optionCon}>
      <View style={styles.labelRow}>
        <MyIcon name={iconMap[optionName]} type="Ionicons" size={20}/>
        <MyText style={{marginLeft:10}} fontSize="normal" bold>
          {optionName}
        </MyText>
      </View>
      {optionName === 'Version' && (
        <MyText color="gray">{AppVersion}</MyText>
      )}
    </TouchableOpacity>
  )
}

const Settings = () => {
  return (
    <Page style={styles.con}>
      <View style={styles.topRow}>
        <MyIcon onPress={router.back} name="chevron-back" type="Ionicons" />
        <MyText fontSize="large" bold>
          Settings
        </MyText>
        <View />
      </View>
      {options.map(option =>
        renderSetting(option, () => handleOptionPress(option))
      )}
    </Page>
  )
}

export default Settings

const styles = StyleSheet.create({
  con: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom:"5%"
  },
  optionCon: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: '5%',
    borderBottomWidth: 0.75,
    borderBottomColor: 'lightgray',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})
