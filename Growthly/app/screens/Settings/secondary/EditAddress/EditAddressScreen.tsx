import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import Banner from '@/app/components/Banner/Banner';
import NavBar from '@/app/components/NavBar/NavBar';

export default function EditAddressScreen() {

    const router = useRouter();

    const navigateBackToSettings = () => {
        router.push('../../main/SettingsScreen')
    }

    return (
        <View style={styles.screenContainer}>
            {/* logo + cancel button banner */}
            <Banner
                subheading='Update Address Below'
                heading='Edit Address'
                onPress={navigateBackToSettings}
            >
            </Banner>
            <NavBar/>
        </View>
    );
};