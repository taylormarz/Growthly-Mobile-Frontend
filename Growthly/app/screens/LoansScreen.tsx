import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useUser } from '../../context/UserContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import styles from '@/styles/loan-screen-styles';
import Header from '@/app/components/Header/Header';
import NavBar from '@/app/components/NavBar/NavBar';

export default function LoansScreen() {

    const { user } = useUser();
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);

    // hooks for switching between apply and manage
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBackStep = () => {
        setCurrentStep(currentStep - 1);
    }

    // manage

    return (
        <View style={styles.screenContainer}>
            <Header 
            title={`${user?.first_name || 'Guest'}, you have 0 active loan(s). `}
            subtitle='Apply for loans and manage them below.'
            />

            { currentStep === 1 ? (
            <>
                <TouchableOpacity style={styles.applyButtonActive}>
                    <Text style={styles.buttonText}>APPLY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.manageButtonDisabled} onPress={handleNextStep}>
                    <Text style={styles.buttonText}>MANAGE</Text>
                </TouchableOpacity>

                <Text style={styles.test}>on step 1</Text>
            </>
            ) : null}

            {/* Step 2 of Form */}
            { currentStep === 2 ? (
            <>
                <TouchableOpacity style={styles.applyButtonDisabled} onPress={handleBackStep}>
                    <Text style={styles.buttonText}>APPLY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.manageButtonActive}>
                    <Text style={styles.buttonText}>MANAGE</Text>
                </TouchableOpacity>

                <Text style={styles.test}>on step 2</Text>
            </>
            ) : null}

            <View style={styles.contentContainer}>
                <Text style={styles.headerText}>Loans Screen</Text>
            </View>
            <NavBar />
        </View>
    );
};