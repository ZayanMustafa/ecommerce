

// components/home/EcoQuiz.js
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quizSteps = [
  {
    question: "What's your main sustainability goal?",
    options: [
      { text: "Reduce energy use", resultPath: "/products?filter=energy" },
      { text: "Cut plastic waste", resultPath: "/products?filter=plastic" },
      { text: "Save water", resultPath: "/products?filter=water" }
    ]
  }
];

export default function EcoQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (path) => {
    if (currentStep === quizSteps.length - 1) {
      setCompleted(true);
      setTimeout(() => window.location.href = path, 1500);
    } else {
      setCurrentStep(s => s + 1);
    }
  };

  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-heading mb-2 text-center">
          Find Your Perfect Eco-Gadget
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Answer 3 quick questions for personalized recommendations
        </p>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="h-2 bg-gray-100 rounded-full mb-8">
            <motion.div 
              className="h-full bg-teal-500 rounded-full" 
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {!completed ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-medium mb-6">
                  {quizSteps[currentStep].question}
                </h3>
                <div className="space-y-3">
                  {quizSteps[currentStep].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.resultPath)}
                      className="w-full text-left p-4 border rounded-lg hover:bg-teal-50 transition-colors flex items-center"
                    >
                      <span className="bg-teal-100 text-teal-800 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        {i + 1}
                      </span>
                      {opt.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-medium mb-2">
                  Finding your perfect matches...
                </h3>
                <p>Redirecting to personalized recommendations</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

