import React from 'react';
import { View, Image, Text } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import Banner from '@/app/components/Banner/Banner';
import NavBar from '@/app/components/NavBar/NavBar';

export default function EditBankScreen() {

    const router = useRouter();

    const navigateBackToSettings = () => {
        router.push('../../secondary/SettingsScreen')
    }

    return (
        <View style={styles.screenContainer}>
            {/* logo + cancel button banner */}
            <Banner
                subheading='Add or Edit Details Below'
                heading='Bank Information'
                onPress={navigateBackToSettings}
            >
            </Banner>
            <NavBar/>
        </View>
    );
};