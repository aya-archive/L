/**
 * A.U.R.A Showcase Landing Page - Pure React
 * 
 * This is the main landing page for A.U.R.A (Adaptive User Retention Assistant)
 * built by A4Labs. Pure React component with semantic HTML structure.
 */
import { useState } from 'react';
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
  X
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const demoData = {
    dashboard: {
      title: "A.U.R.A Dashboard",
      subtitle: "Real-time Customer Health Monitoring • AI-Powered Analytics",
      metrics: [
        { label: "Total Customers", value: "2,847", change: "Live data processing" },
        { label: "High-Risk Count", value: "156", change: "AI-identified at-risk customers" },
        { label: "Average Health Score", value: "78.4", change: "Customer retention score" },
        { label: "Churn Prediction", value: "94.2%", change: "AI accuracy rate" }
      ]
    },
    customer: {
      title: "Customer Analysis", 
      subtitle: "Individual Customer Insights • Comprehensive Profile Analysis",
      metrics: [
        { label: "Customer ID", value: "CUST-001", change: "Individual analysis" },
        { label: "Health Score", value: "85.2", change: "Retention probability" },
        { label: "Risk Level", value: "Medium", change: "AI classification" },
        { label: "Last Activity", value: "3 days", change: "Engagement tracking" }
      ]
    },
    strategies: {
      title: "Retention Strategies",
      subtitle: "AI-Driven Strategy Recommendations • Implementation Guidance", 
      metrics: [
        { label: "Active Strategies", value: "12", change: "Currently implemented" },
        { label: "Success Rate", value: "87.3%", change: "Strategy effectiveness" },
        { label: "ROI Improvement", value: "34%", change: "Revenue increase" },
        { label: "New Recommendations", value: "5", change: "AI-generated strategies" }
      ]
    },
    forecasting: {
      title: "Time Series Forecasting",
      subtitle: "Prophet Model Predictions • Revenue & Engagement Trends",
      metrics: [
        { label: "Revenue Forecast", value: "$45.2K", change: "Next 30 days" },
        { label: "Engagement Trend", value: "+12.5%", change: "Predicted growth" },
        { label: "Customer Growth", value: "156", change: "Expected new customers" },
        { label: "Confidence Interval", value: "95%", change: "Prediction accuracy" }
      ]
    },
    risk: {
      title: "Risk Analysis",
      subtitle: "Churn Risk Assessment • Priority Classification",
      metrics: [
        { label: "High Risk", value: "23", change: "Immediate attention needed" },
        { label: "Medium Risk", value: "89", change: "Monitor closely" },
        { label: "Low Risk", value: "1,234", change: "Stable customers" },
        { label: "AI Accuracy", value: "96.8%", change: "Risk prediction accuracy" }
      ]
    },
    assistant: {
      title: "AI Assistant",
      subtitle: "Natural Language Queries • Intelligent Data Exploration",
      metrics: [
        { label: "Queries Processed", value: "1,247", change: "Today's interactions" },
        { label: "Response Time", value: "0.8s", change: "Average response" },
        { label: "Accuracy Rate", value: "94.7%", change: "Query understanding" },
        { label: "Active Sessions", value: "23", change: "Current users" }
      ]
    }
  };

  const currentData = demoData[activeTab as keyof typeof demoData];

  return (
    <>
    <main id="main-content">
      {/* Linear-style Navigation */}
      <nav id="navigation" className="navigation">
        <div className="container">
          <div className="nav-container">
            <div className="nav-brand">
              <Brain className="brand-icon" />
              <span className="brand-text">A.U.R.A</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              <a href="#features" className="nav-link">
                <Target className="nav-icon" />
                Features
              </a>
              <a href="#demo" className="nav-link">
                <BarChart3 className="nav-icon" />
                Demo
              </a>
              <a href="#how-it-works" className="nav-link">
                <Settings className="nav-icon" />
                How it works
              </a>
            </div>
            
            {/* Desktop Actions */}
            <div className="nav-actions desktop-nav">
              <button className="btn-secondary">Sign in</button>
              <button className="btn-primary" onClick={() => window.open('https://huggingface.co/spaces/AURArkiv/A4LABS', '_blank')}>Free Demo</button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-nav-links">
              <a href="#features" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <Target className="nav-icon" />
                Features
              </a>
              <a href="#demo" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <BarChart3 className="nav-icon" />
                Demo
              </a>
              <a href="#how-it-works" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <Settings className="nav-icon" />
                How it works
              </a>
            </div>
            <div className="mobile-nav-actions">
              <button className="btn-secondary mobile-btn">Sign in</button>
              <button className="btn-primary mobile-btn" onClick={() => window.open('https://huggingface.co/spaces/AURArkiv/A4LABS', '_blank')}>Free Demo</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-container">
                   <h1 id="hero-title" className="hero-title">AURA</h1>
                   <h2 id="hero-subtitle" className="hero-subtitle">Adaptive User Retention Assistant</h2>
                   <p id="hero-description" className="hero-description">
                     A unified, AI-powered client retention platform that helps businesses understand, 
                     predict, and prevent customer churn. With its adaptive intelligence and bold, 
                     modern interface, AURA turns customer data into visual insights that drive smarter 
                     decisions and stronger relationships. It's not just analytics — it's your 
                     intelligent retention partner that makes data feel alive.
                   </p>
          <div id="hero-buttons" className="hero-buttons">
            <button id="request-demo-btn" className="btn-primary" onClick={() => window.open('https://huggingface.co/spaces/AURArkiv/A4LABS', '_blank')}>
              <Zap className="btn-icon" />
              Free Demo
            </button>
            <button id="learn-more-btn" className="btn-secondary">
              <ArrowRight className="btn-icon" />
              Learn more
            </button>
          </div>
          
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="features-container">
                   <div id="features-header" className="section-header">
                     <h2 id="features-title" className="section-title">🧠 Core Features</h2>
                     <p id="features-description" className="section-description">
                       AURA's smart ecosystem combines machine learning and intuitive design to simplify complex analytics.
                     </p>
                   </div>

          <div id="features-grid" className="features-grid">
                     <div id="feature-1" className="feature-card">
                       <div className="feature-icon-container">
                         <Shield className="feature-icon" />
                       </div>
                       <h3 id="feature-1-title" className="feature-title">Churn AI</h3>
                       <p id="feature-1-description" className="feature-description">
                         Predicts customer risk with remarkable accuracy, using behavior and engagement data 
                         to identify at-risk clients before it's too late.
                       </p>
                       <div id="feature-1-ai" className="ai-integration">
                         <p className="ai-label">AI Model Integration:</p>
                         <p className="ai-details">Advanced machine learning algorithms with real-time risk assessment</p>
                       </div>
                     </div>

                     <div id="feature-2" className="feature-card">
                       <div className="feature-icon-container">
                         <Brain className="feature-icon" />
                       </div>
                       <h3 id="feature-2-title" className="feature-title">AI Assistant</h3>
                       <p id="feature-2-description" className="feature-description">
                         Helps you interpret results and suggests data-driven actions to improve retention 
                         with intelligent recommendations and insights.
                       </p>
                       <div id="feature-2-ai" className="ai-integration">
                         <p className="ai-label">AI Model Integration:</p>
                         <p className="ai-details">Natural language processing with intelligent action recommendations</p>
                       </div>
                     </div>

                     <div id="feature-3" className="feature-card">
                       <div className="feature-icon-container">
                         <Zap className="feature-icon" />
                       </div>
                       <h3 id="feature-3-title" className="feature-title">Smart CSV Upload</h3>
                       <p id="feature-3-description" className="feature-description">
                         Your data is validated, cleaned, and processed automatically — no manual setup required. 
                         Every report, visualization, and trend is updated in real time.
                       </p>
                       <div id="feature-3-ai" className="ai-integration">
                         <p className="ai-label">AI Model Integration:</p>
                         <p className="ai-details">Automated data processing with intelligent validation and cleaning</p>
                       </div>
                     </div>

          </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="demo-section">
        <div className="container">
          <div className="demo-container">
                   <div id="demo-header" className="section-header">
                     <h2 id="demo-title" className="section-title">💡 Demo Experience</h2>
                     <p id="demo-description" className="section-description">
                       Experience AURA's intelligence firsthand. Upload your dataset, and watch as the system 
                       instantly processes and analyzes thousands of customers. In seconds, you'll see churn 
                       predictions, engagement scores, and clear risk levels displayed across vibrant, 
                       interactive dashboards.
                     </p>
                   </div>

                   <div id="demo-tabs" className="demo-tabs">
                     <button 
                       id="dashboard-tab" 
                       className={`demo-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
                       onClick={() => setActiveTab('dashboard')}
                     >
                       <BarChart3 className="tab-icon" />
                       Dashboard
                     </button>
                     <button 
                       id="customer-tab" 
                       className={`demo-tab ${activeTab === 'customer' ? 'active' : ''}`}
                       onClick={() => setActiveTab('customer')}
                     >
                       <Users className="tab-icon" />
                       Customer Analysis
                     </button>
                     <button 
                       id="strategies-tab" 
                       className={`demo-tab ${activeTab === 'strategies' ? 'active' : ''}`}
                       onClick={() => setActiveTab('strategies')}
                     >
                       <Target className="tab-icon" />
                       Retention Strategies
                     </button>
                     <button 
                       id="forecasting-tab" 
                       className={`demo-tab ${activeTab === 'forecasting' ? 'active' : ''}`}
                       onClick={() => setActiveTab('forecasting')}
                     >
                       <TrendingUp className="tab-icon" />
                       Forecasting
                     </button>
                     <button 
                       id="risk-tab" 
                       className={`demo-tab ${activeTab === 'risk' ? 'active' : ''}`}
                       onClick={() => setActiveTab('risk')}
                     >
                       <Shield className="tab-icon" />
                       Risk Analysis
                     </button>
                     <button 
                       id="assistant-tab" 
                       className={`demo-tab ${activeTab === 'assistant' ? 'active' : ''}`}
                       onClick={() => setActiveTab('assistant')}
                     >
                       <Brain className="tab-icon" />
                       AI Assistant
                     </button>
                   </div>

          <div id="demo-dashboard" className="demo-dashboard">
            <div id="dashboard-header" className="dashboard-header">
              <h3 id="dashboard-title" className="dashboard-title">{currentData.title}</h3>
              <p id="dashboard-subtitle" className="dashboard-subtitle">{currentData.subtitle}</p>
              <span id="live-indicator" className="live-indicator">Live AI Model</span>
            </div>

            <div id="dashboard-metrics" className="dashboard-metrics">
                     {currentData.metrics.map((metric: any, index: number) => (
                <div key={index} className="metric-card">
                  <h4 className="metric-label">{metric.label}</h4>
                  <h3 className="metric-value">{metric.value}</h3>
                  <p className="metric-change">{metric.change}</p>
                </div>
              ))}
            </div>

            <div id="ai-insights" className="ai-insights">
              <h4 id="insights-title" className="insights-title">AI Insights</h4>
              <ul id="insights-list" className="insights-list">
                <li id="insight-1" className="insight-item success">✓ Cart abandonment reduced by 23%</li>
                <li id="insight-2" className="insight-item warning">⚠ 12 users showing purchase hesitation</li>
                <li id="insight-3" className="insight-item info">ℹ AI identified 3 new user segments</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <div className="how-it-works-container">
          <div id="how-it-works-header" className="section-header">
              <div className="section-badge">
                <span className="badge-text">⚙️ How It Works</span>
              </div>
              <h2 id="how-it-works-title" className="section-title">Five Seamless Steps</h2>
            <p id="how-it-works-description" className="section-description">
                AURA works in five seamless steps. You start by uploading your customer data — then AURA's AI engine 
                automatically cleans and maps your dataset. The platform evaluates engagement patterns and calculates 
                churn probabilities for every customer.
              </p>
            </div>

            <div id="steps-grid" className="steps-grid">
              <div id="step-1" className="step-card">
                <div className="step-header">
                  <div className="step-icon">📤</div>
                  <div className="step-number">1</div>
            </div>
                <div className="step-content">
                  <h3 className="step-title">Upload Data</h3>
                  <p className="step-description">Start by uploading your customer data — AURA's AI engine automatically cleans and maps your dataset</p>
                  <div className="step-features">
                    <span className="feature-tag">Smart Upload</span>
                    <span className="feature-tag">Auto Clean</span>
                    <span className="feature-tag">Data Mapping</span>
            </div>
            </div>
          </div>

              <div id="step-2" className="step-card">
                <div className="step-header">
                  <div className="step-icon">🔮</div>
                  <div className="step-number">2</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Evaluate Patterns</h3>
                  <p className="step-description">The platform evaluates engagement patterns and calculates churn probabilities for every customer</p>
                  <div className="step-features">
                    <span className="feature-tag">Pattern Analysis</span>
                    <span className="feature-tag">Churn Probability</span>
                    <span className="feature-tag">Engagement Metrics</span>
                  </div>
                </div>
              </div>

              <div id="step-3" className="step-card">
                <div className="step-header">
                  <div className="step-icon">📊</div>
                  <div className="step-number">3</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Generate Dashboards</h3>
                  <p className="step-description">It then generates dynamic dashboards that visualize performance, risk, and retention health</p>
                  <div className="step-features">
                    <span className="feature-tag">Dynamic Visuals</span>
                    <span className="feature-tag">Performance Metrics</span>
                    <span className="feature-tag">Risk Visualization</span>
                  </div>
                </div>
              </div>

              <div id="step-4" className="step-card">
                <div className="step-header">
                  <div className="step-icon">🧠</div>
                  <div className="step-number">4</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">AI Interpretation</h3>
                  <p className="step-description">AURA's assistant interprets your data, summarizing patterns and offering intelligent recommendations</p>
                  <div className="step-features">
                    <span className="feature-tag">Data Interpretation</span>
                    <span className="feature-tag">Pattern Summary</span>
                    <span className="feature-tag">Smart Recommendations</span>
                  </div>
                </div>
              </div>

              <div id="step-5" className="step-card">
                <div className="step-header">
                  <div className="step-icon">🎯</div>
                  <div className="step-number">5</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Act with Confidence</h3>
                  <p className="step-description">Finally, AURA helps you act with confidence by providing actionable insights and intelligent recommendations</p>
                  <div className="step-features">
                    <span className="feature-tag">Actionable Insights</span>
                    <span className="feature-tag">Confident Decisions</span>
                    <span className="feature-tag">Intelligent Actions</span>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits-section">
        <div className="container">
          <div className="benefits-container">
                   <div id="benefits-header" className="section-header">
                     <h2 id="benefits-title" className="section-title">✨ Why Choose AURA</h2>
                     <p id="benefits-description" className="section-description">
                       AURA merges automation, analytics, and art into a single experience. It's designed for businesses 
                       that want to act before customers leave — not after. With an adaptive AI core, vibrant visuals, 
                       and real-time intelligence, AURA makes customer retention a creative, data-driven journey.
                     </p>
                   </div>

          <div id="benefits-metrics" className="benefits-metrics">
          </div>


          <div id="cta-section" className="cta-section">
            <h2 id="cta-title" className="cta-title">Ready to Experience AURA?</h2>
            <p id="cta-description" className="cta-description">
              Whether you're analyzing churn or exploring growth potential, AURA transforms insight into action — beautifully.
            </p>
            <ul id="cta-features" className="cta-features">
              <li id="cta-feature-2" className="cta-feature">✓ AI Chatbot Assistant</li>
              <li id="cta-feature-3" className="cta-feature">✓ Risk Analysis Engine</li>
            </ul>
            <div id="cta-buttons" className="cta-buttons">
              <button id="start-trial-btn" className="btn-primary" onClick={() => window.open('https://huggingface.co/spaces/AURArkiv/A4LABS', '_blank')}>Free Demo</button>
              <button id="schedule-demo-btn" className="btn-secondary">Schedule Demo</button>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-container">
          <div id="footer-main" className="footer-main">
            <div id="footer-company" className="footer-section">
              <h3 id="footer-company-name" className="footer-title">A.U.R.A</h3>
              <p id="footer-company-tagline" className="footer-tagline">Adaptive User Retention Assistant</p>
              <p id="footer-company-description" className="footer-description">
                A unified, AI-powered client retention platform that helps businesses understand, 
                predict, and prevent customer churn. With its adaptive intelligence and bold, 
                modern interface, AURA turns customer data into visual insights that drive smarter 
                decisions and stronger relationships.
              </p>
            </div>

            <div id="footer-product" className="footer-section">
              <h4 id="footer-product-title" className="footer-section-title">Product</h4>
              <ul id="footer-product-links" className="footer-links">
                <li id="footer-features-link" className="footer-link">Features</li>
                <li id="footer-how-it-works-link" className="footer-link">How It Works</li>
                <li id="footer-demo-link" className="footer-link">Demo</li>
              </ul>
            </div>

            <div id="footer-company-links" className="footer-section">
              <h4 id="footer-company-title" className="footer-section-title">Company</h4>
              <ul id="footer-company-links-list" className="footer-links">
                <li id="footer-about-link" className="footer-link">About A4Labs</li>
                <li id="footer-phone-link" className="footer-link">📞 +968 7878 1178</li>
              </ul>
            </div>

            <div id="footer-support" className="footer-section">
              <h4 id="footer-support-title" className="footer-section-title">Support</h4>
              <ul id="footer-support-links" className="footer-links">
                <li id="footer-docs-link" className="footer-link">Documentation</li>
              </ul>
            </div>
          </div>


          <div id="footer-bottom" className="footer-bottom">
                     <p id="footer-copyright" className="footer-copyright">© 2025 A.U.R.A Platform. All rights reserved. A.U.R.A is a trademark of the A4LABS Team.</p>
          </div>
        </div>
      </footer>
    </main>
    <Analytics />
    </>
  );
}

export default App;
