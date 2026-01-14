import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import Card from '../components/common/Card';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <header className="border-b border-secondary-200 bg-white shadow-sm">
        <Container>
          <div className="py-6">
            <h1 className="text-4xl font-bold text-gradient">
              AI-Based Portfolio Generator
            </h1>
            <p className="mt-2 text-secondary-600">
              Create stunning portfolios with AI assistance
            </p>
          </div>
        </Container>
      </header>

      <main>
        <Container>
          <Section>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                Build Your Portfolio in Minutes
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto mb-8">
                Leverage the power of AI to create a professional portfolio that stands out.
                No design skills required.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/builder">
                  <Button variant="primary" size="large">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" size="large">
                    View Examples
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <Card className="hover-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI-Powered Content</h3>
                  <p className="text-secondary-600">
                    Let AI enhance your portfolio with intelligent suggestions, content optimization,
                    and professional writing assistance.
                  </p>
                </div>
              </Card>

              <Card className="hover-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fully Customizable</h3>
                  <p className="text-secondary-600">
                    Choose from multiple themes, layouts, and color schemes to match your
                    personal brand and style.
                  </p>
                </div>
              </Card>

              <Card className="hover-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Easy Export</h3>
                  <p className="text-secondary-600">
                    Export your portfolio as HTML, PDF, or React component in one click.
                    Deploy anywhere instantly.
                  </p>
                </div>
              </Card>
            </div>

            <div className="bg-primary-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Create Your Portfolio?
              </h2>
              <p className="text-primary-100 mb-8 text-lg">
                Join thousands of professionals who have already created their portfolios with AI.
              </p>
              <Link to="/builder">
                <Button variant="secondary" size="large">
                  Start Building Now
                </Button>
              </Link>
            </div>
          </Section>
        </Container>
      </main>

      <footer className="border-t border-secondary-200 mt-20 py-8">
        <Container>
          <div className="text-center text-secondary-600">
            <p>&copy; 2026 AI Portfolio Generator. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
