export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validatePortfolioData = (data) => {
  const errors = [];

  if (!data.personalInfo?.fullName) {
    errors.push('Full name is required');
  }

  if (!data.personalInfo?.title) {
    errors.push('Professional title is required');
  }

  if (data.personalInfo?.email && !validateEmail(data.personalInfo.email)) {
    errors.push('Invalid email format');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
