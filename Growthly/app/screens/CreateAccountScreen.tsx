import { View, Image, Text, ActivityIndicator, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { Colors } from '@/styles/colors';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import Button from '../components/Button/Button'
import InputField from '../components/InputField/InputField';
import styles from '../../styles/create-account';
import React from 'react';

// I still need to add in proper validation for all the form fields,
// but this works at a functional level as a minimum viable product

export default function CreateAccountScreen() {
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

  const [currentStep, setCurrentStep] = useState(1);
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../../assets/fonts/Inter_28pt-Bold.ttf'),
    'Inter-Medium': require('../../assets/fonts/Inter_28pt-Medium.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter_28pt-Regular.ttf'),
    'Inter-Light': require('../../assets/fonts/Inter_28pt-Light.ttf'),
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size='large' color={Colors.growthly_darkblue} />
      </View>
    );
  }

  // for navigating back to sign in (index.jsx - applied to cancel button)
  const navigateToSignInScreen = () => {
    router.push('/');
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://growthly-backend.onrender.com/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        Alert.alert(
          "New Account Created",
          "Your account was created successfully!",
          [
            {
              text: "Sign In",
              onPress: () => {
                router.push('../');
              }
            }
          ]
        );
      } else {
        const errorData = await response.json();
        console.error('Error creating account:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo/growthly-logo-color.png')}
        style={styles.growthlyLogo}
      />

      {/* Cancel Button */}
      <Text onPress={navigateToSignInScreen} style={[styles.createText, styles.forgotPass]}>Cancel</Text>

      {/* Step 1 of Form */}
      { currentStep === 1 ? (
        <>
          <View style={styles.keyline1}></View>
          <Text style={styles.descriptor}>Welcome to Growthly! We have a few {'\n'}quick steps to get you set up.</Text>
          <View style={styles.keyline2}></View>
          <Text style={styles.subhead}>Step 1/3</Text>
          <Text style={styles.header}>Basic Details</Text>

          {/* Form Fields */}
          <InputField placeholder='First Name' value={formData.first_name} onChangeText={(text) => setFormData({ ...formData, first_name: text })} 
            style={{ position: 'absolute', top: 357, left: 58}} 
          />
          <InputField placeholder='Last Name' value={formData.last_name} onChangeText={(text) => setFormData({ ...formData, last_name: text })} 
            style={{ position: 'absolute', top: 447, left: 58 }} 
          />
          <InputField placeholder='Email' value={formData.email} onChangeText={(text) => setFormData({ ...formData, email: text })} 
            style={{ position: 'absolute', top: 537, left: 58 }} 
          />
          <InputField placeholder='Password' value={formData.password} secureTextEntry={true} onChangeText={(text) => setFormData({ ...formData, password: text })} 
            style={{ position: 'absolute', top: 627, left: 58 }} 
          />

          {/* Button */}
          <Button title='Next Step >' onPress={handleNextStep} style={{top:747, left: 58}}/>
        </>
      ) : null}

      {/* Step 2 of Form */}
      { currentStep === 2 ? (
        <>
          <View style={styles.keyline1}></View>
          <Text style={styles.descriptor}>Almost there! We just need to ask a few {'\n'}more questions.</Text>
          <View style={styles.keyline2}></View>
          <Text style={styles.subhead}>Step 2/3</Text>
          <Text style={styles.header}>Address Details</Text>

          {/* Form Fields */}
          <InputField placeholder='Address' value={formData.street_address} onChangeText={(text) => setFormData({ ...formData, street_address: text })} 
            style={{ position: 'absolute', top: 357, left: 58}} 
          />
          <InputField placeholder='Phone Number' value={formData.phone_number} onChangeText={(text) => setFormData({ ...formData, phone_number: text })} 
            style={{ position: 'absolute', top: 447, left: 58 }} 
          />
          <InputField placeholder='Province' value={formData.province} onChangeText={(text) => setFormData({ ...formData, province: text })} 
            style={{ position: 'absolute', top: 537, left: 58, width: 145 }} 
          />
          <InputField placeholder='Postal Code' value={formData.postal_code} onChangeText={(text) => setFormData({ ...formData, postal_code: text })} 
            style={{ position: 'absolute', top: 537, left: 223, width: 145 }} 
          />

          {/* Button */}
          <Button title='Next Step >' onPress={handleNextStep} style={{top:657, left: 58}}/>

        </>
      ) : null}

      {/* Step 3 of Form */}
      { currentStep === 3 ? (
        <>
          <View style={styles.keyline1}></View>
          <Text style={styles.descriptor}>Last step! Let us know what kind of user {'\n'}you will be.</Text>
          <View style={styles.keyline2}></View>
          <Text style={styles.subhead}>Step 3/3</Text>
          <Text style={styles.header}>Account Details</Text>

          {/* Form Fields */}
          <InputField placeholder='Username' value={formData.username} onChangeText={(text) => setFormData({ ...formData, username: text })} 
            style={{ position: 'absolute', top: 357, left: 58}} 
          />
          <InputField placeholder='Select a User Type' value={formData.user_type} onChangeText={(text) => setFormData({ ...formData, user_type: text })} 
            style={{ position: 'absolute', top: 447, left: 58 }} 
          />
          <InputField placeholder='SIN' value={formData.sin_number} onChangeText={(text) => setFormData({ ...formData, sin_number: text })} 
            style={{ position: 'absolute', top: 537, left: 58 }} 
          />

          {/* Button */}
          <Button title='Create Account' onPress={handleSubmit} style={{top:657, left: 58}}/>
        </>
      ) : null}
    </View>
  );
};