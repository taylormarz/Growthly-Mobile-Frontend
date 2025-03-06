import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useUser } from '../../../../context/UserContext';
import { useRouter } from 'expo-router';
import styles from '@/styles/Settings/main/settings-styles';
import Header from '@/app/components/Header/Header';
import SettingButton from '../../../components/SecondaryButton/SettingButton';
import NavBar from '@/app/components/NavBar/NavBar';

export default function SettingsScreen() {

const { user } = useUser();
const router = useRouter();

const navigateToBankAccount = () => {
    router.push('../secondary/EditBank/EditBankScreen')
}

const navigateToSignInDetails = () => {
    router.push('../secondary/EditEmail/EditEmailScreen')
}

const navigateToEditAddress = () => {
    router.push('../secondary/EditAddress/EditAddressScreen')
}

const navigateToChangePass = () => {
    router.push('../secondary/ChangePass/ChangePassScreen')
}

const navigateToContactUs = () => {
    router.push('../secondary/Contact/ContactScreen')
}

    return (
        <View style={styles.screenContainer}>
            <Header
                title={`Welcome, ${user?.first_name || 'Guest'}! `}
                subtitle='Make changes to your account below.'
            />

            <Text style={styles.headerText}>Settings</Text>
            <View style={styles.settingsContainer}>
                <View>
                    <View>
                        {/* settings list */}
                        <SettingButton listItem='Edit Bank Account' buttonText='+' onPress={navigateToBankAccount}></SettingButton>
                        <SettingButton listItem='Edit Email'        buttonText='+' onPress={navigateToSignInDetails}></SettingButton>
                        <SettingButton listItem='Edit Address'      buttonText='+' onPress={navigateToEditAddress}></SettingButton>
                        <SettingButton listItem='Change Password'   buttonText='+' onPress={navigateToChangePass}></SettingButton>
                        <SettingButton listItem='Contact Us'        buttonText='+' onPress={navigateToContactUs}></SettingButton>
                        
                        {/* delete account button */}
                        <View>
                            <TouchableOpacity style={styles.deleteButton}>
                                <Text style={styles.buttonText}>Delete Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <NavBar />
        </View>
    );
};