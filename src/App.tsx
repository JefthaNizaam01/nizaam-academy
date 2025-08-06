import React, { useState } from "react";

const Index = () => {
  const [filter, setFilter] = useState("");

  const items = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl shadow-lg text-white">
      <h1 className="text-3xl font-extrabold mb-6 text-center drop-shadow-md">
        Fruit List
      </h1>
      <input
        type="text"
        placeholder="Filter fruits"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="mb-6 w-full p-3 rounded-md border-2 border-white bg-white bg-opacity-20 placeholder-white placeholder-opacity-75 text-white focus:outline-none focus:ring-2 focus:ring-white transition"
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <li
              key={item}
              className="mb-3 p-2 rounded-md bg-white bg-opacity-20 hover:bg-opacity-40 cursor-pointer transition"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="italic text-white/70">No fruits found</li>
        )}
      </ul>
    </div>
  );
};

export default Index;
