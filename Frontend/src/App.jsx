// import { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import Navbar from "./component/Navbar";

// export default function App() {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//     setResult(null);
//   };

//   const handleUpload = async () => {
//     if (!image) return;
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", image);
//     try {
//       const res = await axios.post("http://localhost:5000/predict", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setResult(res.data);
//     } catch {
//       alert("Prediction failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4">
//     <Navbar/>
//       <motion.h1
//         className="text-4xl font-bold mb-6"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         ♻️ Smart Waste Classifier
//       </motion.h1>

//       <motion.div
//         className="bg-gray-800/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md text-center border border-gray-700"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//       >
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="w-full mb-5 text-sm bg-gray-700 text-gray-200 rounded-lg file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-green-600 file:text-white hover:file:bg-green-700"
//         />

//         {preview && (
//           <motion.img
//             src={preview}
//             alt="preview"
//             className="w-64 h-64 mx-auto rounded-xl object-cover mb-4 shadow-lg"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           />
//         )}

//         <button
//           onClick={handleUpload}
//           disabled={loading}
//           className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg w-full transition font-semibold disabled:opacity-70"
//         >
//           {loading ? "Analyzing..." : "Predict"}
//         </button>

//         {result && (
//           <motion.div
//             className="mt-6 bg-gray-900/70 p-4 rounded-xl"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <h2 className="text-xl font-semibold">
//               Predicted: <span className="text-green-400">{result.predicted}</span>
//             </h2>
//             <div className="w-full bg-gray-700 rounded-full h-3 mt-3">
//               <motion.div
//                 className="bg-green-500 h-3 rounded-full"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${result.confidence * 100}%` }}
//               />
//             </div>
//             <p className="mt-2 text-sm text-gray-300">
//               Confidence: {(result.confidence * 100).toFixed(2)}%
//             </p>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// }



// App.jsx
// import React from "react";
// import { Hero } from "./component/Hero";
// import { Navbar } from "./component/Navbar";
// import { UploadCard } from "./component/Upload-card.jsx";
// import { HowItWorks } from "./component/How-it-works";
// import {WhyEcoVision} from "./component/Why-ecovision";
// import  WasteTypes  from "./component/Waste-types";
// import { Footer } from "./component/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <section id="classify" className="relative py-10 md:py-16">
//         <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(50%_50%_at_50%_0%,black,transparent)]">
//           <div className="h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-br from-primary/30 to-accent/20 mx-auto" />
//         </div>
//         <div className="container mx-auto px-4">
//           <UploadCard />
//         </div>
//       </section>
//       <WhyEcoVision/>
//       <HowItWorks />
//       <WasteTypes />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// App.jsx
import React from "react";
import { Hero } from "./component/Hero";
import { Navbar } from "./component/Navbar";
import { UploadCard } from "./component/Upload-card.jsx";
import { HowItWorks } from "./component/How-it-works";
import { WhyEcoVision } from "./component/Why-ecovision";
import WasteTypes from "./component/Waste-types";
import { Footer } from "./component/Footer";

function App() {
  return (
    <div className="App dark bg-background text-foreground min-h-screen transition-colors duration-500 p-10">
      <Navbar />
      <Hero />
      {/* <section id="classify" className="relative py-10 md:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(50%_50%_at_50%_0%,black,transparent)]">
          <div className="h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-br from-primary/30 to-accent/20 mx-auto" />
        </div>
        <div className="container mx-auto px-4">
          <UploadCard />
        </div>
      </section> */}

      <section id="classify" className="relative py-10 md:py-16">
  {/* 🌿 Subtle green glow background */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    {/* Main top-center glow */}
    <div className="absolute top-[-10%] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full 
      bg-gradient-to-br from-primary/40 via-emerald-400/20 to-accent/30 blur-3xl opacity-60 animate-pulse" />

    {/* Extra side glows for richness */}
    <div className="absolute bottom-[-10%] left-[10%] h-64 w-64 rounded-full 
      bg-gradient-to-tr from-emerald-500/30 to-primary/20 blur-3xl opacity-40" />
    <div className="absolute bottom-[-10%] right-[10%] h-64 w-64 rounded-full 
      bg-gradient-to-tl from-accent/30 to-emerald-400/20 blur-3xl opacity-40" />
  </div>

  <div className="container mx-auto px-4">
    <UploadCard />
  </div>
</section>

      <WhyEcoVision />
      <HowItWorks />
      <WasteTypes />
      <Footer />
    </div>
  );
}

export default App;
