import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import Banner from '@/app/components/Banner/Banner';
import Input from '@/app/components/TestInput/TestInput'
import NavBar from '@/app/components/NavBar/NavBar';
import TestButton from '@/app/components/TestButton/TestButton';

export default function EditEmailScreen() {

    const router = useRouter();

    const navigateBackToSettings = () => {
        router.push('../../main/SettingsScreen')
    }

    return (
        <View style={styles.screenContainer}>
            {/* logo + cancel button banner */}
            <Banner
                subheading='Do you have a question or concern?'
                heading='Contact Us'
                onPress={navigateBackToSettings}
            >
            </Banner>

            <Input style={{ height: 250,  }} placeholder='Enter inquiry here'></Input>
            <TestButton title='Submit' onPress={navigateBackToSettings}></TestButton>
            <NavBar/>
        </View>
    );
};