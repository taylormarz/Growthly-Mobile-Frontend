// Loan utils for LENDER only (global loan utils do not belong in this file)
export const handleAmountChange = (
	text: string,
	setSelectedAmount: (val: number | null) => void
) => {
	const value = parseFloat(text);
	setSelectedAmount(isNaN(value) ? null : value);
};

export const handleDurationSelect = (
	duration: number,
	setSelectedDuration: (val: number) => void
) => {
	setSelectedDuration(duration);
};

export const handleInterestRateSelect = (
	rate: number,
	setSelectedInterestRate: (val: number) => void
) => {
	setSelectedInterestRate(rate);
};