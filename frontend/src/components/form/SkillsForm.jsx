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
  const [suggestions, setSuggestions] = useState([]);

  // Skill categorization
  const skillCategories = {
    frontend: ['React', 'Vue', 'Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'Bootstrap', 'SASS'],
    backend: ['Node.js', 'Python', 'Java', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'Express', 'Django', 'Spring'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'DynamoDB', 'Cassandra', 'Oracle'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'CI/CD', 'Jenkins', 'GitLab', 'GitHub Actions'],
    tools: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Jira', 'Slack', 'Figma', 'Photoshop', 'Postman'],
  };

  const categorizeSkill = (skillName) => {
    for (const [category, categorySkills] of Object.entries(skillCategories)) {
      if (categorySkills.some(s => s.toLowerCase() === skillName.toLowerCase())) {
        return category;
      }
    }
    return 'other';
  };

  const getSuggestions = (inputValue) => {
    if (!inputValue || inputValue.length < 2) {
      setSuggestions([]);
      return;
    }

    const allSkills = Object.values(skillCategories).flat();
    const filtered = allSkills
      .filter(skill => 
        skill.toLowerCase().includes(inputValue.toLowerCase()) &&
        !skills.some(s => s.name.toLowerCase() === skill.toLowerCase())
      )
      .slice(0, 5);
    
    setSuggestions(filtered);
  };

  const handleAddSkill = (skillName = newSkill) => {
    if (skillName.trim()) {
      const category = categorizeSkill(skillName.trim());
      updatePortfolio({
        skills: [
          ...skills,
          {
            id: Date.now(),
            name: skillName.trim(),
            level: newLevel,
            category: category,
          },
        ],
      });
      setNewSkill('');
      setSuggestions([]);
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

  const handleInputChange = (value) => {
    setNewSkill(value);
    getSuggestions(value);
  };

  const levelColors = {
    beginner: 'secondary',
    intermediate: 'primary',
    advanced: 'accent',
    expert: 'success',
  };

  // Group skills by category
  const groupedSkills = Object.keys(skillCategories).reduce((acc, category) => {
    acc[category] = skills.filter(s => s.category === category);
    return acc;
  }, {});
  groupedSkills.other = skills.filter(s => !s.category || s.category === 'other');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <p className="text-secondary-600">
          Add your technical and professional skills. Skills are auto-categorized!
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <Input
            label="Skill Name"
            value={newSkill}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="e.g., React, Python, Project Management"
          />
          {suggestions.length > 0 && (
            <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700 mb-2">💡 Did you mean?</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map(suggestion => (
                  <button
                    key={suggestion}
                    onClick={() => handleAddSkill(suggestion)}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-1">
              Proficiency Level
            </label>
            <select
              value={newLevel}
              onChange={(e) => setNewLevel(e.target.value)}
              className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button variant="primary" onClick={() => handleAddSkill()} className="w-full">
              Add Skill
            </Button>
          </div>
        </div>
      </div>

      {skills.length > 0 && (
        <div className="space-y-6 mt-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => 
            categorySkills.length > 0 && (
              <div key={category} className="border border-secondary-200 rounded-lg p-5">
                <h3 className="font-semibold text-lg capitalize mb-4 text-primary-600">
                  {category === 'other' ? 'Other Skills' : category.replace(/([A-Z])/g, ' $1').trim()} ({categorySkills.length})
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center gap-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg px-4 py-2 border border-primary-200 hover:shadow-md transition"
                    >
                      <span className="font-medium text-sm">{skill.name}</span>
                      <Badge variant={levelColors[skill.level] || 'secondary'} size="small">
                        {skill.level}
                      </Badge>
                      <button
                        onClick={() => handleRemoveSkill(skill.id)}
                        className="ml-1 text-red-500 hover:text-red-700 font-bold text-lg"
                        aria-label="Remove skill"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      )}

      {skills.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed border-secondary-300 rounded-lg bg-secondary-50">
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <p className="text-secondary-600 font-medium">No skills added yet</p>
          <p className="text-secondary-500 text-sm mt-1">Add your first skill above to get started!</p>
        </div>
      )}

      {skills.length > 0 && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            ✅ You've added <strong>{skills.length}</strong> skill{skills.length !== 1 ? 's' : ''} across{' '}
            <strong>{Object.values(groupedSkills).filter(g => g.length > 0).length}</strong> categor{Object.values(groupedSkills).filter(g => g.length > 0).length !== 1 ? 'ies' : 'y'}!
          </p>
        </div>
      )}
    </div>
  );
}

export default SkillsForm;
