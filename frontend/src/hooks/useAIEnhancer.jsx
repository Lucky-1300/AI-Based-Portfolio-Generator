import { useState } from 'react';
import { aiService } from '../services/aiService';

export function useAIEnhancer() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enhanceContent = async (type, content) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await aiService.enhanceContent(type, content);
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      return null;
    }
  };

  const generateSuggestions = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const suggestions = await aiService.generateSuggestions(data);
      setIsLoading(false);
      return suggestions;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      return null;
    }
  };

  return {
    enhanceContent,
    generateSuggestions,
    isLoading,
    error,
  };
}
