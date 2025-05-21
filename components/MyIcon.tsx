import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

type IconType = 'Entypo' | 'AntDesign' | 'Feather' | 'Ionicons' | 'MaterialIcons';

interface MyIconProps {
  name: any;
  type?: IconType;
  size?: number;
  onPress?: () => void;
  color?: string;
  style?:ViewStyle;
}

const iconLibraries: Record<IconType, any> = {
  Entypo,
  AntDesign,
  Feather,
  Ionicons,
    MaterialIcons,
};

const MyIcon = ({ name, type = "Entypo", size = 30, onPress, color, style }: MyIconProps) => {
  const IconComponent = iconLibraries[type];

  if (!IconComponent) {
    console.warn(`Unsupported icon type: ${type}`);
    return null;
  }

  return (
    <TouchableOpacity style = {style} onPress={onPress} disabled={!onPress}>
      <IconComponent name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default MyIcon;

const styles = StyleSheet.create({});
