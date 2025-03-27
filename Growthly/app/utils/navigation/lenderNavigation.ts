// Lender nav routes only in the file
import { useRouter } from 'expo-router';

export const useLenderNavigation = () => {
  const router = useRouter();

  return {
    // main routes for nav bar
    navigateToOut: () => router.push('/'),
    navigateToLenderDashboard: () => router.push('/screens/Lender/Dashboard/DashboardScreen'),
    navigateToLenderLoans: () => router.push('/screens/Lender/Loans/LoansScreen'),
    navigateToLenderCredit: () => router.push('/screens/Lender/Credit/CreditScreen'),
    navigateToLenderSettings: () => router.push('/screens/Lender/Settings/main/SettingsScreen'),

    // routes for settings screens
    navigateToLenderBankAccount: () => router.push('/screens/Lender/Settings/secondary/EditBank/EditBankScreen'),
    navigateToLenderEditEmail: () => router.push('/screens/Lender/Settings/secondary/EditEmail/EditEmailScreen'),
    navigateToLenderEditAddress: () => router.push('/screens/Lender/Settings/secondary/EditAddress/EditAddressScreen'),
    navigateToLenderChangePass: () => router.push('/screens/Lender/Settings/secondary/ChangePass/ChangePass'),
    navigateToLenderContactUs: () => router.push('/screens/Lender/Settings/secondary/Contact/ContactScreen'),
    navigateToLenderDeleteAccount: () => router.push('/screens/Lender/Settings/secondary/DeleteAccount/DeleteAccountScreen'),
  };
};
