import { Keyboard } from 'react-native';
import Toast from 'react-native-toast-message';

interface UpdateAddressParams {
  userId: string;
  street_address: string;
  phone_number: string;
  province: string;
  postal_code: string;
  user: any;
  setUserData: (user: any) => void;
}

export const updateUserAddress = async ({
  userId,
  street_address,
  phone_number,
  province,
  postal_code,
  user,
  setUserData,
}: UpdateAddressParams) => {
  if (!userId) return;

  try {
    Keyboard.dismiss();

    const response = await fetch(`https://growthly-backend.onrender.com/api/v1/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ street_address, phone_number, province, postal_code }),
    });

    const backendResponseText = await response.text();

    if (!response.ok) {
      throw new Error(`Error updating address: ${backendResponseText}`);
    }

    let updatedUser;
    try {
      updatedUser = JSON.parse(backendResponseText);
    } catch {
      updatedUser = { ...user, street_address, phone_number, province, postal_code };
    }

    setUserData(updatedUser);

    Toast.show({
      type: 'success',
      text1: 'Success:',
      text2: 'Your address was updated!',
    });
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Error:',
      text2: 'Your address was not updated. Try again.',
    });
    console.error(error);
  }
};
