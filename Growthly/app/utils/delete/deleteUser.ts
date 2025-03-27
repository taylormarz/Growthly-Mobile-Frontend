import Toast from 'react-native-toast-message';

export const deleteUserAccount = async ({
  userId,
  currentLoans,
  router,
}: {
  userId: string;
  currentLoans: any[];
  router: any;
}) => {
  if (currentLoans.length > 0) {
    Toast.show({
      type: 'error',
      text1: 'Cannot Delete Account:',
      text2: 'You must have 0 active loans to delete your account.',
    });
    return;
  }

  try {
    const response = await fetch(`https://growthly-backend.onrender.com/api/v1/users/${userId}`, {
      method: 'DELETE',
    });

    const backendResponseText = await response.text();
    console.log('Delete response:', backendResponseText);

    if (!response.ok) throw new Error('Account deletion failed.');

    Toast.show({
      type: 'success',
      text1: 'Account Deleted',
      text2: 'Your Growthly account has been permanently removed.',
    });

    router.push('/');
  } catch (error) {
    console.error(error);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Failed to delete your account. Please try again.',
    });
  }
};
