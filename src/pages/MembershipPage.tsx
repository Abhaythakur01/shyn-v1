import React from 'react';
import { Video, Star, Mic, HandCoins, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Boxes } from '../components/ui/background-boxes';
import PaymentSection from '../components/PaymentSection'; // Import the new component
import '../styles/MembershipPage.css';

const membershipPerks = [
    {
        title: "Exclusive Recording Discounts",
        desc: "Enjoy member-only discounts on video shoots and professional edits.",
        icon: <Video className="text-purple-400" />,
    },
    {
        title: "Priority Access to Opportunities",
        desc: "Be the first to grab limited slots for our events and collaborations.",
        icon: <Star className="text-yellow-400" />,
    },
    {
        title: "Host Our Official Open Mics",
        desc: "Step into the spotlight and host SHYN's featured open mics.",
        icon: <Mic className="text-pink-400" />,
    },
    {
        title: "Paid Creative Gigs",
        desc: "Get access to exclusive paid gigs offered only to our active members.",
        icon: <HandCoins className="text-green-400" />,
    },
    {
        title: "Workshop Discounts",
        desc: "Attend high-impact workshops at special rates with top artists.",
        icon: <Users className="text-blue-400" />,
    },
    {
        title: "Portfolio Badge",
        desc: "Get a 'SHYN Member' badge on your portfolio to stand out.",
        icon: <ShieldCheck className="text-teal-400" />,
    },
];


const MembershipPage: React.FC = () => {
    return (
        <div className="membership-page-container">
            <div className="absolute inset-0 z-0 h-full w-full bg-black [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="membership-content z-10"
            >
                <header className="membership-hero">
                    <h1 className="hero-title">Become a <span className="highlight">SHYN Member</span></h1>
                    <p className="hero-subtitle">
                        Develop the skills you need to create professional work with our guided curriculum, expert mentorship, and exclusive opportunities.
                    </p>
                    <div className="price-tag">
                        <span className="price">₹500</span>
                        <span className="duration">for one full year</span>
                    </div>
                </header>

                <section className="perks-section">
                    <h2 className="section-title">Your Membership Includes</h2>
                    <div className="perks-grid">
                        {membershipPerks.map((perk, index) => (
                            <motion.div
                                key={index}
                                className="perk-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="perk-icon-wrapper">{perk.icon}</div>
                                <h3 className="perk-title">{perk.title}</h3>
                                <p className="perk-desc">{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Use the new PaymentSection component here */}
                <PaymentSection />
                
            </motion.div>
        </div>
    );
};

export default MembershipPage;