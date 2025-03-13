"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Droplets, Users, LineChart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { MorphingText } from "@/components/magicui/morphing-text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import AOS from "aos";
import "aos/dist/aos.css";

const stories = [
  {
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80",
    title: "Preserving Our Heritage",
    quote: "These lakes have been our community's lifeline for generations. Now we can protect them better than ever.",
    author: "- Local Environmental Activist"
  },
];

const morphingTexts = [
  "Namma Lakes",
  "私たちの湖",
  "हमारी झीलें",
  "наши озера",
  "మా సరస్సులు",
  "我們的湖泊",
  "ನಮ್ಮ ಕೆರೆಗಳು",
  "ہمارے جھیلیں",
  "Οι λίμνες μας",
  "Nuestros lagos",
];

const impact = [
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: "Community Impact",
    description: "Supporting over 100,000 residents with clean and monitored water bodies.",
  },
  {
    icon: <Droplets className="h-6 w-6 text-blue-500" />,
    title: "Water Quality",
    description: "Maintaining optimal water quality through 24/7 monitoring and quick response systems.",
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: "Local Engagement",
    description: "Empowering communities with real-time data and educational initiatives.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-purple-500" />,
    title: "Sustainable Future",
    description: "Building a data-driven approach to water resource management.",
  }
];



const Loader = () => (
  <div className="w-24 h-24 relative loader">
  </div>
);

<style jsx>{`
  @keyframes wave {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`}</style>

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const storyContainerRef = useRef<HTMLDivElement>(null);
  const [storyProgress, setStoryProgress] = useState(0);
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  
  // Handle scroll for the story section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (storyContainerRef.current) {
        const element = storyContainerRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate progress through the story section (0 to 1)
        let progress = 0;
        
        // When the element comes into view
        if (rect.top < windowHeight && rect.bottom > 0) {
          // How far through the section we've scrolled (0 to 1)
          progress = 1 - (rect.bottom / (rect.height + windowHeight));
          // Clamp between 0 and 1
          progress = Math.max(0, Math.min(1, progress * 1.5));
        } else if (rect.bottom <= 0) {
          progress = 1; // Past the section
        }
        
        setStoryProgress(progress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  // Determine which story phase to show based on scroll progress
  const getStoryPhase = () => {
    if (storyProgress < 0.2) return 0; // Newspaper article
    if (storyProgress < 0.4) return 1; // Research phase
    if (storyProgress < 0.6) return 2; // Prototyping
    if (storyProgress < 0.8) return 3; // First deployment
    return 4; // Community adoption
  };
  
  const storyPhase = getStoryPhase();
  
  // Define content for each phase
  const storyPhases = [
    {
      title: "The Spark",
      description: "It all started with an article in a local newspaper highlighting the deteriorating condition of our beloved lakes.",
      imageSrc: "/story/newspaper.jpg",
      imageAlt: "Newspaper article about lake pollution",
      imageClassName: "scale-100 opacity-100"
    },
    {
      title: "Research & Discovery",
      description: "Our team spent months researching existing monitoring systems and identifying the need for affordable, open-source solutions.",
      imageSrc: "/story/research.jpg",
      imageAlt: "Team conducting research",
      imageClassName: "scale-110 opacity-100"
    },
    {
      title: "Building the Prototype",
      description: "Laptops whirring, keyboards clacking - building our first working prototype with Raspberry Pi and sensors.",
      imageSrc: "/story/prototype.jpg",
      imageAlt: "Building prototype sensors",
      imageClassName: "scale-120 opacity-100"
    },
    {
      title: "First Deployment",
      description: "The excitement of seeing real-time data flow in as we deployed our first sensors at Bellandur Lake.",
      imageSrc: "/story/deployment.jpg",
      imageAlt: "Deploying sensors at the lake",
      imageClassName: "scale-130 opacity-100"
    },
    {
      title: "Community Adoption",
      description: "Local communities embracing the technology, learning to interpret the data, and taking action to protect their lakes.",
      imageSrc: "/story/community.jpg",
      imageAlt: "Community members using the system",
      imageClassName: "scale-140 opacity-100"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover filter blur-xs"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-4 z-10 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <MorphingText texts={morphingTexts} />
            </h1>

            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
              Open-source, easy-to-deploy and affordable <em>tech</em> to monitor
              lake(s) at any scale
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <InteractiveHoverButton
                  className="bg-white text-blue-600"
                >
                  Get Started
                </InteractiveHoverButton>
              </Link>
              <Link href="/docs">
                <InteractiveHoverButton
                  className="bg-white text-blue-600"
                  icon="book"
                >
                  Read Docs
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Apple Style */}
      <section 
        ref={storyContainerRef}
        className="py-24 min-h-screen flex items-center bg-gradient-to-b from-background to-background relative"
      >
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Smarter Lakes evolved from an idea to reality
            </p>
          </div>
          
          {/* Sticky Container for Image */}
          <div className="relative">
            {/* Progress indicator */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1">
              <div className="h-full w-full bg-gray-200 rounded-full relative">
                <div 
                  className="absolute top-0 left-0 right-0 bg-blue-500 rounded-full transition-all duration-300 ease-out"
                  style={{ height: `${storyProgress * 100}%` }}
                ></div>
                
                {/* Progress dots */}
                {[0, 0.2, 0.4, 0.6, 0.8].map((point, index) => (
                  <div 
                    key={index}
                    className={`absolute w-6 h-6 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-300 ease-out ${storyProgress >= point ? 'bg-blue-500' : 'bg-gray-300'}`}
                    style={{ top: `${point * 100}%` }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Content split - Image and Text */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Sticky Image Container */}
              <div className="w-full md:w-1/2 sticky top-24 h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl mb-12 md:mb-0">
                <div className="relative w-full h-full bg-gray-100 rounded-2xl overflow-hidden">
                  {/* Show all images but control opacity and scale based on progress */}
                  {storyPhases.map((phase, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === storyPhase ? phase.imageClassName : 'opacity-0 scale-90'
                      }`}
                    >
                      {/* Placeholder for actual images */}
                      <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-800 text-xl font-bold">
                        {phase.imageAlt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scrolling Content */}
              <div className="w-full md:w-1/2 space-y-64">
                {storyPhases.map((phase, index) => (
                  <div 
                    key={index} 
                    className={`h-screen flex items-center transition-opacity duration-500 ${
                      index === storyPhase ? 'opacity-100' : 'opacity-40'
                    }`}
                  >
                    <div className="px-6 py-12">
                      <div className="text-sm font-medium text-blue-600 mb-2">Phase {index + 1}</div>
                      <h3 className="text-3xl font-bold mb-4">{phase.title}</h3>
                      <p className="text-lg text-gray-700">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Evolution Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Evolution of Our Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to a comprehensive lake monitoring system
            </p>
          </div>
          
          {/* Horizontal scrolling cards */}
          <div className="relative w-full" data-aos="fade-left">
            <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
              <div className="snap-center min-w-[320px] md:min-w-[400px] p-4 flex-shrink-0">
                <div className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="text-blue-600 text-3xl mb-4">01</div>
                  <h3 className="text-xl font-bold mb-3">Initial Concept</h3>
                  <p className="text-gray-700">Basic water quality sensors connected to a simple cloud dashboard.</p>
                  <div className="mt-6 h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">Initial Concept Sketch</span>
                  </div>
                </div>
              </div>
              
              <div className="snap-center min-w-[320px] md:min-w-[400px] p-4 flex-shrink-0">
                <div className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="text-blue-600 text-3xl mb-4">02</div>
                  <h3 className="text-xl font-bold mb-3">Prototype</h3>
                  <p className="text-gray-700">First working model with ESP8266 and basic sensors in waterproof housing.</p>
                  <div className="mt-6 h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">Prototype Image</span>
                  </div>
                </div>
              </div>
              
              <div className="snap-center min-w-[320px] md:min-w-[400px] p-4 flex-shrink-0">
                <div className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="text-blue-600 text-3xl mb-4">03</div>
                  <h3 className="text-xl font-bold mb-3">Field Testing</h3>
                  <p className="text-gray-700">Deployment of multiple units with solar power in controlled environments.</p>
                  <div className="mt-6 h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">Field Testing Photo</span>
                  </div>
                </div>
              </div>
              
              <div className="snap-center min-w-[320px] md:min-w-[400px] p-4 flex-shrink-0">
                <div className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="text-blue-600 text-3xl mb-4">04</div>
                  <h3 className="text-xl font-bold mb-3">Data Platform</h3>
                  <p className="text-gray-700">Development of comprehensive dashboard and mobile app for data analysis.</p>
                  <div className="mt-6 h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">Dashboard Screenshot</span>
                  </div>
                </div>
              </div>
              
              <div className="snap-center min-w-[320px] md:min-w-[400px] p-4 flex-shrink-0">
                <div className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="text-blue-600 text-3xl mb-4">05</div>
                  <h3 className="text-xl font-bold mb-3">Full System</h3>
                  <p className="text-gray-700">Complete ecosystem with sensors, alert systems, and community engagement tools.</p>
                  <div className="mt-6 h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">Full System Diagram</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Making a Difference Together
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the purpose of this project?</AccordionTrigger>
                <AccordionContent>
                The project aims to provide an open-source, scalable solution for monitoring lake contamination in real-time using distributed network systems.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How does real-time monitoring work?</AccordionTrigger>
            <AccordionContent>
            The system collects data from sensors placed in the lake and sends it to a centralized server using a Raspberry Pi and ESP8266.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accurate?</AccordionTrigger>
            <AccordionContent>
              Yes. It is accurate upto 95%.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How can I contribute to the project?</AccordionTrigger>
            <AccordionContent>
            You can contribute by submitting pull requests on GitHub.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of the Change</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our community of lake guardians and help protect our water resources for future generations
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-full"
            >
              Get Involved Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
