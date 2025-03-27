import React, {
  useState
} from 'react';
import {
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '@/context/UserContext';
import { updateUserAddress } from '@/app/utils/address/updateAddress';
import styles from '@/styles/Settings/secondary/edit-address-styles';
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
  const handleUserUpdate = () => {
    if (!user?._id) return;
  
    updateUserAddress({
      userId: user._id,
      street_address,
      phone_number,
      province,
      postal_code,
      user,
      setUserData,
    });
  };  

  // nav for cancel button (takes back to settings main screen)
  const navigateBackToSettings = () => {
    router.push('../../main/SettingsScreen');
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
