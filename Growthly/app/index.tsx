import { View, Image, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Colors } from '@/styles/colors';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import InputField from '../app/components/InputField/InputField';
import Button from '../app/components/Button/Button';
import styles from '@/styles/signin-styles';

// functionality for signing in still needs to be further implemented, but general component creation is done + nav to create account screen
// TO-DO:
// implement sign in functionality [DONE]
// navigate to forgot password page when button clicked
// implement remember signin information
// put export statement into forgotpasswordscreen.tsx to remove warning error

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

  // fonts being used in Growthly branding
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../assets/fonts/Inter_28pt-Bold.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter_28pt-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter_28pt-Regular.ttf'),
    'Inter-Light': require('../assets/fonts/Inter_28pt-Light.ttf'),
  });

  const router = useRouter();

  // incase the imported fonts don't load immediately
  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size='large' color={Colors.growthly_white} />
      </View>
    );
  };

  // ********** NOTE FOR SELF: i still need to update this to actually remember user info *********
  const radioSelect = () => {
    setState(prevState => ({
      ...prevState,
      buttonOn: !buttonOn,
    }));
  };

  // hook for inputting email or username input fields
  const handleEmailOrUsernameChange = (newInput: string) => {
    setState(prevState => ({
      ...prevState,
      emailOrUsername: newInput,
    }));
  };

  // hook for inputting password in pass input field
  const handlePasswordChange = (newPassword: string) => {
    setState(prevState => ({
      ...prevState,
      password: newPassword,
    }));
  };

  // hook handles sign in for existing users
  const handleSignIn = async () => {
    try {
      // contacts backend (deployed on railway)
      const response = await fetch('https://growthly-backend.onrender.com/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // expected body params on the backend for sign in
        body: JSON.stringify({
          email_or_username: emailOrUsername,
          password: password,
        }),
      });

      // using this to show validation errors from backend
      const responseData = await response.json();
  
      // if the user credentials are validated, the user is taken to dashboard
      if (response.ok) {
        console.log('Sign-in successful');
        // transitions user on client side to dashboard
        router.push('/screens/DashboardScreen');
      } else {
        // logging the error from customized error messages on backend
        console.error('Sign-in failed: ', responseData);
      }
    } catch (error) {
      console.error('Error during sign-in: ', error);
    }
  };    

  // hook used for user to get to create account screen
  const navigateToCreateAccount = () => {
    router.push('/screens/CreateAccountScreen');
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

      { /* Form field inputs (email/username and password) */ }
      <InputField style={{ position: 'absolute', top: 299, left: 58}} placeholder='Email or Username' 
        value={emailOrUsername} onChangeText={handleEmailOrUsernameChange} 
      />
      <InputField style={{ position: 'absolute', top: 389, left: 58}} placeholder='Password'
        secureTextEntry={true} value={password} onChangeText={handlePasswordChange} 
      />

      {/* Radio Button */}
      <TouchableOpacity onPress={radioSelect} style={styles.radioButtonContainer}>
        <View style={[styles.radioDefault, buttonOn && styles.radioActive]} />
        <Text style={styles.radioText}>Remember Sign-In Information</Text>
      </TouchableOpacity>

      {/* Button */}
      <Button title='Submit' onPress={handleSignIn} style={{top:559, left: 58}}/>

      {/* Keyline 2 */}
      <View style={[styles.keyline, styles.keyline2]}/>

      {/* Create Account Button */}
      <TouchableOpacity onPress={navigateToCreateAccount} style={styles.createButton}>
        <Text style={styles.createText}>Create Account</Text>
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <Text style={[styles.createText, styles.forgotPass]}>Forgot Password?</Text>
    </View>
  );
};