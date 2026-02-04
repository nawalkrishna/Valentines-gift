"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const celebrationEmojis = ["💖", "✨", "🌸", "⭐", "🎀", "🍪", "🍭", "💕", "🦋", "🌷"];

export default function CelebrationView() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 overflow-hidden"
        >
            {/* Colorful gradient background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100"
            />

            {/* Animated rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[1, 2, 3].map((ring) => (
                    <motion.div
                        key={ring}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{
                            scale: [0.5, 2, 3],
                            opacity: [0.5, 0.2, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: ring * 0.5,
                            ease: "easeOut"
                        }}
                        className="absolute w-32 h-32 rounded-full border-4 border-pink-300/50"
                    />
                ))}
            </div>

            {/* Floating Celebration Emojis */}
            {[...Array(35)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        y: "120%",
                        x: `${Math.random() * 100}%`,
                        rotate: 0,
                        scale: 0.5 + Math.random() * 0.8,
                        opacity: 0
                    }}
                    animate={{
                        y: "-20%",
                        x: `${Math.random() * 100}%`,
                        rotate: [0, 360],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeOut"
                    }}
                    className="absolute pointer-events-none text-xl sm:text-3xl filter drop-shadow-md"
                >
                    {celebrationEmojis[i % celebrationEmojis.length]}
                </motion.div>
            ))}

            <motion.div
                initial={{ scale: 0.3, opacity: 0, rotate: -15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
                className="cute-card p-6 sm:p-10 md:p-14 max-w-xl w-full text-center relative z-10"
            >
                {/* Bouncing emoji */}
                <motion.div
                    className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-[60px] sm:text-[100px] filter drop-shadow-xl">🎉</span>
                </motion.div>

                <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-6">
                    {/* Main Title */}
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tighter"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-400">
                            YAAAY!
                        </span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-xl sm:text-3xl md:text-4xl block mt-2 sm:mt-4 text-gray-700"
                        >
                            You made my day! 💖
                        </motion.span>
                    </motion.h1>

                    {/* Message */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-sm sm:text-lg md:text-xl text-gray-600 font-semibold max-w-md mx-auto leading-relaxed"
                    >
                        I knew you would say yes, Annu! <br />
                        Best. Decision. Ever! 🌹✨
                    </motion.p>

                    {/* Dancing emojis row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="pt-4 sm:pt-8 flex flex-col items-center gap-4 sm:gap-6"
                    >
                        <div className="flex gap-2 sm:gap-4">
                            {["🥰", "😍", "💕", "🤗", "💝"].map((emoji, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -12, 0],
                                        rotate: [0, 15, -15, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        delay: i * 0.15,
                                        repeat: Infinity,
                                        duration: 1.5,
                                        ease: "easeInOut"
                                    }}
                                    className="text-2xl sm:text-4xl md:text-5xl filter drop-shadow-md"
                                >
                                    {emoji}
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => window.location.reload()}
                            className="mt-2 sm:mt-6 text-pink-400 hover:text-pink-600 text-sm sm:text-base font-black tracking-widest uppercase transition-colors"
                        >
                            ✨ Play Again ✨
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
