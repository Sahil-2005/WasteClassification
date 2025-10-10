import React from "react";

// Simple Button component (since you referenced "@/components/ui/button")
function Button({ asChild, size = "md", children, className = "", ...props }) {
  const sizes = {
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-md bg-primary text-white hover:bg-primary/90 transition font-medium ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 py-16">
      <div className="container mx-auto space-y-6 px-4 text-center">
        <h3 className="text-balance font-serif text-2xl md:text-3xl">
          Join our mission to build a sustainable future.
        </h3>

        <p className="mx-auto max-w-2xl text-muted-foreground">
          Start classifying waste with AI and make recycling easier for everyone.
        </p>

        <Button size="lg">
          <a href="#classify" className="no-underline text-white">
            Try EcoVision now
          </a>
        </Button>

        <p className="pt-6 text-sm text-muted-foreground">
          © 2025 EcoVision – Powered by AI for Earth.
        </p>
      </div>
    </footer>
  );
}
