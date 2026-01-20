import { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import { useAIEnhancer } from '../../hooks/useAIEnhancer';

function PersonalInfoForm() {
  const { portfolioData, updatePortfolio } = usePortfolio();
  const { enhanceContent, isLoading } = useAIEnhancer();
  const personalInfo = portfolioData.personalInfo || {};
  const [errors, setErrors] = useState({});
  const [suggestions, setSuggestions] = useState({});

  const validateField = (field, value) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'fullName':
        if (!value?.trim()) {
          newErrors.fullName = 'Full name is required';
        } else if (value.trim().length < 2) {
          newErrors.fullName = 'Name must be at least 2 characters';
        } else {
          delete newErrors.fullName;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;

      case 'phone':
        if (value && value.length < 10) {
          newErrors.phone = 'Phone number appears too short';
        } else {
          delete newErrors.phone;
        }
        break;

      case 'bio':
        if (value && value.length < 20) {
          setSuggestions(prev => ({
            ...prev,
            bio: 'A longer bio (20+ characters) will help recruiters understand you better'
          }));
        } else if (value && value.length > 500) {
          setSuggestions(prev => ({
            ...prev,
            bio: 'Consider shortening your bio to under 500 characters'
          }));
        } else {
          setSuggestions(prev => {
            const newSugg = { ...prev };
            delete newSugg.bio;
            return newSugg;
          });
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleChange = (field, value) => {
    validateField(field, value);
    updatePortfolio({
      personalInfo: {
        ...personalInfo,
        [field]: value,
      },
    });
  };

  const handleEnhanceBio = async () => {
    if (personalInfo.bio) {
      const enhanced = await enhanceContent('bio', personalInfo.bio);
      if (enhanced) {
        handleChange('bio', enhanced);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
        <p className="text-secondary-600">
          Tell us about yourself. This information will be displayed on your portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            label="Full Name"
            value={personalInfo.fullName || ''}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="John Doe"
            required
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">⚠️ {errors.fullName}</p>
          )}
        </div>

        <div>
          <Input
            label="Professional Title"
            value={personalInfo.title || ''}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Full Stack Developer"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            label="Email"
            type="email"
            value={personalInfo.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com"
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">⚠️ {errors.email}</p>
          )}
        </div>

        <div>
          <Input
            label="Phone"
            type="tel"
            value={personalInfo.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-orange-500">ℹ️ {errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Location"
          value={personalInfo.location || ''}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="San Francisco, CA"
        />

        <Input
          label="Website"
          type="url"
          value={personalInfo.website || ''}
          onChange={(e) => handleChange('website', e.target.value)}
          placeholder="https://yourwebsite.com"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-secondary-700">
            Professional Bio
          </label>
          <Button
            variant="ghost"
            size="small"
            onClick={handleEnhanceBio}
            disabled={isLoading || !personalInfo.bio}
          >
            {isLoading ? 'Enhancing...' : '✨ Enhance with AI'}
          </Button>
        </div>
        <Textarea
          value={personalInfo.bio || ''}
          onChange={(e) => handleChange('bio', e.target.value)}
          placeholder="Write a brief professional summary about yourself..."
          rows={6}
        />
        {suggestions.bio && (
          <p className="mt-2 text-sm text-blue-600">💡 {suggestions.bio}</p>
        )}
        {personalInfo.bio && (
          <p className="mt-1 text-xs text-secondary-500">
            {personalInfo.bio.length} characters
          </p>
        )}
      </div>

      <div className="border-t border-secondary-200 pt-6">
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
        <p className="text-sm text-secondary-600 mb-4">
          Add links to your professional profiles (optional)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="LinkedIn"
            value={personalInfo.linkedin || ''}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
          />

          <Input
            label="GitHub"
            value={personalInfo.github || ''}
            onChange={(e) => handleChange('github', e.target.value)}
            placeholder="https://github.com/yourusername"
          />

          <Input
            label="Twitter"
            value={personalInfo.twitter || ''}
            onChange={(e) => handleChange('twitter', e.target.value)}
            placeholder="https://twitter.com/yourusername"
          />

          <Input
            label="Portfolio URL"
            value={personalInfo.portfolio || ''}
            onChange={(e) => handleChange('portfolio', e.target.value)}
            placeholder="https://yourportfolio.com"
          />
        </div>
      </div>
    </div>
  );
}


export default PersonalInfoForm;
