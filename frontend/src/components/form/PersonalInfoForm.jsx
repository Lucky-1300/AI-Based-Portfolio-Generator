import { usePortfolio } from '../../context/PortfolioContext';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import { useAIEnhancer } from '../../hooks/useAIEnhancer';

function PersonalInfoForm() {
  const { portfolioData, updatePortfolio } = usePortfolio();
  const { enhanceContent, isLoading } = useAIEnhancer();
  const personalInfo = portfolioData.personalInfo || {};

  const handleChange = (field, value) => {
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
        <Input
          label="Full Name"
          value={personalInfo.fullName || ''}
          onChange={(e) => handleChange('fullName', e.target.value)}
          placeholder="John Doe"
          required
        />

        <Input
          label="Professional Title"
          value={personalInfo.title || ''}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="Full Stack Developer"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email"
          type="email"
          value={personalInfo.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="john@example.com"
          required
        />

        <Input
          label="Phone"
          type="tel"
          value={personalInfo.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="+1 (555) 123-4567"
        />
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
      </div>

      <div className="border-t border-secondary-200 pt-6">
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
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
