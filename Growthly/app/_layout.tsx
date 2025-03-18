import { Stack } from 'expo-router';
import { UserProvider } from '../context/UserContext';
import { LoanAppProvider } from '@/context/LoanAppContext';
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  return (
    <UserProvider>
      <LoanAppProvider>
        <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
        <Toast />
      </LoanAppProvider>
    </UserProvider>
  );
}
