import { useTheme } from '../../context/ThemeContext';

export default function LivePreview({ data, fullWidth = false }) {
  const { currentTheme } = useTheme();

  const themeClasses = {
    modern: 'bg-gradient-to-br from-primary-50 to-white',
    classic: 'bg-white',
    minimal: 'bg-secondary-50',
  };

  return (
    <div
      className={`rounded-lg border-2 border-secondary-200 overflow-hidden ${
        fullWidth ? '' : 'max-h-[800px] overflow-y-auto'
      }`}
    >
      <div className={`p-8 ${themeClasses[currentTheme] || themeClasses.modern}`}>
        {/* Header Section */}
        {data.personalInfo && (
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-2">
              {data.personalInfo.fullName || 'Your Name'}
            </h1>
            <p className="text-2xl text-primary-600 font-medium mb-4">
              {data.personalInfo.title || 'Your Title'}
            </p>
            {data.personalInfo.bio && (
              <p className="text-lg text-secondary-700 max-w-3xl mx-auto mb-6">
                {data.personalInfo.bio}
              </p>
            )}
            <div className="flex flex-wrap gap-4 justify-center text-secondary-600">
              {data.personalInfo.email && (
                <a href={`mailto:${data.personalInfo.email}`} className="hover:text-primary-600">
                  📧 {data.personalInfo.email}
                </a>
              )}
              {data.personalInfo.phone && <span>📞 {data.personalInfo.phone}</span>}
              {data.personalInfo.location && <span>📍 {data.personalInfo.location}</span>}
            </div>
            {(data.personalInfo.linkedin || data.personalInfo.github) && (
              <div className="flex gap-4 justify-center mt-4">
                {data.personalInfo.linkedin && (
                  <a
                    href={data.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    LinkedIn
                  </a>
                )}
                {data.personalInfo.github && (
                  <a
                    href={data.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </header>
        )}

        {/* Skills Section */}
        {data.skills && data.skills.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-primary-600 pb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-4 py-2 bg-primary-100 text-primary-800 rounded-lg font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        {data.experiences && data.experiences.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-primary-600 pb-2">
              Experience
            </h2>
            <div className="space-y-6">
              {data.experiences.map((exp) => (
                <div key={exp.id} className="pl-4 border-l-4 border-primary-600">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-lg text-primary-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-secondary-600 mb-2">
                    {exp.location} • {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                  {exp.description && (
                    <p className="text-secondary-700 whitespace-pre-line">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {data.projects && data.projects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-primary-600 pb-2">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="border border-secondary-200 rounded-lg p-6 bg-white shadow-sm"
                >
                  {proj.imageUrl && (
                    <img
                      src={proj.imageUrl}
                      alt={proj.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
                  <p className="text-secondary-700 mb-3">{proj.description}</p>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {proj.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-secondary-100 text-secondary-800 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-3">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-sm"
                      >
                        Live Demo →
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-sm"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
