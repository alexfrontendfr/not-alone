import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/user", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8"
    >
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
        <p className="mb-4">
          Your unique experience: {user.experience || "Not shared yet"}
        </p>
        <p className="mb-4">Age: {user.age || "Not provided"}</p>
        <p className="mb-4">Location: {user.location || "Not provided"}</p>
        {/* Add more user info and match results here */}
      </div>
    </motion.div>
  );
}

export default Dashboard;
