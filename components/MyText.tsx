import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface MyTextProps {
    children?: React.ReactNode
    style?:TextStyle;
    fontSize?: FontSizeKey;
    marginvertical?: any;
    bold?: boolean;
    textAlign?: "left" | "right" | "center" | "justify";
}
const fontSizes = {small: 12, normal: 16, large: 27, xlarge: 35,};
type FontSizeKey = keyof typeof fontSizes;

const MyText = ({style, children, fontSize = "normal", marginvertical, bold, textAlign}: MyTextProps) => {
  return (
    <Text style = {[style,
    {fontSize: fontSizes[fontSize], marginVertical: marginvertical, 
    fontFamily: bold ? "DMSans-Bold" :"DMSans-Regular", textAlign: textAlign,
    }]}>
        {children}
    </Text>
  )
}

export default MyText

const styles = StyleSheet.create({})