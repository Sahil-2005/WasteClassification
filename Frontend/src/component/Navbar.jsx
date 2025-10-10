// import React from "react";
// import { motion } from "framer-motion";

// // Simple reusable Button component
// function Button({ variant = "default", children, className = "", asChild, ...props }) {
//   const baseClasses =
//     "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700",
//     outline: "border border-blue-500 text-blue-600 hover:bg-blue-50",
//   };

//   return (
//     <button
//       className={`${baseClasses} ${variants[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-40 border-b border-gray-200/50 backdrop-blur bg-white/60">
//       <div className="container mx-auto flex items-center justify-between px-4 py-3">
//         {/* Logo / Brand */}
//         <a href="/" className="group inline-flex items-center gap-2 no-underline">
//           <motion.span
//             aria-hidden
//             initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
//             animate={{ rotate: 0, scale: 1, opacity: 1 }}
//             transition={{ type: "spring", stiffness: 260, damping: 20 }}
//             className="inline-block h-6 w-6 rounded-md bg-blue-200 ring-1 ring-blue-300"
//           />
//           <span className="text-lg font-semibold font-serif tracking-tight text-gray-900">
//             EcoVision
//           </span>
//         </a>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
//           <a href="#technology" className="hover:text-gray-900 transition-colors">
//             Technology
//           </a>
//           <a href="#how" className="hover:text-gray-900 transition-colors">
//             How It Works
//           </a>
//           <a href="#types" className="hover:text-gray-900 transition-colors">
//             Supported Types
//           </a>
//           <a href="#contact" className="hover:text-gray-900 transition-colors">
//             Contact
//           </a>
//         </nav>

//         {/* Buttons */}
//         <div className="flex items-center gap-2">
//           <Button variant="outline" className="hidden sm:inline-flex bg-transparent">
//             <a href="#how" className="no-underline text-inherit">Explore</a>
//           </Button>
//           <Button>
//             <a href="#classify" className="no-underline text-white">Try the Demo</a>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }


import React from "react";
import { motion } from "framer-motion";

// Self-contained Button component
const Button = ({ children, variant = "default", className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2";

  const variants = {
    default: "bg-primary text-white hover:bg-primary-dark",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="/" className="group inline-flex items-center gap-2 no-underline">
          <motion.span
            aria-hidden="true"
            initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block h-6 w-6 rounded-md bg-primary/20 ring-1 ring-primary/30"
          />
          <span className="text-lg font-semibold font-serif tracking-tight text-foreground">
            EcoVision
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#technology" className="hover:text-foreground transition-colors">
            Technology
          </a>
          <a href="#how" className="hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#types" className="hover:text-foreground transition-colors">
            Supported Types
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden sm:inline-flex bg-transparent">
            <a href="#how" className="no-underline">
              Explore
            </a>
          </Button>
          <Button>
            <a href="#classify" className="no-underline">
              Try the Demo
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
