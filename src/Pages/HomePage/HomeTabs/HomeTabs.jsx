import React, { useState } from "react";

export default function HomeTabs() {
  const [tabs, setTabs] = useState([
    { id: 1, tab: "new books", active: true },
    { id: 2, tab: "best sellers", active: false },
    { id: 3, tab: "coming soon", active: false },
  ]);
  const handleActiveTab = (tabId) => {
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      active: tab.id === tabId,
    }));
    setTabs(updatedTabs);
  };
  return (
    <section className="container">
      <ul className="flex space-x-4">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`font-medium capitalize text-xl cursor-pointer ${
              tab.active ? "text-red-500" : ""
            }`}
            onClick={() => handleActiveTab(tab.id)}
          >
            {tab.tab}
          </li>
        ))}
      </ul>
    </section>
  );
}
