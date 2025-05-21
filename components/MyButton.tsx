import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

interface MyButtonProps {
    title?:string;
    mode?: 'text' | 'outlined' | 'contained' | 'elevated' | undefined
    onPress?: () => void
    style?:ViewStyle;
    marginVertical?: any;
    icon?:string;
}

const MyButton = ({mode = 'contained', onPress, title, style, marginVertical, icon}: MyButtonProps) => {
  return (
    <Button
    icon={icon}
    onPress={onPress}
    mode={mode}
    children={title}
    labelStyle={{fontFamily: "DMSans-Bold", fontSize: 16}}
    style={[style,{marginVertical:marginVertical, padding:"1%",borderRadius: 100}]}
    buttonColor='black'
    />
  )
}

export default MyButton

const styles = StyleSheet.create({})