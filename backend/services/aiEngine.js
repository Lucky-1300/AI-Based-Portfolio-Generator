import axios from 'axios';

class AIEngine {
  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY;
    this.apiUrl = 'https://api.openai.com/v1/chat/completions';
  }

  async enhanceContent(type, content) {
    try {
      // If no API key, return enhanced mock content
      if (!this.apiKey) {
        return this.mockEnhance(type, content);
      }

      const prompts = {
        bio: `Enhance this professional bio to be more compelling and professional while maintaining the core message. Keep it concise and impactful:\n\n${content}`,
        description: `Improve this project/experience description to be more clear, professional, and highlight achievements:\n\n${content}`,
        summary: `Create a compelling professional summary based on this information:\n\n${content}`,
      };

      const response = await axios.post(
        this.apiUrl,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a professional career coach helping to improve portfolio content.',
            },
            {
              role: 'user',
              content: prompts[type] || content,
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('AI Enhancement error:', error.message);
      return this.mockEnhance(type, content);
    }
  }

  mockEnhance(type, content) {
    // Return a slightly enhanced version as fallback
    const enhancements = {
      bio: `${content}\n\nPassionate about leveraging technology to solve real-world problems and deliver exceptional user experiences.`,
      description: `${content}\n\nThis involved collaborative problem-solving, agile methodologies, and a focus on delivering high-quality, scalable solutions.`,
    };
    return enhancements[type] || content;
  }

  async generateSuggestions(portfolioData) {
    try {
      const suggestions = [];

      // Basic rule-based suggestions
      if (!portfolioData.personalInfo?.bio) {
        suggestions.push({
          type: 'warning',
          message: 'Add a professional bio to make your portfolio more personal',
        });
      }

      if (!portfolioData.skills || portfolioData.skills.length < 3) {
        suggestions.push({
          type: 'info',
          message: 'Add more skills to showcase your expertise',
        });
      }

      if (!portfolioData.projects || portfolioData.projects.length === 0) {
        suggestions.push({
          type: 'warning',
          message: 'Add projects to demonstrate your work',
        });
      }

      if (!portfolioData.experiences || portfolioData.experiences.length === 0) {
        suggestions.push({
          type: 'info',
          message: 'Add work experience to build credibility',
        });
      }

      return suggestions.length > 0
        ? suggestions
        : [{ type: 'success', message: 'Your portfolio looks great!' }];
    } catch (error) {
      console.error('Suggestions error:', error.message);
      return [];
    }
  }
}

export const aiEngine = new AIEngine();
