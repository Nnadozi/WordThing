import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface MyTextProps {
    children?: React.ReactNode
    style?:TextStyle;
    fontSize?: FontSizeKey;
    marginVertical?: any;
    bold?: boolean;
    textAlign?: "left" | "right" | "center" | "justify";
    onPress?: () => void; 
    color?: string;
}
const fontSizes = {small: 12, normal: 16, large: 27, xlarge: 35,};
type FontSizeKey = keyof typeof fontSizes;

const MyText = ({style, children, fontSize = "normal", marginVertical, bold, textAlign, onPress, color}: MyTextProps) => {
  return (
    <Text 
    onPress={onPress}
    style = {[style,
    {fontSize: fontSizes[fontSize], marginVertical: marginVertical, 
    fontFamily: bold ? "DMSans-Bold" :"DMSans-Regular", textAlign: textAlign,color:color
    }]}>
        {children}
    </Text>
  )
}

export default MyText

const styles = StyleSheet.create({})