import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useUser } from '../../../../context/UserContext';
import { useRouter } from 'expo-router';
import { useLoanApp } from '../../../../context/LoanAppContext';
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
  const { loanData, clearLoanData } = useLoanApp()!;
  const router = useRouter();

  const [loans, setLoans] = useState<Loan[]>([]);
  const [selectedLoanId, setSelectedLoanId] = useState<string | null>(null);

  useEffect(() => {
    const fetchLoans = async () => {
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
    fetchLoans();
  }, []);

  const filteredLoans = loans.filter(
    (loan) => loan.available && loan.amount === loanData?.amount,
  );

  const showStep1 = !loanData || filteredLoans.length === 0;
  const showStep2 = loanData && filteredLoans.length > 0

  const handleAcceptMatch = async () => {
    // was having issues getting this working so introduced some console logs to make sure data from context was being loaded in
    if (!selectedLoanId) {
      console.log('loan not selected');
      return;
    }

    if (!user?._id) {
      console.log('user id missing');
      return;
    }

    if (!loanData?.payment_cycle) {
      console.log('no payment cycle selected');
      return;
    }

    try {
      // finds loan selected by user from list of available loans
      const selectedLoan = loans.find((loan) => loan._id === selectedLoanId);
      console.log(selectedLoan);

      if (!selectedLoan) {
        console.log('selected loan was not found');
        return;
      }

      // currentloan obj that will be sent to db with data associated to user choices
      const newCurrentLoan = {
        loan_id: selectedLoan._id,
        borrower_id: user._id,
        amount: selectedLoan.amount,
        amount_paid: 0,
        amount_remaining: selectedLoan.amount,
        interest_rate: selectedLoan.interest_rate,
        interest_paid: 0,
        length_of_loan: selectedLoan.length_of_loan,
        length_remaining: selectedLoan.length_of_loan,
        payment_freq: loanData.payment_cycle.toUpperCase(),
        loan_status: 'GOOD',
      };

      console.log('Creating newCurrentLoan:', JSON.stringify(newCurrentLoan, null, 2));

      // post req to db that adds new loan to currentloan table (table that holds loans that are assigned to borrower)
      const response = await fetch(
        'https://growthly-backend.onrender.com/api/v1/borrower/loan/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newCurrentLoan),
        },
      );

      const resTxt = await response.text();

      if (!response.ok) {
        console.log(`New loan creation failed: ${resTxt}`);
        return;
      }

      // update loan availability on backend so when we filter matches in the future, taken loans aren't visible
      const updateResponse = await fetch(
        `https://growthly-backend.onrender.com/api/v1/lender/loan/${selectedLoanId}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ available: false }),
        },
      );

      const updateLoanAvailResTxt = await updateResponse.text();

      if (!updateResponse.ok) {
        console.log(
          `Could not update loan availability: ${updateLoanAvailResTxt}`,
        );
        return;
      }

      clearLoanData();

      // let user know their loan got accepted
      Alert.alert('Success', 'Your loan was approved and can be found under the manage tab in the loan screen.');
      // move user to loans screen so they can view breakdown of loan
      router.push('../Loans/LoansScreen');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Header
        title={`${user?.first_name || 'Guest'}, you have ${filteredLoans.length} potential match(es).`}
        subtitle="Select a match below."
      />

      {/* Step 1: No matches or no loan applied */}
      {showStep1 && (
        <>
          <Text style={styles.headerText}>Available Matches</Text>
          <View style={styles.matchesContainer}>
            <TouchableOpacity onPress={() => router.push('../Loans/LoansScreen')}>
              <Text style={styles.matchesContainerText1}>
                You currently have no matches on Growthly.
                Apply for a loan to see your matches.
              </Text>
              <Text
                style={[
                  styles.matchesContainerText1,
                  styles.matchesContainerText2,
                ]}
              >
                If you’ve already applied,
                give us some more time to find you the best potential matches.
              </Text>
            </TouchableOpacity>
            <View style={styles.keyline} />
          </View>
        </>
      )}

      {/* Step 2: Matches available */}
      {showStep2 && (
        <>
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
                <TouchableOpacity
                  style={[
                    styles.loanSelectionButton,
                    selectedLoanId === item._id && {
                      backgroundColor: '#93BA43',
                    },
                  ]}
                  onPress={() => {
                    console.log('Loan selected with ID:', item._id);
                    setSelectedLoanId(item._id);
                  }}
                />
              </View>
            )}
          />
          <View>
            <TestButton title="Accept Match" onPress={handleAcceptMatch} />
          </View>
        </>
      )}

      <NavBar />
    </View>

  );
}