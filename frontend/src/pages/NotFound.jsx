import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

function NotFound() {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
      <Container>
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-3xl font-bold mt-4 mb-4">Page Not Found</h2>
          <p className="text-secondary-600 mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="primary" size="large">
              Go Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default NotFound;
