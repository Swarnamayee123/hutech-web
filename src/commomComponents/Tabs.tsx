/** @format */

import React, { useState } from "react";

export interface TabItem {
  name: string;
  content: any;
}

interface TabsProps {
  tabs: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-300 justify-center space-x-20 ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`pb-2 text-sm md:text-base font-semibold transition-all ${
              activeIndex === index
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-indigo-500 "
            }`}>
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-8 text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
