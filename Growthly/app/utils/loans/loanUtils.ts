export interface FetchLoansParams {
	userId: string;
	endpoint: string;
	idField: 'borrower_id' | 'lender_id';
}

export const fetchLoansByUserId = async ({
	userId,
	endpoint,
	idField,
}: FetchLoansParams): Promise<any[]> => {
	try {
		const response = await fetch(endpoint);
		if (!response.ok) throw new Error(await response.text());
		const data = await response.json();
		return data.filter((loan: any) => loan[idField] === userId);
	} catch (err) {
		console.error('Fetch loans error:', err);
		return [];
	}
};

export const handleStepChange = (
	direction: 'next' | 'back',
	currentStep: number,
	setStep: (val: number) => void,
	refetch: () => void
) => {
	const updated = direction === 'next' ? currentStep + 1 : currentStep - 1;
	setStep(updated);
	refetch();
};

export interface LenderLoanPayload {
	lender_id: string;
	amount: number;
	interest_rate: number;
	length_of_loan: number;
}

export const postLenderLoan = async (payload: LenderLoanPayload): Promise<boolean> => {
	try {
		const response = await fetch(
			'https://growthly-backend.onrender.com/api/v1/lender/loan/',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...payload, available: true }),
			}
		);
		if (!response.ok) {
			console.error(await response.text());
			return false;
		}
		return true;
	} catch (error) {
		console.error('Loan creation error:', error);
		return false;
	}
};