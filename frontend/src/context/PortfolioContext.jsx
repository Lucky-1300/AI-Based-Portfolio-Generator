import { createContext, useContext, useState } from 'react';

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [portfolioData, setPortfolioData] = useState({
    personalInfo: {},
    skills: [],
    experiences: [],
    projects: [],
  });

  const updatePortfolio = (updates) => {
    setPortfolioData((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const resetPortfolio = () => {
    setPortfolioData({
      personalInfo: {},
      skills: [],
      experiences: [],
      projects: [],
    });
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        updatePortfolio,
        resetPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
