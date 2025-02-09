import React from 'react';
import { TextInput, TextStyle } from 'react-native';
import styles from './InputField.styles';

interface Props {
    style?: TextStyle;
    placeholder: string;
    placeholderTextColor?: string; // I'm adding this because using colors in the style sheet doesn't work for mobile (only web)
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

// i keep reading about avoiding React.FC so i think i will refactor all components with a recommended alternative
const InputField: React.FC<Props> = ({ style, placeholder, placeholderTextColor = '#EAEFF3', value, onChangeText, secureTextEntry }) => {
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default InputField;