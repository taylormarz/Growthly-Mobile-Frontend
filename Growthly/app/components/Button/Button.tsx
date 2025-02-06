import React from 'react';
import styles from './Button.styles';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
};

const Button: React.FC<Props> = ({ title, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;