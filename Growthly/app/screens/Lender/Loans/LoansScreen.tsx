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
import {
	fetchLoansByUserId,
	handleStepChange,
	postLenderLoan,
} from '@/app/utils/loans/loanUtils';
import {
	interestRates,
	interestRatePositions,
	durationOptions,
	durationPositions,
} from './utils/constants';
import {
	handleAmountChange,
	handleDurationSelect,
	handleInterestRateSelect,
} from './utils/loanUtils';
import { useUser } from '@/context/UserContext';
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

	// used for switching between post and manage
	const handleNextStep = () => handleStepChange('next', currentStep, setCurrentStep, fetchCurrentLoan);
	const handleBackStep = () => handleStepChange('back', currentStep, setCurrentStep, fetchCurrentLoan);

	// lender specific wrappers for user selection when creating a loan
	const handleAmountChangeWrapper = (text: string) => handleAmountChange(text, setSelectedAmount);
	const handleDurationSelectWrapper = (duration: number) => handleDurationSelect(duration, setSelectedDuration);
	const handleInterestRateSelectWrapper = (rate: number) => handleInterestRateSelect(rate, setSelectedInterestRate);

	// post functionality for creating a new loan
	const handleCreateNewLoan = async () => {
		if (
			selectedAmount !== null &&
			selectedInterestRate !== null &&
			selectedDuration !== null &&
			user?._id
		) {
			const success = await postLenderLoan({
				lender_id: user._id,
				amount: selectedAmount,
				interest_rate: selectedInterestRate,
				length_of_loan: selectedDuration,
			});

			if (success) {
				Toast.show({
					type: 'success',
					text1: 'Success:',
					text2: 'Your loan was created.',
				});
				fetchCurrentLoan();
			} else {
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
								Loans you post can not be removed once added.
							</Text>
						</View>

						<TouchableOpacity style={styles.applyButtonActive}>
							<Text style={styles.buttonText}>POST</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.manageButtonDisabled}
							onPress={handleNextStep}
						>
							<Text style={styles.buttonText}>MANAGE</Text>
						</TouchableOpacity>

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
										onChangeText={handleAmountChangeWrapper}
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
										onPress={() => handleInterestRateSelectWrapper(rate)}
									>
										<Text style={styles.cycleButtonText}>{rate}</Text>
									</TouchableOpacity>
								))}
								<View style={[styles.keyline, styles.keyline2]} />
							</View>

							{/* payback period */}
							<View>
								<Text style={[styles.heading, styles.h3]}>
									Payback Period: (Months)
								</Text>
								{durationOptions.map((dur) => (
									<TouchableOpacity
										key={dur}
										style={[
											styles.durationButton,
											durationPositions[dur],
											{ top: 105 },
											selectedDuration === dur
												? { backgroundColor: Colors.growthly_green }
												: {},
										]}
										onPress={() => handleDurationSelectWrapper(dur)}
									>
										<Text style={styles.cycleButtonText}>{dur}</Text>
									</TouchableOpacity>
								))}
							</View>
							<View style={[styles.keyline, styles.keyline3]} />

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
											<Text style={styles.manageContainerText2}>Payback Period: {loan.length_of_loan} months</Text>
											<Text style={styles.manageContainerText2}>Status: {loan.available ? 'Not Claimed' : 'Claimed'}</Text>
											<View style={styles.line} />
										</TouchableOpacity>
									))
								) : (
									<TouchableOpacity>
										<Text style={styles.manageContainerText1}>
											You currently have no posted loan history with Growthly.
										</Text>
										<View style={[styles.keyline, styles.keyline4]} />
										<Text style={[styles.manageContainerText2, styles.manageContainerText1]}>
											Post a loan to get started. All posted loans can be viewed in this tab.
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