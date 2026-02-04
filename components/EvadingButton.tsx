"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mobilePhrases = [
    "No",
    "Are you sure? 🤨",
    "Really sure? 🥺",
    "Annu, please... 😭",
    "Think again! ❤️",
    "Last chance 💔",
    "I'll buy you cake! 🍰",
    "Okay, watch this... 🪄"
];

export default function EvadingButton() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [angerLevel, setAngerLevel] = useState(0);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const isMovingRef = useRef(false);

    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
        };
        checkTouch();
        window.addEventListener("resize", checkTouch);
        return () => window.removeEventListener("resize", checkTouch);
    }, []);

    const runAway = useCallback(() => {
        if (isMovingRef.current || !buttonRef.current) return;
        isMovingRef.current = true;

        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();
        const buttonWidth = rect.width;
        const buttonHeight = rect.height;

        // Calculate the button's original position (center of where it was placed)
        const originalCenterX = rect.left - position.x + buttonWidth / 2;
        const originalCenterY = rect.top - position.y + buttonHeight / 2;

        // Define safe boundaries (padding from screen edges)
        const padding = 80;
        const minX = padding - originalCenterX + buttonWidth / 2;
        const maxX = window.innerWidth - padding - originalCenterX - buttonWidth / 2;
        const minY = padding - originalCenterY + buttonHeight / 2;
        const maxY = window.innerHeight - padding - originalCenterY - buttonHeight / 2;

        // Generate random position within safe bounds
        const newX = Math.random() * (maxX - minX) + minX;
        const newY = Math.random() * (maxY - minY) + minY;

        setPosition({ x: newX, y: newY });
        setAngerLevel(prev => Math.min(prev + 1, 10));

        // Allow next move after short delay
        setTimeout(() => {
            isMovingRef.current = false;
        }, 200);
    }, [position]);

    const handleMouseEnter = useCallback(() => {
        if (!isTouchDevice) {
            runAway();
        }
    }, [isTouchDevice, runAway]);

    const handleClick = () => {
        if (!isTouchDevice) {
            // On desktop, clicking should also make it run away
            runAway();
            return;
        }

        // Mobile logic
        if (phraseIndex < mobilePhrases.length - 1) {
            setPhraseIndex(phraseIndex + 1);
            setAngerLevel(prev => prev + 1);
        } else {
            setIsVisible(false);
        }
    };

    if (!isVisible) return null;

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            className="btn-secondary whitespace-nowrap min-w-[160px] sm:min-w-[200px] text-lg sm:text-2xl py-4 sm:py-5 relative overflow-hidden"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                touchAction: "none"
            }}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={phraseIndex}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-center gap-2"
                >
                    {isTouchDevice ? mobilePhrases[phraseIndex] : "No"}
                </motion.span>
            </AnimatePresence>

            {angerLevel > 5 && (
                <div
                    className="absolute inset-0 border-2 border-primary/30 pointer-events-none rounded-full animate-pulse"
                />
            )}
        </button>
    );
}
