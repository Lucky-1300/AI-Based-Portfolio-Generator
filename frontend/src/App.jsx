import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Dashboard from './pages/Dashboard';
import Preview from './pages/Preview';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <PortfolioProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/builder" element={<Builder />} />
              <Route path="/builder/:id" element={<Builder />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/preview/:id" element={<Preview />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </PortfolioProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
