/**
 * A.U.R.A Showcase Landing Page - Pure React
 * 
 * This is the main landing page for A.U.R.A (Adaptive User Retention Assistant)
 * built by A4Labs. Pure React component with semantic HTML structure.
 */
import React from 'react';

function App() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-container">
          <h1 id="hero-title" className="hero-title">A.U.R.A</h1>
          <h2 id="hero-subtitle" className="hero-subtitle">Adaptive User Retention Assistant</h2>
          <p id="hero-description" className="hero-description">
            Transform your user retention strategy with AI-powered insights, 
            predictive analytics, and automated engagement campaigns that 
            reduce churn and boost revenue.
          </p>
          <div id="hero-buttons" className="hero-buttons">
            <button id="request-demo-btn" className="btn-primary">Request Demo</button>
            <button id="learn-more-btn" className="btn-secondary">Learn More</button>
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
            <h2 id="features-title" className="section-title">Powered by Advanced AI</h2>
            <p id="features-description" className="section-description">
              A.U.R.A leverages cutting-edge machine learning to transform how you 
              understand, predict, and optimize user retention.
            </p>
          </div>

          <div id="features-grid" className="features-grid">
            <div id="feature-1" className="feature-card">
              <h3 id="feature-1-title" className="feature-title">User Behavior Analysis</h3>
              <p id="feature-1-description" className="feature-description">
                Deep learning algorithms analyze user patterns, engagement metrics, 
                and behavioral signals to identify retention opportunities and churn risks.
              </p>
              <div id="feature-1-ai" className="ai-integration">
                <p className="ai-label">AI Model Integration:</p>
                <p className="ai-details">Neural networks process 1000+ behavioral signals in real-time</p>
              </div>
            </div>

            <div id="feature-2" className="feature-card">
              <h3 id="feature-2-title" className="feature-title">Predictive Analytics</h3>
              <p id="feature-2-description" className="feature-description">
                Advanced machine learning models predict user churn probability with 
                98.7% accuracy, enabling proactive retention strategies.
              </p>
              <div id="feature-2-ai" className="ai-integration">
                <p className="ai-label">AI Model Integration:</p>
                <p className="ai-details">Ensemble methods combine multiple ML algorithms for maximum accuracy</p>
              </div>
            </div>

            <div id="feature-3" className="feature-card">
              <h3 id="feature-3-title" className="feature-title">Smart Personalization</h3>
              <p id="feature-3-description" className="feature-description">
                AI-driven personalization engine delivers tailored experiences, 
                content, and engagement strategies for each individual user.
              </p>
              <div id="feature-3-ai" className="ai-integration">
                <p className="ai-label">AI Model Integration:</p>
                <p className="ai-details">Recommendation systems powered by collaborative filtering and content-based algorithms</p>
              </div>
            </div>

            <div id="feature-4" className="feature-card">
              <h3 id="feature-4-title" className="feature-title">Automated Interventions</h3>
              <p id="feature-4-description" className="feature-description">
                Intelligent automation triggers personalized retention campaigns, 
                re-engagement sequences, and win-back strategies at optimal moments.
              </p>
              <div id="feature-4-ai" className="ai-integration">
                <p className="ai-label">AI Model Integration:</p>
                <p className="ai-details">Reinforcement learning optimizes intervention timing and messaging</p>
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
            <h2 id="demo-title" className="section-title">See A.U.R.A in Action</h2>
            <p id="demo-description" className="section-description">
              Experience how our AI model processes data in real-time to deliver 
              actionable insights and automated interventions.
            </p>
          </div>

          <div id="demo-tabs" className="demo-tabs">
            <button id="ecommerce-tab" className="demo-tab active">E-commerce Platform</button>
            <button id="saas-tab" className="demo-tab">SaaS Application</button>
            <button id="fintech-tab" className="demo-tab">Fintech Platform</button>
          </div>

          <div id="demo-dashboard" className="demo-dashboard">
            <div id="dashboard-header" className="dashboard-header">
              <h3 id="dashboard-title" className="dashboard-title">E-commerce Platform Dashboard</h3>
              <p id="dashboard-subtitle" className="dashboard-subtitle">Online retail & marketplace • A.U.R.A AI Analytics</p>
              <span id="live-indicator" className="live-indicator">Live AI Model</span>
            </div>

            <div id="dashboard-metrics" className="dashboard-metrics">
              <div id="retention-card" className="metric-card">
                <h4 className="metric-label">Retention Rate</h4>
                <h3 className="metric-value">94.2%</h3>
                <p className="metric-change">+12.5% this month</p>
              </div>
              <div id="at-risk-card" className="metric-card">
                <h4 className="metric-label">At-Risk Users</h4>
                <h3 className="metric-value">23</h3>
                <p className="metric-change">-8 from yesterday</p>
              </div>
              <div id="accuracy-card" className="metric-card">
                <h4 className="metric-label">AI Accuracy</h4>
                <h3 className="metric-value">98.7%</h3>
                <p className="metric-change">Prediction accuracy</p>
              </div>
              <div id="engagement-card" className="metric-card">
                <h4 className="metric-label">Engagement</h4>
                <h3 className="metric-value">87.3%</h3>
                <p className="metric-change">User activity</p>
              </div>
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
            <h2 id="how-it-works-title" className="section-title">How A.U.R.A's AI Engine Works</h2>
            <p id="how-it-works-description" className="section-description">
              Our sophisticated AI pipeline processes user data through multiple stages, 
              from data collection to actionable insights, delivering intelligent 
              retention strategies at scale.
            </p>
          </div>

          <div id="process-flow" className="process-flow">
            <div id="step-1" className="process-step">
              <h3 id="step-1-title" className="step-title">1. Data Collection</h3>
              <p id="step-1-description" className="step-description">
                Comprehensive data ingestion from multiple sources including user 
                interactions, behavioral patterns, and engagement metrics.
              </p>
            </div>

            <div id="step-2" className="process-step">
              <h3 id="step-2-title" className="step-title">2. AI Processing</h3>
              <p id="step-2-description" className="step-description">
                Advanced machine learning algorithms analyze patterns, identify 
                trends, and generate predictive models for user behavior.
              </p>
            </div>

            <div id="step-3" className="process-step">
              <h3 id="step-3-title" className="step-title">3. Insight Generation</h3>
              <p id="step-3-description" className="step-description">
                AI generates actionable insights, churn predictions, and personalized 
                recommendations for each user segment.
              </p>
            </div>

            <div id="step-4" className="process-step">
              <h3 id="step-4-title" className="step-title">4. Automated Action</h3>
              <p id="step-4-description" className="step-description">
                Intelligent automation executes personalized retention campaigns, 
                re-engagement sequences, and win-back strategies.
              </p>
            </div>
          </div>

          <div id="technical-excellence" className="technical-excellence">
            <h3 id="tech-title" className="tech-title">Technical Excellence</h3>
            <div id="tech-highlights" className="tech-highlights">
              <div id="tech-1" className="tech-card">
                <h4 id="tech-1-title" className="tech-title">Real-time Processing</h4>
                <p id="tech-1-description" className="tech-description">Sub-second response times for instant insights and interventions</p>
              </div>
              <div id="tech-2" className="tech-card">
                <h4 id="tech-2-title" className="tech-title">Scalable Architecture</h4>
                <p id="tech-2-description" className="tech-description">Handles millions of users with enterprise-grade reliability</p>
              </div>
              <div id="tech-3" className="tech-card">
                <h4 id="tech-3-title" className="tech-title">Privacy-First</h4>
                <p id="tech-3-description" className="tech-description">GDPR compliant with end-to-end encryption and data protection</p>
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
            <h2 id="benefits-title" className="section-title">Transform Your Retention Strategy</h2>
            <p id="benefits-description" className="section-description">
              Join industry leaders who have revolutionized their user retention 
              and drive sustainable growth.
            </p>
          </div>

          <div id="benefits-metrics" className="benefits-metrics">
            <div id="benefit-1" className="benefit-card">
              <h3 id="benefit-1-value" className="benefit-value">40%</h3>
              <p id="benefit-1-label" className="benefit-label">Average Retention Increase</p>
            </div>
            <div id="benefit-2" className="benefit-card">
              <h3 id="benefit-2-value" className="benefit-value">60%</h3>
              <p id="benefit-2-label" className="benefit-label">Reduction in Churn Rate</p>
            </div>
            <div id="benefit-3" className="benefit-card">
              <h3 id="benefit-3-value" className="benefit-value">35%</h3>
              <p id="benefit-3-label" className="benefit-label">Boost in User Engagement</p>
            </div>
            <div id="benefit-4" className="benefit-card">
              <h3 id="benefit-4-value" className="benefit-value">50%</h3>
              <p id="benefit-4-label" className="benefit-label">ROI Improvement</p>
            </div>
          </div>

          <div id="success-stories" className="success-stories">
            <h3 id="stories-title" className="stories-title">Success Stories</h3>
            <div id="stories-grid" className="stories-grid">
              <div id="story-1" className="story-card">
                <h4 id="story-1-company" className="story-company">TechCorp</h4>
                <p id="story-1-quote" className="story-quote">"A.U.R.A helped us reduce churn by 45% and increase retention by 60% in just 3 months."</p>
                <p id="story-1-author" className="story-author">- Sarah Johnson, VP of Product</p>
              </div>
              <div id="story-2" className="story-card">
                <h4 id="story-2-company" className="story-company">StartupXYZ</h4>
                <p id="story-2-quote" className="story-quote">"The AI insights are incredible. We now predict churn with 98% accuracy and prevent it proactively."</p>
                <p id="story-2-author" className="story-author">- Mike Chen, CEO</p>
              </div>
              <div id="story-3" className="story-card">
                <h4 id="story-3-company" className="story-company">Enterprise Inc</h4>
                <p id="story-3-quote" className="story-quote">"A.U.R.A transformed our retention strategy. ROI increased by 50% and user satisfaction by 40%."</p>
                <p id="story-3-author" className="story-author">- Lisa Rodriguez, CMO</p>
              </div>
            </div>
          </div>

          <div id="cta-section" className="cta-section">
            <h2 id="cta-title" className="cta-title">Ready to Transform Your Retention?</h2>
            <p id="cta-description" className="cta-description">
              Join the companies already using A.U.R.A to predict, prevent, and reverse user churn with AI-powered insights.
            </p>
            <ul id="cta-features" className="cta-features">
              <li id="cta-feature-1" className="cta-feature">✓ Real-time AI insights</li>
              <li id="cta-feature-2" className="cta-feature">✓ Automated interventions</li>
              <li id="cta-feature-3" className="cta-feature">✓ Predictive analytics</li>
              <li id="cta-feature-4" className="cta-feature">✓ Personalization engine</li>
              <li id="cta-feature-5" className="cta-feature">✓ Enterprise security</li>
              <li id="cta-feature-6" className="cta-feature">✓ 24/7 support</li>
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
              <h3 id="footer-company-name" className="footer-title">A4Labs</h3>
              <p id="footer-company-tagline" className="footer-tagline">AI-Powered Solutions</p>
              <p id="footer-company-description" className="footer-description">
                A.U.R.A (Adaptive User Retention Assistant) is our flagship AI platform 
                that transforms how companies understand, predict, and optimize user retention 
                through intelligent automation and personalized engagement.
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
            <p id="footer-copyright" className="footer-copyright">© 2024 A4Labs. All rights reserved. A.U.R.A is a trademark of A4Labs.</p>
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
  );
}

export default App;
