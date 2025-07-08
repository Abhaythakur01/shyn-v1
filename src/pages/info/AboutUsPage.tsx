import React from 'react';
import { Target, BookOpen, Users, Sparkles, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    bio: 'Visionary artist and entrepreneur building a global home for creatives.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Maria Garcia',
    role: 'Head of Community',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'Community builder passionate about connecting and empowering artists.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'David Chen',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2671&auto=format&fit=crop',
    bio: 'Technical architect ensuring every pixel and interaction feels magical.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32 pb-16 overflow-x-hidden">
      {/* Hero */}
      <motion.div
        className="relative text-center py-20 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-gray-900 opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We are{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SHYN
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            A collective of creatives redefining what it means to build, share, and grow.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Mission */}
        <motion.section
          className="py-20"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Target size={40} className="text-purple-400 mb-4" />
              <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                At SHYN, we believe everyone is creative. Our mission is to unlock that creativity—
                by providing tools, mentorship, and a judgment-free space where creators can thrive.
              </p>
            </div>
            <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                alt="Creative collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Story */}
        <motion.section
          className="py-20 bg-gray-800/30 rounded-3xl px-8"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-2xl overflow-hidden shadow-xl lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                alt="Founder brainstorming ideas"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <BookOpen size={40} className="text-pink-400 mb-4" />
              <h2 className="text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                SHYN was born from a shared frustration: creative isolation. Starting as a small
                studio collective, we grew into a global platform — built by artists, for artists.
                Our story is yours too: raw, real, and ready to shine.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          className="py-20"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Meet the Team</h2>
            <p className="text-lg text-gray-400 mt-2">The visionaries behind SHYN.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-800/60 rounded-2xl p-6 text-center border border-gray-700 hover:border-purple-500/40 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={`${member.name} portrait`}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href={member.social.linkedin}
                    aria-label={`LinkedIn profile of ${member.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    aria-label={`Twitter profile of ${member.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-24 text-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Sparkles size={48} className="text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Your Creative Journey Starts Now</h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto mb-8">
            Join SHYN and become part of a vibrant, fearless, and future-facing creative movement.
          </p>
          <a
            href="/membership"
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/20"
          >
            Become a Member
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUsPage;
