import Toast from 'react-native-toast-message';
import { isNotBlank, isValidPhone, isValidPostalCode, isValidEmail } from './validation';

// utility function to show a toast notification
const showToast = (message: string) => {
  Toast.show({
    type: 'error',
    text1: 'Error:',
    text2: message,
  });
};

// form validation function
export const validateUserAddress = (
  street_address: string,
  phone_number: string,
  province: string,
  postal_code: string
) => {
  if (!isNotBlank(street_address)) {
    showToast('Street address cannot be empty.');
    return false;
  }
  if (!isNotBlank(phone_number) || !isValidPhone(phone_number)) {
    showToast('Please provide a valid phone number.');
    return false;
  }
  if (!isNotBlank(province)) {
    showToast('Please select a province.');
    return false;
  }
  if (!isNotBlank(postal_code) || !isValidPostalCode(postal_code)) {
    showToast('Please provide a valid postal code.');
    return false;
  }
  return true;
};

// form validation function for email and username
export const validateEmailAndUsername = (email: string, username: string) => {
  if (!isNotBlank(email) || !isValidEmail(email)) {
    showToast('Please provide a valid email.');
    return false;
  }
  if (!isNotBlank(username)) {
    showToast('Username cannot be empty.');
    return false;
  }
  return true;
};
