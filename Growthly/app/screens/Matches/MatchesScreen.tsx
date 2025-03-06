import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import { useUser } from '../../../context/UserContext';
import styles from '@/styles/Matches/matches-styles';
import Header from '@/app/components/Header/Header';
import TestButton from '@/app/components/TestButton/TestButton';
import NavBar from '@/app/components/NavBar/NavBar';

interface Loan {
    _id: string;
    amount: number;
    interest_rate: number;
    length_of_loan: number;
    available: boolean;
}
  
export default function MatchesScreen() {

    const { user } = useUser();
    const [currentStep, setCurrentStep] = useState(1);
    const [loans, setLoans] = useState<Loan[]>([]);

    useEffect(() => {
        const findLoans = async () => {
            try {
                const response = await fetch('https://growthly-backend.onrender.com/api/v1/lender/loan/');
                const data = await response.json();
                setLoans(data);
            } catch (error) {
                console.error('Error loading loans:', error)
            }
        };

        findLoans();
    }, []);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <View style={styles.screenContainer}>
            <Header 
            // I need to pull in the data of matches linked to user and replace hardcoding of 0 (when ready on backend)
                title={`${user?.first_name || 'Guest'}, you have 0 potential matches. `}
                subtitle='Select a match below.'
            />

            {/* step 1 - the user has no matches, default for new user */}
            { currentStep === 1 ? (
                <>
                    <Text style={styles.headerText}>Available Matches</Text>

                    <View style={styles.matchesContainer}>
                        <TouchableOpacity>
                            <Text style={styles.matchesContainerText1}>You currently have no matches on Growthly.</Text>
                            <Text style={[styles.matchesContainerText1, styles.matchesContainerText2]}>Apply for a loan to see your matches. If you’ve already applied, give us some more time to find you the best potential matches.</Text>
                        </TouchableOpacity>
                        <View style={styles.keyline} />
                    </View>

                    <TestButton title={'Find Match'} onPress={handleNextStep}></TestButton>
                </>
            ) : null}

            {/* step 2 - the user has applied for loan and has matches */}
            {/* issue - only showing unavailable loans??? */}
            {currentStep === 2 ? (
                <>
                    <Text style={styles.headerText}>Available Matches</Text>
                    <View>
                        <TouchableOpacity>
                        <FlatList
                            data={loans}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => (
                                <View style={styles.loanContainer}>
                                <Text style={styles.loanText}>Amount: ${item.amount}</Text>
                                <Text style={styles.loanText}>Interest Rate: {item.interest_rate}%</Text>
                                <Text style={styles.loanText}>Length of Loan: {item.length_of_loan} months</Text>
                                <Text style={[styles.loanText, item.available ? styles.availableText : styles.unavailableText]}>
                                    {item.available ? 'Available' : 'Claimed'}
                                </Text>
                                </View>
                            )}
                        />
                        </TouchableOpacity>

                        <View style={styles.keyline} />
                    </View>
                </>
            ) : null}

            <NavBar />
        </View>
    );
};