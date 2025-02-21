import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Colors } from '@/styles/colors';
import { useUser } from '../../context/UserContext';
import styles from '@/styles/matches-styles';
import Header from '@/app/components/Header/Header';
import NavBar from '@/app/components/NavBar/NavBar';

export default function MatchesScreen() {


    const { user } = useUser();

    return (
        <View style={styles.screenContainer}>
            <Header 
            // I need to pull in the data of matches linked to user and replace hardcoding of 0 (when ready on backend)
                title={`${user?.first_name || 'Guest'}, you have 0 potential matches. `}
                subtitle='Select a match below.'
            />
            <Text style={styles.headerText}>Available Matches</Text>
            {/* for now i won't introduce steps for redering page (dependent on if user has applied for loan or not), will add when backend ready */}

            <View style={styles.matchesContainer}>
                <TouchableOpacity>
                    <Text style={styles.matchesContainerText1}>You currently have no matches on Growthly.</Text>
                    <Text style={[styles.matchesContainerText1, styles.matchesContainerText2]}>Apply for a loan to see your matches. If you’ve already applied, give us some more time to find you the best potential matches.</Text>
                </TouchableOpacity>
                <View style={styles.keyline} />
            </View>
            <NavBar />
        </View>
    );
};