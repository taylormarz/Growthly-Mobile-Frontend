import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/styles/dashboard-styles';
import NavBar from '@/app/components/NavBar/NavBar';

export default function SettingsScreen() {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.headerText}>Setttings Screen</Text>
            </View>
            <NavBar />
        </View>
    );
};