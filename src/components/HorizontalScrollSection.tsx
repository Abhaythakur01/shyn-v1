import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection: React.FC = () => {
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            // The main horizontal scroll animation
            const scrollTween = gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none", // IMPORTANT: use no easing for a direct correlation to scroll
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1, // Smoothly scrubs the animation
                    snap: 1 / (panels.length - 1),
                    // FINAL FIX: Use a fixed, generous scroll distance for the pinning.
                    // This provides a reliable "runway" for the animation and prevents the vertical
                    // scroll from taking over prematurely. 2500px is a good starting point.
                    end: "+=1500",
                }
            });

            // Animate content within each panel as it comes into view
            panels.forEach((panel: any) => {
                gsap.from(panel.querySelectorAll(".animate-content"), {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: scrollTween,
                        start: "left 80%", // Start animation when the panel is 80% into view
                        toggleActions: "play none none reverse"
                    }
                });
            });

        }, component);
        return () => ctx.revert();
    }, []);

    return (
        <div className="horizontal-scroll-container" ref={component}>
            <div ref={slider} className="panels-container">
                {/* Panel 1: Discover */}
                <section className="panel panel-discover">
                    {/* 🔥 Background video */}
                    <video
                        className="bg-video"
                        src="/assets/videos/discover.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                    <div className="panel-content">
                        <div className="text-content animate-content">
                        <h2 className="text-6xl font-bold mb-4">Get your video recorded</h2>
                        <p className="text-xl max-w-2xl mb-8">
                            Not sure where to start? Explore a universe of creativity and find the path that speaks to you.
                        </p>
                        <button className="cta-button">
                            <span>Explore Now</span>
                            <ArrowRight size={20} />
                        </button>
                        </div>
                    </div>
                </section>

                {/* Panel 2: Experts */}
                <section className="panel panel-experts">
                <video className="bg-video" src="/assets/videos/experts.mp4" autoPlay muted loop playsInline />
                    <div className="panel-content">
                        <div className="text-content animate-content">
                        <h2 className="text-6xl font-bold mb-4">Learn From The Best</h2>
                        <p className="text-xl max-w-2xl mb-8">
                            Our world-class experts are here to guide you every step of the way. Master new skills with personalized feedback.
                        </p>
                        <button className="cta-button">
                            <span>Meet the Experts</span>
                            <ArrowRight size={20} />
                        </button>
                        
                        </div>
                    </div>
                </section>

                {/* Panel 3: Showcase */}
                <section className="panel panel-showcase">
                    <video className="bg-video" src="/assets/videos/showcase.mp4" autoPlay muted loop playsInline />
                    <div className="panel-content">
                        <div className="text-content animate-content">
                        <h2 className="text-6xl font-bold mb-4">Showcase Your Talent</h2>
                        <p className="text-xl max-w-2xl mb-8">
                            Build a stunning portfolio, connect with a global community, and let your art SHYN.
                        </p>
                        <button className="cta-button">
                            <span>Start Your Portfolio</span>
                            <ArrowRight size={20} />
                        </button>
                        </div>
                      
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HorizontalScrollSection;
