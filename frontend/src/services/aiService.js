import apiClient from './apiClient';

export const aiService = {
  async enhanceContent(type, content) {
    try {
      const response = await apiClient.post('/ai/enhance', {
        type,
        content,
      });
      return response.data.enhanced;
    } catch (error) {
      console.error('AI enhancement failed:', error);
      throw new Error('Failed to enhance content');
    }
  },

  async generateSuggestions(data) {
    try {
      const response = await apiClient.post('/ai/suggest', data);
      return response.data.suggestions;
    } catch (error) {
      console.error('AI suggestions failed:', error);
      throw new Error('Failed to generate suggestions');
    }
  },

  async optimizePrompt(prompt) {
    try {
      const response = await apiClient.post('/ai/optimize-prompt', {
        prompt,
      });
      return response.data.optimized;
    } catch (error) {
      console.error('Prompt optimization failed:', error);
      throw new Error('Failed to optimize prompt');
    }
  },
};
