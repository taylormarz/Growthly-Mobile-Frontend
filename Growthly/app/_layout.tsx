import { Stack } from 'expo-router';
import { UserProvider } from '../context/UserContext';
import { LoanAppProvider } from '@/context/LoanAppContext';

export default function RootLayout() {
  return (
    <UserProvider>
      <LoanAppProvider>
        <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
      </LoanAppProvider>
    </UserProvider>
  );
}
