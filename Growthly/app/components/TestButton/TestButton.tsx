import React from 'react';
import styles from './TestButton-styles';
import { View, TouchableOpacity, Text } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
};

const TestButton = ({ title, onPress }: Props) => {
    return (
        <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TestButton;