'use client'

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const ctaRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
    );

    gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
    );

    gsap.fromTo(
        socialsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
    );
  }, []);

  return (
      <section className="w-full py-12">
        <div ref={ctaRef} className="rounded-4xl bg-primary text-white p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-4xl font-bold mb-4">Ready to get involved? Join GRMR today!</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Take the next step in your educational journey with support from our community.
          </p>
          <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary"
                asChild
            >
              <Link href="/become-a-tutor">Sign Up as a Tutor</Link>
            </Button>
            <Button
                size="lg"
                className="bg-white/20 text-white border border-white/40 hover:bg-white/30"
                asChild
            >
              <Link href="/become-a-student">Sign Up as a Student</Link>
            </Button>
          </div>

          <div ref={socialsRef} className="flex justify-center gap-6 mt-8">
            <a
                href="https://www.facebook.com/UFGRMR/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white rounded-full p-3 border border-white hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
                href="https://www.instagram.com/grmruf/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white rounded-full p-3 border border-white hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
                href="mailto:education@grmruf.org"
                className="bg-primary text-white rounded-full p-3 border border-white hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <MdEmail size={22} />
            </a>
          </div>
        </div>
      </section>
  );
};

export default CTASection;