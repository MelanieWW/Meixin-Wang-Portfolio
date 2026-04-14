import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, ArrowRight, Globe, Mail, FlaskConical, Cpu, Box, DraftingCompass, Sparkles, RefreshCw, Linkedin } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('culinary');

  return (
    <div className="min-h-screen bg-background">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 max-w-screen-2xl left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white font-sans">Meixin Wang</span>
        </div>
        
        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8 font-sans tracking-tight text-sm uppercase font-semibold">
          <a href="#experience" className="text-zinc-500 hover:text-zinc-300 transition-colors">Experience</a>
          <a href="#vision" className="text-zinc-500 hover:text-zinc-300 transition-colors">Vision</a>
          <a href="#laboratory" className="text-zinc-500 hover:text-zinc-300 transition-colors">The Laboratory</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full liquid-glass text-white hover:opacity-70 transition-opacity duration-300">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
        />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-12"
          >
            <span className="label-sm text-white px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm shadow-sm">
              Senior Data Engineer @ Meta
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-display-lg text-white mb-6"
          >
            Building <span className="font-serif italic font-normal">AI-Native</span> Data Platforms
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-hero-subtitle text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium"
          >
            Specializing in LLM-powered ETL pipelines and LLM-in-the-loop data architecture for scalable AI platforms.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a href="#experience" className="bg-primary text-black px-10 py-4 rounded-full font-bold text-sm tracking-tight hover:bg-neutral-200 transition-colors">
              VIEW PROJECTS
            </a>
          </motion.div>
        </div>
        {/* Bottom Overlay Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-20">
            Core <span className="font-serif italic font-normal">Projects</span> & Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden bg-surface-low p-8 transition-all duration-500 hover:bg-zinc-900">
              <div className="h-40 w-full mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  className="w-full h-full object-cover opacity-60" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqXQ8QZPuPhIHlcxT7vZfuzceE4QN9IPhfbBN8qyeDWvsO5IXxP9sHuPEN2PMl4FI96W3VHpDQrnPhfltma1M7OOJ7VaQK2xtSi0a-X_uQMWSv2px21HP-RtMlb5E7s2CpPdAwZt5CkPUdmAUuFZqkqHC_NN2_oSLz6pEi0JGrnXpY2dl1bBU-h4Aaz4erpA6NIb7omZXEdSy-sPOIZrYc8Fyc60NooTpg6Hf8rj_xHhxta8jfzPesvWqjOWAV-Qoi5q9jJkR6Kzw" 
                  alt="abstract digital connection network"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Feature Evaluation Framework</h3>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Designed and built an analytics framework enabling systemetic discovery, validation and comparison of new ranking signals; accelerated research cycles by enabling rapid offline evaluation before costly experiments.
              </p>
              <div className="text-neutral-400 leading-relaxed text-sm">
                <b className="text-white font-bold">Data Engineering Focus</b>: highly scalable data architecture capable of unifying diverse data sources representing different user engagement types while supporting multiple ranking model variants.
              </div>
              <a 
                href="https://engineering.fb.com/2024/11/19/data-infrastructure/sequence-learning-personalized-ads-recommendations/" 
                target="_blank"
                className="mt-6 flex items-center text-xs tracking-widest text-neutral-500 hover:text-white transition-colors uppercase font-bold"
              >
                Ads Ranking AI <ArrowRight size={14} className="ml-2" />
              </a>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden bg-surface-low p-8 transition-all duration-500 hover:bg-zinc-900">
              <div className="h-40 w-full mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  className="w-full h-full object-cover opacity-60" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWKwnDbuMAD6ujsh1E7RQ3-JOJVkdFiTpXVUQWX8oQaT-lwVRmy5GmD9vGUHEUwgHdx47qyfiNQXYb2QKhgrEfv17WF-P-cG-hszdvKBXq7w9V9AQQpHolsqHFa9dE3KVTYzpbJhcOPa2mXmffaGvzKuioh0M1lLc-ObwQbIuG-uF9a-tO85GWX9qD8GilQWYTMZUKSjW29I13TsR1aSB1dHrfQYCxLfAJPMk2F6c5fzTkdlN3ABC473_EwbxYFzf8lTSr1HQ6eH8" 
                  alt="futuristic architectural structure"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Customer Feedback AI Platform</h3>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Built the data foundation for a company-wide insights platform integrating customer feedback through product reviews, social media posts, bug reports, survey repsonses, and more. Built end-to-end evaluation framework and golden test datasets that ensured output quality via sustainable data flywheel.
              </p>
              <div className="text-neutral-400 leading-relaxed text-sm">
                <b className="text-white font-bold">Data Engineering Focus</b>: productionized LLM-based text processing pipelines transforming raw feedback into semantic embeddings and RAG-style retrieval.
              </div>
              <a 
                href="https://medium.com/@AnalyticsAtMeta/harnessing-the-power-of-customer-feedback-unleashing-metas-llama-4-llms-in-product-analytics-2d3a9cfd5805" 
                target="_blank"
                className="mt-6 flex items-center text-xs tracking-widest text-neutral-500 hover:text-white transition-colors uppercase font-bold"
              >
                Reality Lab <ArrowRight size={14} className="ml-2" />
              </a>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden bg-surface-low p-8 transition-all duration-500 hover:bg-zinc-900">
              <div className="h-40 w-full mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  className="w-full h-full object-cover opacity-60" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFOlz6cw7oOPnMkPzd3VjQA_THmKEFbTLsUm0DaiEpOo6binMuVSj3ETCM0z3FjK7jxX1LCBfbAswilRvNMY5na_15MUHp69PbtFPKugEWSRPx6EnZw7UYoeGFa3s7kL9lKbXprpw8wV7g09QOApEkPO086HOU6OKSoJ7VcRLsVpkHDRLB_YtRq0BgIz0znerxoW4xACzGB_fUe8llEKrh6rQyUZGEG-ddWg31revXTTnys9H4tnbL3_do_DPX9e7TWxZdB6-DeRE" 
                  alt="macro close-up of crystal prisms"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">XR Audio & Graphics</h3>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Led data modeling and telemetry stretagy to support multiple product releases from pre-launch through GA.
              </p>
              <div className="text-neutral-400 leading-relaxed text-sm">
                <b className="text-white font-bold">Data Engineering Focus</b>: on-device telemetry logging; scalable data solutions and data warehouse environment leveraging ETL tools; adoption, engagement, reliability and developer success metrics; executive-facing experiment analysis that shape product roadmap and partner stretegy.
              </div>
              <a 
                href="https://about.fb.com/news/2023/09/new-ray-ban-meta-smart-glasses/" 
                target="_blank"
                className="mt-6 flex items-center text-xs tracking-widest text-neutral-500 hover:text-white transition-colors uppercase font-bold"
              >
                Reality Lab <ArrowRight size={14} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center bg-black overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
        />
        <div className="relative z-10 max-w-6xl px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-12">
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(118,151,146,0.8)]"></span>
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-500">THE VISION</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8 tracking-tight">The future data engineer</h2>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-4xl mx-auto mb-16">
            Building AI-native data platforms where LLMs act as the primary engine for the entire data lifecycle—autonomously extracting, transforming, and enriching unstructured data; validating quality with human oversight; and translating insights into business decisions through automated natural language narratives.
          </p>
          
          {/* Aspects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-white/10 pt-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <DraftingCompass className="text-accent" size={20} />
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">AI-native data architecture</h4>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Embeddings stores, vector indices, and hybrid query layers for scalable intelligence.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="text-accent" size={20} />
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">LLM-powered ETL</h4>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Semantic extraction, schema inference, and auto-mapping noisy sources to structured knowledge.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <RefreshCw className="text-accent" size={20} />
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">The data flywheel</h4>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Continuous improvement through feedback loops and automated data refinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Laboratory Section */}
      <section id="laboratory" className="py-32 px-8 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[11px] uppercase tracking-widest font-black text-neutral-500 block mb-4">THE AI INCUBATOR</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              The <span className="font-serif italic font-normal">Laboratory</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* Tabs Sidebar */}
            <aside className="w-full md:w-64 flex flex-col shrink-0">
              <div className="flex flex-col bg-neutral-900/30 border-l border-white/5">
                <button 
                  onClick={() => setActiveTab('culinary')}
                  className={`text-left px-6 py-5 flex items-center gap-4 transition-all duration-300 border-l-2 group ${activeTab === 'culinary' ? 'border-white bg-white/5 text-white' : 'border-transparent text-neutral-500 hover:text-neutral-200 hover:bg-neutral-900/50'}`}
                >
                  <FlaskConical className="group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-[11px] uppercase tracking-widest font-bold">Culinary AI</span>
                </button>
                <button 
                  onClick={() => setActiveTab('handcrafts')}
                  className={`text-left px-6 py-5 flex items-center gap-4 transition-all duration-300 border-l-2 group ${activeTab === 'handcrafts' ? 'border-white bg-white/5 text-white' : 'border-transparent text-neutral-500 hover:text-neutral-200 hover:bg-neutral-900/50'}`}
                >
                  <Cpu className="group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-[11px] uppercase tracking-widest font-bold">Agentic crafts</span>
                </button>
                <button 
                  onClick={() => setActiveTab('3d')}
                  className={`text-left px-6 py-5 flex items-center gap-4 transition-all duration-300 border-l-2 group ${activeTab === '3d' ? 'border-white bg-white/5 text-white' : 'border-transparent text-neutral-500 hover:text-neutral-200 hover:bg-neutral-900/50'}`}
                >
                  <Box className="group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-[11px] uppercase tracking-widest font-bold">3D design</span>
                </button>
              </div>
              <div className="mt-8 px-6 hidden md:block">
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest leading-relaxed">
                  A COLLECTION OF CONCEPTUAL AI EXPERIMENTS STEMMED FROM MY PERSONAL HOBBIES
                </p>
              </div>
            </aside>

            {/* Tab Contents */}
            <div className="flex-grow">
              <AnimatePresence mode="wait">
                {activeTab === 'culinary' && (
                  <motion.div 
                    key="culinary"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">AI-Driven Food Styling & Photography</h3>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                          Combining culinary creativity and AI to inspire professional food photography aesthetics. I built an app that applies image generative models to elevate plated dishes into magazine-quality images. The system should handle large-scale image ingestion, automated feature extraction, and orchestrates generative vision models.
                        </p>
                        <div className="pt-4 border-t border-white/10">
                          <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-2">Data Engineering Tech Stack</p>
                          <p className="text-sm font-medium text-white/70 italic font-serif">
                            Multi-stage image processing pipelines • Automated data labeling & quality scoring
                            <span className="text-white/50 not-italic uppercase tracking-widest text-[10px] block mt-1">Stack: Python, PyTorch, apache Airflow, AWS S3/Lambda</span>
                          </p>
                        </div>
                        <a href="https://www.instagram.com/gguo.jiang/" className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white hover:gap-5 transition-all duration-300 group">
                          View Gallery <ArrowRight size={14} />
                        </a>
                      </div>
                      <div className="relative bg-neutral-900 overflow-hidden group aspect-video">
                        <img 
                          alt="Culinary AI App Showcase" 
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000" 
                          src="https://lh3.googleusercontent.com/aida/ADBb0ugjCI3XeUtRX1OH2lATQpwVjKCKcGn1f_7YIF9Vaa7scojxI33AWwnjtcdfd6-woUiBAPk4NCVhQRMbjcMXofOw5G01gdl9v96KORigBglLTsu_H-8viym4TTNGxIhyB6FSPdCTvHwITPN36LrZczhBxXc--Z-mm_7tt-VmRZq_O59fzH8GlwkUq1d42I9kI8dauWVyvNtS8HR35Z9fOTotmLy6fxlXjoDNyYkJl_aMJf4qgod_IoqjYKh3-Ul1K5RpURT50sNtdQ" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1.5 text-white/90 border border-white/10">
                          AI Stylist Interface
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'handcrafts' && (
                  <motion.div 
                    key="handcrafts"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">Agentic Craft: From Design to Market</h3>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                          An agentic workflow that bridges digital precision and physical craftsmanship. From AI-assisted material simulation and parametric design to automated marketing copy generation and inventory management, my process treats every handcrafted piece as a data-driven product launch.
                        </p>
                        <div className="space-y-4 pt-4 border-t border-white/10">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <h4 className="text-[10px] uppercase tracking-widest text-white font-bold">Design</h4>
                              <p className="text-xs text-neutral-400">Generative parametric models optimized for material constraints.</p>
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-[10px] uppercase tracking-widest text-white font-bold">Manufacturing</h4>
                              <p className="text-xs text-neutral-400">Automated toolpathing and sensor-monitored curing/finishing.</p>
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-[10px] uppercase tracking-widest text-white font-bold">Marketing</h4>
                              <p className="text-xs text-neutral-400">LLM-driven visual storytelling and multi-channel content generation.</p>
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-[10px] uppercase tracking-widest text-white font-bold">Sales</h4>
                              <p className="text-xs text-neutral-400">Intelligent inventory tracking and automated customer engagement loops.</p>
                            </div>
                          </div>
                        </div>
                        <a href="#" className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white hover:gap-5 transition-all duration-300 group">
                          Explore the workshop <ArrowRight size={14} />
                        </a>
                      </div>
                      <div className="grid grid-cols-2 gap-4 aspect-square">
                        <div className="bg-neutral-900 overflow-hidden">
                          <img 
                            alt="Agentic Craft Example 1" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                            src="https://lh3.googleusercontent.com/aida/ADBb0uisOsS6USL7xQtENyF3XZdyqEAx8mnlgGB6tH2vwpQ9b7C07wtnLWyq1beChvc0JfdNs_RKl3rHcr2Lum7ctm7YstSsYjs0crGqoSxEKhg4sthpFSugmSMR_i7g1nDLjCIgH8eEPiMQmueAg3TRAzPZeKrfRBWtNxo_4Jf9Mumthpo8TWX0rBaR0Oux__rfYwO4KGBHfBOxD_NWA-pzCHfl3F0vpWXxZjOjbfICVg7hSYhgxzvspUp0nM5HuMOgswGx8FcKLdqZqw" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="bg-neutral-900 overflow-hidden">
                          <img 
                            alt="Agentic Craft Example 2" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                            src="https://lh3.googleusercontent.com/aida/ADBb0uibtZ5dkSdWpk9tYVEmzVQENde9NMJnp-POX1j78zJ7TSZqoCk50J7xwfu_8fIFxQhoWuDgMIVVT84zrLvXLbkfqQ73rboNrElKV5JPsWfKYcs6pNIefrGTMCp-pM7QGlP3gMx_w8qLFLSY4YZLp-tRNu-vNb7Unzt3YNRSlnqCq9eCDboD3fOCq2PYVs2fH8FznZz1-WAxvAEStdXj8TdEktbC-V771Ku-jUF_r9bP5I5YP6DekioTomE9MX4PCa9TQA53OTC3Kw" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === '3d' && (
                  <motion.div 
                    key="3d"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-16"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16">
                      <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">AI-Generated 3D Cookie Mold: Sagrada Família</h3>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                          I designed a custom 3D-printable cookie mold based on the iconic towers of the Sagrada Família. This project explores the intersection of architectural geometry and culinary art, using AI-assisted CAD to optimize the mold for a unique 'stained glass sugar cookie' technique.
                        </p>
                        <div className="pt-6 space-y-4 border-t border-white/10">
                          <div>
                            <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-2">Materials & Tools</p>
                            <p className="text-sm font-medium text-white/70 italic font-serif leading-relaxed">Blender/Shapr3D , Meshy AI, Bambu Lab, PLA/Resin.</p>
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-4">From Concept to Confection</p>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="space-y-2">
                                <div className="aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/5">
                                  <img 
                                    alt="Original Tower" 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                                    src="https://lh3.googleusercontent.com/aida/ADBb0ugRf1EbuVNo-5gfD9hi2NcPY0rlx1R6SJ52tXAmcjv-ilEicylIJwebsOjfDPXTUGsE0QO-hTdAge9m0aB5PL5LVuL68XxQbg0b3I3iVL2kmIdvHlNgL-F567Xf5gCLLguRn_XctVEqy06kwCQlPxJD4cm1xk626uEix3zJOujxhUHEOv8plwvIbECQXBZV_V5tAQRU2oOYqF64cAm94yy-u6VNUHFW7pWc_Cbz8xFFoY3isltvn0PI8hm4pJb0ak9RgmgA7avQyA" 
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <span className="block text-[9px] uppercase tracking-tighter text-zinc-600 text-center">Original Tower</span>
                              </div>
                              <div className="space-y-2">
                                <div className="aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/5">
                                  <img 
                                    alt="3D Model" 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                                    src="https://lh3.googleusercontent.com/aida/ADBb0ugl8G5coi0QkVtT1jbEeFjt8M3wqJgJCLs7iBgP38JzZleHFnzwTcUfjJAK3EWt3scw3527bZJ27swpcXmXvFP9_12g5S_qI1FNgNk7Ye1VHcv7C4cDqv328hD1OqLhRsgqUX0tdB3NgklLYJ0K21QO6KVO9MWnQc1cBDyTCWoQNv1RpquGLYt0XXuuRQcjRv00NmTGgmcQW8BmEgS5BZvvfMfEUK3VnwCIT_waIsHWUxOsqcUQODBuA89YNrZN_NfYGQ" 
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <span className="block text-[9px] uppercase tracking-tighter text-zinc-600 text-center">AI-Assisted CAD</span>
                              </div>
                              <div className="space-y-2">
                                <div className="aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/5">
                                  <img 
                                    alt="Final Product" 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                                    src="https://lh3.googleusercontent.com/aida/ADBb0uhWIbr2Cfo6xs5mwl90_rn-WAvj77F5XzOJEXw_v4iq_OJyueN1A1S0AThYw6MLra_GTOBsQlYnc_I40aAf0xI1YvkQgG0CP5ASJT2PC-ff5hJ9WzPo2tBJvwLNUDMCCtGcDIVvAx9STObFgg7w8McVSUOoZqDenPb1TYjU3ESP9lZQl2SUYzfFEGAIQxU8rJ3m7uPqLWwRUCFM5YUpDt39aINvvrMv39ihUgWxCR8Nf2rtqHiAsDJ_bLlRG5UPqSgfubYK2xzhzw" 
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <span className="block text-[9px] uppercase tracking-tighter text-zinc-600 text-center">Final Cookie</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative aspect-square lg:aspect-auto lg:h-full bg-neutral-900 overflow-hidden group">
                        <img 
                          alt="Sagrada Familia Cookie Showcase" 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-1000" 
                          src="https://lh3.googleusercontent.com/aida/ADBb0uhWIbr2Cfo6xs5mwl90_rn-WAvj77F5XzOJEXw_v4iq_OJyueN1A1S0AThYw6MLra_GTOBsQlYnc_I40aAf0xI1YvkQgG0CP5ASJT2PC-ff5hJ9WzPo2tBJvwLNUDMCCtGcDIVvAx9STObFgg7w8McVSUOoZqDenPb1TYjU3ESP9lZQl2SUYzfFEGAIQxU8rJ3m7uPqLWwRUCFM5YUpDt39aINvvrMv39ihUgWxCR8Nf2rtqHiAsDJ_bLlRG5UPqSgfubYK2xzhzw" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-48 px-8 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q/low.mp4"
        />
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-12">
            Let's <span className="font-serif italic font-normal">Connect</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:items-start">
            <div className="flex flex-col items-center gap-4">
              <div className="w-[136px] h-[136px] bg-white p-2 rounded-sm shadow-lg overflow-hidden flex items-center justify-center">
                <img 
                  alt="QR Code for Resume" 
                  className="w-full h-full object-contain" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uid4xb-NS1IdZ0wC8aSB00-F8iSH3aDfjznsUk3D6zCsV-nbhcn--Y41yxQQFxyZickK5gd_INox8NmpI3xfB8qDjoZmFPdiMSqx0zz3t3Leu6zner4_oCmW0jvsgiO0m0ndP-mpiySQ7GeSbBtMQzj_cbvbnWlQKOPp0dh2oSVKeuwsUMm4LUGVBqJoTSNbukBH466JkFou8LgdrvDwwE7zWE2voPMGdmHwrVucpqP4ovRRef8Y6QH4ZMbAjKr3Vt4yzddw9AS8g" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-500">Scan for Resume</p>
            </div>
            <a 
              href="https://linkedin.com/in/meixin-wang-43589a114/" 
              target="_blank" 
              className="w-[136px] h-[136px] liquid-glass text-white font-bold text-sm tracking-widest hover:bg-white/10 transition-colors uppercase flex flex-col items-center justify-center gap-2 group"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-8 bg-black border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="text-lg font-black text-white font-sans">Meixin Wang</div>
          </div>
          <div className="flex gap-6">
            <Globe className="text-neutral-500 cursor-pointer hover:text-white" size={20} />
            <Mail className="text-neutral-500 cursor-pointer hover:text-white" size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
}
