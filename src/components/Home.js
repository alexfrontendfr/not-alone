import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGlobeAmericas,
  FaUsers,
  FaQuestionCircle,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";

// Import user images (you'll need to add these to your project)
import user1 from "./images/user1.jpg";
import user2 from "./images/user2.jpg";
import user3 from "./images/user3.jpg";
import user4 from "./images/user4.jpg";
import user5 from "./images/user5.jpg";
import user6 from "./images/user6.jpg";

import london from "./images/london.jpg";
import tokyo from "./images/tokyo.jpg";
import newyork from "./images/new-york.jpg";
import paris from "./images/paris.jpg";

function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <HeroSection />
      <FeaturedCitiesSection />
      <SharedWhispersSection />
      <LightUpText />
      <CommunitySection />
      <ExpandedFAQSection />
      <FloatingIcons />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-white px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bubble-subtitle mb-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold"
      >
        Over 1 million people connected!
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mb-6 text-center text-purple-900"
      >
        The world's destination for understanding
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl md:text-2xl mb-8 text-center max-w-2xl text-gray-700"
      >
        Get inspired by the stories of millions around the world who share
        unique experiences.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          to="/form"
          className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 hover:bg-purple-700"
        >
          Share Your Story
        </Link>
      </motion.div>
      <UserTicker className="mt-12" />
      <ScrollArrow className="mt-8" />
    </section>
  );
}

function UserTicker() {
  const users = [
    { name: "Alex Johnson", role: "Introvert Explorer", image: user1 },
    { name: "Sarah Lee", role: "Night Owl Coder", image: user2 },
    { name: "Miguel Rodríguez", role: "Foodie Adventurer", image: user3 },
    { name: "Emily Chen", role: "Bookworm Traveler", image: user4 },
    { name: "Jamal Williams", role: "Fitness Enthusiast", image: user5 },
    { name: "Olivia Brown", role: "Creative Thinker", image: user6 },
  ];

  return (
    <div className="w-full overflow-hidden mt-12">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {[...users, ...users].map((user, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-md"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg text-center text-gray-800">
              {user.name}
            </h3>
            <p className="text-sm text-center text-gray-600">{user.role}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function ScrollArrow() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-600 text-4xl"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <FaChevronDown />
    </motion.div>
  );
}

function FeaturedCitiesSection() {
  const [activeCity, setActiveCity] = useState(0);
  const cities = [
    { name: "Paris", image: paris },
    { name: "New York", image: newyork },
    { name: "Tokyo", image: tokyo },
    { name: "London", image: london },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % cities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-purple-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-purple-900 mb-4"
          >
            We are still starting out but...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-700 mb-6"
          >
            We already got a lot of users signed up for the waitlist and when we
            launch the app you will have plenty of matches.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/form"
              className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 hover:bg-purple-700 inline-block"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <div className="flex justify-between mb-2 text-purple-800">
              <span className="font-semibold">5,000+ Users</span>
              <span className="font-semibold">1M Potential Users</span>
            </div>
            <div className="bg-purple-200 h-4 rounded-full">
              <div
                className="bg-purple-600 h-4 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
            <p className="text-sm text-purple-800 mt-2">in waitlist</p>
            <p className="text-md text-purple-800 mt-2 font-semibold">
              Join now and be part of our growing community!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex mt-4"
          >
            {[user1, user2, user3, user4].map((user, index) => (
              <img
                key={index}
                src={user}
                alt={`User ${index + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white -ml-2 first:ml-0"
              />
            ))}
          </motion.div>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4 h-96">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: activeCity === index ? 1 : 0.3,
                scale: activeCity === index ? 1 : 0.8,
                zIndex: activeCity === index ? 10 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{city.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SharedWhispersSection() {
  const confessions = [
    {
      text: "I always eat the pizza crust first. Thought I was the only weirdo until I found my crust-first crew here!",
      author: "PizzaRebel",
      avatar: user1,
    },
    {
      text: "As a 40-year-old, I still sleep with my childhood teddy bear. Now I know I'm not alone in finding comfort in old friends.",
      author: "ForeverYoung",
      avatar: user2,
    },
    {
      text: "I can't stand the sound of people eating. Turns out, it's called misophonia, and there's a whole community here who gets it.",
      author: "SilentDiner",
      avatar: user3,
    },
    {
      text: "I love the smell of gasoline. Finding others who understand this odd satisfaction was surprisingly comforting.",
      author: "FuelEnthusiast",
      avatar: user4,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-500">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          ✨ Shared Whispers ✨
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {confessions.map((confession, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <p className="text-lg italic text-white mb-4">"{confession.text}"</p>
              <div className="flex items-center">
                <img
                  src={confession.avatar}
                  alt={confession.author}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <span className="text-sm text-white opacity-75">
                  {confession.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
        >
          <Link
            to="/about"
            className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-pink-100 hover:text-purple-700 mr-4"
          >
            Learn More About Us
          </Link>
          <Link
            to="/form"
            className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-purple-700"
          >
            Get Started Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-purple-900">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Join Our Global Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Share experiences, make connections, and never feel alone again
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/form"
            className="bg-red-600 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 hover:bg-red-700"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ExpandedFAQSection() {
  const faqs = [
    {
      question: "What is 'You Are Not Alone'?",
      answer:
        "We're a platform that connects people through their unique experiences, creating a global community where everyone belongs.",
      background: "bg-network",
    },
    {
      question: "How does it work?",
      answer:
        "Share your story anonymously, and our system matches you with others who have similar experiences. You can then choose to connect and chat if you wish.",
      background: "bg-river",
    },
    {
      question: "Is it free?",
      answer:
        "Yes, our basic services are completely free. We believe everyone deserves to find their tribe.",
      background: "bg-dandelion",
    },
    {
      question: "How do you ensure user privacy?",
      answer:
        "We use state-of-the-art encryption and never share your personal information. Your story is yours to share as you choose.",
      background: "bg-shield",
    },
    {
      question: "Can I really find people like me?",
      answer:
        "Absolutely! Our community spans the globe and includes people from all walks of life. Your unique experience is what makes you you, and there are others out there who share it.",
      background: "bg-crowd",
    },
  ];

  return (
    <section className="py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQ
            key={index}
            question={faq.question}
            answer={faq.answer}
            background={faq.background}
          />
        ))}
      </div>
    </section>
  );
}

function FAQ({ question, answer, background }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`mb-4 rounded-lg overflow-hidden ${background}`}
      initial={false}
      animate={{ height: isOpen ? "auto" : "60px" }}
    >
      <motion.button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center bg-black bg-opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold">{question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>▼</motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-4 py-6 bg-black bg-opacity-30"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function LightUpText() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.5, 0.8], [0.8, 1]);

  return (
    <motion.div
      className="fixed bottom-10 right-10 text-center py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg z-50 max-w-xs"
      style={{ opacity, scale }}
    >
      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
        You are unique
      </h3>
      <p className="text-sm md:text-base text-white">
        That's your superpower!
      </p>
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
}

function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute text-4xl text-purple-500 opacity-50"
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
          rotate: [0, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FaGlobeAmericas />
      </motion.div>
    </div>
  );
}

export default Home;