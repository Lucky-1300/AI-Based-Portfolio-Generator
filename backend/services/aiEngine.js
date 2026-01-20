import axios from 'axios';

class AIEngine {
  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY;
    this.apiUrl = 'https://api.openai.com/v1/chat/completions';
    this.model = 'gpt-3.5-turbo';
  }

  async enhanceContent(type, content, context = {}) {
    try {
      // If no API key, return enhanced mock content
      if (!this.apiKey) {
        return this.mockEnhance(type, content);
      }

      const prompts = {
        bio: `Enhance this professional bio to be more compelling and professional while maintaining the core message. Keep it concise (2-3 sentences), impactful, and action-oriented:\n\n${content}`,
        
        description: `Improve this project/experience description. Make it more clear, professional, and highlight achievements with metrics where possible:\n\n${content}`,
        
        summary: `Create a compelling professional summary based on this information. Focus on value proposition, key skills, and career goals (3-4 sentences):\n\n${content}`,
        
        responsibilities: `Convert these responsibilities into achievement-focused bullet points. Start with strong action verbs, include metrics, and show impact:\n\n${content}`,
        
        projectDescription: `Enhance this project description. Emphasize the problem solved, technologies used, and results achieved:\n\n${content}`,
        
        skills: `Given this skill: "${content}", suggest 3-5 related skills that would complement it in a portfolio.`,
      };

      const response = await axios.post(
        this.apiUrl,
        {
          model: this.model,
          messages: [
            {
              role: 'system',
              content: 'You are a professional career coach and technical writer helping developers create outstanding portfolios. Focus on clarity, impact, and measurable achievements.',
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
    // Enhanced rule-based fallback
    const actionVerbs = ['Developed', 'Implemented', 'Designed', 'Led', 'Optimized', 'Created', 'Architected'];
    
    const enhancements = {
      bio: `${content} Passionate about leveraging modern technologies to solve complex problems and deliver exceptional user experiences.`,
      
      description: `${content} Demonstrated strong problem-solving abilities and collaborative approach to deliver high-quality, scalable solutions.`,
      
      summary: `${content} Committed to continuous learning and staying current with industry best practices while contributing to impactful projects.`,
      
      responsibilities: content.split('\n').map(item => {
        const verb = actionVerbs[Math.floor(Math.random() * actionVerbs.length)];
        return item.trim().startsWith('-') ? item : `${verb} ${item}`;
      }).join('\n'),
    };
    
    return enhancements[type] || content;
  }

  async generateSuggestions(portfolioData) {
    try {
      const suggestions = [];

      // Personal Info validation
      if (!portfolioData.personalInfo?.bio || portfolioData.personalInfo.bio.length < 50) {
        suggestions.push({
          type: 'warning',
          section: 'Personal Info',
          message: 'Add a compelling professional bio (minimum 50 characters)',
          priority: 'high',
        });
      }

      if (!portfolioData.personalInfo?.title) {
        suggestions.push({
          type: 'error',
          section: 'Personal Info',
          message: 'Professional title is required',
          priority: 'critical',
        });
      }

      // Skills validation
      if (!portfolioData.skills || portfolioData.skills.length < 5) {
        suggestions.push({
          type: 'info',
          section: 'Skills',
          message: 'Add at least 5 skills to showcase your expertise',
          priority: 'medium',
        });
      }

      // Projects validation
      if (!portfolioData.projects || portfolioData.projects.length === 0) {
        suggestions.push({
          type: 'warning',
          section: 'Projects',
          message: 'Add projects to demonstrate your practical experience',
          priority: 'high',
        });
      } else if (portfolioData.projects.length < 3) {
        suggestions.push({
          type: 'info',
          section: 'Projects',
          message: 'Consider adding more projects (recommended: 3-5)',
          priority: 'low',
        });
      }

      // Experience validation
      if (!portfolioData.experiences || portfolioData.experiences.length === 0) {
        suggestions.push({
          type: 'info',
          section: 'Experience',
          message: 'Add work experience to build credibility',
          priority: 'medium',
        });
      }

      // Links validation
      const socialLinks = portfolioData.personalInfo?.linkedin || portfolioData.personalInfo?.github;
      if (!socialLinks) {
        suggestions.push({
          type: 'info',
          section: 'Personal Info',
          message: 'Add LinkedIn or GitHub profile for better connectivity',
          priority: 'low',
        });
      }

      // Achievement suggestions
      if (portfolioData.experiences?.some(exp => !exp.achievements || exp.achievements.length === 0)) {
        suggestions.push({
          type: 'tip',
          section: 'Experience',
          message: 'Add quantifiable achievements to your work experience (e.g., "Increased performance by 40%")',
          priority: 'medium',
        });
      }

      // Success message if everything is good
      if (suggestions.length === 0) {
        suggestions.push({
          type: 'success',
          section: 'Overall',
          message: 'Your portfolio looks comprehensive! Consider exporting and sharing.',
          priority: 'low',
        });
      }

      return suggestions.sort((a, b) => {
        const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
    } catch (error) {
      console.error('Suggestions error:', error.message);
      return [];
    }
  }

  async enhanceBatch(items, type) {
    // Batch enhancement for multiple items
    try {
      const enhanced = await Promise.all(
        items.map(item => this.enhanceContent(type, item))
      );
      return enhanced;
    } catch (error) {
      console.error('Batch enhancement error:', error.message);
      return items;
    }
  }
}

export const aiEngine = new AIEngine();
