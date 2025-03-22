import React from 'react';
import { TextInput, View } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';
import styles from './TestInput-styles';

interface Props {
  placeholder: string;
  style?: object;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = ({ placeholder, style, secureTextEntry, onChangeText }: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor={Colors.growthly_white}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
