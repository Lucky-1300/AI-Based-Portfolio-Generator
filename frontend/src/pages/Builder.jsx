import { useState } from 'react';
import Container from '../components/common/Container';
import PersonalInfoForm from '../components/form/PersonalInfoForm';
import SkillsForm from '../components/form/SkillsForm';
import ExperienceForm from '../components/form/ExperienceForm';
import ProjectsForm from '../components/form/ProjectsForm';
import LivePreview from '../components/preview/LivePreview';
import ThemeSwitcher from '../components/preview/ThemeSwitcher';
import Button from '../components/common/Button';
import { usePortfolio } from '../context/PortfolioContext';

function Builder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const { portfolioData } = usePortfolio();

  const steps = [
    { id: 0, name: 'Personal Info', component: PersonalInfoForm },
    { id: 1, name: 'Skills', component: SkillsForm },
    { id: 2, name: 'Experience', component: ExperienceForm },
    { id: 3, name: 'Projects', component: ProjectsForm },
  ];

  const CurrentFormComponent = steps[currentStep].component;

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
    <div className="min-h-screen bg-secondary-50">
      <header className="bg-white border-b border-secondary-200 shadow-sm">
        <Container>
          <div className="py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Portfolio Builder</h1>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </Button>
              <ThemeSwitcher />
            </div>
          </div>
        </Container>
      </header>

      <main className="py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Section */}
            <div className={showPreview ? 'lg:col-span-6' : 'lg:col-span-8 lg:col-start-3'}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex justify-between items-center">
                    {steps.map((step, index) => (
                      <div
                        key={step.id}
                        className="flex items-center"
                      >
                        <div
                          className={`
                            w-10 h-10 rounded-full flex items-center justify-center font-semibold
                            ${
                              index === currentStep
                                ? 'bg-primary-600 text-white'
                                : index < currentStep
                                ? 'bg-primary-200 text-primary-800'
                                : 'bg-secondary-200 text-secondary-600'
                            }
                          `}
                        >
                          {index + 1}
                        </div>
                        <div
                          className={`ml-2 text-sm font-medium ${
                            index === currentStep
                              ? 'text-primary-600'
                              : 'text-secondary-600'
                          }`}
                        >
                          {step.name}
                        </div>
                        {index < steps.length - 1 && (
                          <div
                            className={`w-12 h-1 mx-4 ${
                              index < currentStep
                                ? 'bg-primary-600'
                                : 'bg-secondary-200'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
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
                    Previous
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleNext}
                    disabled={currentStep === steps.length - 1}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>

            {/* Preview Section */}
            {showPreview && (
              <div className="lg:col-span-6">
                <div className="sticky top-8">
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
