export const fetchUserLoans = async ({
  userId,
  userType,
}: {
  userId: string;
  userType: 'BORROWER' | 'LENDER';
}) => {
  try {
    const endpoint =
      userType === 'BORROWER'
        ? 'https://growthly-backend.onrender.com/api/v1/borrower/loan/'
        : 'https://growthly-backend.onrender.com/api/v1/lender/loan/';

    const response = await fetch(endpoint);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Loan fetch error:', errorText);
      return [];
    }

    const data = await response.json();
    const field = userType === 'BORROWER' ? 'borrower_id' : 'lender_id';
    return data.filter((loan: any) => loan[field] === userId);
  } catch (error) {
    console.error('Error fetching loans:', error);
    return [];
  }
};
