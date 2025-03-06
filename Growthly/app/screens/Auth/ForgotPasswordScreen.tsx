import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator, Image, Text, StyleSheet } from 'react-native'; // stylesheet temp, remove after fixing comment below
import { Colors } from '@/styles/ColorPalette/colors';
import styles from '@/styles/Auth/signin-styles'; // i need to convert / combine signin and create account styles to be just global styles
//import styles from '@/styles/create-account';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';

interface ForgotPassScreenState {
    emailOrUsername: string;
}

export default function ForgotPasswordScreen(){
    const [forgotPassData, setForgotPassState] = useState<ForgotPassScreenState>({
        emailOrUsername: ''
    });

    const { emailOrUsername } = forgotPassData;
    const [currentStep, setCurrentStep] = useState(1);

    // ******Note for self: make into reusable code for each screen
    const [fontsLoaded] = useFonts({
        'Inter-Bold': require('@/assets/fonts/Inter_28pt-Bold.ttf'),
        'Inter-Medium': require('@/assets/fonts/Inter_28pt-Medium.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter_28pt-Regular.ttf'),
        'Inter-Light': require('@/assets/fonts/Inter_28pt-Light.ttf'),
    });

    const router = useRouter();

    // This can also get made into reusable code
    if (!fontsLoaded) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size='large' color={Colors.growthly_white}/>
            </View>
        );
    };

    // used more than once create into reusable hook/move into independent file
    const handleEmailOrUsernameChange = (newInput: string) => {
        setForgotPassState(prevState => ({
            ...prevState,
            emailOrUsername: newInput
        }));
    };

    // ******** still thinking about how we are going to implement this
    const handlePassReset = async () => {

    };

    // ******* this can be made to be reusable too
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    // timer when password is successfully reset
    useEffect(() => {
        // when user makes it to step 2 timer starts 
        if (currentStep === 2) {
            const timeout = setTimeout(() => {
                // routes back to sign in page
                router.push('/');
            }, 2500);

            return () => clearTimeout(timeout);
        }
    }, [currentStep, router]);

    return (
        <View style={styles.container}>
            {/* this can definitely be made to be reusable (using on more than 1 page) */}
            <Image
                source={require('@/assets/images/logo/growthly-logo-color.png')}
                style={styles.growthlyLogo}
            />
            <View style={[styles.keyline, styles.keyline1]}/>

            { currentStep === 1 ? (
            <>
                {/* this can definitely be made to be reusable (using on more than 1 page) */}
                <Text style={styles.header}>Password Reset</Text>

                <InputField style={{ position: 'absolute', top: 354, left: 58 }} placeholder='Email or Username'
                    value={emailOrUsername} onChangeText={handleEmailOrUsernameChange}
                />
                <Text style={textStyles.descriptor}>Enter email or username for account {'\n'}you'd like to reset the password for</Text>
                <Button title='Reset' onPress={handleNextStep} style={{top: 474, left: 58}} />
            </>
            ) : null }

            { /* step 2 is the screen confirming the password has been reset */ }
            { currentStep === 2 ? (
            <>
                <Text style={styles.header}>Successful.</Text>
                <Text style={textStyles.descriptor}>Check your email for a recovery link.</Text>
            </>
            ) : null }
        </View>
    );
};

// temporary until i fix the global styles file
const textStyles = StyleSheet.create({
    descriptor: {
        position: 'absolute',
        top: 288,
        left: 58,
        fontSize: 16,
        fontFamily: 'Inter-Light',
        letterSpacing: .5,
        color: Colors.growthly_white,
    }
});