import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [apiMessage, setApiMessage] = useState<string>("Loading from backend...")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // 🌐 Automatically switch API endpoint:
    // If running in development: uses your local secure HTTPS backend
    // If running in production (Vercel): uses the relative /api/hello path
    const apiUrl = 'https://wow-react-eight.vercel.app/api/hello'

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(err => setApiMessage("Failed to fetch: " + err.message))
  }, [])

  return (
    <div className="aura-landing">
      {/* Navbar */}
      <nav className={`glass ${scrolled ? 'nav-scrolled' : ''}`} style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>
            AURA<span className="gradient-text">AI</span>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
          </div>
          <button className="btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="section-padding" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="container" style={{ paddingTop: '4rem' }}>
          <div className="pill" style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            borderRadius: '999px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            color: 'var(--primary)',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '2rem'
          }}>
            ✨ Next Generation AI Platform
          </div>
          <h1 className="gradient-text" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem' }}>
            Elevate Your Business<br />With Aura Intelligence
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.25rem' }}>
            The all-in-one AI platform designed to automate your workflow,
            insightfully analyze data, and scale your operations effortlessly.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ fontSize: '1.125rem' }}>Launch Aura</button>
            <button className="glass" style={{ color: 'white', padding: '0.8rem 2rem', borderRadius: '9999px', fontWeight: 600, cursor: 'pointer' }}>Watch Demo</button>
          </div>
          <div style={{
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '16px',
            display: 'inline-block',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Backend Response</h3>
            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', margin: 0 }}>
              {apiMessage}
            </p>
          </div>
        </div>

        {/* Background Glows */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -1
        }}></div>
      </header>

      {/* Features Section */}
      <section id="features" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Powerful Capabilities</h2>
            <p>Everything you need to build the future of your company.</p>
          </div>

          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Neural Automation', desc: 'Predictive workflows that adapt to your business needs in real-time.', icon: '🧠' },
              { title: 'Data Synthesis', desc: 'Transform raw data into actionable insights with elite AI models.', icon: '📊' },
              { title: 'Security First', desc: 'Enterprise-grade encryption and privacy controls at every layer.', icon: '🛡️' }
            ].map((f, i) => (
              <div key={i} className="glass" style={{ padding: '3rem', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{f.icon}</div>
                <h3 style={{ marginBottom: '1rem' }}>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '4rem', textAlign: 'center' }}>
            {[
              { val: '99.9%', label: 'Uptime' },
              { val: '250M+', label: 'Requests/Day' },
              { val: '15k+', label: 'Enterprises' }
            ].map((s, i) => (
              <div key={i}>
                <div className="gradient-text" style={{ fontSize: '4rem', fontWeight: 800 }}>{s.val}</div>
                <div style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.5rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="glass" style={{
            padding: '5rem',
            borderRadius: '40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))'
          }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Ready to start with Aura?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.25rem' }}>
              Join thousands of teams already scaling with our intelligence platform.
            </p>
            <button className="btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 3rem' }}>Get Started for Free</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div className="logo" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
            AURA<span className="gradient-text">AI</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Careers</a>
          </div>
          <div style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Aura AI. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        .nav-scrolled {
          background: rgba(5, 7, 10, 0.8) !important;
          padding: 0.8rem 0 !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .grid > div:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
        }
      `}</style>
    </div>
  )
}

export default App
