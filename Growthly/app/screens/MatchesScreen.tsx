import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '@/styles/colors';
import { useUser } from '../../context/UserContext';
import styles from '@/styles/loan-screen-styles';
import Header from '@/app/components/Header/Header';
import NavBar from '@/app/components/NavBar/NavBar';

export default function MatchesScreen() {

    const { user } = useUser();

    return (
        <View style={styles.screenContainer}>
            <Header 
                title={`${user?.first_name || 'Guest'}, you have 0 potential matches. `}
                subtitle='Select a match below.'
            />
            <View style={styles.contentContainer}>
                <Text style={styles.headerText}>Matches Screen</Text>
            </View>
            <NavBar />
        </View>
    );
};