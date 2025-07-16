'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold">Nexus: AI Video Automation</h1>
        <p className="mt-4 text-lg text-gray-400">Daily AI video editing. Auto post to YouTube & TikTok. Free & Pro modes.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-800 text-white text-lg px-6 py-3 rounded-2xl shadow-xl">
            Try Nexus Free
          </Button>
          <a href="https://ko-fi.com/nexusai12" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-white border-gray-500 hover:border-white px-6 py-3 rounded-2xl">
              Unlock Pro
            </Button>
          </a>
        </div>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mt-16">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">AI Video Clipping</h2>
          <p className="text-gray-400">Instantly trim, highlight, and sync with music using powerful AI tools.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">YouTube & TikTok Auto Post</h2>
          <p className="text-gray-400">Link your accounts and schedule daily video uploads automatically.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Voiceovers & TTS</h2>
          <p className="text-gray-400">Generate realistic voiceovers with text-to-speech AI in multiple voices.</p>
        </motion.div>
      </section>

      <section className="mt-24 text-center">
        <h3 className="text-2xl font-semibold mb-4">Support Nexus</h3>
        <p className="text-gray-400 mb-4">Love the tool? Unlock Pro features and support development on Ko-fi.</p>
        <a href="https://ko-fi.com/nexusai12" target="_blank" rel="noopener noreferrer">
          <Button className="bg-pink-600 hover:bg-pink-800 text-white px-6 py-3 rounded-2xl">
            Support on Ko-fi
          </Button>
        </a>
      </section>

      <footer className="mt-24 text-center text-gray-500">
        <p>© 2025 Nexus AI. Created by Freiner-web (Age 16). Contact: pophiwaprosper@gmail.com</p>
      </footer>
    </div>
  );
            }
          
