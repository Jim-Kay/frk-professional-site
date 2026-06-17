import React, { useState } from 'react';
import { content } from '../data/content';
import headshotImg from '../assets/francine-pro.jpg';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  FileText, Download, Mail, ChevronRight, Menu, X, 
  CheckCircle2, Building, GraduationCap, ChevronDown, 
  ExternalLink, Quote
} from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedExpertise, setExpandedExpertise] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const reveal = (index = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.99 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: false, amount: 0.18, margin: "0px 0px -8% 0px" },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : {
          duration: 0.45,
          ease: "easeOut" as const,
          delay: Math.min(index * 0.04, 0.18),
        },
  });

  const categories = ['All', ...Array.from(new Set(content.samples.map(s => s.category)))];
  
  const filteredSamples = activeTab === 'All' 
    ? content.samples 
    : content.samples.filter(s => s.category === activeTab);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30 selection:text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif font-bold text-xl tracking-tight text-primary">
            {content.hero.initials}
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#expertise" className="hover:text-primary transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#patents" className="hover:text-primary transition-colors">Patents</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="text-primary hover:text-primary/80 transition-colors">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 space-y-4">
                <a href="#about" onClick={closeMenu} className="text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#expertise" onClick={closeMenu} className="text-muted-foreground hover:text-primary transition-colors">Expertise</a>
                <a href="#experience" onClick={closeMenu} className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
                <a href="#patents" onClick={closeMenu} className="text-muted-foreground hover:text-primary transition-colors">Patents</a>
                <a href="#portfolio" onClick={closeMenu} className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
                <a href="#contact" onClick={closeMenu} className="text-primary font-medium">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="section-atmosphere atmosphere-hero pt-32 pb-20 md:pt-48 md:pb-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-8 rounded-full border-4 border-background shadow-xl overflow-hidden"
            >
              <img src={headshotImg} alt="Professional headshot" className="w-full h-full object-cover object-center" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-lg md:text-xl font-serif text-muted-foreground tracking-wide mb-3"
            >
              {content.hero.name}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight mb-6"
            >
              {content.hero.headline}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {content.hero.subheadline}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                <a href={content.hero.ctas[0].href}><FileText className="mr-2 h-4 w-4" /> {content.hero.ctas[0].label}</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                <a href={content.hero.ctas[1].href}><Download className="mr-2 h-4 w-4" /> {content.hero.ctas[1].label}</a>
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                <a href={content.hero.ctas[2].href}><Mail className="mr-2 h-4 w-4" /> {content.hero.ctas[2].label}</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* What I Bring */}
        <section className="section-atmosphere atmosphere-primary py-20 bg-primary text-primary-foreground px-6 border-y border-primary-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-2xl md:text-3xl font-serif text-accent mb-12 text-center">{content.whatIBring.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {content.whatIBring.points.map((point, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1 opacity-80" />
                  <p className="text-primary-foreground/90 leading-relaxed text-lg">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-atmosphere atmosphere-paper py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <h2 className="text-3xl font-serif text-primary">Executive Summary</h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {content.about.paragraphs.map((p, i) => (
                i === 0 ? (
                  <p key={i}>{p}</p>
                ) : (
                  <motion.p key={i} {...reveal(i - 1)}>
                    {p}
                  </motion.p>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Core Expertise */}
        <section id="expertise" className="section-atmosphere atmosphere-field py-24 bg-secondary/30 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif text-primary mb-12 text-center">Core Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.coreExpertise.map((exp, idx) => (
                <motion.div key={idx} {...reveal(idx)} className="h-full">
                  <Card className="h-full bg-background border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-8">
                      <h3 className="font-serif text-xl text-primary mb-6 flex items-center gap-2">
                        <div className="w-8 h-px bg-accent"></div>
                        {exp.category}
                      </h3>
                      <ul className="space-y-4">
                        {exp.items.map((item, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <ChevronRight className="h-5 w-5 text-accent/70 shrink-0 mr-3 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Journey */}
        <section id="experience" className="section-atmosphere atmosphere-lines py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-primary mb-16 text-center">Career Journey</h2>
            <div className="space-y-12">
              {content.careerJourney.map((role, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0">
                  {/* Timeline line */}
                  <div className="hidden md:block absolute left-[50%] top-0 bottom-[-3rem] w-px bg-border -translate-x-1/2 last:bottom-0"></div>
                  <div className="md:hidden absolute left-[15px] top-0 bottom-[-3rem] w-px bg-border last:bottom-0"></div>
                  
                  <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-[11px] md:left-[50%] md:-translate-x-1/2 w-3 h-3 rounded-full bg-accent mt-1.5 md:mt-0 z-10 shadow-[0_0_0_4px_hsl(var(--background))]"></div>
                    
                    <div className="md:w-[45%]">
                      <motion.div {...reveal(idx)}>
                        <Card className="border-border shadow-sm">
                          <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                              <h3 className="font-serif text-xl text-primary font-medium">{role.title}</h3>
                              <Badge variant="secondary" className="w-fit">{role.years}</Badge>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm font-medium">
                              <Building className="w-4 h-4" />
                              {role.company}
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {role.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                    <div className="hidden md:block md:w-[45%]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Therapeutic Areas */}
        <section className="section-atmosphere atmosphere-card py-24 bg-card px-6 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif text-primary mb-12 text-center">Therapeutic Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div {...reveal(0)} className="h-full">
                <Card className="h-full bg-background border-primary/20 shadow-sm">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                      <span className="font-serif text-2xl text-primary">O</span>
                    </div>
                    <h3 className="text-2xl font-serif text-primary mb-4">Oncology</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {content.therapeuticAreas.oncology.description}
                    </p>
                    
                    <Collapsible 
                      open={expandedExpertise} 
                      onOpenChange={setExpandedExpertise}
                      className="w-full space-y-2"
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          Detailed Response Criteria Expertise
                          <ChevronDown className={`h-4 w-4 transition-transform ${expandedExpertise ? "rotate-180" : ""}`} />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2">
                        <div className="rounded-md border border-border bg-muted/30 px-4 py-3 mt-2 text-sm text-muted-foreground">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {content.therapeuticAreas.oncology.detailedExpertise.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5 mr-2"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...reveal(1)} className="h-full">
                <Card className="h-full bg-background border-border shadow-sm">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-6">
                      <span className="font-serif text-2xl text-primary">W</span>
                    </div>
                    <h3 className="text-2xl font-serif text-primary mb-4">Women's Health</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {content.therapeuticAreas.womensHealth.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Patents */}
        <section id="patents" className="section-atmosphere atmosphere-lines py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif text-primary mb-4">Patents & Inventions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Patented work reflecting early formulation science experience in controlled-release drug delivery, women&apos;s health, and pharmaceutical composition development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.patents.map((patent, idx) => (
                <motion.div key={`${patent.number}-${idx}`} {...reveal(idx)} className="h-full">
                  <Card className="h-full bg-background border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Badge variant="secondary" className="w-fit mb-4 bg-secondary/60">
                        {patent.number}
                      </Badge>
                      <h3 className="font-serif text-lg text-primary leading-snug mb-3">
                        {patent.title}
                      </h3>
                      <p className="text-xs font-medium uppercase tracking-wide text-accent mb-4">
                        {patent.issued}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {patent.summary}
                      </p>
                      <a
                        href={patent.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/75 transition-colors"
                      >
                        View patent
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio / Writing Samples */}
        <section id="portfolio" className="section-atmosphere atmosphere-samples py-24 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif text-primary mb-4">Selected Writing Samples</h2>
              <p className="text-muted-foreground">Due to the confidential nature of much pharmaceutical and clinical research work, some samples may be redacted or representative in nature.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={activeTab === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab(cat)}
                  className="rounded-full px-6"
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredSamples.map((sample, idx) => (
                  <motion.div
                    key={sample.title}
                    {...reveal(idx)}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    layout
                  >
                    <Card className="h-full flex flex-col hover:border-primary/30 hover:shadow-md transition-all group bg-background">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <div className="flex justify-between items-start mb-3">
                            <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                              {sample.category}
                            </Badge>
                            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <h3 className="font-serif text-lg text-primary mb-3 leading-snug">{sample.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{sample.description}</p>
                        </div>
                        <div className="mt-auto pt-6">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {sample.tags.map(tag => (
                              <span key={tag} className="text-[11px] font-medium bg-muted text-muted-foreground px-2 py-1 rounded-md tracking-wide uppercase">
                                {tag}
                              </span>
                            ))}
                          </div>
                          {sample.confidential && (
                            <div className="pt-4 border-t border-border flex items-center text-xs text-accent font-medium uppercase tracking-wider">
                              <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" /> Confidential / Redacted
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Selected Capabilities */}
        <section className="section-atmosphere atmosphere-capabilities py-24 px-6 border-y border-border bg-card">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif text-primary mb-10 text-center">Selected Capabilities</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {content.capabilities.map((cap, idx) => (
                <motion.div key={idx} {...reveal(idx)} className="bg-background border border-border px-5 py-3 rounded-full text-sm font-medium text-foreground shadow-sm hover:border-accent transition-colors">
                  {cap}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section id="credentials" className="section-atmosphere atmosphere-credentials py-24 px-6 bg-secondary/30">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-accent" />
                Education & Credentials
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Education</h4>
                  <ul className="space-y-3">
                    {content.credentials.education.map((edu, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground bg-background p-4 rounded-lg border border-border shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Certifications & Affiliations</h4>
                  <ul className="space-y-3">
                    {content.credentials.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground bg-background p-4 rounded-lg border border-border shadow-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent opacity-70" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-primary mb-8">Professional Links</h2>
              <div className="space-y-4">
                <motion.a {...reveal(0)} href="#linkedin" className="flex items-center justify-between p-6 bg-background rounded-lg border border-border shadow-sm hover:border-primary transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2]">
                      <FaLinkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">LinkedIn Profile</h4>
                      <p className="text-sm text-muted-foreground">Connect professionally</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
                <motion.a {...reveal(1)} href="#resume" className="flex items-center justify-between p-6 bg-background rounded-lg border border-border shadow-sm hover:border-primary transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Download className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Curriculum Vitae</h4>
                      <p className="text-sm text-muted-foreground">Download full resume (PDF)</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-atmosphere atmosphere-testimonials py-24 px-6 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif text-primary mb-12 text-center">Colleague Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.testimonials.map((test, idx) => (
                <motion.div key={idx} {...reveal(idx)} className="h-full">
                  <Card className="h-full bg-card border-none shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/50 rounded-bl-full -z-10"></div>
                    <CardContent className="p-8 pt-10">
                      <Quote className="h-8 w-8 text-accent/40 absolute top-6 right-6" />
                      <p className="text-foreground/80 italic mb-8 leading-relaxed relative z-10 text-sm">
                        "{test.quote}"
                      </p>
                      <div className="border-t border-border pt-4 mt-auto">
                        <p className="font-serif text-primary font-medium">{test.author}</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{test.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-atmosphere atmosphere-contact py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif text-primary-foreground mb-6">Let's Connect</h2>
              <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed max-w-md">
                Available for senior medical writing, medical communications, and scientific documentation opportunities across pharma, biotech, and CRO environments.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 uppercase tracking-wider">Email</p>
                    <p className="font-medium text-lg">contact@placeholder.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <FaLinkedin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 uppercase tracking-wider">LinkedIn</p>
                    <p className="font-medium text-lg">/in/placeholder</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div {...reveal(1)}>
              <Card className="bg-background text-foreground border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-primary mb-6">Send a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Jane Smith" className="bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="jane@company.com" className="bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org">Organization</Label>
                    <Input id="org" placeholder="Company or Institution" className="bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Inquiry regarding..." className="bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can I help?" className="min-h-[120px] bg-card" />
                  </div>
                  <Button type="submit" className="w-full h-12 text-base mt-2">
                    Send Message
                  </Button>
                </form>
              </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="font-serif font-bold text-xl tracking-tight text-primary mb-4 md:mb-0">
            {content.hero.initials}
          </div>
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a href="#linkedin" className="text-muted-foreground hover:text-primary transition-colors">
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#email" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {content.hero.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
