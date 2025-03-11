import React, { createContext, ReactNode, useState, useContext } from 'react';

interface LoanAppData {
  amount: number | null;
  payment_cycle: string | null;
  length_of_loan: number | null;
}

const LoanAppContext = createContext<{
  loanData: LoanAppData;
  saveLoanData: (data: LoanAppData) => void;
  clearLoanData: () => void;
} | null>(null);

const LoanAppProvider = ({ children }: { children: ReactNode }) => {
  const [loanData, setLoanData] = useState<LoanAppData>({
    amount: null,
    payment_cycle: null,
    length_of_loan: null,
  });

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

const useLoanApp = () => {
  const context = useContext(LoanAppContext);
  return context;
};

export { LoanAppProvider, useLoanApp, LoanAppContext };
