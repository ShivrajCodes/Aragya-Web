import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: 'Shivraj Bhattacharya',
    role: 'Frontend Developer',
    image: 'path_to_image',
    description: 'Shivraj is a skilled frontend developer with 2 years of experience.',
  },
];

const AboutUs = () => {
  return (
    <section
      className="py-12 min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #080316 0%, #150B2D 100%)',
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-50 mb-8 mt-20">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-10">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
