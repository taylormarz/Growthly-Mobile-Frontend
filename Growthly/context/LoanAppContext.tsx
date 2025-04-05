import React, { createContext, ReactNode, useState, useContext } from 'react';

// props available inside loan context (accessed via loan model on backend)
interface LoanAppData {
  amount: number | null;
  payment_cycle: string | null;
  length_of_loan: number | null;
}

// context obj
const LoanAppContext = createContext<{
  loanData: LoanAppData;
  saveLoanData: (data: LoanAppData) => void;
  clearLoanData: () => void;
} | null>(null);

// provider component to hold state for loan data
const LoanAppProvider = ({ children }: { children: ReactNode }) => {
  const [loanData, setLoanData] = useState<LoanAppData>({
    amount: null,
    payment_cycle: null,
    length_of_loan: null,
  });

  // func to update loan data
  const saveLoanData = (data: LoanAppData) => {
    setLoanData(data);
  };

  const clearLoanData = () => {
    setLoanData({ amount: null, payment_cycle: null, length_of_loan: null });
  };

  return (
    <LoanAppContext.Provider value={{ loanData, saveLoanData, clearLoanData }}>
      {children}
    </LoanAppContext.Provider>
  );
};

// hook for loan context
const useLoanApp = () => {
  const context = useContext(LoanAppContext);
  return context;
};

export { LoanAppProvider, useLoanApp, LoanAppContext };
