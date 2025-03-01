import React from 'react';
import { View, Text } from 'react-native';
import { useUser } from '../../../context/UserContext';
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

      {/* container holding user credit score and label */}
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

      <View style={styles.keyline} />

      {/* all of these components needs to be made into a reusable component ****WILL DO LATER */}
      {/* container holding credit score breakdown */}
      <View style={styles.breakdownContainer}>
        <View style={styles.detailComponent}>
          <View style={styles.breakdownLabel}>
              <Text style={styles.breakdownText}>Payment History</Text>
              <Text style={styles.breakdownLabelText}>Going Great</Text>
              <View style={styles.greenSquare} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.breakdownText}>100% - You’ve missed 0 payments</Text>
          </View>
        </View>

        {/* container holding credit utilization breakdown */}
        <View style={styles.detailComponent}>
          <View style={styles.breakdownLabel}>
              <Text style={[styles.breakdownText, styles.breakdownText2]}>Credit Utilization</Text>
              <Text style={styles.breakdownLabelText}>Going Okay</Text>
              <View style={styles.yellowSquare} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.breakdownText}>34% - Keep credit use under 30%</Text>
          </View>
        </View>

        {/* container holding derogatory marks breakdown */}
        <View style={styles.detailComponent}>
          <View style={styles.breakdownLabel}>
              <Text style={[styles.breakdownText, styles.breakdownText3]}>Derogatory Marks</Text>
              <Text style={styles.breakdownLabelText}>Going Great</Text>
              <View style={styles.greenSquare} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.breakdownText}>0 - No collections on account</Text>
          </View>
        </View>

      </View>
      <NavBar />
    </View>
  );
};