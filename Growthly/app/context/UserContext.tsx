import React, { createContext, useContext, ReactNode, useState } from 'react';

// NOTE: I'm going to create one of these to manage loan data too
// props available inside user context (accessed via user model on backend)
interface User {
    first_name:     string;
    last_name:      string;
    email:          string;
    password:       string;
    street_address: string;
    phone_number:   string;
    province:       string;
    postal_code:    string;
    username:       string;
    user_type:      string;
    sin_number:     string;
}

// context obj
const UserContext = createContext<{ 
    // user obj or undefined if not signed in
    user: User | undefined; 
    // func to set user data pulled in from user interface props
    setUserData: (userData: User) => void; 
    // context defaults to undefined if no user data passed in
} | undefined>(undefined);

const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('No user data available.');
    }

    return context;
}

// provider component to hold state for user data
const UserProvider = ({ children }: { children: ReactNode }) => {
    // store user data (default undefined if not signed in)
    const [user, setUser] = useState<User | undefined>(undefined);

    // func to update user data state
    const setUserData = (userData: User) => {
        setUser(userData);
    };

    return (
        // wrapper for function availability
        <UserContext.Provider value={{ user, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export {UserContext, useUser, UserProvider };