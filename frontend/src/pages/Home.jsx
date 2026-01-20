import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import Card from '../components/common/Card';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <header className="border-b border-blue-100 bg-white/40 backdrop-blur-md shadow-sm sticky top-0">
          <Container>
            <div className="py-6">
              <h1 className="text-5xl font-bold gradient-text-primary">
                ✨ AI Portfolio Generator
              </h1>
              <p className="mt-2 text-lg text-blue-600 font-medium">
                Create stunning portfolios instantly
              </p>
            </div>
          </Container>
        </header>

        <main>
          <Container>
            <Section>
              <div className="text-center mb-20 animate-fadeIn">
                <h2 className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Build Your Portfolio in Minutes
                </h2>
                <p className="text-2xl text-blue-700 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
                  Leverage the power of AI to create a professional portfolio that stands out.
                  No design skills required.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link to="/builder">
                    <Button variant="primary" size="large" className="shadow-2xl transform hover:-translate-y-1">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden border-0 bg-white/80 backdrop-blur">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text-primary">AI-Powered Content</h3>
                    <p className="text-blue-700 leading-relaxed text-lg">
                      Let AI enhance your portfolio with intelligent suggestions, content optimization, and professional writing assistance.
                    </p>
                  </div>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden border-0 bg-white/80 backdrop-blur">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text-primary">Fully Customizable</h3>
                    <p className="text-blue-700 leading-relaxed text-lg">
                      Choose from multiple themes, layouts, and color schemes to match your personal brand and style perfectly.
                    </p>
                  </div>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden border-0 bg-white/80 backdrop-blur">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text-primary">Easy Export</h3>
                    <p className="text-blue-700 leading-relaxed text-lg">
                      Export your portfolio as HTML, PDF, or React component in one click. Deploy anywhere instantly.
                    </p>
                  </div>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-3xl p-16 text-center text-white shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 group-hover:translate-x-full transition-all duration-500"></div>
                <div className="relative z-10">
                  <h2 className="text-5xl font-extrabold mb-6">
                    Ready to Create Your Portfolio?
                  </h2>
                  <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
                    Join thousands of professionals who have already created their portfolios with AI.
                  </p>
                  <Link to="/builder">
                    <Button variant="secondary" size="large">
                      Start Building Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Section>
          </Container>
        </main>

        <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white mt-20 border-t-4 border-blue-500">
          <Container>
            <div className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Brand Section */}
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold mb-4 gradient-text-primary">
                    ✨ AI Portfolio Generator
                  </h3>
                  <p className="text-slate-300 mb-6 max-w-md leading-relaxed text-lg">
                    Create professional portfolios in minutes with the power of AI. Stand out from the crowd with stunning, customizable designs.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50 transform hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-bold mb-4 gradient-text-primary">Quick Links</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li><Link to="/" className="hover:text-blue-400 transition-colors font-medium">Home</Link></li>
                    <li><Link to="/builder" className="hover:text-blue-400 transition-colors font-medium">Create Portfolio</Link></li>
                    <li><Link to="/dashboard" className="hover:text-blue-400 transition-colors font-medium">Dashboard</Link></li>
                    <li><a href="#examples" className="hover:text-blue-400 transition-colors font-medium">Examples</a></li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-lg font-bold mb-4 gradient-text-primary">Resources</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li><a href="#docs" className="hover:text-blue-400 transition-colors font-medium">Documentation</a></li>
                    <li><a href="#api" className="hover:text-blue-400 transition-colors font-medium">API Reference</a></li>
                    <li><a href="#help" className="hover:text-blue-400 transition-colors font-medium">Help Center</a></li>
                    <li><a href="#contact" className="hover:text-blue-400 transition-colors font-medium">Contact Us</a></li>
                  </ul>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-8 border-t border-slate-700">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-slate-400 text-sm">
                    &copy; 2026 AI Portfolio Generator. All rights reserved.
                  </p>
                  <div className="flex gap-6 text-sm text-slate-400">
                    <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                    <a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                    <a href="#cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}

export default Home;
