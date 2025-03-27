import React from 'react';
import { View, Image, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import styles from '@/styles/Settings/secondary/edit-bank-styles';
import Banner from '@/app/components/Banner/Banner';
import Input from '@/app/components/TestInput/TestInput';
import TestButton from '@/app/components/TestButton/TestButton';
import NavBar from '@/app/components/NavBar/NavBar';

export default function EditBankScreen() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		street_address: '',
		phone_number: '',
		province: '',
		postal_code: '',
		username: '',
		user_type: '',
		sin_number: '',
	});

	const navigateBackToSettings = () => {
		router.push('/screens/Lender/Settings/main/SettingsScreen');
	};

	return (
		<View style={styles.screenContainer}>
			{/* logo + cancel button banner */}
			<Banner
				subheading="Add or Update Details Below"
				heading="Bank Information"
				onPress={navigateBackToSettings}
			></Banner>

			{/*<InputField placeholder='First Name' value={formData.first_name} onChangeText={(text) => setFormData({ ...formData, first_name: text })} 
            style={{ position: 'absolute', top: 357, left: 58}} 
            />*/}

			<Input placeholder="Institution Name"></Input>
			<Input placeholder="Transit Number"></Input>
			<Input placeholder="Account Number"></Input>
			<Input placeholder="SIN (Optional)"></Input>
			<TestButton
				title="Confirm Changes"
				onPress={navigateBackToSettings}
			></TestButton>

			<NavBar />
		</View>
	);
}
