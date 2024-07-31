import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHandsHelping, FaLightbulb, FaHeart, FaLock, FaGlobeAmericas } from "react-icons/fa";

function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white py-20 px-4">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1
          className="text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200"
          variants={itemVariants}
        >
          About You Are Not Alone
        </motion.h1>

        <motion.p className="text-2xl mb-16 text-center" variants={itemVariants}>
          Connecting unique individuals through shared experiences and fostering a global community of understanding.
        </motion.p>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20" variants={sectionVariants}>
          <Feature
            icon={<FaUsers className="text-5xl mb-6 text-pink-300" />}
            title="Connect with Like-Minded People"
            description="Find others who share your unique experiences and quirks, no matter how unusual they may seem. Our advanced matching algorithm ensures you connect with those who truly understand you."
          />
          <Feature
            icon={<FaHandsHelping className="text-5xl mb-6 text-pink-300" />}
            title="Support and Understanding"
            description="Get the emotional support you need from people who truly understand your perspective. Our community is built on empathy, compassion, and mutual respect."
          />
          <Feature
            icon={<FaLightbulb className="text-5xl mb-6 text-pink-300" />}
            title="Discover New Perspectives"
            description="Broaden your horizons by learning about diverse experiences from people around the world. Every story shared is an opportunity for growth and understanding."
          />
          <Feature
            icon={<FaHeart className="text-5xl mb-6 text-pink-300" />}
            title="Build Meaningful Relationships"
            description="Form deep, lasting connections based on shared experiences and mutual understanding. Our platform facilitates genuine interactions that can blossom into lifelong friendships."
          />
        </motion.div>

        <motion.div className="bg-white bg-opacity-10 rounded-3xl p-12 backdrop-filter backdrop-blur-lg mb-20" variants={sectionVariants}>
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl mb-6 leading-relaxed">
            At You Are Not Alone, we believe that everyone deserves to feel understood and connected. Our mission is to create a safe, inclusive space where individuals can share their unique experiences, find others with similar stories, and build meaningful relationships.
          </p>
          <p className="text-xl mb-6 leading-relaxed">
            We understand that sometimes, the things that make us feel different or isolated are the very things that can bring us together. By fostering a community of openness and acceptance, we aim to break down barriers, reduce feelings of loneliness, and celebrate the beautiful diversity of human experiences.
          </p>
          <p className="text-xl leading-relaxed">
            Join us in our journey to create a world where no one feels alone in their experiences, where every story is valued, and where connections are forged through understanding and empathy.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20" variants={sectionVariants}>
          <FeatureHighlight
            icon={<FaLock className="text-5xl mb-6 text-pink-300" />}
            title="Privacy and Security"
            description="Your privacy is our top priority. We use state-of-the-art encryption and strict data protection measures to ensure your personal information and shared experiences remain secure and confidential."
          />
          <FeatureHighlight
            icon={<FaGlobeAmericas className="text-5xl mb-6 text-pink-300" />}
            title="Global Reach"
            description="Connect with people from all corners of the world. Our platform breaks down geographical barriers, allowing you to find kindred spirits no matter where they are located."
          />
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-8">Ready to Join Our Community?</h2>
          <button className="bg-white text-purple-600 font-bold py-4 px-10 rounded-full text-xl transition duration-300 hover:bg-pink-100 hover:text-purple-700 transform hover:scale-105">
            Get Started Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white bg-opacity-10 rounded-3xl p-8 backdrop-filter backdrop-blur-lg transform transition duration-300 hover:scale-105"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className="bg-purple-800 bg-opacity-30 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-lg text-center">{description}</p>
    </motion.div>
  );
}

function FeatureHighlight({ icon, title, description }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-purple-700 to-pink-600 rounded-3xl p-10 shadow-2xl transform transition duration-300 hover:scale-105"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className="bg-white bg-opacity-20 rounded-full w-24 h-24 flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-3xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-xl text-center">{description}</p>
    </motion.div>
  );
}

export default About;