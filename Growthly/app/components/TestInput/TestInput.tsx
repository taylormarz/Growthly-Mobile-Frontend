import React from 'react';
import { TextInput, View } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';
import styles from './TestInput-styles';

interface Props {
    placeholder: string;
}

const Input = ({ placeholder }: Props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={Colors.growthly_white}
            />
        </View>
    );
};

export default Input;
