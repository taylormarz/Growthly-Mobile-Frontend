// Borrower>Loans>utils (this file is only for functions specific to borrower loan screen)

export const handleApply = (
	selectedAmount: number | null, 
	selectedDuration: number | null, 
	selectedCycle: string | null,
	saveLoanData: Function,
	router: any
  ) => {
	if (!router) {
	  console.error('Router is undefined.');
	  return;
	}
  
	if (selectedAmount !== null && selectedDuration !== null && selectedCycle !== null) {
	  console.log('Saving loan with payment cycle:', selectedCycle);
  
	  saveLoanData({
		amount: selectedAmount,
		length_of_loan: selectedDuration,
		payment_cycle: selectedCycle.toUpperCase().trim(),
	  });
  
	  alert('Your loan application has been submitted!');
	  router.push('/screens/Borrower/Matches/MatchesScreen');
	} else {
	  alert('Please complete all fields.');
	}
};  

export const handleAmountChange = (
	text: string,
	setSelectedAmount: React.Dispatch<React.SetStateAction<number | null>>
) => {
	const value = parseFloat(text);
	setSelectedAmount(isNaN(value) ? null : value);
};
  
export const handleDurationSelect = (
	duration: number,
	setSelectedDuration: React.Dispatch<React.SetStateAction<number | null>>
) => {
	setSelectedDuration(duration);
};
  
export const handleCycleSelect = (
	cycle: string,
	setSelectedCycle: React.Dispatch<React.SetStateAction<string | null>>
) => {
	setSelectedCycle(cycle);
};