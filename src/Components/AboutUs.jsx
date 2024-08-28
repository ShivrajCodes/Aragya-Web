import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: 'Sandipan Dubey',
    role: 'Leader,Aragya',
    image: 'path_to_image',
    description: 'Sandipan Dubey, leader of the Aragya project, is a visionary innovator and IoT enthusiast, driving impactful healthcare solutions.',
  },
  {
    name: 'Soham Aich',
    role: 'Co-Leader, Aragya',
    image: 'path_to_image',
    description: 'Soham Aich, co-leader of Aragya, is a brilliant ideator and IoT enthusiast, contributing innovative ideas to healthcare solutions.',
  },
  {
    name: 'Shivraj Bhattacharya',
    role: 'Frontend Developer',
    image: '/images/shivraj.jpg',
    description: 'Shivraj, a skilled frontend and backend developer, plays a crucial role in building and optimizing the project infrastructure.',
  },
  {
    name: 'Ritam Das',
    role: 'Tech-Lead and Electronics',
    image: '/images/ritam.jpg',
    description: 'Ritam Das, the tech lead of Aragya, excels in electronics, driving the technical advancements and innovations in the project.',
  },
  {
    name: 'Riddhiraj Chanda',
    role: 'Tech and Electronics',
    image: 'path_to_image',
    description: 'Riddhiraj Chanda, a key contributor to Aragya, specializes in tech and electronics, enhancing tech capabilities of our project.',
  },
  {
    name: 'Aratrika Shome',
    role: 'Facilitator and Social media handle',
    image: 'path_to_image',
    description: 'Aratrika Shome, the facilitator and social media handler for Aragya, ensures smooth communication and manages online presence of the project.',
  },
  {
    name: 'Srijeeta Das',
    role: 'Lead Designer',
    image: 'path_to_image',
    description: 'Srijeeta Das, the lead designer for Aragya, specializes in UI/UX and hardware design, creating intuitive interfaces and innovative hardware solutions. &nbsp; &nbsp; &nbsp; &nbsp; s   &nbsp;                         ',
  },
  {
    name: 'Simantini Das',
    role: 'Cybersecurity, Tech & Asst. Designer',
    image: '/images/simantini.jpg',
    description: 'Simantini Das, Cybersecurity Maverick and Assistant Designer, excels in tech and design, ensuring security and contributing creatively to Aragya.',
  },
  {
    name: 'Rudrangshu Bose',
    role: 'Presentation Lead',
    image: 'path_to_image',
    description: 'Rudrangshu Bose, the Presentation Lead for Aragya, crafts compelling presentations that effectively communicate the project vision and progress.',
  },
  {
    name: 'Daibik Sengupta',
    role: 'Assistance',
    image: 'path_to_image',
    description: 'Daibik Sengupta, a first-year assistant currently in the learning phase, supports the Aragya project while gaining valuable experience.',
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
