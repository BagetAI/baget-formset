import React from 'react';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#F8F9FA',
      color: '#1A1A1A',
      fontFamily: 'Inter, sans-serif',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <header style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0D0D0D' }}>FORMSET</h1>
        <p style={{ color: '#FF5C00', fontWeight: 600, letterSpacing: '1px' }}>MARKETPLACE INFRASTRUCTURE LIVE</p>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ marginBottom: '40px', borderLeft: '4px solid #FF5C00', paddingLeft: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Provisioned Databases</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}>- <strong>Designers:</strong> 5ab1283c-9cba-412b-9d4e-ede236de6763</li>
            <li style={{ marginBottom: '8px' }}>- <strong>Startup Briefs:</strong> f2222eaa-1d4f-4a7d-9fe1-9d6557535f79</li>
            <li style={{ marginBottom: '8px' }}>- <strong>Engagements:</strong> 49a629e3-1a15-4156-8831-bbb88b7f1f13</li>
          </ul>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h2 style={{ marginBottom: '20px' }}>Core API Route</h2>
          <p style={{ marginBottom: '20px', color: '#8E9196' }}>The following endpoint is now active for programmatic brief submission:</p>
          <code style={{ 
            display: 'block', 
            backgroundColor: '#1A1A1A', 
            color: '#FF5C00', 
            padding: '15px', 
            borderRadius: '4px',
            fontFamily: 'IBM Plex Mono, monospace'
          }}>
            POST /api/briefs
          </code>
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '10px' }}>Payload Example:</h3>
            <pre style={{ 
              backgroundColor: '#F1F3F5', 
              padding: '15px', 
              borderRadius: '4px',
              fontSize: '0.9rem'
            }}>
{`{
  "company": "Orbit Robotics",
  "project_type": "CMF Spec Package",
  "budget": 4500,
  "email": "ops@orbit.com"
}`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
