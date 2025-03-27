import React, {
	useState,
} from 'react';
import {
	View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '@/context/UserContext';
import { updateEmailUsername } from '@/app/utils/email-username/updateEmailUsername';
import { validateEmailAndUsername } from '@/app/utils/validation/validationUtils';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import Banner from '@/app/components/Banner/Banner';
import Input from '@/app/components/TestInput/TestInput';
import TestButton from '@/app/components/TestButton/TestButton';
import NavBar from '@/app/components/NavBar/NavBar';

export default function EditEmailScreen() {
	const router = useRouter();
	const { user, setUserData } = useUser();

	// user input stored in these states
	const [email, setEmail] = useState(user?.email || '');
	const [username, setUsername] = useState(user?.username || '');

	const handleUserUpdate = () => {
		if (!validateEmailAndUsername(email, username)) return;

		if (!user?._id) return;

		updateEmailUsername({
			userId: user._id,
			email,
			username,
			user,
			setUserData,
		});
	};

	// nav for cancel button (takes back to settings main screen)
	const navigateBackToSettings = () => {
		router.push('/screens/Lender/Settings/main/SettingsScreen');
	};

	return (
		<View style={styles.screenContainer}>
			{/* logo + cancel button banner */}
			<Banner
				subheading='Update Email and/or Username Below'
				heading='Edit Email'
				onPress={navigateBackToSettings}
			/>

			{/* data for user coming from user context */}
			<Input
				placeholder={user?.email || 'Email'}
				onChangeText={setEmail}
			/>
			<Input
				placeholder={user?.username || 'Username'}
				onChangeText={setUsername}
			/>
			<TestButton
				title='Confirm Changes'
				onPress={handleUserUpdate}
			/>
			<NavBar />
		</View>
	);
}