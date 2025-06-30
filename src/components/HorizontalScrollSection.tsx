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
                    <div className="panel-content">
                        <div className="text-content animate-content">
                            <h2 className="text-6xl font-bold mb-4">Get your video recorded</h2>
                            <p className="text-xl max-w-2xl mb-8">Not sure where to start? Explore a universe of creativity and find the path that speaks to you.</p>
                            <button className="cta-button">
                                <span>Explore Now</span>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        <div className="image-grid">
                            <div className="image-box animate-content" style={{ backgroundImage: "url('https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600')" }}></div>
                            <div className="image-box animate-content" style={{ backgroundImage: "url('https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=600')" }}></div>
                            <div className="image-box animate-content" style={{ backgroundImage: "url('https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=600')" }}></div>
                            <div className="image-box animate-content" style={{ backgroundImage: "url('https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=600')" }}></div>
                        </div>
                    </div>
                </section>

                {/* Panel 2: Experts */}
                <section className="panel panel-experts">
                     <div className="panel-content">
                        <div className="text-content animate-content">
                            <h2 className="text-6xl font-bold mb-4">Learn From The Best</h2>
                            <p className="text-xl max-w-2xl mb-8">Our world-class experts are here to guide you every step of the way. Master new skills with personalized feedback.</p>
                             <button className="cta-button">
                                <span>Meet the Experts</span>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        <div className="expert-cards">
                            <div className="expert-card animate-content">
                                <img src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Expert 1"/>
                                <h3>Elena Rodriguez</h3>
                                <p>Abstract Painting</p>
                            </div>
                             <div className="expert-card animate-content">
                                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Expert 2"/>
                                <h3>Marcus Chen</h3>
                                <p>Digital Photography</p>
                            </div>
                             <div className="expert-card animate-content">
                                <img src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Expert 3"/>
                                <h3>Sofia Williams</h3>
                                <p>Contemporary Dance</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Panel 3: Showcase */}
                <section className="panel panel-showcase">
                    <div className="panel-content">
                        <div className="text-content animate-content">
                            <h2 className="text-6xl font-bold mb-4">Showcase Your Talent</h2>
                            <p className="text-xl max-w-2xl mb-8">Build a stunning portfolio, connect with a global community, and let your art SHYN.</p>
                             <button className="cta-button">
                                <span>Start Your Portfolio</span>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        <div className="portfolio-showcase animate-content">
                            <img src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Artwork 1"/>
                            <img src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Artwork 2"/>
                             <img src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Artwork 3"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HorizontalScrollSection;
