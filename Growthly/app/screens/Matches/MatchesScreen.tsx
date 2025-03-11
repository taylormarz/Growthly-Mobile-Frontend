import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useUser } from '../../../context/UserContext';
import { useRouter } from 'expo-router';
import { useLoanApp } from '../../../context/LoanAppContext';
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
  const { loanData } = useLoanApp()!;

  const router = useRouter();
  const [loans, setLoans] = useState<Loan[]>([]);

  // call to backend to pull in loans from db
  useEffect(() => {
    const findLoans = async () => {
      try {
        const response = await fetch(
          'https://growthly-backend.onrender.com/api/v1/lender/loan/',
        );
        const data = await response.json();
        setLoans(data);
      } catch (error) {
        console.error('Error loading loans:', error);
      }
    };

    findLoans();
  }, []);

  // filter loans based on exact amount match and availability
  const filteredLoans = loans.filter((loan) => {
    const loanAmount = loanData?.amount ?? 0;
    return loan.available && loan.amount === loanAmount;
  });

  // will change the steps based on whether the user has any matches
  const showStep1 = loanData.amount === null || filteredLoans.length === 0;
  const showStep2 = loanData.amount !== null && filteredLoans.length > 0;

  // i will change this later, for now just sends user to loan screen when match accepted
  const handleAcceptMatch = () => {
    router.push('../Loans/LoansScreen');
  };

  return (
    <View style={styles.screenContainer}>
      <Header
        title={`${user?.first_name || 'Guest'}, you have ${filteredLoans.length} potential match(es).`}
        subtitle="Select a match below."
      />

      {/* step 1 - user hasn't applied OR they have and no matches are available */}
      {showStep1 && (
        <>
          <Text style={styles.headerText}>Available Matches</Text>

          <View style={styles.matchesContainer}>
            <TouchableOpacity>
              <Text style={styles.matchesContainerText1}>
                You currently have no matches on Growthly.
              </Text>
              <Text
                style={[
                  styles.matchesContainerText1,
                  styles.matchesContainerText2,
                ]}
              >
                Apply for a loan to see your matches. If you’ve already applied,
                give us some more time to find you the best potential matches.
              </Text>
            </TouchableOpacity>
            <View style={styles.keyline} />
          </View>
        </>
      )}

      {/* step 2 - user has applied AND they have at least 1 match available */}
      {showStep2 && (
        <>
          <Text style={styles.headerText}>Available Matches</Text>
          {filteredLoans.length === 0 ? (
            <Text style={styles.matchesContainerText1}>
              No matches available for your loan criteria.
            </Text>
          ) : (
            <FlatList
              style={styles.availableContainer}
              data={filteredLoans}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <View style={styles.loanContainer}>
                  <View>
                    <Text style={styles.loanText}>Amount: ${item.amount}</Text>
                    <Text style={styles.loanText}>
                      Interest Rate: {item.interest_rate}%
                    </Text>
                    <Text style={styles.loanText}>
                      Duration: {item.length_of_loan} months
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.loanSelectionButton}>
                    <View />
                  </TouchableOpacity>
                </View>
              )}
            />
          )}

          <View>
            <TestButton title="Accept Match" onPress={handleAcceptMatch} />
          </View>
        </>
      )}

      <NavBar />
    </View>
  );
}
