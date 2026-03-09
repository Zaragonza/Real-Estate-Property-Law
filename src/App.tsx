import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scale, Shield, Gavel, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
    <div className="flex items-center gap-2">
      <Scale className="w-8 h-8 text-emerald-500" />
      <span className="text-xl font-serif tracking-widest uppercase">Vanguard</span>
    </div>
    <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-widest font-medium text-white/70">
      <a href="#" className="hover:text-white transition-colors">Practice Areas</a>
      <a href="#" className="hover:text-white transition-colors">Our Team</a>
      <a href="#" className="hover:text-white transition-colors">Results</a>
      <a href="#" className="hover:text-white transition-colors">Contact</a>
    </div>
    <button className="px-6 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
      Free Consultation
    </button>
  </nav>
);

const TrustMath = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col">
    <span className="text-4xl md:text-6xl font-serif italic text-emerald-500">{value}</span>
    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">{label}</span>
  </div>
);

const Hero = () => {
  const [formData, setFormData] = useState({ name: '', email: '', caseType: '' });

  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=90" 
          alt="Lead Attorney" 
          className="w-full h-full object-cover object-[center_25%] opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-8 z-10 grid lg:grid-cols-2 gap-12 items-center py-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-full"
        >
          <span className="inline-flex items-center px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-emerald-400 mb-6 whitespace-nowrap">
            Elite Trial Attorneys
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
            Justice <br />
            <span className="italic text-emerald-500">Demands</span> <br />
            Excellence.
          </h1>
          
          <div className="flex flex-wrap gap-8 md:gap-12 mt-12">
            <TrustMath label="Recovered for Clients" value="$500M+" />
            <TrustMath label="Success Rate" value="98%" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-3xl max-w-md ml-auto"
        >
          <h2 className="text-2xl font-serif mb-2">Case Evaluation</h2>
          <p className="text-white/50 text-sm mb-8">Tell us about your situation. We'll respond within 24 hours.</p>
          
          <form className="space-y-4">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1 block">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1 block">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1 block">Case Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none">
                <option className="bg-zinc-900">Personal Injury</option>
                <option className="bg-zinc-900">Corporate Law</option>
                <option className="bg-zinc-900">Criminal Defense</option>
                <option className="bg-zinc-900">Family Law</option>
              </select>
            </div>
            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-4 rounded-xl mt-4 transition-all duration-300 flex items-center justify-center gap-2 group">
              Submit Case Details
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const PracticeAreas = () => {
  const areas = [
    { icon: Shield, title: "Personal Injury", desc: "Aggressive representation for victims of negligence." },
    { icon: Gavel, title: "Criminal Defense", desc: "Protecting your rights and your future with expert counsel." },
    { icon: Briefcase, title: "Corporate Law", desc: "Strategic legal solutions for modern business challenges." },
  ];

  return (
    <section className="py-32 bg-white text-black">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/40 mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Specialized in <br /><span className="italic text-emerald-600">High-Stakes</span> Litigation</h2>
          </div>
          <button className="text-sm uppercase tracking-widest font-bold border-b-2 border-black pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all">
            View All Practice Areas
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-1px bg-black/10">
          {areas.map((area, i) => (
            <div key={i} className="bg-white p-12 hover:bg-zinc-50 transition-colors group cursor-pointer">
              <area.icon className="w-10 h-10 text-emerald-600 mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif mb-4">{area.title}</h3>
              <p className="text-black/60 leading-relaxed mb-8">{area.desc}</p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => (
  <section className="py-32 bg-[#0a0a0a]">
    <div className="container mx-auto px-8">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl font-serif mb-8">Proven Results. <br />Unmatched Authority.</h2>
          <p className="text-white/50 leading-relaxed mb-12 text-lg">
            We don't just practice law; we set precedents. Our firm has consistently secured multi-million dollar verdicts for our clients across the nation.
          </p>
          <div className="space-y-8">
            {[
              { amount: "$120M", case: "Class Action Settlement - Tech Sector" },
              { amount: "$45M", case: "Personal Injury Verdict - Medical Malpractice" },
              { amount: "$18M", case: "Corporate Fraud Recovery" },
            ].map((result, i) => (
              <div key={i} className="flex items-center gap-6 border-l-2 border-emerald-500/30 pl-8">
                <span className="text-3xl font-serif italic text-emerald-500">{result.amount}</span>
                <span className="text-sm text-white/70 uppercase tracking-widest">{result.case}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" 
            alt="Law Library" 
            className="w-full h-full object-cover grayscale opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass p-12 rounded-full text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <span className="text-4xl font-serif">1,200+</span>
              <p className="text-[10px] uppercase tracking-widest text-white/50 mt-2">Cases Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/10">
    <div className="container mx-auto px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <Scale className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-serif tracking-widest uppercase">Vanguard Legal</span>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed">
            Premier legal representation for those who demand excellence. Our commitment to justice is unwavering, our results are undeniable.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>1201 Avenue of the Americas</li>
            <li>New York, NY 10036</li>
            <li>(212) 555-0198</li>
            <li>contact@vanguard.law</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-6">Follow</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="hover:text-emerald-500 cursor-pointer transition-colors">LinkedIn</li>
            <li className="hover:text-emerald-500 cursor-pointer transition-colors">Twitter</li>
            <li className="hover:text-emerald-500 cursor-pointer transition-colors">Instagram</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
        <span className="text-[10px] uppercase tracking-widest text-white/20">© 2024 Vanguard Legal Group. All Rights Reserved.</span>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/20">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function LawFirmWebsite() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <ResultsSection />
      <Footer />
    </div>
  );
}
