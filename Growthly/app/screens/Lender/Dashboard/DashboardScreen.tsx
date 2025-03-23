// DashboardScreen.tsx (LENDER)
import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import { useUser } from '../../../../context/UserContext';
import { useLenderNavigation } from '@/app/utils/navigation/lenderNavigation';
import styles from '@/styles/Dashboard/dashboard-styles';
import Header from '@/app/components/Header/Header';
import NavBar from '@/app/components/NavBar/NavBar';
import OverviewComponent from '../../../components/OverviewComponent/OverviewComponent';

const DashboardScreen = () => {
	const { user } = useUser();
	const {
		navigateToLenderLoans,
		navigateToLenderCredit,
		navigateToLenderSettings
	} = useLenderNavigation();

	return (
		<View style={styles.screenContainer}>
			<Header
				title={`Welcome, ${user?.first_name || 'Guest'}!`}
				subtitle='Review account overview below.'
			/>

			<Text style={styles.headerText}>Overview</Text>

			<View style={styles.overviewContainer}>
				<OverviewComponent
					title='Active Loans'
					value='0 Active Loan' // hard coded this for now but i will switch out once i set up a context for loans
					buttonText='View Loans >'
					onPress={navigateToLenderLoans}
				/>
				<OverviewComponent
					title='Credit Score'
					value='715 / 900' // hard coded for mvp (we aren't actually checking credit scores)
					buttonText='View Details >'
					onPress={navigateToLenderCredit}
				/>
				<OverviewComponent
					style={styles.componentLast}
					title='Bank Account'
					value='004-54689' // hard coded for mvp (we don't want to hold real bank info)
					buttonText='Update Info >'
					onPress={navigateToLenderSettings}
				/>
			</View>

			<NavBar />
		</View>
	);
};

export default DashboardScreen;