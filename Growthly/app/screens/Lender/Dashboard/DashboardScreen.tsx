// DashboardScreen.tsx (LENDER)
import React, {
	useState,
	useEffect,
} from 'react';
import {
	View,
	Text,
} from 'react-native';
import {
	fetchLoansByUserId,
} from '@/app/utils/loans/loanUtils';
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
	const [currentLoan, setCurrentLoan] = useState<any>(null);

	useEffect(() => {
		fetchCurrentLoan();
	}, []);

	// call to backend to check if user has any posted loans attached to them
	const fetchCurrentLoan = async () => {
		if (!user?._id) return;
		const loans = await fetchLoansByUserId({
			userId: user._id,
			endpoint: 'https://growthly-backend.onrender.com/api/v1/lender/loan/',
			idField: 'lender_id',
		});
		setCurrentLoan(loans);
	};

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
					value={`${currentLoan?.length || 0} Active Loans`}
					buttonText='View Loans >'
					onPress={navigateToLenderLoans}
				/>
				<OverviewComponent
					title='Credit Score'
					value='715 / 900'
					buttonText='View Details >'
					onPress={navigateToLenderCredit}
				/>
				<OverviewComponent
					style={styles.componentLast}
					title='Bank Account'
					value='004-54689'
					buttonText='Update Info >'
					onPress={navigateToLenderSettings}
				/>
			</View>

			<NavBar />
		</View>
	);
};

export default DashboardScreen;