import React, { 
	useState 
  } from 'react';
  import { 
	View,
	Keyboard,
  } from 'react-native';
  import { useRouter } from 'expo-router';
  import { useUser } from '@/context/UserContext';
  import styles from '@/styles/Settings/secondary/edit-address-styles';
  import Toast from 'react-native-toast-message';
  import Banner from '@/app/components/Banner/Banner';
  import Input from '@/app/components/TestInput/TestInput';
  import DropdownMenu from '@/app/components/DropdownMenu/DropdownMenu';
  import HalfInput from '@/app/components/HalfInput/HalfInput';
  import TestButton from '@/app/components/TestButton/TestButton';
  import NavBar from '@/app/components/NavBar/NavBar';
  
  export default function EditAddressScreen() {
	const router = useRouter();
	// user context
	const { user, setUserData } = useUser();
  
	// states for storing user input
	const [street_address, setStreetAddress] = useState(user?.street_address || '');
	const [phone_number, setPhoneNumber] = useState(user?.phone_number || '');
	const [province, setProvince] = useState(user?.province || '');
	const [postal_code, setPostalCode] = useState(user?.postal_code || '');
  
	// function for updating user address info
	const handleUserUpdate = async () => {
	  // confirm user id is stored in user context (need id for update by id)
	  if (!user?._id) return;
  
	  try {
		// dismiss keyboard so not blocking view
		Keyboard.dismiss();
  
		// sends req to endpoint to update user address varaibles then stores server response
		const response = await fetch(`https://growthly-backend.onrender.com/api/v1/users/${user._id}`,
		  {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ street_address, phone_number, province, postal_code })
		  }
		);
  
		// store response from backend
		const backendResponseText = await response.text();
		console.log(backendResponseText)
  
		// if backend reponse is not okay, show response
		if (!response.ok) {
		throw new Error(`Error updating address: ${backendResponseText}`);
		}
		 
		let updatedUser;
		try {
		updatedUser = JSON.parse(backendResponseText)
		} catch {
		console.log('Response not JSON');
		// manually update user context
		updatedUser = { ...user, street_address, phone_number, province, postal_code };
		}
  
		// update user context
		setUserData(updatedUser)
  
		// success toast for user
		Toast.show({
		  type: 'success',
		  text1: 'Success:',
		  text2: 'Your address was updated!'
		});
  
	  } catch (error) {
		Toast.show({
		  type: 'error',
		  text1: 'Error:',
		  text2: 'Your address was not updated. Try again.'
		});
  
		console.log(error)
	  }
	}
  
	// nav for cancel button (takes back to settings main screen)
	const navigateBackToSettings = () => {
		router.push('/screens/Lender/Settings/main/SettingsScreen');
	};
  
	return (
	  <View style={styles.screenContainer}>
		{/* logo + cancel button banner */}
		<Banner
		  subheading='Update Address Below'
		  heading='Edit Address'
		  onPress={navigateBackToSettings}
		/>
  
		<Input 
		  placeholder={user?.street_address || 'Address'}
		  onChangeText={setStreetAddress}
		/>
		<Input 
		  placeholder={user?.phone_number || 'Phone Number'}
		  onChangeText={setPhoneNumber}
		/>
		<View style={styles.inputContainer}>
		  <DropdownMenu
			data={[
			  { key: 'Alberta', value: 'AB' },
			  { key: 'British Columbia', value: 'BC' },
			  { key: 'Manitoba', value: 'MB' },
			  { key: 'New Brunswick', value: 'NB' },
			  { key: 'Nova Scotia', value: 'NS' },
			  { key: 'Ontario', value: 'ON' },
			  { key: 'Quebec', value: 'QC' },
			  { key: 'Prince Edward Island', value: 'PE' },
			  { key: 'Saskatchewan', value: 'SK' },
			  { key: 'Yukon', value: 'YK' },
			]}
			value={province}
			onSelect={(selectedItem) => setProvince(selectedItem.value)}
		  />
		  <HalfInput 
			placeholder={user?.postal_code || 'Postal Code'}
			onChangeText={setPostalCode}
		  />
		</View>
  
		<TestButton
		  title='Confirm Changes'
		  onPress={handleUserUpdate}
		/>
  
		<NavBar />
	  </View>
	);
  }