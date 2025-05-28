import React from 'react';
import { StyleSheet, TextInput, TextStyle } from 'react-native';

interface MyInputProps {
  style?: TextStyle;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  width?:any;
  maxLength?:number;
}

const MyInput = ({ style, placeholder, value, onChangeText,width = "75%", maxLength }: MyInputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, {width:width}, style]}
      returnKeyType="done"
      maxLength={maxLength}
    />
  );
};

export default MyInput;

const styles = StyleSheet.create({
    input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    padding: "3%",
    fontSize: 16,
  }
});
