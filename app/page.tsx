"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Droplets, Users, LineChart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
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
          Smarter
          <br />
          <LineShadowText className="italic font-extrabold" shadowColor="white">
          Lakes
          </LineShadowText>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
          Open-source, easy-to-deploy and affordable <em>tech</em> to monitor 
          lake(s) at any scale
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <InteractiveHoverButton
          className="bg-white text-blue-600"
          >
            Get Started
          </InteractiveHoverButton>
          <InteractiveHoverButton
          className="bg-white text-blue-600"
          icon="book"
          >
            Read Docs
          </InteractiveHoverButton>
        </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Real Stories, Real Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative h-96 overflow-hidden rounded-lg">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                      <p className="text-sm italic mb-2">{story.quote}</p>
                      <p className="text-sm text-blue-200">{story.author}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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