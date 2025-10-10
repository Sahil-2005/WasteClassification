import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Gauge, Sparkles } from "lucide-react";

const features = [
  { icon: Gauge, title: "Fast", desc: "Near-instant classification optimized for latency." },
  { icon: ShieldCheck, title: "Accurate", desc: "High-confidence predictions with clear feedback." },
  { icon: Sparkles, title: "Eco-conscious", desc: "Built to empower sustainable decisions at scale." },
];

export function WhyEcoVision() {
  return (
    <section id="technology" className="border-t border-border/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Why EcoVision?</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Enterprise polish meets real-world environmental impact.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur"
            >
              <feature.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-4 font-medium">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

