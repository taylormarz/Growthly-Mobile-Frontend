import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useUser } from '../../context/UserContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Colors } from '@/styles/colors';
import styles from '@/styles/loan-screen-styles';
import Header from '@/app/components/Header/Header';
import NavBar from '@/app/components/NavBar/NavBar';

export default function LoansScreen() {

    const { user } = useUser();
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
    const [selectedCycle, setSelectedCycle] = useState<string | null>(null);
    // storing values for duration period (payback)
    const duration: Array<1 | 3 | 6 | 9 | 12> = [1, 3, 6, 9, 12];
    const cycle: Array<'Monthly' | 'Biweekly'> = ['Monthly', 'Biweekly'];
    // styles to position each duration button generated from loop
    const positionStyles: { [key in 1 | 3 | 6 | 9 | 12]: { left: number } } = {
        1: { left: 20 },
        3: { left: 88.75 },
        6: { left: 157.5 },
        9: { left: 226.5 },
        12: { left: 295 }
    };
    // styles for cycle btn positioning
    const cyclePositions: {[ key in 'Monthly' | 'Biweekly']: {left: number}} = {
        'Monthly': { left: 20},
        'Biweekly': { left: 185}
    };

    // hooks for switching between apply and manage
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    // goes back in the steps so user can toggle between apply and manage
    const handleBackStep = () => {
        setCurrentStep(currentStep - 1);
    }

    // radio button hook for duration period
    const handleDurationSelect = (duration: number) => {
        setSelectedDuration(duration);
    };

    // radio button hook for billing cycle
    const handleCycleSelect = (cycle: string) => {
        setSelectedCycle(cycle);
    }

    return (
        <View style={styles.screenContainer}>
            <Header 
                title={`${user?.first_name || 'Guest'}, you have 0 active loan(s). `}
                subtitle='Apply for loans and manage them below.'
            />

            {/* step 1 renders apply for loan tab */}
            { currentStep === 1 ? (
            <>
                <Text style={styles.headerText}>Apply for Loan</Text>
                <View style={styles.contentContainer}>
                    <Text style={{ fontWeight: 'bold' }}>Warning:</Text>
                    <Text>Active loans limit is: 2 - Total loan limit is: $2500</Text>
                    <Text>Fixed Monthly Interest: Determined by Match</Text>
                </View>

                {/* tabs */}
                <TouchableOpacity style={styles.applyButtonActive}>
                    <Text style={styles.buttonText}>APPLY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.manageButtonDisabled} onPress={handleNextStep}>
                    <Text style={styles.buttonText}>MANAGE</Text>
                </TouchableOpacity>

                {/* application container */}
                <View style={styles.applyContainer}>
                    {/* loan total section */}
                    <View>
                        <Text style={[styles.heading, styles.h1]}>Enter Total for Loan:</Text>
                        <TouchableOpacity style={[styles.inputContainer, styles.fieldContainer1]}>
                            <TextInput 
                                placeholder='$0.00'
                                textAlign='left'
                                placeholderTextColor={Colors.growthly_darkblue}
                                textAlignVertical='center'
                                style={styles.inputField}
                            />
                        </TouchableOpacity>
                        <View style={styles.keyline} />
                    </View>

                    {/* billing cycle section */}
                    <View>
                        <Text style={[styles.heading, styles.h2]}>Select Billing Cycle:</Text>
                        {cycle.map((cycleOption) => (
                            <TouchableOpacity
                                key={cycleOption}
                                style={[
                                    styles.cycleButton,
                                    cyclePositions[cycleOption],
                                    { top: 72 },
                                    selectedCycle === cycleOption
                                        ? { backgroundColor: Colors.growthly_green }
                                        : {},
                                ]}
                                onPress={() => handleCycleSelect(cycleOption)}
                            >
                                <Text style={styles.cycleButtonText}>{cycleOption}</Text>
                            </TouchableOpacity>
                        ))}
                        <View style={[styles.keyline, styles.keyline2]} />
                    </View>

                    {/* payback period section */}
                    <View>
                        <Text style={[styles.heading, styles.h3]}>Select Payback Duration:</Text>
                        {/* duration Buttons */}
                        {duration.map((dur) => (
                            <TouchableOpacity
                                key={dur}
                                style={[
                                    styles.durationButton,
                                    positionStyles[dur],
                                    { top: 105 },
                                    selectedDuration === dur ? { backgroundColor: Colors.growthly_green } : {},
                                ]}
                                onPress={() => handleDurationSelect(dur)}
                            >
                                <Text style={styles.cycleButtonText}>{dur}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={[styles.keyline, styles.keyline3]} />

                    {/* apply button */}
                    <View>
                        <TouchableOpacity style={styles.applyButton}>
                            <Text style={styles.applyButtonText}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
            ) : null}

            {/* step 2 renders manage loan tab */}
            { currentStep === 2 ? (
            <>
                <Text style={styles.headerText}>Manage Loan</Text>

                <TouchableOpacity style={styles.applyButtonDisabled} onPress={handleBackStep}>
                    <Text style={styles.buttonText}>APPLY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.manageButtonActive}>
                    <Text style={styles.buttonText}>MANAGE</Text>
                </TouchableOpacity>
            </>
            ) : null}

            <NavBar />
        </View>
    );
};