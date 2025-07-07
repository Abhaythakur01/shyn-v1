import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useDeviceDetection } from '../utils/deviceDetection'; // Import the hook

gsap.registerPlugin(ScrollTrigger);

// Define panel data to avoid repetition
const panelData = [
    {
        title: "Get your video recorded",
        description: "Not sure where to start? Explore a universe of creativity and find the path that speaks to you.",
        buttonText: "Explore Now",
        videoSrc: "/assets/videos/discover.mp4",
        className: "panel-discover",
    },
    {
        title: "Join the community",
        description: "Be a part of the SHYN community. Connect with experts, share your journey, and grow together.",
        buttonText: "SHYN Community",
        videoSrc: "/assets/videos/experts.mp4",
        className: "panel-experts",
    },
    {
        title: "Showcase Your Talent",
        description: "Build a stunning portfolio, connect with a global community, and let your art SHYN.",
        buttonText: "Start Your Portfolio",
        videoSrc: "/assets/videos/showcase.mp4",
        className: "panel-showcase",
    },
];

const HorizontalScrollSection: React.FC = () => {
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);
    const { isMobile } = useDeviceDetection(); // Use the hook to check for mobile devices

    useLayoutEffect(() => {
        // Only run the complex animation on desktop
        if (isMobile) return;

        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            const scrollTween = gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: "+=2500", // A robust end value for the scroll distance
                }
            });

            panels.forEach((panel: any) => {
                gsap.from(panel.querySelectorAll(".animate-content"), {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: scrollTween,
                        start: "left 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

        }, component);
        return () => ctx.revert();
    }, [isMobile]); // Re-run the effect if the device type changes

    // Mobile Fallback View: A simple, vertically stacked layout
    if (isMobile) {
        return (
            <div className="bg-black">
                {panelData.map((panel, index) => (
                    <section key={index} className="h-screen w-full flex items-center justify-center relative px-4 text-center text-white">
                         <video
                            className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            src={panel.videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <div className="relative z-20">
                            <h2 className="text-4xl font-bold mb-4">{panel.title}</h2>
                            <p className="text-lg max-w-md mx-auto mb-8">{panel.description}</p>
                            <button className="cta-button">
                                <span>{panel.buttonText}</span>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </section>
                ))}
            </div>
        );
    }

    // Desktop View: The original horizontal scroll animation
    return (
        <div className="horizontal-scroll-container" ref={component}>
            <div ref={slider} className="panels-container">
                {panelData.map((panel, index) => (
                    <section key={index} className={`panel ${panel.className}`}>
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
                                <button className="cta-button">
                                    <span>{panel.buttonText}</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default HorizontalScrollSection;