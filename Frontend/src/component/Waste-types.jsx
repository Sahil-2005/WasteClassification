import React from "react";
import { motion } from "framer-motion";
import { Bold as Bottle, FlaskConical, Wrench, Leaf, FileText, Trash } from "lucide-react";

const types = [
  { icon: FileText, label: "Cardboard" },
  { icon: Bottle, label: "Plastic" },
  { icon: FlaskConical, label: "Glass" },
  { icon: Wrench, label: "Metal" },
  { icon: FileText, label: "Paper" },
  { icon: Trash, label: "Trash" },
];

export default function WasteTypes() {
  return (
    <section id="types" className="border-t border-border/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl">Supported waste types</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          EcoVision recognizes common materials to streamline recycling.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {types.map((type, index) => (
            <motion.div
              key={type.label}
              initial={{ y: 6, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.04 }}
              className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur"
            >
              <type.icon className="h-5 w-5 text-primary" aria-hidden />
              <span>{type.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
