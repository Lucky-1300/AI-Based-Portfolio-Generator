import { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import Card from '../common/Card';

function ExperienceForm() {
  const { portfolioData, updatePortfolio } = usePortfolio();
  const experiences = portfolioData.experiences || [];
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [currentExperience, setCurrentExperience] = useState({
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
  });

  const handleSave = () => {
    if (!currentExperience.company || !currentExperience.position) return;

    if (editingId) {
      updatePortfolio({
        experiences: experiences.map((exp) =>
          exp.id === editingId ? { ...currentExperience, id: editingId } : exp
        ),
      });
    } else {
      updatePortfolio({
        experiences: [...experiences, { ...currentExperience, id: Date.now() }],
      });
    }

    resetForm();
  };

  const handleEdit = (exp) => {
    setCurrentExperience(exp);
    setEditingId(exp.id);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    updatePortfolio({
      experiences: experiences.filter((exp) => exp.id !== id),
    });
  };

  const resetForm = () => {
    setCurrentExperience({
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    });
    setIsAdding(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
          <p className="text-secondary-600">
            Add your professional work experience and achievements.
          </p>
        </div>
        {!isAdding && (
          <Button variant="primary" onClick={() => setIsAdding(true)}>
            + Add Experience
          </Button>
        )}
      </div>

      {isAdding && (
        <Card className="p-6 border-2 border-primary-200">
          <h3 className="text-lg font-semibold mb-4">
            {editingId ? 'Edit Experience' : 'New Experience'}
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Company Name"
                value={currentExperience.company}
                onChange={(e) =>
                  setCurrentExperience({ ...currentExperience, company: e.target.value })
                }
                placeholder="Acme Inc."
                required
              />
              <Input
                label="Position/Role"
                value={currentExperience.position}
                onChange={(e) =>
                  setCurrentExperience({ ...currentExperience, position: e.target.value })
                }
                placeholder="Senior Developer"
                required
              />
            </div>

            <Input
              label="Location"
              value={currentExperience.location}
              onChange={(e) =>
                setCurrentExperience({ ...currentExperience, location: e.target.value })
              }
              placeholder="San Francisco, CA"
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Start Date"
                type="month"
                value={currentExperience.startDate}
                onChange={(e) =>
                  setCurrentExperience({ ...currentExperience, startDate: e.target.value })
                }
              />
              <Input
                label="End Date"
                type="month"
                value={currentExperience.endDate}
                onChange={(e) =>
                  setCurrentExperience({ ...currentExperience, endDate: e.target.value })
                }
                disabled={currentExperience.current}
              />
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={currentExperience.current}
                onChange={(e) =>
                  setCurrentExperience({
                    ...currentExperience,
                    current: e.target.checked,
                    endDate: e.target.checked ? '' : currentExperience.endDate,
                  })
                }
                className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
              />
              <span className="text-sm text-secondary-700">I currently work here</span>
            </label>

            <Textarea
              label="Description"
              value={currentExperience.description}
              onChange={(e) =>
                setCurrentExperience({ ...currentExperience, description: e.target.value })
              }
              placeholder="Describe your responsibilities, achievements, and impact..."
              rows={4}
            />

            <div className="flex gap-3">
              <Button variant="primary" onClick={handleSave}>
                {editingId ? 'Update' : 'Save'}
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      <div className="space-y-4">
        {experiences.map((exp) => (
          <Card key={exp.id} className="p-6 hover-shadow">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <p className="text-lg text-primary-600 font-medium">{exp.company}</p>
                <p className="text-sm text-secondary-600 mt-1">
                  {exp.location} • {exp.startDate} -{' '}
                  {exp.current ? 'Present' : exp.endDate}
                </p>
                {exp.description && (
                  <p className="mt-3 text-secondary-700 whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(exp)}
                  className="text-primary-600 hover:text-primary-700 px-3 py-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="text-red-600 hover:text-red-700 px-3 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </Card>
        ))}

        {experiences.length === 0 && !isAdding && (
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="text-secondary-600">No experience added yet. Add your first role!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceForm;
