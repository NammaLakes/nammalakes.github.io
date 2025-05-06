"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView} from "framer-motion";
import { Droplets, Users, LineChart, ArrowDown, Waves, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ParticleBackground } from "@/components/ParticleBackground";
import { MorphingText } from "@/components/magicui/morphing-text";

const morphingText = [
  "हमारी झीलें",
  "ನಮ್ಮ ಕೆರೆಗಳು",
  "Namma Lakes",
  "మా సరస్సులు",
];

const features = [
  {
    icon: <Waves className="h-10 w-10 text-blue-600" />,
    title: "Real-time Monitoring",
    description: "Get continuous water quality data from distributed sensors with high precision."
  },
  {
    icon: <Database className="h-10 w-10 text-green-600" />,
    title: "Open Data Platform",
    description: "Access all collected data through our API and interactive dashboards."
  },
  {
    icon: <Shield className="h-10 w-10 text-purple-600" />,
    title: "Early Warning System",
    description: "Receive alerts when water quality parameters reach critical thresholds."
  },
  {
    icon: <Users className="h-10 w-10 text-amber-600" />,
    title: "Community Engagement",
    description: "Connect with local volunteers and organizations to protect your water bodies."
  }
];

const storyPhases = [
  {
    title: "The Spark",
    description: "It all started with an article highlighting the deteriorating condition of our beloved lakes.",
    icon: "📰",
  },
  {
    title: "Research & Discovery",
    description: "Months spent researching monitoring systems and identifying the need for affordable, open-source solutions.",
    icon: "🔬",
  },
  {
    title: "Building the Prototype",
    description: "Building our first working prototype with Raspberry Pi and sensors.",
    icon: "💻",
  },
  {
    title: "First Deployment",
    description: "The excitement of seeing real-time data flow in from Bellandur Lake.",
    icon: "🛰️",
  },
  {
    title: "Community Adoption",
    description: "Local communities embracing the technology and taking action to protect their lakes.",
    icon: "🤝",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Refs for each section
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const featuresRef = useRef(null);
  const storyRef = useRef(null);
  const getStartedRef = useRef(null);

  // Use InView to determine which section is active
  const heroInView = useInView(heroRef, { amount: 0.5 });
  const missionInView = useInView(missionRef, { amount: 0.3 });
  const featuresInView = useInView(featuresRef, { amount: 0.3 });
  const storyInView = useInView(storyRef, { amount: 0.3 });
  const getStartedInView = useInView(getStartedRef, { amount: 0.3 });

  // Update active section based on which ref is in view
  useEffect(() => {
    if (heroInView) setActiveSection(0);
    else if (missionInView) setActiveSection(1);
    else if (featuresInView) setActiveSection(2);
    else if (storyInView) setActiveSection(3);
    else if (getStartedInView) setActiveSection(5);
  }, [heroInView, missionInView, featuresInView, storyInView, getStartedInView]);

  // Track mouse position for gradient effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Add the particle background */}
      <ParticleBackground />

      {/* Fixed navigation indicator inspired by Tricky Knot */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col items-center gap-6">
          {['Hero', 'Mission', 'Features', 'Story', 'Contact'].map((item, idx) => (
            <motion.button
              key={idx}
              className="group relative flex items-center"
              onClick={() => scrollToSection([heroRef, missionRef, featuresRef, storyRef, getStartedRef][idx])}
              whileHover={{ scale: 1.1 }}
            >
              <div 
                className={`w-3 h-3 rounded-full ${activeSection === idx ? 'bg-blue-400' : 'bg-blue-500 bg-opacity-30'} transition-colors duration-300`}
              />
              <span 
                className="absolute right-full mr-4 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                style={{ textShadow: '0 0 5px rgba(0,0,0,0.5)' }}
              >
                {item}
              </span>
            </motion.button>
          ))}
          <div className="mt-2 h-24 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>
      </div>

      {/* Hero Section - without sun effect */}
      <section 
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950"></div>
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>
        </div>
        
        {/* Water reflection effect - kept this part for the water surface effect */}
        <div className="absolute left-0 right-0 bottom-0 h-[35%] z-1 overflow-hidden">
          {/* Reflection gradient with better blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/5 to-blue-900/40"></div>
          
          {/* Dynamic ripple effect simulation */}
          <div className="absolute inset-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={`ripple-layer-${i}`}
                className="absolute inset-0 bg-[url('/ripple.png')] bg-repeat opacity-20"
                animate={{ 
                  backgroundPositionX: ["0%", i % 2 === 0 ? "100%" : "-100%"],
                  backgroundPositionY: [i % 2 === 0 ? "0%" : "10%", i % 2 === 0 ? "10%" : "0%"]
                }}
                transition={{ 
                  duration: 15 + (i * 5), 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                style={{
                  backgroundSize: `${1000 + (i * 200)}px ${200 + (i * 50)}px`,
                  opacity: 0.1 + (i * 0.05)
                }}
              />
            ))}
          </div>
          
          {/* Enhanced shimmer effect for water */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div 
                key={`shimmer-${i}`}
                className="absolute bg-white rounded-full blur-sm"
                style={{ 
                  width: `${Math.random() * 6 + 2}px`, 
                  height: `${Math.random() * 2 + 1}px`, 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`, 
                  opacity: Math.random() * 0.3 + 0.1
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2, 
                  repeat: Infinity,
                  repeatDelay: Math.random() * 5,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero content remains unchanged */}
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              <MorphingText texts={morphingText} />
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-10 text-blue-100 font-light"
            >
              Real-time IoT sensors monitoring water quality,
              <span className="block">empowering communities to protect their lakes</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="/dashboard">
                <Button size="lg" className="bg-blue-600 text-white px-8 py-6 text-lg hover:bg-blue-700 w-full sm:w-auto">
                  View Live Data
                </Button>
              </Link>
              
              <Link href="/docs" onClick={(e) => {
                e.preventDefault();
                scrollToSection(featuresRef);
              }}>
                <Button variant="outline" size="lg" className="bg-transparent text-white border border-white/30 px-8 py-6 text-lg hover:bg-white/10 w-full sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animated expanding background video that spans multiple sections with ocean depth gradient */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none"
        initial={{ 
          opacity: 0,
          scale: 0.85
        }}
        whileInView={{ 
          opacity: 1,
          scale: 1
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut"
        }}
        viewport={{ once: true, margin: "-25%" }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Deep ocean gradient effect - from surface to deep ocean */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800/90 via-blue-900/90 to-blue-950/95"></div>
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>
            
        {/* Light rays effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[500px] h-[80vh] bg-gradient-to-b from-blue-400/10 via-blue-300/5 to-transparent rotate-12 transform-gpu"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-0 right-1/3 w-[300px] h-[70vh] bg-gradient-to-b from-blue-400/10 via-blue-300/5 to-transparent -rotate-15 transform-gpu"
          />
        </div>
          
        {/* Animated floating particles to simulate underwater debris/plankton */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div 
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%", 
                opacity: Math.random() * 0.5 + 0.1,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: [null, Math.random() * 10 - 5 + "%"],
                x: [null, Math.random() * 10 - 5 + "%"]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute w-1 h-1 bg-blue-200/30 rounded-full"
              style={{ 
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px"
              }}
            />
          ))}
        </div>
        
        {/* Ambient glowing spots (like bioluminescence) */}
        <motion.div 
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, delay: 1, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, delay: 2, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"
        />
      </motion.div>

      {/* Mission Section - Upper ocean depths (sunlight zone) */}
      <section 
        ref={missionRef}
        className="relative min-h-screen w-full flex items-center py-20 bg-transparent"
      >
        {/* Add subtle caustic light effect */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'] 
            }}
            transition={{ 
              duration: 20, 
              ease: "linear", 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="absolute inset-0 bg-[url('/caustics.png')] bg-repeat bg-[length:600px_600px]"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Our Mission
            </h2>
            <Separator className="w-24 h-1 mx-auto bg-blue-500 my-6" />
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light">
              Preserving and protecting our lakes through technology and community engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* First column - improved alignment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-white max-w-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative inline-block">
                Protecting Our Water Bodies
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
              </h3>
              
              <p className="text-lg text-blue-100 leading-relaxed">
                Urban lakes are critical ecosystems that provide habitat for wildlife, regulate temperature, 
                and serve as natural stormwater management systems. Yet they face unprecedented threats from 
                urbanization, pollution, and climate change.
              </p>
              
              <p className="text-lg text-blue-100 leading-relaxed">
                With real-time monitoring, we enable communities to quickly identify contamination events
                and take action before they become crises.
              </p>
            </motion.div>

            {/* Second column with cards - fixed alignment */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-white"
            >
              <Card className="border-l-4 border-blue-500 bg-white/5 border-y-0 border-r-0 hover:bg-white/10 transition-colors duration-300">
                <CardContent className="pt-6 px-6">
                  <CardTitle className="text-2xl font-bold mb-2 text-left">The Challenge</CardTitle>
                  <CardDescription className="text-gray-300 text-base text-left">
                    Lakes across India face unprecedented threats from pollution, encroachment, 
                    and neglect. Traditional monitoring is expensive and inconsistent.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500 bg-white/5 border-y-0 border-r-0 hover:bg-white/10 transition-colors duration-300">
                <CardContent className="pt-6 px-6">
                  <CardTitle className="text-2xl font-bold mb-2 text-left">Our Solution</CardTitle>
                  <CardDescription className="text-gray-300 text-base text-left">
                    An affordable, open-source monitoring system that provides real-time data
                    on water quality, enabling quick responses to contamination events.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500 bg-white/5 border-y-0 border-r-0 hover:bg-white/10 transition-colors duration-300">
                <CardContent className="pt-6 px-6">
                  <CardTitle className="text-2xl font-bold mb-2 text-left">The Vision</CardTitle>
                  <CardDescription className="text-gray-300 text-base text-left">
                    A network of monitored lakes across India, protected by engaged communities
                    with access to actionable data and resources.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Key statistics row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {[
              { label: "Lakes monitored", value: "50+" },
              { label: "Sensors deployed", value: "200+" },
              { label: "Data points/day", value: "48K" },
              { label: "Communities engaged", value: "25+" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-blue-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Features Section - transition to deeper water (twilight zone) */}
      <section 
        ref={featuresRef}
        className="relative min-h-screen flex items-center py-20 bg-transparent"
      >
        {/* Add a gradient overlay to simulate deeper water */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-blue-950/70 to-indigo-950/80"></div>
        
        {/* Add some floating particles in this section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div 
              key={`feature-particle-${i}`}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%", 
                opacity: 0.3,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: [null, `${Math.random() * 20 - 10}%`],
                x: [null, `${Math.random() * 20 - 10}%`]
              }}
              transition={{ 
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute w-2 h-2 bg-blue-300/20 rounded-full blur-[1px]"
            />
          ))}
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-white"
            >
              How It Works
            </motion.h2>
            
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Separator className="w-24 h-1 mx-auto bg-blue-500 my-6" />
            </motion.div>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              A complete ecosystem for lake monitoring and preservation
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15, 
                  type: "spring", 
                  stiffness: 50 
                }}
                whileHover={{ 
                  scale: 1.03, 
                  transition: { duration: 0.2 } 
                }}
              >
                <Card className="bg-white/10 border-0 shadow-xl h-full group hover:bg-white/20 transition-all duration-300 overflow-hidden relative">
                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x" 
                         style={{ maskImage: 'linear-gradient(to bottom, transparent, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black, transparent)' }}>
                    </div>
                  </div>
                  
                    <CardHeader>
                    <motion.div 
                      className="mb-2 p-3 rounded-lg bg-white/10 inline-flex items-center gap-4 relative overflow-hidden w-full"
                    >
                      {/* Pulsing effect behind icon */}
                      <span className="absolute inset-0 bg-white/0 group-hover:bg-white/20 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-700"></span>
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {feature.title}
                      </h3>
                    </motion.div>
                    </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - deep ocean (midnight zone) */}
      <section 
        ref={storyRef} 
        className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-indigo-950/80 to-blue-950/70"
      >
        {/* Add a more visible background overlay - keeping this for gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-800/20 via-indigo-900/30 to-blue-900/40"></div>

        {/* Remove the animated glowing effect that was here */}
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Our Story
            </h2>
            <Separator className="w-24 h-1 mx-auto bg-purple-400 my-6" />
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              How Namma Lakes evolved from an idea to reality
            </p>
          </motion.div>

          <div className="relative mt-20">
            {/* Timeline Line - keeping the brighter gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 shadow-[0_0_10px_rgba(147,51,234,0.5)]"></div>
            
            {/* Timeline Items - keeping these the same */}
            <div className="space-y-24">
              {storyPhases.map((phase, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    key={index} 
                    className="relative flex items-center"
                  >
                    {/* Timeline Point - keeping the glow */}
                    <motion.div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-2xl shadow-lg z-20"
                      whileHover={{ scale: 1.1 }}
                      style={{ boxShadow: '0 0 15px rgba(147,51,234,0.5)' }}
                    >
                      {phase.icon}
                    </motion.div>
                    
                    {/* Content - keeping the style */}
                    <div className={`w-full flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                      <Card className={`w-5/6 md:w-2/5 bg-white/15 backdrop-blur-sm border border-white/10 shadow-xl ${
                        isEven ? 'mr-16 md:mr-[calc(50%-2rem)]' : 'ml-16 md:ml-[calc(50%-2rem)]'
                      }`}
                      style={{ boxShadow: '0 4px 30px rgba(79, 70, 229, 0.2)' }}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-2xl font-bold text-white">{phase.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-200">{phase.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section 
        ref={getStartedRef}
        className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Join Our Movement
              </h2>
              <Separator className="w-24 h-1 bg-blue-500 my-6" />
              
              <p className="text-xl text-gray-300 mb-8">
                Whether you're a community member, technologist, researcher or educator, 
                there's a place for you in the Namma Lakes ecosystem.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <Droplets className="h-7 w-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Deploy a Sensor</h3>
                    <p className="text-gray-300">Install and maintain a sensor node at your local lake</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-600/20 p-2 rounded-lg">
                    <Users className="h-7 w-7 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Volunteer</h3>
                    <p className="text-gray-300">Contribute your skills in development, hardware, or outreach</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600/20 p-2 rounded-lg">
                    <LineChart className="h-7 w-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Use Our Data</h3>
                    <p className="text-gray-300">Access our API for research, education or policy-making</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://github.com/Nammalakes" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="bg-white/10 text-white border border-white/20 hover:bg-white/20 w-full flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Card className="bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Questions? We've got answers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] pr-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline py-4">
                          What is the purpose of this project?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          Namma Lakes provides an open-source, scalable solution for monitoring lake water quality in
                          real-time using distributed sensor networks. Our goal is to democratize environmental monitoring
                          and engage communities in protecting their local water bodies.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline py-4">
                          How does real-time monitoring work?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          Our system uses waterproof sensor nodes containing multiple sensors that measure parameters like pH, temperature,
                          dissolved oxygen, and turbidity. Data is transmitted via cellular/LoRaWAN networks to our cloud platform,
                          where it's analyzed and displayed on our dashboard in real-time.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline py-4">
                          How accurate are the sensors?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          Our sensors achieve up to 95% accuracy compared to professional-grade equipment. We regularly calibrate
                          sensors and compare readings with laboratory tests to ensure reliability. The platform also employs
                          anomaly detection algorithms to flag suspect readings.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline py-4">
                          How can I contribute to the project?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          You can contribute by deploying a sensor node in your community, volunteering your technical skills,
                          organizing awareness campaigns, or contributing to our open-source codebase on GitHub. Visit our
                          "Get Involved" page for specific opportunities.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline py-4">
                          What is the cost of implementing a sensor node?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          A basic sensor node costs approximately ₹7,000-15,000 ($85-$180) depending on the sensors used
                          and your location. This is significantly cheaper than commercial alternatives that can cost 
                          10-20 times more. We provide full build instructions and support for DIY implementation.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-6" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline py-4">
                          Is the data publicly available?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          Yes! All water quality data is available through our open API. We believe in data transparency
                          and accessibility. Researchers, students, and policy makers can freely use our data with appropriate
                          attribution. Sensitive location data for certain protected sites may have limited access.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-7" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline py-4">
                          How long do sensor nodes last?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          With proper maintenance, our sensor nodes can last 2-3 years. Solar-powered nodes reduce battery
                          replacements, though sensors themselves need periodic calibration and cleaning. We've designed
                          the system for easy maintenance by community volunteers.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-24"
          >
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              "When we heal our lakes, we heal our communities and our future."
            </p>
            
            <p className="text-white font-medium">— Namma Lakes Team</p>
            
            <div className="mt-12 flex justify-center">
              <Link href="#top" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10">
                  <ArrowDown className="h-4 w-4 rotate-180 mr-2" /> Back to top
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Magnetic button component inspired by Tricky Knot
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const magneticStrength = 30;
  const dampening = 5;

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: isHovered ? position.x / dampening : 0,
        y: isHovered ? position.y / dampening : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};
