import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

// ✅ Utility for combining classes
const cn = (...classes) => classes.filter(Boolean).join(" ");

// ✅ Simple Button component
const Button = ({ children, variant = "default", className = "", disabled = false, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };
  return (
    <button
      disabled={disabled}
      className={`${base} ${variants[variant]} px-4 py-2 text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ✅ Simple Card component set
const Card = ({ children, className = "" }) => (
  <div className={cn("rounded-2xl border border-border/60 bg-card/60 shadow-2xl backdrop-blur", className)}>
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="border-b border-border/60 p-5">{children}</div>;
const CardTitle = ({ children }) => <h2 className="font-serif text-2xl">{children}</h2>;
const CardContent = ({ children }) => <div className="p-6 space-y-6">{children}</div>;

// ✅ Inline icons (no lucide-react)
const LoaderCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 0110 10" />
  </svg>
);

const Recycle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 12l-3-3m0 0l-3 3m3-3v12M3 12l3 3m0 0l3-3m-3 3V0"
    />
  </svg>
);

export function UploadCard() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setError(null);
  };

  const onPredict = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);

    const form = new FormData();
    form.append("file", image);

    try {
      const res = await axios.post("http://localhost:5000/predict", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data);
    } catch (err) {
      setError("Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const confidencePct = Math.round((result?.confidence ?? 0) * 100);

  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader>
        <CardTitle>Upload & Classify</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Upload Input */}
        <label className="block cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={onChange}
            className="hidden"
            aria-label="Upload an image of waste"
          />
          <div className="flex items-center justify-between rounded-xl border border-dashed border-border/60 bg-background/40 p-5 transition hover:border-primary/60">
            <div>
              <p className="font-medium">Choose an image</p>
              <p className="text-sm text-muted-foreground">PNG, JPG up to a few MB</p>
            </div>
            <Button variant="outline">Browse</Button>
          </div>
        </label>

        {/* Preview + Prediction */}
        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 items-start gap-4 md:grid-cols-[240px,1fr]"
          >
            <div className="overflow-hidden rounded-lg border border-border/60">
              <img
                src={preview || "/placeholder.svg"}
                alt="Uploaded preview"
                className="h-60 w-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <Button onClick={onPredict} disabled={loading} className="w-full md:w-auto">
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Analyzing...
                  </span>
                ) : (
                  "Predict"
                )}
              </Button>

              {error && <p className="text-sm text-red-500">{error}</p>}

              {result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl border border-border/60 bg-card/60 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Predicted</p>
                      <p className="font-serif text-xl">{result.predicted}</p>
                    </div>
                    <Recycle className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Confidence</span>
                      <span>{confidencePct}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-2 rounded-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${confidencePct}%` }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={confidencePct}
                      />
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      You just helped recycle better!
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
