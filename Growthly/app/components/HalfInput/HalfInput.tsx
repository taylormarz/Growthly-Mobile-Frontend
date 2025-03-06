import React from 'react';
import { TextInput, View } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';
import styles from './HalfInput-styles';

interface Props {
    placeholder: string;
}

const HalfInput = ({ placeholder }: Props) => {
    return (
        <TextInput
            style={styles.halfInput}
            placeholder={placeholder}
            placeholderTextColor={Colors.growthly_white}
        />
    );
};

export default HalfInput;