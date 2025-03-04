import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/styles/Settings/secondary/edit-address-styles';
import Banner from '@/app/components/Banner/Banner';
import Input from '@/app/components/TestInput/TestInput';
import DropdownMenu from '@/app/components/DropdownMenu/DropdownMenu';
import HalfInput from '@/app/components/HalfInput/HalfInput';
import TestButton from '@/app/components/TestButton/TestButton'
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

            <Input placeholder='Address'></Input>
            <Input placeholder='Phone Number'></Input>
            <View style={styles.inputContainer}>
                <DropdownMenu></DropdownMenu>
                <HalfInput placeholder='Postal Code'></HalfInput>
            </View>

            <TestButton title='Confirm Changes' onPress={navigateBackToSettings}></TestButton>

            <NavBar/>
        </View>
    );
};