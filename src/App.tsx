/**
 * AURA - Adaptive User Retention Assistant
 * Redesigned with evensix.com aesthetic
 */
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { 
  Shield, 
  Brain, 
  Target, 
  Zap, 
  BarChart3, 
  Users, 
  TrendingUp, 
  ArrowRight,
  Eye,
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  ChevronRight
} from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
    <main className="app">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-text">AURA</span>
          </div>
          
          <div className="nav-links desktop-nav">
            <a href="#features" className="nav-link">Features</a>
            <a href="#demo" className="nav-link">Demo</a>
            <a href="#how-it-works" className="nav-link">How it works</a>
          </div>
          
          <div className="nav-actions desktop-nav">
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn-secondary">Sign in</button>
            <button className="btn-primary" onClick={() => window.open('https://huggingface.co/spaces/AURArkiv/A4LABS', '_blank')}>Free Demo</button>
          </div>
          
          <div className="mobile-nav-controls">
            <button className="theme-toggle mobile" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#features" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#demo" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Demo</a>
            <a href="#how-it-works" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>How it works</a>
          </div>
          <div className="mobile-nav-actions">
            <button className="btn-secondary mobile-btn">Sign in</button>
            <button className="btn-primary mobile-btn" onClick={() => window.open('https://huggingface.co/spaces/AURArkiv/A4LABS', '_blank')}>Free Demo</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">AURA</h1>
            <h2 className="hero-subtitle">Adaptive User Retention Assistant</h2>
            <p className="hero-description">
              A unified, AI-powered client retention platform that helps businesses understand, 
              predict, and prevent customer churn. With its adaptive intelligence and bold, 
              modern interface, AURA turns customer data into visual insights that drive smarter 
              decisions and stronger relationships.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => window.open('https://huggingface.co/spaces/AURArkiv/A4LABS', '_blank')}>
                Free Demo
              </button>
              <button className="btn-secondary">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Features</h2>
            <p className="section-description">
              AURA's smart ecosystem combines machine learning and intuitive design to simplify complex analytics.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3 className="feature-title">Churn AI</h3>
              <p className="feature-description">
                Predicts customer risk with remarkable accuracy, using behavior and engagement data 
                to identify at-risk clients before it's too late.
              </p>
              <div className="feature-link">
                <span>Learn more</span>
                <ChevronRight size={16} />
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Brain size={32} />
              </div>
              <h3 className="feature-title">AI Assistant</h3>
              <p className="feature-description">
                Helps you interpret results and suggests data-driven actions to improve retention 
                with intelligent recommendations and insights.
              </p>
              <div className="feature-link">
                <span>Learn more</span>
                <ChevronRight size={16} />
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3 className="feature-title">Smart CSV Upload</h3>
              <p className="feature-description">
                Your data is validated, cleaned, and processed automatically — no manual setup required. 
                Every report, visualization, and trend is updated in real time.
              </p>
              <div className="feature-link">
                <span>Learn more</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Demo Experience</h2>
            <p className="section-description">
              Experience AURA's intelligence firsthand. Upload your dataset, and watch as the system 
              instantly processes and analyzes thousands of customers. In seconds, you'll see churn 
              predictions, engagement scores, and clear risk levels displayed across vibrant, 
              interactive dashboards.
            </p>
          </div>
          
          <div className="demo-content">
            <div className="demo-visual">
              <div className="demo-placeholder">
                <BarChart3 size={64} />
                <p>Interactive Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-description">
              AURA works in five seamless steps. You start by uploading your customer data — then AURA's AI engine 
              automatically cleans and maps your dataset. The platform evaluates engagement patterns and calculates 
              churn probabilities for every customer.
            </p>
          </div>

          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3 className="step-title">Upload Data</h3>
                <p className="step-description">Start by uploading your customer data — AURA's AI engine automatically cleans and maps your dataset</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3 className="step-title">Evaluate Patterns</h3>
                <p className="step-description">The platform evaluates engagement patterns and calculates churn probabilities for every customer</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3 className="step-title">Generate Dashboards</h3>
                <p className="step-description">It then generates dynamic dashboards that visualize performance, risk, and retention health</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3 className="step-title">AI Interpretation</h3>
                <p className="step-description">AURA's assistant interprets your data, summarizing patterns and offering intelligent recommendations</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3 className="step-title">Act with Confidence</h3>
                <p className="step-description">Finally, AURA helps you act with confidence by providing actionable insights and intelligent recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience AURA?</h2>
            <p className="cta-description">
              Whether you're analyzing churn or exploring growth potential, AURA transforms insight into action — beautifully.
            </p>
            <div className="cta-actions">
              <button className="btn-primary" onClick={() => window.open('https://huggingface.co/spaces/AURArkiv/A4LABS', '_blank')}>Free Demo</button>
              <button className="btn-secondary">Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-title">AURA</h3>
              <p className="footer-description">
                A unified, AI-powered client retention platform that helps businesses understand, 
                predict, and prevent customer churn.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-section-title">Product</h4>
                <ul className="footer-list">
                  <li><a href="#features" className="footer-link">Features</a></li>
                  <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
                  <li><a href="#demo" className="footer-link">Demo</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-section-title">Company</h4>
                <ul className="footer-list">
                  <li><a href="#" className="footer-link">About A4Labs</a></li>
                  <li><span className="footer-link">📞 +968 7878 1178</span></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-section-title">Support</h4>
                <ul className="footer-list">
                  <li><a href="#" className="footer-link">Documentation</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 AURA Platform. All rights reserved. AURA is a trademark of the A4LABS Team.</p>
          </div>
        </div>
      </footer>
    </main>
    <Analytics />
    </>
  );
}

export default App;