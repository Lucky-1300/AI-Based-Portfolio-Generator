import { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import Card from '../common/Card';

function ProjectsForm() {
  const { portfolioData, updatePortfolio } = usePortfolio();
  const projects = portfolioData.projects || [];
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [currentProject, setCurrentProject] = useState({
    name: '',
    description: '',
    technologies: '',
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
  });

  const handleSave = () => {
    if (!currentProject.name || !currentProject.description) return;

    const projectToSave = {
      ...currentProject,
      technologies: currentProject.technologies
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t),
    };

    if (editingId) {
      updatePortfolio({
        projects: projects.map((proj) =>
          proj.id === editingId ? { ...projectToSave, id: editingId } : proj
        ),
      });
    } else {
      updatePortfolio({
        projects: [...projects, { ...projectToSave, id: Date.now() }],
      });
    }

    resetForm();
  };

  const handleEdit = (proj) => {
    setCurrentProject({
      ...proj,
      technologies: Array.isArray(proj.technologies)
        ? proj.technologies.join(', ')
        : proj.technologies,
    });
    setEditingId(proj.id);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    updatePortfolio({
      projects: projects.filter((proj) => proj.id !== id),
    });
  };

  const resetForm = () => {
    setCurrentProject({
      name: '',
      description: '',
      technologies: '',
      liveUrl: '',
      githubUrl: '',
      imageUrl: '',
    });
    setIsAdding(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Projects</h2>
          <p className="text-secondary-600">
            Showcase your best work and personal projects.
          </p>
        </div>
        {!isAdding && (
          <Button variant="primary" onClick={() => setIsAdding(true)}>
            + Add Project
          </Button>
        )}
      </div>

      {isAdding && (
        <Card className="p-6 border-2 border-primary-200">
          <h3 className="text-lg font-semibold mb-4">
            {editingId ? 'Edit Project' : 'New Project'}
          </h3>
          
          <div className="space-y-4">
            <Input
              label="Project Name"
              value={currentProject.name}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, name: e.target.value })
              }
              placeholder="My Awesome Project"
              required
            />

            <Textarea
              label="Description"
              value={currentProject.description}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, description: e.target.value })
              }
              placeholder="Describe what the project does and your role in it..."
              rows={4}
              required
            />

            <Input
              label="Technologies Used"
              value={currentProject.technologies}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, technologies: e.target.value })
              }
              placeholder="React, Node.js, MongoDB (comma-separated)"
              helperText="Separate technologies with commas"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Live Demo URL"
                type="url"
                value={currentProject.liveUrl}
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, liveUrl: e.target.value })
                }
                placeholder="https://demo.example.com"
              />

              <Input
                label="GitHub Repository"
                type="url"
                value={currentProject.githubUrl}
                onChange={(e) =>
                  setCurrentProject({ ...currentProject, githubUrl: e.target.value })
                }
                placeholder="https://github.com/user/repo"
              />
            </div>

            <Input
              label="Project Image URL"
              type="url"
              value={currentProject.imageUrl}
              onChange={(e) =>
                setCurrentProject({ ...currentProject, imageUrl: e.target.value })
              }
              placeholder="https://example.com/project-screenshot.png"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <Card key={proj.id} className="p-6 hover-shadow">
            {proj.imageUrl && (
              <img
                src={proj.imageUrl}
                alt={proj.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
            <p className="text-secondary-700 mb-3">{proj.description}</p>
            {Array.isArray(proj.technologies) && proj.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-3 mb-3">
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
            <div className="flex gap-2 mt-4 pt-4 border-t border-secondary-200">
              <button
                onClick={() => handleEdit(proj)}
                className="text-primary-600 hover:text-primary-700 px-3 py-1 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(proj.id)}
                className="text-red-600 hover:text-red-700 px-3 py-1 text-sm"
              >
                Delete
              </button>
            </div>
          </Card>
        ))}

        {projects.length === 0 && !isAdding && (
          <div className="col-span-full text-center py-12 border-2 border-dashed border-secondary-300 rounded-lg">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-secondary-600">No projects added yet. Add your first project!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsForm;
