import React from 'react';
import { TextInput } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';
import styles from './HalfInput-styles';

interface Props {
  placeholder: string;
  onChangeText?: (text: string) => void;
}

const HalfInput = ({ placeholder, onChangeText }: Props) => {
  return (
    <TextInput
      style={styles.halfInput}
      placeholder={placeholder}
      placeholderTextColor={Colors.growthly_white}
      onChangeText={onChangeText}
      autoCorrect={false}
    />
  );
};

export default HalfInput;
