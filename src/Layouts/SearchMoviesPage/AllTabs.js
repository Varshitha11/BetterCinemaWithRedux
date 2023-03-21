import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SearchByTime from './SearchByTime';
import SearchByTitle from './SearchByTitle';

function AllTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <>
      <Navbar/>
      <div className="Tabs">
        <ul className="nav">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
           <h5> Search By Title</h5>
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            <h5>Search By Time</h5>
          </li>
        </ul>

        <div className="outlet">
          {activeTab === "tab1" ? <SearchByTitle /> : <SearchByTime />}
        </div>

      </div>
    </>
  );
}

export default AllTabs;