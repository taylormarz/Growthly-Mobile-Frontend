import { useRouter } from 'expo-router';

export const useLenderNavigation = () => {
  const router = useRouter();

  return {
    navigateToOut: () => router.push('/'),
    navigateToLenderDashboard: () => router.push('/screens/Lender/Dashboard/DashboardScreen'),
    navigateToLenderLoans: () => router.push('/screens/Lender/Loans/LoansScreen'),
    navigateToLenderCredit: () => router.push('/screens/Lender/Credit/CreditScreen'),
    navigateToLenderSettings: () => router.push('/screens/Lender/Settings/main/SettingsScreen'),
  };
};