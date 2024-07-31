import React from "react";

function Match() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Your Matches</h2>
        <p className="text-gray-600">
          Here you'll see people who share similar experiences to yours.
        </p>
        {/* Add match display logic here */}
      </div>
    </div>
  );
}

export default Match;
