import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import NavBar from '@/app/components/NavBar/NavBar';

export default function EditBankScreen() {

    return (
        <View style={styles.screenContainer}>
            <NavBar/>
        </View>
    );
};