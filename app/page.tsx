"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Droplets, Users, LineChart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { MorphingText } from "@/components/magicui/morphing-text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"


const morphingTexts = [
  "మా సరస్సులు",
  "ನಮ್ಮ ಕೆರೆಗಳು",
  "हमारी झीलें",
  "आमचे तलाव",
  "Namma Lakes",
];

export function MorphingTextDemo() {
  return <MorphingText texts={morphingTexts} />;
}

const stories = [
  {
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80",
    title: "Preserving Our Heritage",
    quote: "These lakes have been our community's lifeline for generations. Now we can protect them better than ever.",
    author: "- Local Environmental Activist"
  },
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


export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

       {/* Showcase Section */}
       <section className="py-24 bg-gradient-to-b from-background via-purple-100/20 dark:via-purple-900/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ideation Phase
              </h2>
              <p className="text-muted-foreground text-lg">
                It all started with an article from a local newspaper.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20 transform rotate-6" />
              <img
                alt="some img"
                className="rounded-2xl shadow-xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trip Planning Section */}
      <section className="py-24 bg-gradient-to-b from-background via-cyan-100/20 dark:via-cyan-900/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 transform -rotate-6" />
              <img
                alt="some img"
                className="rounded-2xl shadow-xl relative z-10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Development Phase
              </h2>
              <p className="text-muted-foreground text-lg">
                All laptops whiring and keyboards getting smashed to finish writing the software.
              </p>
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-border"
                >
                  Start Planning
                </Button>
              </Link>
            </motion.div>
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
