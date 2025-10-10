import React from "react";
import { motion } from "framer-motion";

// Simple reusable Button component
const Button = ({ children, variant = "default", size = "md", className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button
      className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Blur Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-2 md:py-20 lg:py-28">
        {/* Left Text Section */}
        <div>
          <motion.h1
            className="text-balance font-serif text-4xl leading-tight md:text-6xl"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            EcoVision – Smart Waste Classifier
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-pretty text-muted-foreground md:text-lg"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            AI-powered waste detection for a cleaner planet. Upload a photo and get instant, precise classification with
            confidence.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg">
              <a href="#classify" className="no-underline">
                Get a Demo
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#how" className="no-underline">
                See how it works
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Illustration Section */}
        <motion.div
          className="rounded-2xl border border-border/60 bg-card/50 p-6 shadow-xl backdrop-blur"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-inset ring-border/60" />
          <p className="mt-3 text-sm text-muted-foreground">
            Trusted AI classification built with enterprise-grade reliability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
