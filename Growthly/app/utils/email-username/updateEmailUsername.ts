import { Keyboard } from 'react-native';
import Toast from 'react-native-toast-message';

interface UpdateEmailUsernameParams {
  userId: string;
  email: string;
  username: string;
  user: any;
  setUserData: (user: any) => void;
}

export const updateEmailUsername = async ({
  userId,
  email,
  username,
  user,
  setUserData,
}: UpdateEmailUsernameParams) => {
  if (!userId) return;

  try {
    Keyboard.dismiss();

    const response = await fetch(`https://growthly-backend.onrender.com/api/v1/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username }),
    });

    const backendResponseText = await response.text();

    if (!response.ok) {
      throw new Error(`Error updating email/username: ${backendResponseText}`);
    }

    let updatedUser;
    try {
      updatedUser = JSON.parse(backendResponseText);
    } catch {
      console.log('Response not JSON');
      updatedUser = { ...user, email, username };
    }

    setUserData(updatedUser);

    Toast.show({
      type: 'success',
      text1: 'Success:',
      text2: 'Your email/username was updated!',
    });
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Error:',
      text2: 'Your email/username was not updated. Try again.',
    });
    console.error(error);
  }
};
