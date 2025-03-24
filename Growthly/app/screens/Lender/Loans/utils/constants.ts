// lender specific constants for loans
export const interestRates = [0, 5, 10, 11, 12] as const;

export const interestRatePositions: { [key in typeof interestRates[number]]: { left: number } } = {
	0: { left: 20 },
	5: { left: 88.75 },
	10: { left: 157.5 },
	11: { left: 226.5 },
	12: { left: 295 },
};

export const durationOptions = [1, 3, 6, 9, 12] as const;

export const durationPositions: { [key in typeof durationOptions[number]]: { left: number } } = {
	1: { left: 20 },
	3: { left: 88.75 },
	6: { left: 157.5 },
	9: { left: 226.5 },
	12: { left: 295 },
};