import React from 'react';
import {
	View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { usePasswordChange } from '@/app/utils/passwords/usePasswordChange';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import Banner from '@/app/components/Banner/Banner';
import Input from '@/app/components/TestInput/TestInput';
import TestButton from '@/app/components/TestButton/TestButton';
import NavBar from '@/app/components/NavBar/NavBar';

export default function EditEmailScreen() {
	const router = useRouter();

	const {
		setCurrentPassword,
		setNewPassword,
		setConfirmPassword,
		handlePassChange,
	} = usePasswordChange(() => router.push('../../main/SettingsScreen'));

	return (
		<View style={styles.screenContainer}>
			{/* logo + cancel button banner */}
			<Banner
				subheading='Update Password Below'
				heading='Change Password'
				onPress={() => router.push('../../main/SettingsScreen')}
			/>

			<Input
				placeholder='Current Password'
				onChangeText={setCurrentPassword}
				secureTextEntry={true}
			/>
			<Input
				placeholder='New Password'
				onChangeText={setNewPassword}
				secureTextEntry={true}
			/>
			<Input
				placeholder='Confirm New Password'
				onChangeText={setConfirmPassword}
				secureTextEntry={true}
			/>

			<TestButton
				title='Confirm Changes'
				onPress={handlePassChange}
			/>

			<NavBar />
		</View>
	);
}