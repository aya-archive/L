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
  Settings
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

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
            <div className="nav-links">
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
              <a href="#benefits" className="nav-link">
                <TrendingUp className="nav-icon" />
                Benefits
              </a>
            </div>
            <div className="nav-actions">
              <button className="btn-secondary">Sign in</button>
              <button className="btn-primary">Get started</button>
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
            <button id="request-demo-btn" className="btn-primary">
              <Zap className="btn-icon" />
              Start building
            </button>
            <button id="learn-more-btn" className="btn-secondary">
              <ArrowRight className="btn-icon" />
              Learn more
            </button>
          </div>
          
          <div id="hero-metrics" className="hero-metrics">
            <div id="retention-metric" className="metric-card">
              <h3 className="metric-value">94.2%</h3>
              <p className="metric-label">Retention Rate</p>
            </div>
            <div id="at-risk-metric" className="metric-card">
              <h3 className="metric-value">23</h3>
              <p className="metric-label">At-Risk Users</p>
            </div>
            <div id="accuracy-metric" className="metric-card">
              <h3 className="metric-value">98.7%</h3>
              <p className="metric-label">AI Accuracy</p>
            </div>
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

                     <div id="feature-4" className="feature-card">
                       <div className="feature-icon-container">
                         <Zap className="feature-icon" />
                       </div>
                       <h3 id="feature-4-title" className="feature-title">Data Pipeline</h3>
                       <p id="feature-4-description" className="feature-description">
                         Bronze/Silver/Gold data architecture with automated processing, data cleaning, 
                         transformation, enrichment, and business-ready analytics with comprehensive 
                         monitoring and alerts.
                       </p>
                       <div id="feature-4-ai" className="ai-integration">
                         <p className="ai-label">AI Model Integration:</p>
                         <p className="ai-details">Medallion pattern data architecture with automated processing and monitoring</p>
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
            <h2 id="how-it-works-title" className="section-title">A.U.R.A's Data Architecture & AI Models</h2>
            <p id="how-it-works-description" className="section-description">
              A.U.R.A uses a sophisticated medallion pattern data architecture with Bronze/Silver/Gold layers, 
              powered by Prophet forecasting, rule-based decision engines, and NLP chatbots to deliver 
              comprehensive customer retention insights and automated recommendations.
            </p>
          </div>

          <div id="process-flow" className="process-flow">
            <div id="step-1" className="process-step">
              <h3 id="step-1-title" className="step-title">Bronze Layer</h3>
              <p id="step-1-description" className="step-description">
                Raw data ingestion from multiple sources: customer demographics, transaction history, 
                engagement logs, support interactions, and feedback surveys in their original format.
              </p>
            </div>

            <div id="step-2" className="process-step">
              <h3 id="step-2-title" className="step-title">Silver Layer</h3>
              <p id="step-2-description" className="step-description">
                Data cleaning, transformation, and enrichment. Customer profiles are created, 
                engagement metrics are calculated, and data is standardized for analysis.
              </p>
            </div>

            <div id="step-3" className="process-step">
              <h3 id="step-3-title" className="step-title">Gold Layer</h3>
              <p id="step-3-description" className="step-description">
                Business-ready analytics and insights. Customer 360 dashboard views, 
                KPI dashboards, and AI model features are prepared for churn prediction.
              </p>
            </div>

            <div id="step-4" className="process-step">
              <h3 id="step-4-title" className="step-title">AI Models</h3>
              <p id="step-4-description" className="step-description">
                Prophet forecasting for time series prediction, rule-based decision engine for 
                churn risk classification, and NLP chatbot for natural language queries and insights.
              </p>
            </div>
          </div>

          <div id="technical-excellence" className="technical-excellence">
            <h3 id="tech-title" className="tech-title">Technology Stack</h3>
            <div id="tech-highlights" className="tech-highlights">
              <div id="tech-1" className="tech-card">
                <h4 id="tech-1-title" className="tech-title">Backend & AI/ML</h4>
                <p id="tech-1-description" className="tech-description">Python 3.8+, Pandas, NumPy, Scikit-learn, Prophet, Transformers, Sentence-Transformers</p>
              </div>
              <div id="tech-2" className="tech-card">
                <h4 id="tech-2-title" className="tech-title">Frontend & Visualization</h4>
                <p id="tech-2-description" className="tech-description">Gradio, Streamlit, Plotly, Matplotlib for interactive dashboards and data exploration</p>
              </div>
              <div id="tech-3" className="tech-card">
                <h4 id="tech-3-title" className="tech-title">Data & Deployment</h4>
                <p id="tech-3-description" className="tech-description">Parquet, CSV, JSON data formats with Docker deployment and Gradio Spaces integration</p>
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
            <div id="benefit-1" className="benefit-card">
              <h3 id="benefit-1-value" className="benefit-value">6</h3>
              <p id="benefit-1-label" className="benefit-label">Main Interface Tabs</p>
            </div>
            <div id="benefit-2" className="benefit-card">
              <h3 id="benefit-2-value" className="benefit-value">3</h3>
              <p id="benefit-2-label" className="benefit-label">Data Architecture Layers</p>
            </div>
            <div id="benefit-3" className="benefit-card">
              <h3 id="benefit-3-value" className="benefit-value">4</h3>
              <p id="benefit-3-label" className="benefit-label">AI Models</p>
            </div>
            <div id="benefit-4" className="benefit-card">
              <h3 id="benefit-4-value" className="benefit-value">5</h3>
              <p id="benefit-4-label" className="benefit-label">Data Sources</p>
            </div>
          </div>

          <div id="success-stories" className="success-stories">
            <h3 id="stories-title" className="stories-title">Success Stories</h3>
            <div id="stories-grid" className="stories-grid">
              <div id="story-1" className="story-card">
                <h4 id="story-1-company" className="story-company">Data Science Team</h4>
                <p id="story-1-quote" className="story-quote">"A.U.R.A's comprehensive dashboard and real-time monitoring helped us identify at-risk customers immediately. The Prophet forecasting model gave us incredible insights into future trends."</p>
                <p id="story-1-author" className="story-author">- Enterprise Customer</p>
              </div>
              <div id="story-2" className="story-card">
                <h4 id="story-2-company" className="story-company">Product Manager</h4>
                <p id="story-2-quote" className="story-quote">"The AI Assistant's natural language queries made data exploration so intuitive. We could ask complex questions about our customer data and get instant, intelligent responses."</p>
                <p id="story-2-author" className="story-author">- SaaS Company</p>
              </div>
              <div id="story-3" className="story-card">
                <h4 id="story-3-company" className="story-company">CTO</h4>
                <p id="story-3-quote" className="story-quote">"The Bronze/Silver/Gold data pipeline architecture was exactly what we needed. A.U.R.A transformed our raw data into actionable business insights with automated processing and monitoring."</p>
                <p id="story-3-author" className="story-author">- Fintech Startup</p>
              </div>
            </div>
          </div>

          <div id="cta-section" className="cta-section">
            <h2 id="cta-title" className="cta-title">Ready to Experience A.U.R.A?</h2>
            <p id="cta-description" className="cta-description">
              Get started with A.U.R.A's comprehensive customer retention platform featuring intelligent dashboards, 
              AI-powered analytics, and automated insights for your business.
            </p>
            <ul id="cta-features" className="cta-features">
              <li id="cta-feature-1" className="cta-feature">✓ 6-Tab Gradio Interface</li>
              <li id="cta-feature-2" className="cta-feature">✓ Bronze/Silver/Gold Data Pipeline</li>
              <li id="cta-feature-3" className="cta-feature">✓ Prophet Forecasting</li>
              <li id="cta-feature-4" className="cta-feature">✓ AI Chatbot Assistant</li>
              <li id="cta-feature-5" className="cta-feature">✓ Risk Analysis Engine</li>
              <li id="cta-feature-6" className="cta-feature">✓ Strategy Recommendations</li>
            </ul>
            <div id="cta-buttons" className="cta-buttons">
              <button id="start-trial-btn" className="btn-primary">Start Free Trial</button>
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
                <p id="footer-email" className="contact-item">📧 hello@a4labs.ai</p>
                <p id="footer-phone" className="contact-item">📞 +1 (555) 123-4567</p>
                <p id="footer-location" className="contact-item">📍 San Francisco, CA</p>
              </div>
            </div>

            <div id="footer-product" className="footer-section">
              <h4 id="footer-product-title" className="footer-section-title">Product</h4>
              <ul id="footer-product-links" className="footer-links">
                <li id="footer-features-link" className="footer-link">Features</li>
                <li id="footer-how-it-works-link" className="footer-link">How It Works</li>
                <li id="footer-demo-link" className="footer-link">Demo</li>
                <li id="footer-pricing-link" className="footer-link">Pricing</li>
              </ul>
            </div>

            <div id="footer-company-links" className="footer-section">
              <h4 id="footer-company-title" className="footer-section-title">Company</h4>
              <ul id="footer-company-links-list" className="footer-links">
                <li id="footer-about-link" className="footer-link">About A4Labs</li>
                <li id="footer-careers-link" className="footer-link">Careers</li>
                <li id="footer-blog-link" className="footer-link">Blog</li>
                <li id="footer-press-link" className="footer-link">Press</li>
              </ul>
            </div>

            <div id="footer-support" className="footer-section">
              <h4 id="footer-support-title" className="footer-section-title">Support</h4>
              <ul id="footer-support-links" className="footer-links">
                <li id="footer-docs-link" className="footer-link">Documentation</li>
                <li id="footer-help-link" className="footer-link">Help Center</li>
                <li id="footer-contact-support-link" className="footer-link">Contact Support</li>
                <li id="footer-status-link" className="footer-link">Status</li>
              </ul>
            </div>
          </div>

          <div id="footer-newsletter" className="footer-newsletter">
            <h4 id="newsletter-title" className="newsletter-title">Stay Updated with A.U.R.A</h4>
            <p id="newsletter-description" className="newsletter-description">Get the latest insights on AI-powered retention strategies and product updates.</p>
            <div id="newsletter-form" className="newsletter-form">
              <input id="newsletter-email" type="email" placeholder="Enter your email" className="newsletter-input" />
              <button id="newsletter-submit" className="newsletter-button">Subscribe</button>
            </div>
          </div>

          <div id="footer-bottom" className="footer-bottom">
                     <p id="footer-copyright" className="footer-copyright">© 2024 A.U.R.A Platform. All rights reserved. A.U.R.A is a trademark of the A.U.R.A Team.</p>
            <div id="footer-social" className="footer-social">
              <span id="social-linkedin" className="social-link">LinkedIn</span>
              <span id="social-twitter" className="social-link">Twitter</span>
              <span id="social-github" className="social-link">GitHub</span>
            </div>
            <div id="footer-legal" className="footer-legal">
              <span id="legal-privacy" className="legal-link">Privacy Policy</span>
              <span id="legal-terms" className="legal-link">Terms of Service</span>
              <span id="legal-cookies" className="legal-link">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
    <Analytics />
    </>
  );
}

export default App;
