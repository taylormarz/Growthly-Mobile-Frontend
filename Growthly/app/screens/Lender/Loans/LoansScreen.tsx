import React, {
	useState,
	useEffect
} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView
} from 'react-native';
import { useUser } from '@/context/UserContext';
import { useLoanApp } from '@/context/LoanAppContext';
import { useRouter } from 'expo-router';
import { Colors } from '@/styles/ColorPalette/colors';
import Toast from 'react-native-toast-message';
import styles from '@/styles/Loans/loan-screen-styles';
import Header from '@/app/components/Header/Header';
import NavBar from '@/app/components/NavBar/NavBar';

export default function LoansScreen() {
	const { user } = useUser();

	const [currentStep, setCurrentStep] = useState(1);
	const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
	const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
	const [selectedInterestRate, setSelectedInterestRate] = useState<number | null>(null);
	const [currentLoan, setCurrentLoan] = useState<any>(null);

	useEffect(() => {
		fetchCurrentLoan();
	}, []);

	// storing values for duration period (payback)
	const duration: Array<1 | 3 | 6 | 9 | 12> = [1, 3, 6, 9, 12];
	const interestRates: Array<0 | 5 | 10 | 11 | 12> = [0, 5, 10, 11, 12];

	// styles to position each duration button generated from loop
	const positionStyles: { [key in 1 | 3 | 6 | 9 | 12]: { left: number } } = {
		1: { left: 20 },
		3: { left: 88.75 },
		6: { left: 157.5 },
		9: { left: 226.5 },
		12: { left: 295 },
	};

	const interestRatePositions: { [key in 0 | 5 | 10 | 11 | 12]: { left: number } } = {
		0: { left: 20 },
		5: { left: 88.75 },
		10: { left: 157.5 },
		11: { left: 226.5 },
		12: { left: 295 },
	};

	// call to backend to check if user has any posted loans attached to them
	const fetchCurrentLoan = async () => {
		try {
			const response = await fetch(
				`https://growthly-backend.onrender.com/api/v1/lender/loan/`
			);

			if (!response.ok) {
				const errorText = await response.text();
				console.error('Error:', errorText);
				throw new Error('Failed to fetch posted loans.');
			}

			const data = await response.json();

			// filter to show loans posted by lender linked to account
			const userLoans = data.filter((loan: any) => loan.lender_id === user?._id);

			setCurrentLoan(userLoans);
		} catch (error) {
			console.error('Error fetching lender loans:', error);
			setCurrentLoan([]);
		}
	};

	// hooks for switching between post and manage
	const handleNextStep = () => {
		setCurrentStep(2);
		fetchCurrentLoan();
	};

	// goes back in the steps so user can toggle between post and manage
	const handleBackStep = () => {
		setCurrentStep(currentStep - 1);
		fetchCurrentLoan();
	};

	// lets user change value inside loan total + converts from string to float
	const handleAmountChange = (text: string) => {
		const value = parseFloat(text);
		setSelectedAmount(isNaN(value) ? null : value);
	};

	// radio button hook for duration period
	const handleDurationSelect = (duration: number) => {
		setSelectedDuration(duration);
	};

	// radio button hook for interest rate
	const handleInterestRateSelect = (rate: number) => {
		setSelectedInterestRate(rate);
	};

	// post functionality for creating a new loan
	const handleCreateNewLoan = async () => {
		if (
			selectedAmount !== null &&
			selectedInterestRate !== null &&
			selectedDuration !== null &&
			user?._id
		) {
			const payload = {
				lender_id: user._id,
				amount: selectedAmount,
				interest_rate: selectedInterestRate,
				length_of_loan: selectedDuration,
				available: true,
			};

			try {
				const response = await fetch(
					'https://growthly-backend.onrender.com/api/v1/lender/loan/',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(payload),
					}
				);

				if (!response.ok) {
					const errorText = await response.text();
					console.error('Loan creation failed:', errorText);
					Toast.show({
						type: 'error',
						text1: 'Error:',
						text2: 'Could not create loan.',
					});
					return;
				}

				Toast.show({
					type: 'success',
					text1: 'Success:',
					text2: 'Your loan was created.',
				});
			} catch (error) {
				console.error('Error posting loan:', error);
				Toast.show({
					type: 'error',
					text1: 'Error:',
					text2: 'Could not create loan.',
				});
			}
		} else {
			Toast.show({
				type: 'error',
				text1: 'Error:',
				text2: 'Missing fields.',
			});
		}
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screenContainer}>
				<Header
					title={`${user?.first_name || 'Guest'}, you have ${currentLoan?.length || 0} posted loan(s).`}
					subtitle="Post loans and manage them below."
				/>

				{/* step 1 - renders apply for loan tab */}
				{currentStep === 1 ? (
					<>
						<Text style={styles.headerText}>Post a Loan</Text>
						<View style={styles.contentContainer}>
							<Text style={[styles.regularText, styles.regularText2]}>
								Warning:
							</Text>
							<Text style={styles.regularText}>
								Once your loan is posted it will be visible.
							</Text>
							<Text style={styles.regularText}>
								Loans you post can not be remvoed once added.
							</Text>
						</View>

						{/* tabs */}
						<TouchableOpacity style={styles.applyButtonActive}>
							<Text style={styles.buttonText}>POST</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.manageButtonDisabled}
							onPress={handleNextStep}
						>
							<Text style={styles.buttonText}>MANAGE</Text>
						</TouchableOpacity>

						{/* loan application container */}
						<View style={styles.applyContainer}>
							{/* loan total section */}
							<View>
								<Text style={[styles.heading, styles.h1]}>
									Enter Loan Amount for Posting:
								</Text>
								<TouchableOpacity
									style={[styles.inputContainer, styles.fieldContainer1]}
								>
									<TextInput
										placeholder="$0.00"
										textAlign="left"
										placeholderTextColor={Colors.growthly_darkblue}
										textAlignVertical="center"
										style={styles.inputField}
										keyboardType="numeric"
										value={selectedAmount ? selectedAmount.toString() : ''}
										onChangeText={handleAmountChange}
									/>
								</TouchableOpacity>
								<View style={styles.keyline} />
							</View>

							{/* interest rate selection */}
							<View>
								<Text style={[styles.heading, styles.h2]}>
									Interest Rate: (Charged Monthly [%] )
								</Text>
								{interestRates.map((rate) => (
									<TouchableOpacity
										key={rate}
										style={[
											styles.durationButton,
											interestRatePositions[rate],
											{ top: 72 },
											selectedInterestRate === rate
												? { backgroundColor: Colors.growthly_green }
												: {},
										]}
										onPress={() => handleInterestRateSelect(rate)}
									>
										<Text style={styles.cycleButtonText}>{rate}</Text>
									</TouchableOpacity>
								))}
								<View style={[styles.keyline, styles.keyline2]} />
							</View>


							{/* payback period (how long before user is paid back) */}
							<View>
								<Text style={[styles.heading, styles.h3]}>
									Payback Period: (Months)
								</Text>
								{duration.map((dur) => (
									<TouchableOpacity
										key={dur}
										style={[
											styles.durationButton,
											positionStyles[dur],
											{ top: 105 },
											selectedDuration === dur
												? { backgroundColor: Colors.growthly_green }
												: {},
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
								<TouchableOpacity
									style={styles.applyButton}
									onPress={handleCreateNewLoan}
								>
									<Text style={styles.applyButtonText}>Post Loan</Text>
								</TouchableOpacity>
							</View>
						</View>
					</>
				) : null}

				{/* step 2 - renders manage loan tab */}
				{currentStep === 2 && (
					<>
						<Text style={styles.headerText}>Manage Loan</Text>

						<TouchableOpacity
							style={styles.applyButtonDisabled}
							onPress={handleBackStep}
						>
							<Text style={styles.buttonText}>APPLY</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.manageButtonActive}>
							<Text style={styles.buttonText}>MANAGE</Text>
						</TouchableOpacity>

						<View style={styles.manageContainer}>
							<ScrollView>
								{currentLoan && currentLoan.length > 0 ? (
									currentLoan.map((loan: any, index: number) => (
										<TouchableOpacity key={index}>
											<Text style={styles.manageContainerText1}>Posted Loan Breakdown:</Text>
											<Text style={styles.manageContainerText2}>Amount: ${loan.amount}</Text>
											<Text style={styles.manageContainerText2}>Interest Rate: {loan.interest_rate}%</Text>
											<Text style={styles.manageContainerText2}>Payback Period: {loan.length_of_loan}</Text>
											<Text style={styles.manageContainerText2}>Status: {loan.available ? 'Not Claimed' : 'Claimed'}</Text>
											<View style={styles.line} />
										</TouchableOpacity>
									))
								) : (
									<TouchableOpacity>
										<Text style={styles.manageContainerText1}>
											You currently have no loan history with Growthly.
										</Text>
										<View style={[styles.keyline, styles.keyline4]} />
										<Text style={[styles.manageContainerText1, styles.manageContainerText2]}>
											Apply for a loan to get started, or check your matches to accept a loan you’ve applied for.
										</Text>
									</TouchableOpacity>
								)}
							</ScrollView>
						</View>
					</>
				)}

				<NavBar />
			</View>
		</TouchableWithoutFeedback>
	);
}