import React from "react";
import { motion } from "framer-motion";

// ✅ Minimal SVG Icons (self-contained, no lucide-react import)
const UploadIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12V4m0 0l-4 4m4-4l4 4" />
  </svg>
);

const BrainIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 4.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM6 4.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM4.5 8H19.5M4.5 8a2 2 0 00-2 2v2a2 2 0 002 2M19.5 8a2 2 0 012 2v2a2 2 0 01-2 2M4.5 14H19.5"
    />
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// ✅ Steps data
const steps = [
  {
    icon: UploadIcon,
    title: "Upload",
    desc: "Add a photo of the item you want to classify.",
  },
  {
    icon: BrainIcon,
    title: "AI Analysis",
    desc: "Our model detects the material and estimates confidence.",
  },
  {
    icon: CheckCircleIcon,
    title: "Result",
    desc: "Get a clear label and guidance for recycling.",
  },
];

// ✅ Main Component
export function HowItWorks() {
  return (
    <section id="how" className="border-t border-border/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl">How it works</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A simple 3-step flow designed for speed and accuracy.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur"
            >
              <s.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
