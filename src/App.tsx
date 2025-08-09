import React from "react";

const TailwindShowcase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-pink-400 to-red-500 p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center animate-pulse">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-6">
          Tailwind Works!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          This vibrant component proves your Tailwind setup is working beautifully.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-transform">
          Feel the Power
        </button>
      </div>
    </div>
  );
};

export default TailwindShowcase;
