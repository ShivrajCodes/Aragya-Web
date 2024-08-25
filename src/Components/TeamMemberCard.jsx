import React, { useState } from 'react';

const TeamMemberCard = ({ name, role, image, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
        expanded ? 'w-full' : 'w-64'
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-col items-center p-6">
        <img
          src={image}
          alt={`${name}'s picture`}
          className={`rounded-full object-cover transition-all duration-300 ${
            expanded ? 'w-32 h-32' : 'w-20 h-20'
          }`}
        />
        <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
      {expanded && (
        <div className="p-6 bg-gray-100">
          <p className="text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
