import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
// Note: We no longer need to import AuthModal or useState from here.

gsap.registerPlugin(ScrollTrigger);

const panelData = [
    {
        title: "Get your video recorded",
        description: "Not sure where to start? Explore a universe of creativity and find the path that speaks to you.",
        buttonText: "Explore Now",
        videoSrc: "/assets/videos/discover.mp4",
        path: "/video-recording-services",
    },
    {
        title: "Join the community",
        description: "Be a part of the SHYN community. Connect with experts, share your journey, and grow together.",
        buttonText: "SHYN Community",
        videoSrc: "/assets/videos/experts.mp4",
        path: "https://chat.whatsapp.com/IOdJjxp5pbZ7YRYh9wyfTI",
        isExternal: true,
    },
    {
        title: "Showcase Your Talent",
        description: "Build a stunning portfolio, connect with a global community, and let your art SHYN.",
        buttonText: "Start Your Portfolio",
        videoSrc: "/assets/videos/showcase.mp4",
        path: "/portfolio",
    },
];

// --- The component now accepts the onAuthRequest prop ---
interface HorizontalScrollSectionProps {
  onAuthRequest: () => void;
}

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({ onAuthRequest }) => {
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);
    const { user } = useAuth();

    useLayoutEffect(() => {
        // This effect is for desktop animation only
        const ctx = gsap.context(() => {
            if (component.current && slider.current) {
                let panels = gsap.utils.toArray(".panel");
                gsap.to(panels, {
                    xPercent: -100 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: slider.current,
                        pin: true,
                        scrub: 1,
                        snap: 1 / (panels.length - 1),
                        end: () => `+=${slider.current!.offsetWidth}`,
                    }
                });
            }
        }, component);
        return () => ctx.revert();
    }, []);

    const renderButton = (panel: typeof panelData[0]) => {
        const buttonContent = (
            <>
                <span>{panel.buttonText}</span>
                <ArrowRight size={20} />
            </>
        );

        if (panel.isExternal) {
            return (
                <a href={panel.path} target="_blank" rel="noopener noreferrer" className="cta-button">
                    {buttonContent}
                </a>
            );
        }

        // If it's the portfolio button and the user is NOT logged in...
        if (panel.path === '/portfolio' && !user) {
            // ...render a button that calls the function from the parent.
            return (
                <button onClick={onAuthRequest} className="cta-button">
                    {buttonContent}
                </button>
            );
        }

        // Otherwise, render a normal link.
        return (
            <Link to={panel.path} className="cta-button">
                {buttonContent}
            </Link>
        );
    };

    return (
        <div className="horizontal-scroll-container" ref={component}>
            <div ref={slider} className="panels-container">
                {panelData.map((panel, index) => (
                    <section key={index} className={`panel`}>
                        <video
                            className="bg-video"
                            src={panel.videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <div className="panel-content">
                            <div className="text-content animate-content">
                                <h2 className="text-6xl font-bold mb-4">{panel.title}</h2>
                                <p className="text-xl max-w-2xl mb-8">{panel.description}</p>
                                {renderButton(panel)}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default HorizontalScrollSection;
