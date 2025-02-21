import React from 'react';
import { View, Text } from 'react-native';
import { useUser } from '../../context/UserContext';
import styles from '@/styles/credit-styles';
import Header from '@/app/components/Header/Header';
import NavBar from '@/app/components/NavBar/NavBar';

export default function CreditScreen() {
  const { user } = useUser();

  return (
    <View style={styles.screenContainer}>
      <Header 
      // im going to introduce some kind of hook when accounts are created that auto generates a random credit score within specific range.
      // hard coded credit score for now
        title={`${user?.first_name || 'Guest'}, your credit score is 715.`}
        subtitle='Below is a detailed breakdown.'
      />
      
      <Text style={styles.headerText}>Credit Score</Text>

      <View style={styles.scoreContainer}>
        <View style={styles.scoreTextLabelContainer}>
          <View style={styles.scoreTextWrapper}>
            <Text style={styles.scoreText}>715</Text>
            <Text style={styles.scoreTextSecondary}>/ 900</Text>
          </View>
          <View style={styles.scoreLabel}>
            <Text style={styles.scoreLabelText}>GOOD</Text>
          </View>
        </View>
        <Text style={styles.scoreDescriptor}>You have a good credit score.</Text>
      </View>

      <NavBar />
    </View>
  );
};
