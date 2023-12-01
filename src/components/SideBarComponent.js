import React from 'react';

const Sidebar = () => {
  return (
    <div className="sticky top-16 flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-deepBlue">
        <div className="text-white font-bold text-lg mb-5">Filters</div>
        {/* Voeg hier je filters toe */}
      </aside>

    </div>
  );
};

export default Sidebar;
