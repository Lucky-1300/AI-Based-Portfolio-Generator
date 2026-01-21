import { useState, useEffect } from 'react';
import Container from '../components/common/Container';
import PersonalInfoForm from '../components/form/PersonalInfoForm';
import SkillsForm from '../components/form/SkillsForm';
import ExperienceForm from '../components/form/ExperienceForm';
import ProjectsForm from '../components/form/ProjectsForm';
import LivePreview from '../components/preview/LivePreview';
import ThemeSwitcher from '../components/preview/ThemeSwitcher';
import ExportPortfolio from '../components/ExportPortfolio';
import Button from '../components/common/Button';
import ThemeToggle from '../components/common/ThemeToggle';
import Badge from '../components/common/Badge';
import Alert from '../components/common/Alert';
import { usePortfolio } from '../context/PortfolioContext';
import { validatePortfolioForExport, calculateCompletionPercentage } from '../services/exportIntegrationService';

function Builder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const { portfolioData, savePortfolio, loadPortfolio } = usePortfolio();
  const [autoSaveStatus, setAutoSaveStatus] = useState('saved');
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const steps = [
    { id: 0, name: 'Personal Info', component: PersonalInfoForm, icon: '👤' },
    { id: 1, name: 'Skills', component: SkillsForm, icon: '⚡' },
    { id: 2, name: 'Experience', component: ExperienceForm, icon: '💼' },
    { id: 3, name: 'Projects', component: ProjectsForm, icon: '🚀' },
  ];

  const CurrentFormComponent = steps[currentStep].component;

  // Auto-save functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      if (portfolioData) {
        localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
        setAutoSaveStatus('saved');
      }
    }, 1000);

    setAutoSaveStatus('saving');
    return () => clearTimeout(timer);
  }, [portfolioData]);

  // Update completion percentage
  useEffect(() => {
    const percentage = calculateCompletionPercentage(portfolioData);
    setCompletionPercentage(percentage);
  }, [portfolioData]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white dark:from-slate-900 dark:to-slate-900">
      <header className="bg-white dark:bg-slate-900 border-b border-secondary-200 dark:border-slate-800 shadow-md">
        <Container>
          <div className="py-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Portfolio Builder
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <Badge variant="success">
                    {completionPercentage}% Complete
                  </Badge>
                  <span className="text-xs text-secondary-500 dark:text-secondary-300">
                    {autoSaveStatus === 'saving' ? '💾 Saving...' : '✓ Auto-saved'}
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? '📝 Hide Preview' : '👁️ Show Preview'}
                </Button>
                <ThemeToggle />
                <ThemeSwitcher />
                <ExportPortfolio />
              </div>
            </div>

            {/* Completion Progress Bar */}
            <div className="bg-secondary-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary-600 to-accent-600 h-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </Container>
      </header>

      <main className="py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Section */}
            <div className={showPreview ? 'lg:col-span-6' : 'lg:col-span-8 lg:col-start-3'}>
              {/* AI Suggestions Banner */}
              {completionPercentage < 50 && (
                <Alert variant="info" className="mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">💡</span>
                    <div>
                      <p className="font-semibold">AI Tip</p>
                      <p className="text-sm">Add more details to your profile. Portfolios with 80%+ completion get noticed more!</p>
                    </div>
                  </div>
                </Alert>
              )}

              <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm p-6">
                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex justify-between items-center">
                    {steps.map((step, index) => (
                      <div
                        key={step.id}
                        className="flex items-center cursor-pointer"
                        onClick={() => setCurrentStep(index)}
                      >
                        <div
                          className={`
                            w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all
                            ${
                              index === currentStep
                                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg scale-110'
                                : index < currentStep
                                ? 'bg-primary-200 text-primary-800'
                                : 'bg-secondary-200 text-secondary-600'
                            }
                          `}
                        >
                          <span className="text-lg">{step.icon}</span>
                        </div>
                        <div
                          className={`ml-2 text-sm font-medium hidden md:block ${
                            index === currentStep
                              ? 'text-primary-600'
                              : 'text-secondary-600'
                          }`}
                        >
                          {step.name}
                        </div>
                        {index < steps.length - 1 && (
                          <div
                            className={`w-12 h-1 mx-4 rounded transition-all ${
                              index < currentStep
                                ? 'bg-gradient-to-r from-primary-600 to-accent-600'
                                : 'bg-secondary-200'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current Step Title */}
                <div className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg border border-primary-100 dark:bg-slate-800 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{steps[currentStep].icon}</span>
                    <h2 className="text-xl font-bold text-primary-700">
                      {steps[currentStep].name}
                    </h2>
                  </div>
                  <p className="text-sm text-primary-600 dark:text-blue-300 mt-1">
                    Step {currentStep + 1} of {steps.length}
                  </p>
                </div>

                {/* Form Component */}
                <CurrentFormComponent />

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-secondary-200">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                  >
                    ← Previous
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleNext}
                    disabled={currentStep === steps.length - 1}
                  >
                    Next →
                  </Button>
                </div>
              </div>
            </div>

            {/* Preview Section */}
            {showPreview && (
              <div className="lg:col-span-6">
                <div className="sticky top-8">
                  <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm p-4 mb-4">
                    <h3 className="font-semibold text-lg mb-2">Live Preview</h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-300">
                      See how your portfolio will look in real-time
                    </p>
                  </div>
                  <LivePreview data={portfolioData} />
                </div>
              </div>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
}

export default Builder;
