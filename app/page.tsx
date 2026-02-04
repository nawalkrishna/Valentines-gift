"use client";

import { useState, useEffect } from "react";
import ValentineCard from "@/components/ValentineCard";
import CelebrationView from "@/components/CelebrationView";
import { AnimatePresence, motion } from "framer-motion";

const floatingEmojis = ["💖", "💕", "💗", "🌸", "✨", "🦋", "🌷", "💐"];

export default function Home() {
    const [isCelebrating, setIsCelebrating] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {mounted && floatingEmojis.map((emoji, i) => (
                    <motion.div
                        key={`left-${i}`}
                        initial={{
                            opacity: 0,
                            x: -50,
                            y: `${10 + i * 12}%`,
                            scale: 0.5 + Math.random() * 0.5,
                        }}
                        animate={{
                            opacity: [0, 0.7, 0.4, 0.7, 0],
                            x: [-50, 30, 20, 40, -50],
                            y: [`${10 + i * 12}%`, `${8 + i * 12}%`, `${12 + i * 12}%`],
                            rotate: [0, 10, -10, 5, 0],
                        }}
                        transition={{
                            duration: 12 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.8
                        }}
                        className="absolute text-2xl sm:text-4xl filter drop-shadow-lg"
                    >
                        {emoji}
                    </motion.div>
                ))}

                {mounted && floatingEmojis.map((emoji, i) => (
                    <motion.div
                        key={`right-${i}`}
                        initial={{
                            opacity: 0,
                            right: -50,
                            y: `${15 + i * 11}%`,
                            scale: 0.5 + Math.random() * 0.5,
                        }}
                        animate={{
                            opacity: [0, 0.6, 0.3, 0.6, 0],
                            right: [-50, 40, 25, 50, -50],
                            y: [`${15 + i * 11}%`, `${13 + i * 11}%`, `${17 + i * 11}%`],
                            rotate: [0, -15, 15, -5, 0],
                        }}
                        transition={{
                            duration: 14 + i * 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.2
                        }}
                        className="absolute text-2xl sm:text-4xl filter drop-shadow-lg"
                        style={{ right: 0 }}
                    >
                        {emoji}
                    </motion.div>
                ))}
            </div>

            {/* Glowing orbs for depth */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />

            <AnimatePresence mode="wait">
                {!isCelebrating ? (
                    <ValentineCard key="card" onYes={() => setIsCelebrating(true)} />
                ) : (
                    <CelebrationView key="celebration" />
                )}
            </AnimatePresence>

            {/* Bottom Signature */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10"
            >
                <p className="font-outfit text-primary/50 text-xs sm:text-sm font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center gap-2">
                    <span className="animate-pulse">💝</span>
                    Made with Love
                    <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>💝</span>
                </p>
            </motion.div>
        </main>
    );
}
