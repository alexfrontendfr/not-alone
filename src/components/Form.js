import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaGoogle } from "react-icons/fa";

function Form() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    experience: "",
    age: "",
    location: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.experience.trim() !== "";
      case 2:
        return formData.age !== "" && parseInt(formData.age) >= 18;
      case 3:
        return formData.location.trim().length >= 3 && formData.location.trim().length <= 50;
      case 4:
        return formData.email.trim() !== "";
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (isStepValid()) {
      setStep((prevStep) => prevStep + 1);
    } else {
      let errorMessage = "Please fill out all required fields before proceeding.";
      if (step === 2 && formData.age !== "" && parseInt(formData.age) < 18) {
        errorMessage = "You must be 18 or older to continue.";
      } else if (step === 3 && (formData.location.trim().length < 3 || formData.location.trim().length > 50)) {
        errorMessage = "Location must be between 3 and 50 characters.";
      }
      alert(errorMessage);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStep(5); // Move to success message
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Submission failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const gradients = [
    "from-purple-600 to-pink-500",
    "from-blue-600 to-teal-400",
    "from-yellow-400 to-orange-500",
    "from-green-500 to-emerald-400",
    "from-indigo-600 to-purple-500",
  ];

  const stepLabels = [
    "Share Your Unique Quirk",
    "Confirm Your Journey",
    "Pinpoint Your Locale",
    "Connect & Discover",
    "Welcome to Your Tribe!",
  ];

  const missionStatements = [
    "Embrace your uniqueness, it's what makes you extraordinary!",
    "Age is just a number, but your experiences are priceless.",
    "Your location is the first step to finding your kindred spirits.",
    "Join our community and discover you're not alone in your quirks!",
    "Congratulations on taking the first step towards genuine connections!",
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${gradients[step - 1]} p-4 transition-all duration-500`}>
      <motion.div
        className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Step {step} of 4</h2>
          <div className="text-lg font-semibold text-gray-700">{stepLabels[step - 1]}</div>
          <div className="mt-2 text-sm text-gray-600 italic">{missionStatements[step - 1]}</div>
        </div>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4"
            >
              <label className="block text-sm font-medium text-gray-700">Your Unique Experience</label>
              <textarea
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                rows="4"
                placeholder="What's something you do that you think nobody else does?"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
              />
              <div className="flex justify-end">
                <button
                  className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition duration-300 flex items-center space-x-2 shadow-lg"
                  onClick={nextStep}
                >
                  <span>Next</span>
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4"
            >
              <label className="block text-sm font-medium text-gray-700">Your Age</label>
              <input
                type="number"
                className="w-full p-3 border-2 border-blue-300 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                placeholder="Your age (must be 18+)"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min="18"
                required
              />
              <div className="flex justify-between">
                <button
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300 transition duration-300 flex items-center space-x-2"
                  onClick={prevStep}
                >
                  <FaArrowLeft />
                  <span>Back</span>
                </button>
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300 flex items-center space-x-2 shadow-lg"
                  onClick={nextStep}
                >
                  <span>Next</span>
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4"
            >
              <label className="block text-sm font-medium text-gray-700">Your Location</label>
              <input
                type="text"
                className="w-full p-3 border-2 border-yellow-300 rounded-xl focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition"
                placeholder="Your city (3-50 characters)"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                minLength="3"
                maxLength="50"
                required
              />
              <div className="flex justify-between">
                <button
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300 transition duration-300 flex items-center space-x-2"
                  onClick={prevStep}
                >
                  <FaArrowLeft />
                  <span>Back</span>
                </button>
                <button
                  className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600 transition duration-300 flex items-center space-x-2 shadow-lg"
                  onClick={nextStep}
                >
                  <span>Next</span>
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sign In to Submit</h3>
              <button
                onClick={handleGoogleLogin}
                className="bg-white text-gray-700 px-6 py-3 rounded-xl border-2 border-green-500 hover:bg-green-50 transition duration-300 w-full flex items-center justify-center shadow-lg hover:shadow-xl space-x-2"
              >
                <FaGoogle className="text-green-600" />
                <span>Sign in with Google</span>
              </button>
              <p className="mt-4 text-sm text-center text-gray-600">
                By signing in, you agree to our <a href="/terms" className="underline text-green-600 hover:text-green-800">Terms of Service</a> and <a href="/privacy" className="underline text-green-600 hover:text-green-800">Privacy Policy</a>.
              </p>
              <div className="flex justify-start mt-4">
                <button
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300 transition duration-300 flex items-center space-x-2"
                  onClick={prevStep}
                >
                  <FaArrowLeft />
                  <span>Back</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-indigo-600">Thank You!</h2>
              <p className="text-lg text-gray-700 mb-8">
                Your story has been submitted. We'll notify you if we find a match!
              </p>
              <motion.img
                src="/images/success-character.png"
                alt="Success"
                className="w-48 h-48 mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Form;