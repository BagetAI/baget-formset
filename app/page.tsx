'use client';

import React, { useState, useEffect } from 'react';

const COLORS = {
  stone: '#F5F1EB',
  forest: '#1B4332',
  amber: '#D4A853',
  charcoal: '#2D3436'
};

export default function LandingPage() {
  const [startupForm, setStartupForm] = useState({ company: '', project_type: 'CMF Package', budget: '', email: '' });
  const [designerForm, setDesignerForm] = useState({ name: '', email: '', portfolio_url: '', specialty: 'DFM / CAD' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleStartupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting brief...' });
    try {
      const res = await fetch('https://stg-app.baget.ai/api/public/databases/f2222eaa-1d4f-4a7d-9fe1-9d6557535f79/rows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: startupForm })
      });
      if (res.ok) {
        setStatus({ type: 'success', message: 'Brief submitted! Our team will review and contact you within 24 hours.' });
        setStartupForm({ company: '', project_type: 'CMF Package', budget: '', email: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  const handleDesignerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending application...' });
    try {
      const res = await fetch('https://stg-app.baget.ai/api/public/databases/10c208ba-1530-431d-9d5a-3f64583691ab/rows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: designerForm })
      });
      if (res.ok) {
        setStatus({ type: 'success', message: 'Application received! Welcome to the Founding 50 waitlist.' });
        setDesignerForm({ name: '', email: '', portfolio_url: '', specialty: 'DFM / CAD' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-amber-200" style={{ backgroundColor: COLORS.stone, color: COLORS.charcoal }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700&family=Open+Sans:wght@400;600&display=swap');
        h1, h2, h3 { font-family: 'Fraunces', serif; }
        body { font-family: 'Open+Sans', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-8 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight" style={{ color: COLORS.forest }}>FORMSET</div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#startups" className="hover:text-forest transition-colors">For Startups</a>
          <a href="#designers" className="hover:text-forest transition-colors">For Designers</a>
          <a href="#process" className="hover:text-forest transition-colors">Process</a>
        </div>
        <a href="#brief-form" className="bg-forest text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity" style={{ backgroundColor: COLORS.forest }}>
          Post a Brief
        </a>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-12 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="uppercase tracking-[0.2em] text-xs font-bold mb-4 block" style={{ color: COLORS.amber }}>Industrial Design Marketplace</span>
          <h1 className="text-5xl md:text-7xl leading-tight mb-6">Bridge the Manufacturing Gap.</h1>
          <p className="text-xl opacity-80 mb-10 max-w-lg leading-relaxed">
            Connecting hardware startups with DFM-literate industrial designers. Get production-ready CMF specs and CAD, not just artistic renders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#brief-form" className="inline-block text-center px-8 py-4 rounded-lg font-bold text-white transition-all shadow-lg hover:shadow-xl" style={{ backgroundColor: COLORS.forest }}>
              Hire a DFM Expert
            </a>
            <a href="#designer-form" className="inline-block text-center px-8 py-4 rounded-lg font-bold border-2 transition-all hover:bg-white/50" style={{ borderColor: COLORS.forest, color: COLORS.forest }}>
              Join the Founding 50
            </a>
          </div>
        </div>
        <div className="relative">
          <img 
            src="images/overhead-shot-of-a-professional-industri.png" 
            alt="Professional Industrial Design Workspace" 
            className="rounded-2xl shadow-2xl w-full object-cover aspect-video md:aspect-square"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block border border-stone-200">
            <div className="text-sm font-bold mb-1" style={{ color: COLORS.amber }}>DFM AUDITED</div>
            <div className="text-xs opacity-60 uppercase tracking-tighter">Production-ready files only.</div>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="py-12 border-y border-stone-200 bg-white/30 text-center">
        <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-6">Featured Specialties</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 font-serif italic text-lg md:text-2xl px-6">
          <span>Injection Molding</span>
          <span>CMF Specifications</span>
          <span>PCB Integration</span>
          <span>Sustainability Audits</span>
          <span>Consumer Electronics</span>
        </div>
      </section>

      {/* Startups Section */}
      <section id="startups" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Eliminate $20,000 Tooling Errors.</h2>
          <p className="max-w-2xl mx-auto opacity-70">Hardware is hard. We make the design-to-factory handover seamless with standardized deliverables.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'CMF Package', price: '$4,500', desc: 'Color, Material, Finish specs with exact Pantone and Mold-Tech callouts.' },
            { title: 'Production CAD', price: '$7,500', desc: 'Manufacturing-ready SolidWorks/Fusion 360 files optimized for tooling.' },
            { title: 'Packaging DFM', price: '$3,000', desc: 'Dielines and sustainable material specs for high-volume production.' }
          ].map((block, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: COLORS.amber }}>Product Block</div>
              <h3 className="text-2xl mb-2">{block.title}</h3>
              <div className="text-3xl font-bold mb-4" style={{ color: COLORS.forest }}>{block.price}</div>
              <p className="text-sm opacity-70 mb-8 leading-relaxed">{block.desc}</p>
              <a href="#brief-form" className="text-xs font-bold uppercase tracking-widest border-b-2 hover:pb-1 transition-all" style={{ borderColor: COLORS.amber }}>Order Block</a>
            </div>
          ))}
        </div>
      </section>

      {/* Designer Section */}
      <section id="designers" className="py-24" style={{ backgroundColor: COLORS.forest, color: COLORS.stone }}>
        <div className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold mb-4 block" style={{ color: COLORS.amber }}>For Freelance Designers</span>
            <h2 className="text-4xl md:text-5xl mb-6">Built for DFM Experts.</h2>
            <ul className="space-y-6 text-lg opacity-90 mb-10">
              <li className="flex gap-4">
                <span className="text-amber-400">✓</span>
                <span><strong>Founding 50:</strong> Zero commission for all projects in 2026.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-400">✓</span>
                <span><strong>Vetted Leads:</strong> Pre-scoped briefs from well-funded hardware startups.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-400">✓</span>
                <span><strong>Automated Payments:</strong> Escrow-protected fixed-price engagements.</span>
              </li>
            </ul>
          </div>
          <div id="designer-form" className="bg-white p-10 rounded-2xl text-charcoal shadow-2xl" style={{ color: COLORS.charcoal }}>
            <h3 className="text-2xl mb-6">Join the Waitlist</h3>
            <form onSubmit={handleDesignerSubmit} className="space-y-4">
              <input 
                type="text" placeholder="Full Name" required 
                className="w-full p-4 rounded-lg bg-stone-50 border border-stone-200"
                value={designerForm.name} onChange={e => setDesignerForm({...designerForm, name: e.target.value})}
              />
              <input 
                type="email" placeholder="Email Address" required 
                className="w-full p-4 rounded-lg bg-stone-50 border border-stone-200"
                value={designerForm.email} onChange={e => setDesignerForm({...designerForm, email: e.target.value})}
              />
              <input 
                type="url" placeholder="Portfolio Link (e.g. Behance, personal site)" required 
                className="w-full p-4 rounded-lg bg-stone-50 border border-stone-200"
                value={designerForm.portfolio_url} onChange={e => setDesignerForm({...designerForm, portfolio_url: e.target.value})}
              />
              <select 
                className="w-full p-4 rounded-lg bg-stone-50 border border-stone-200 appearance-none"
                value={designerForm.specialty} onChange={e => setDesignerForm({...designerForm, specialty: e.target.value})}
              >
                <option>DFM / CAD Specialist</option>
                <option>CMF Specialist</option>
                <option>Packaging Designer</option>
                <option>Mechanical Engineering</option>
              </select>
              <button type="submit" className="w-full py-4 rounded-lg font-bold text-white transition-opacity" style={{ backgroundColor: COLORS.forest }}>
                Apply for Founding 50
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Brief Form Section */}
      <section id="brief-form" className="px-6 py-24 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Start a Project</h2>
          <p className="opacity-70">Submit your brief and we'll match you with a vetted designer within 24 hours.</p>
        </div>
        <form onSubmit={handleStartupSubmit} className="space-y-6 bg-white p-10 rounded-2xl shadow-sm border border-stone-100">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase opacity-50">Company Name</label>
              <input 
                type="text" required className="w-full p-4 rounded-lg bg-stone-50 border border-stone-200"
                value={startupForm.company} onChange={e => setStartupForm({...startupForm, company: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase opacity-50">Contact Email</label>
              <input 
                type="email" required className="w-full p-4 rounded-lg bg-stone-50 border border-stone-200"
                value={startupForm.email} onChange={e => setStartupForm({...startupForm, email: e.target.value})}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase opacity-50">Project Type</label>
              <select 
                className="w-full p-4 rounded-lg bg-stone-50 border border-stone-200 appearance-none"
                value={startupForm.project_type} onChange={e => setStartupForm({...startupForm, project_type: e.target.value})}
              >
                <option>CMF Package</option>
                <option>Production-Ready CAD</option>
                <option>Packaging Design</option>
                <option>Full Product Development</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase opacity-50">Budget ($)</label>
              <input 
                type="number" required placeholder="e.g. 4500" className="w-full p-4 rounded-lg bg-stone-50 border border-stone-200"
                value={startupForm.budget} onChange={e => setStartupForm({...startupForm, budget: e.target.value})}
              />
            </div>
          </div>
          <button type="submit" className="w-full py-5 rounded-lg font-bold text-white shadow-lg transition-transform active:scale-95" style={{ backgroundColor: COLORS.amber }}>
            Submit Project Brief
          </button>
        </form>
      </section>

      {/* Success/Status Toast */}
      {status.message && (
        <div className="fixed bottom-8 right-8 p-6 rounded-xl shadow-2xl z-50 flex items-center gap-4 animate-bounce bg-white border-2" style={{ borderColor: status.type === 'error' ? '#ef4444' : COLORS.forest }}>
          <div className="h-4 w-4 rounded-full" style={{ backgroundColor: status.type === 'error' ? '#ef4444' : COLORS.forest }}></div>
          <p className="font-bold text-sm">{status.message}</p>
          <button onClick={() => setStatus({type:'', message:''})} className="ml-4 opacity-50">✕</button>
        </div>
      )}

      {/* Footer */}
      <footer className="py-20 border-t border-stone-200 text-center text-sm opacity-50">
        <p className="mb-4 font-bold tracking-[0.2em]" style={{ color: COLORS.forest }}>FORMSET</p>
        <p>&copy; 2026 Formset Industrial Design Marketplace. All rights reserved.</p>
        <p className="mt-2 italic">Standardizing hardware design for the modern manufacturer.</p>
      </footer>
    </div>
  );
}
