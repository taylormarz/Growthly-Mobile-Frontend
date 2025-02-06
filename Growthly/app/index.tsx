import { View, Image, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Colors } from '@/styles/colors';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import styles from '@/styles/signin-styles';

// Functionality for signing in still needs to be further implemented, but general component creation is done + nav to create account screen

interface SignInScreenState {
  buttonOn: boolean;
  emailOrUsername: string;
  password: string;
}

export default function SignInScreen() {
  const [state, setState] = useState<SignInScreenState>({
    buttonOn: false,
    emailOrUsername: '',
    password: '',
  });

  const { buttonOn, emailOrUsername, password } = state;

  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../assets/fonts/Inter_28pt-Bold.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter_28pt-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter_28pt-Regular.ttf'),
    'Inter-Light': require('../assets/fonts/Inter_28pt-Light.ttf'),
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={Colors.growthly_white} />
      </View>
    );
  }

  const radioSelect = () => {
    setState(prevState => ({
      ...prevState,
      buttonOn: !buttonOn,
    }));
  };

  const handleEmailOrUsernameChange = (newInput: string) => {
    setState(prevState => ({
      ...prevState,
      emailOrUsername: newInput,
    }));
  };

  const handlePasswordChange = (newPassword: string) => {
    setState(prevState => ({
      ...prevState,
      password: newPassword,
    }));
  };

  const handleSignIn = () => {
    console.log("Sign In clicked");
  };

  const navigateToCreateAccount = () => {
    router.push('/screens/CreateAccountScreen');
  };

  return (
    <View style={styles.container}>

      {/* Growthly logo */}
      <Image
        source={require('../assets/images/logo/growthly-logo-color.png')}
        style={styles.growthlyLogo}
      />

      {/* Keyline 1 */}
      <View style={[styles.keyline, styles.keyline1]} />

      {/* Header */}
      <Text style={styles.header}>Sign In</Text>

      {/* Email or Username Input */}
      <TextInput
        style={[styles.input, styles.userInput]}
        placeholder="Email or Username"
        placeholderTextColor={Colors.growthly_white}
        value={emailOrUsername}
        onChangeText={handleEmailOrUsernameChange}
      />

      {/* Password Input */}
      <TextInput
        style={[styles.input, styles.passInput]}
        placeholder="Password"
        placeholderTextColor={Colors.growthly_white}
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />

      {/* Radio Button */}
      <TouchableOpacity onPress={radioSelect} style={styles.radioButtonContainer}>
        <View style={[styles.radioDefault, buttonOn && styles.radioActive]} />
        <Text style={styles.radioText}>Remember Sign-In Information</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity onPress={handleSignIn} style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

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
}