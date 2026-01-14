import { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Input from '../common/Input';
import Button from '../common/Button';
import Badge from '../common/Badge';

function SkillsForm() {
  const { portfolioData, updatePortfolio } = usePortfolio();
  const skills = portfolioData.skills || [];
  const [newSkill, setNewSkill] = useState('');
  const [newLevel, setNewLevel] = useState('intermediate');

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      updatePortfolio({
        skills: [
          ...skills,
          {
            id: Date.now(),
            name: newSkill.trim(),
            level: newLevel,
          },
        ],
      });
      setNewSkill('');
      setNewLevel('intermediate');
    }
  };

  const handleRemoveSkill = (id) => {
    updatePortfolio({
      skills: skills.filter((skill) => skill.id !== id),
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const levelColors = {
    beginner: 'secondary',
    intermediate: 'primary',
    advanced: 'accent',
    expert: 'success',
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <p className="text-secondary-600">
          Add your technical and professional skills with proficiency levels.
        </p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            label="Skill Name"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="e.g., React, Python, Project Management"
          />
        </div>
        <div className="w-48">
          <label className="block text-sm font-medium text-secondary-700 mb-1">
            Proficiency Level
          </label>
          <select
            value={newLevel}
            onChange={(e) => setNewLevel(e.target.value)}
            className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <div className="flex items-end">
          <Button variant="primary" onClick={handleAddSkill}>
            Add Skill
          </Button>
        </div>
      </div>

      {skills.length > 0 && (
        <div className="border border-secondary-200 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Your Skills ({skills.length})</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-2 bg-secondary-50 rounded-lg px-4 py-2 border border-secondary-200"
              >
                <span className="font-medium">{skill.name}</span>
                <Badge variant={levelColors[skill.level] || 'secondary'}>
                  {skill.level}
                </Badge>
                <button
                  onClick={() => handleRemoveSkill(skill.id)}
                  className="ml-2 text-red-500 hover:text-red-700"
                  aria-label="Remove skill"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {skills.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed border-secondary-300 rounded-lg">
          <svg
            className="w-12 h-12 text-secondary-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <p className="text-secondary-600">No skills added yet. Add your first skill above!</p>
        </div>
      )}
    </div>
  );
}

export default SkillsForm;
