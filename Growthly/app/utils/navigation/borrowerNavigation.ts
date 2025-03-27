// Borrower nav routes only in the file
import { useRouter } from 'expo-router';

export const useBorrowerNavigation = () => {
  const router = useRouter();

  return {
    // main routes for nav bar
    navigateToOut: () => router.push('/'),
    navigateToBorrowerDashboard: () => router.push('/screens/Borrower/Dashboard/DashboardScreen'),
    navigateToBorrowerLoans: () => router.push('/screens/Borrower/Loans/LoansScreen'),
    navigateToBorrowerMatches: () => router.push('/screens/Borrower/Matches/MatchesScreen'),
    navigateToBorrowerCredit: () => router.push('/screens/Borrower/Credit/CreditScreen'),
    navigateToBorrowerSettings: () => router.push('/screens/Borrower/Settings/main/SettingsScreen'),

    // routes for settings screens
    navigateToBorrowerBankAccount: () => router.push('/screens/Borrower/Settings/secondary/EditBank/EditBankScreen'),
    navigateToBorrowerEditEmail: () => router.push('/screens/Borrower/Settings/secondary/EditEmail/EditEmailScreen'),
    navigateToBorrowerEditAddress: () => router.push('/screens/Borrower/Settings/secondary/EditAddress/EditAddressScreen'),
    navigateToBorrowerChangePass: () => router.push('/screens/Borrower/Settings/secondary/ChangePass/ChangePassScreen'),
    navigateToBorrowerContactUs: () => router.push('/screens/Borrower/Settings/secondary/Contact/ContactScreen'),
    navigateToBorrowerDeleteAccount: () => router.push('/screens/Borrower/Settings/secondary/DeleteAccount/DeleteAccountScreen'),
  };
};
