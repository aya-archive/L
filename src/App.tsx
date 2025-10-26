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
              <button className="btn-primary" onClick={() => window.open('https://contra.com/', '_blank')}>Get started</button>
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
              <button className="btn-primary mobile-btn" onClick={() => window.open('https://contra.com/', '_blank')}>Get started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-container">
                   <h1 id="hero-title" className="hero-title">A.U.R.A</h1>
                   <h2 id="hero-subtitle" className="hero-subtitle">Adaptive User Retention Assistant</h2>
                   <p id="hero-description" className="hero-description">
                     Transform customer retention from reactive to proactive with our comprehensive 
                     AI-powered platform. Predict churn patterns, identify at-risk customers, and 
                     implement personalized retention strategies with intelligent analytics and 
                     automated insights.
                   </p>
          <div id="hero-buttons" className="hero-buttons">
            <button id="request-demo-btn" className="btn-primary" onClick={() => window.open('https://contra.com/', '_blank')}>
              <Zap className="btn-icon" />
              Start building
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
                     <h2 id="features-title" className="section-title">Intelligent Customer Retention Platform</h2>
                     <p id="features-description" className="section-description">
                       A.U.R.A is a comprehensive AI-powered platform that empowers businesses to predict, 
                       prevent, and optimize customer retention through intelligent analytics, automated 
                       insights, and actionable recommendations.
                     </p>
                   </div>

          <div id="features-grid" className="features-grid">
                     <div id="feature-1" className="feature-card">
                       <div className="feature-icon-container">
                         <Eye className="feature-icon" />
                       </div>
                       <h3 id="feature-1-title" className="feature-title">Intelligent Dashboard</h3>
                       <p id="feature-1-description" className="feature-description">
                         Real-time customer health monitoring with live dashboards, predictive analytics, 
                         interactive visualizations, and comprehensive KPI tracking for retention, 
                         engagement, and revenue metrics.
                       </p>
                       <div id="feature-1-ai" className="ai-integration">
                         <p className="ai-label">AI Model Integration:</p>
                         <p className="ai-details">Prophet forecasting, rule-based decision engine, and NLP chatbot for intelligent insights</p>
                       </div>
                     </div>

                     <div id="feature-2" className="feature-card">
                       <div className="feature-icon-container">
                         <TrendingUp className="feature-icon" />
                       </div>
                       <h3 id="feature-2-title" className="feature-title">Strategy Playbook</h3>
                       <p id="feature-2-description" className="feature-description">
                         Comprehensive retention strategies with 10+ proven approaches, personalized 
                         AI-driven recommendations, success metrics with ROI analysis, and step-by-step 
                         implementation guidance for each strategy.
                       </p>
                       <div id="feature-2-ai" className="ai-integration">
                         <p className="ai-label">AI Model Integration:</p>
                         <p className="ai-details">Rule-based decision engine with sentiment analysis and customer feedback processing</p>
                       </div>
                     </div>

                     <div id="feature-3" className="feature-card">
                       <div className="feature-icon-container">
                         <Target className="feature-icon" />
                       </div>
                       <h3 id="feature-3-title" className="feature-title">AI Chatbot</h3>
                       <p id="feature-3-description" className="feature-description">
                         Natural language queries with intelligent insights, strategy simulation, 
                         and interactive data exploration. Ask questions about your data in plain 
                         English and get AI-powered analysis and recommendations.
                       </p>
                       <div id="feature-3-ai" className="ai-integration">
                         <p className="ai-label">AI Model Integration:</p>
                         <p className="ai-details">NLP chatbot with intent recognition and natural language processing capabilities</p>
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
                     <h2 id="demo-title" className="section-title">Experience A.U.R.A's Modern Interface</h2>
                     <p id="demo-description" className="section-description">
                       Explore the comprehensive Gradio interface with 6 main tabs: Dashboard, Customer Analysis, 
                       Retention Strategies, Forecasting, Risk Analysis, and AI Assistant for complete 
                       customer retention management.
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
              <h2 id="how-it-works-title" className="section-title">How It Works</h2>
              <p id="how-it-works-description" className="section-description">
                A simple 4-step process to transform your customer retention strategy
              </p>
            </div>

            <div id="timeline-container" className="timeline-container">
              <div id="timeline-line" className="timeline-line"></div>
              
              <div id="timeline-step-1" className="timeline-step">
                <div className="timeline-dot">
                  <div className="step-number">1</div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Collect Data</h3>
                  <p className="timeline-description">Gather customer insights from multiple sources</p>
                </div>
              </div>

              <div id="timeline-step-2" className="timeline-step">
                <div className="timeline-dot">
                  <div className="step-number">2</div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Predict Churn</h3>
                  <p className="timeline-description">AI identifies at-risk customers</p>
                </div>
              </div>

              <div id="timeline-step-3" className="timeline-step">
                <div className="timeline-dot">
                  <div className="step-number">3</div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Generate Strategies</h3>
                  <p className="timeline-description">AI creates personalized retention plans</p>
                </div>
              </div>

              <div id="timeline-step-4" className="timeline-step">
                <div className="timeline-dot">
                  <div className="step-number">4</div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Retain Customers</h3>
                  <p className="timeline-description">Prevent churn with targeted actions</p>
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
                     <h2 id="benefits-title" className="section-title">Comprehensive Customer Retention Platform</h2>
                     <p id="benefits-description" className="section-description">
                       A.U.R.A provides everything you need for intelligent customer retention: 
                       real-time monitoring, predictive analytics, strategy recommendations, 
                       and automated insights in one integrated platform.
                     </p>
                   </div>

          <div id="benefits-metrics" className="benefits-metrics">
          </div>


          <div id="cta-section" className="cta-section">
            <h2 id="cta-title" className="cta-title">Ready to Experience A.U.R.A?</h2>
            <p id="cta-description" className="cta-description">
              Get started with A.U.R.A's comprehensive customer retention platform featuring intelligent dashboards, 
              AI-powered analytics, and automated insights for your business.
            </p>
            <ul id="cta-features" className="cta-features">
              <li id="cta-feature-2" className="cta-feature">✓ AI Chatbot Assistant</li>
              <li id="cta-feature-3" className="cta-feature">✓ Risk Analysis Engine</li>
              <li id="cta-feature-4" className="cta-feature">✓ Strategy Recommendations</li>
            </ul>
            <div id="cta-buttons" className="cta-buttons">
              <button id="start-trial-btn" className="btn-primary" onClick={() => window.open('https://contra.com/', '_blank')}>Start Free Trial</button>
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
                A comprehensive AI-powered platform that empowers businesses to predict, prevent, 
                and optimize customer retention through intelligent analytics, automated insights, 
                and actionable recommendations with Bronze/Silver/Gold data architecture.
              </p>
              <div id="footer-contact" className="footer-contact">
                <p id="footer-phone" className="contact-item">📞 +968 7878 1178</p>
              </div>
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
