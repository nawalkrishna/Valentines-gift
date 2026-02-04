"use client";

import { motion } from "framer-motion";
import EvadingButton from "@/components/EvadingButton";

interface ValentineCardProps {
    onYes: () => void;
}

export default function ValentineCard({ onYes }: ValentineCardProps) {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50, rotate: -2 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -50, rotate: 2 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="cute-card p-6 sm:p-10 md:p-12 max-w-xl w-full text-center relative z-10 mx-4"
        >
            {/* Decorative Elements */}
            <motion.div
                animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute -top-8 -right-8 text-5xl filter drop-shadow-lg"
            >
                🌸
            </motion.div>
            <motion.div
                animate={{ rotate: [0, -10, 10, 0], y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden sm:block absolute -bottom-8 -left-8 text-5xl filter drop-shadow-lg"
            >
                🎀
            </motion.div>
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute top-4 left-4 text-2xl"
            >
                ✨
            </motion.div>
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="hidden sm:block absolute bottom-4 right-4 text-2xl"
            >
                ✨
            </motion.div>

            {/* Main Heart Illustration */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative"
                >
                    <motion.div
                        className="text-[70px] sm:text-[100px] md:text-[120px] filter drop-shadow-[0_10px_20px_rgba(255,107,157,0.4)]"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        💝
                    </motion.div>

                    {/* Orbiting sparkles */}
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <span className="absolute -top-2 left-1/2 text-xl sm:text-2xl">✨</span>
                    </motion.div>
                    <motion.div
                        animate={{
                            rotate: -360,
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <span className="absolute top-1/2 -right-4 text-lg sm:text-xl">💫</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-4xl md:text-5xl font-outfit font-black text-gray-800 leading-[1.15] mb-3 sm:mb-5 tracking-tight"
            >
                Annu, will you be <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 px-1">
                    my
                </span>{" "}
                Valentine?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 font-semibold mb-6 sm:mb-10 text-sm sm:text-lg italic"
            >
                Choose wisely... my heart is in your hands! 🥺💕
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
                <motion.button
                    onClick={onYes}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full sm:w-auto text-base sm:text-xl md:text-2xl py-3 sm:py-4 md:py-5 px-8 sm:px-10"
                >
                    Yes! 💖
                </motion.button>

                <EvadingButton />
            </motion.div>
        </motion.div>
    );
}
