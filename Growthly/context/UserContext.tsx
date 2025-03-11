import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import * as SecureStore from 'expo-secure-store';

// NOTE: I'm going to create one of these to manage loan data too
// props available inside user context (accessed via user model on backend)
interface User {
  first_name: string;
  last_name: string;
  email: string;
  street_address: string;
  phone_number: string;
  province: string;
  postal_code: string;
  username: string;
  user_type: string;
}

// context obj
const UserContext = createContext<
  | {
      // user obj or undefined if not signed in
      user: User | undefined;
      // func to set user data pulled in from user interface props
      setUserData: (userData: User) => void;
      clearUserData: () => void;
      // context defaults to undefined if no user data passed in
    }
  | undefined
>(undefined);

// hook for user context
const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('No user data available.');
  }
  return context;
};

// provider component to hold state for user data
const UserProvider = ({ children }: { children: ReactNode }) => {
  // store user data (default undefined if not signed in)
  const [user, setUser] = useState<User | undefined>(undefined);

  // func to update user data state
  const setUserData = async (userData: User) => {
    setUser(userData);
    await SecureStore.setItemAsync('userData', JSON.stringify(userData));
  };

  const clearUserData = async () => {
    setUser(undefined);
    await SecureStore.deleteItemAsync('userData');
  };

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await SecureStore.getItemAsync('userData');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  return (
    // wrapper for function availability
    <UserContext.Provider value={{ user, setUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, useUser, UserProvider };
