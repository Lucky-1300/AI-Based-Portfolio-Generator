import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

function Dashboard() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    // Mock data - replace with actual API call
    setPortfolios([
      {
        id: 1,
        name: 'My Portfolio',
        theme: 'modern',
        lastModified: '2026-01-10',
        status: 'published',
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-secondary-50">
      <header className="bg-white border-b border-secondary-200 shadow-sm">
        <Container>
          <div className="py-6">
            <h1 className="text-3xl font-bold">My Portfolios</h1>
            <p className="mt-2 text-secondary-600">
              Manage and create your portfolio projects
            </p>
          </div>
        </Container>
      </header>

      <main className="py-8">
        <Container>
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Projects</h2>
            <Link to="/builder">
              <Button variant="primary">
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create New Portfolio
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.length === 0 ? (
              <div className="col-span-full">
                <Card className="p-12 text-center">
                  <svg
                    className="w-16 h-16 text-secondary-400 mx-auto mb-4"
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
                  <h3 className="text-xl font-semibold mb-2">No portfolios yet</h3>
                  <p className="text-secondary-600 mb-6">
                    Get started by creating your first portfolio
                  </p>
                  <Link to="/builder">
                    <Button variant="primary">Create Portfolio</Button>
                  </Link>
                </Card>
              </div>
            ) : (
              portfolios.map((portfolio) => (
                <Card key={portfolio.id} className="hover-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{portfolio.name}</h3>
                      <Badge variant={portfolio.status === 'published' ? 'primary' : 'secondary'}>
                        {portfolio.status}
                      </Badge>
                    </div>
                    <p className="text-secondary-600 text-sm mb-4">
                      Theme: <span className="font-medium capitalize">{portfolio.theme}</span>
                    </p>
                    <p className="text-secondary-500 text-sm mb-6">
                      Last modified: {new Date(portfolio.lastModified).toLocaleDateString()}
                    </p>
                    <div className="flex gap-2">
                      <Link to={`/preview/${portfolio.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          Preview
                        </Button>
                      </Link>
                      <Link to={`/builder/${portfolio.id}`} className="flex-1">
                        <Button variant="primary" className="w-full">
                          Edit
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
