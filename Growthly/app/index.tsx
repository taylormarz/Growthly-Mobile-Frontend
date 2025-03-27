import {
  View,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';
import { Colors } from '@/styles/ColorPalette/colors';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useUser } from '@/context/UserContext';
import Toast from 'react-native-toast-message';
import * as SecureStore from 'expo-secure-store';
import InputField from '../app/components/InputField/InputField';
import Button from '../app/components/Button/Button';
import styles from '@/styles/Auth/signin-styles';

interface SignInScreenState {
  buttonOn: boolean;
  emailOrUsername: string;
  password: string;
}

export default function SignInScreen() {
  const [state, setState] = useState<SignInScreenState>({
    // setting remember user info to off, unless user checks radio button
    buttonOn: false,
    emailOrUsername: '',
    password: '',
  });

  const { buttonOn, emailOrUsername, password } = state;
  const { setUserData } = useUser();
  const router = useRouter();

  // fonts being used in Growthly branding
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../assets/fonts/Inter_28pt-Bold.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter_28pt-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter_28pt-Regular.ttf'),
    'Inter-Light': require('../assets/fonts/Inter_28pt-Light.ttf'),
  });

  // incase the imported fonts don't load immediately
  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={Colors.growthly_white} />
      </View>
    );
  }

  // ********** NOTE FOR SELF: i still need to update this to actually remember user info *********
  const radioSelect = () => {
    setState((prevState) => ({
      ...prevState,
      buttonOn: !buttonOn,
    }));
  };

  // hook for inputting email or username input fields
  const handleEmailOrUsernameChange = (newInput: string) => {
    setState((prevState) => ({
      ...prevState,
      emailOrUsername: newInput,
    }));
  };

  // hook for inputting password in pass input field
  const handlePasswordChange = (newPassword: string) => {
    setState((prevState) => ({
      ...prevState,
      password: newPassword,
    }));
  };

  // hook handles sign in for existing users
  const handleSignIn = async () => {
    // validation check to make sure the user doesn't leave any fields blank
    if (!emailOrUsername.trim() || !password.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Error:',
        text2: 'Missing fields.',
      });
      return;
    }

    try {

      // fetches response from backend containing email or username + hashed password for comparison on login
      const hashResponse = await fetch('https://growthly-backend.onrender.com/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email_or_username: emailOrUsername }),
      });

      // store response from backend
      const hashData = await hashResponse.json();

      // check for username/email on sign in (if it doesn't match backend response, toast shows error)
      if (!hashResponse.ok || !hashData?.stored_password) {
        Toast.show({
          type: 'error',
          text1: 'Error:',
          text2: 'Invalid email or username.',
        });
        return;
      }

      // stores comparison for password
      const isMatch = password === hashData.stored_password;

      // if the password isn't a match, user sees toast telling them
      if (!isMatch) {
        Toast.show({
          type: 'error',
          text1: 'Error:',
          text2: 'Incorrect password.',
        });
        return;
      }

      // send login request
      const response = await fetch(
        'https://growthly-backend.onrender.com/api/v1/login/auth',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email_or_username: emailOrUsername,
            password: password,
            login_validated: true,
          }),
        },
      );

      const responseData = await response.json();

      if (response.ok) {
        console.log('Sign-in successful');
      }

      const safeResDataStorage = {
        _id: responseData._id,
        first_name: responseData.first_name,
        last_name: responseData.last_name,
        email: responseData.email,
        street_address: responseData.street_address,
        phone_number: responseData.phone_number,
        province: responseData.province,
        postal_code: responseData.postal_code,
        username: responseData.username,
        user_type: responseData.user_type,
      };

      // store user data from api call with secure storage, to be used for user context
      await SecureStore.setItemAsync(
        'userData',
        JSON.stringify(safeResDataStorage),
      );
      setUserData(safeResDataStorage);

      // route user to dashboard screen if signin successful
      if (responseData.user_type === 'BORROWER') {
        router.push('/screens/Borrower/Dashboard/DashboardScreen');
      } else if (responseData.user_type === 'LENDER') {
        router.push('../screens/Lender/Dashboard/DashboardScreen');
      } else {
        console.error('Unknown user type: ', responseData.user_type);
      }

    } catch (error) {
      console.error('Error during sign-in: ', error);
    }
  };

  // hook used for user to get to create account screen
  const navigateToCreateAccount = () => {
    router.push('/screens/Auth/CreateAccountScreen');
  };

  const navigateToForgotPassword = () => {
    router.push('/screens/Auth/ForgotPasswordScreen');
  };

  return (
    <View style={styles.container}>
      {/* Design at top of app */}
      <Image
        source={require('../assets/images/logo/growthly-logo-color.png')}
        style={styles.growthlyLogo}
      />
      <View style={[styles.keyline, styles.keyline1]} />
      <Text style={styles.header}>Sign In</Text>

      {/* Form field inputs (email/username and password) */}
      <InputField
        style={{ position: 'absolute', top: 299, left: 58 }}
        placeholder="Email or Username"
        value={emailOrUsername}
        onChangeText={handleEmailOrUsernameChange}
      />
      <InputField
        style={{ position: 'absolute', top: 389, left: 58 }}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />

      {/* Radio Button */}
      <TouchableOpacity
        onPress={radioSelect}
        style={styles.radioButtonContainer}
      >
        <View style={[styles.radioDefault, buttonOn && styles.radioActive]} />
        <Text style={styles.radioText}>Remember Sign-In Information</Text>
      </TouchableOpacity>

      {/* Button */}
      <Button
        title="Submit"
        onPress={handleSignIn}
        style={{ top: 559, left: 58 }}
      />

      {/* Keyline 2 */}
      <View style={[styles.keyline, styles.keyline2]} />

      {/* Create Account Button */}
      <TouchableOpacity
        onPress={navigateToCreateAccount}
        style={styles.createButton}
      >
        <Text style={styles.createText}>Create Account</Text>
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <Text
        onPress={navigateToForgotPassword}
        style={[styles.createText, styles.forgotPass]}
      >
        Forgot Password?
      </Text>
    </View>
  );
}
