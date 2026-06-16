"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, MoreVertical, X, Send, Loader2 } from "lucide-react";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

const SmoothShapes = () => {
  const groupRef = useRef<any>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[1.5, -0.5, -2]}>
        <torusGeometry args={[1, 0.3, 32, 64]} />
        <meshStandardMaterial color="#E50914" metalness={0.3} roughness={0.2} />
      </mesh>
      <mesh position={[-1.5, 1, -1]} scale={0.8}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#111111" metalness={0.6} roughness={0.2} />
      </mesh>
    </group>
  );
};

const Menu3DBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none opacity-20 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#E50914" />
        <SmoothShapes />
      </Canvas>
    </div>
  );
};

const HoverLink = ({ item, onClick }: { item: { name: string, href: string }, onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative block overflow-hidden text-4xl sm:text-5xl font-bold tracking-tighter"
    >
      <div className="flex">
        {item.name.split("").map((char: string, i: number) => (
          <motion.span
            key={`primary-${i}`}
            animate={{ y: isHovered ? "-100%" : "0%" }}
            transition={{ duration: 0.4, delay: i * 0.02, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-[#111111] dark:text-white"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {item.name.split("").map((char: string, i: number) => (
          <motion.span
            key={`secondary-${i}`}
            initial={{ y: "100%" }}
            animate={{ y: isHovered ? "0%" : "100%" }}
            transition={{ duration: 0.4, delay: i * 0.02, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-[#E50914]"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </Link>
  );
};

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.1 }
      );
    }
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setContactOpen(false);
          setFormStatus("idle");
        }, 2500);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 px-8 py-8 sm:px-16 sm:py-10 pointer-events-none flex justify-between items-start font-sans">
        {/* Logo */}
        <div className="pointer-events-auto">
          <Link href="/" className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-black dark:text-white drop-shadow-md hover:drop-shadow-lg transition-all">
            lookbook
          </Link>
        </div>

        {/* Right Side Buttons & Menu Container */}
        <div className="relative pointer-events-auto flex flex-col items-end mt-1 sm:mt-2">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Chat Button -> CONNECT WITH ME */}
            <button
              onClick={() => { setContactOpen(true); setMenuOpen(false); }}
              className="hidden sm:flex items-center gap-4 px-2 py-2 pl-7 bg-[#E8EAE6] hover:bg-[#d8dad6] dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full transition-colors text-[14px] font-bold tracking-widest text-black dark:text-white cursor-pointer"
            >
              CONNECT WITH ME
              <span className="bg-white dark:bg-black p-2.5 rounded-full shadow-sm">
                <MessageSquare className="w-4 h-4" />
              </span>
            </button>

            {/* Menu Toggle Button */}
            <button
              onClick={() => { setMenuOpen(!menuOpen); setContactOpen(false); }}
              className="flex items-center gap-4 px-2 py-2 pl-7 bg-[#111111] hover:bg-[#222222] dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black rounded-full transition-colors text-[14px] font-bold tracking-widest cursor-pointer"
            >
              <span className="w-[52px] text-left">{menuOpen ? "CLOSE" : "MENU"}</span>
              <span className="bg-[#2A2A2A] dark:bg-[#e0e0e0] p-2.5 rounded-full text-white dark:text-black">
                {menuOpen ? <X className="w-4 h-4" /> : <MoreVertical className="w-4 h-4" />}
              </span>
            </button>
          </div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-full mt-4 right-0 w-[280px] sm:w-[320px] bg-[#E8EAE6]/80 dark:bg-[#1A1A1A]/80 backdrop-blur-2xl rounded-[32px] p-8 shadow-2xl origin-top-right overflow-hidden border border-black/5 dark:border-white/5"
              >
                <Menu3DBackground />
                <div className="relative z-10 flex flex-col gap-6 mt-2 mb-2">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <HoverLink item={item} onClick={() => setMenuOpen(false)} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Contact Form Modal - Aesthetic Drawer */}
      <AnimatePresence>
        {contactOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setContactOpen(false)}
              className="fixed inset-0 z-50 bg-black/20 dark:bg-black/60 backdrop-blur-sm pointer-events-auto"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 z-50 w-full md:w-[600px] lg:w-[800px] h-screen bg-[#E8EAE6] dark:bg-[#111111] shadow-2xl p-6 sm:p-8 md:p-10 py-6 sm:py-8 flex flex-col overflow-y-auto pointer-events-auto"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <h2 className="text-lg font-bold tracking-widest uppercase text-black dark:text-white">Let's Talk</h2>
                <button
                  onClick={() => setContactOpen(false)}
                  className="p-4 bg-black hover:bg-[#222] dark:bg-white dark:hover:bg-neutral-200 rounded-full transition-colors group"
                >
                  <X className="w-5 h-5 text-white dark:text-black group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-start justify-center flex-1"
                >
                  <div className="w-24 h-24 bg-black dark:bg-white rounded-full flex items-center justify-center mb-10">
                    <Send className="w-10 h-10 text-white dark:text-black ml-2" />
                  </div>
                  <h3 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-black dark:text-white mb-6 leading-none">
                    Message<br />received.
                  </h3>
                  <p className="text-xl text-neutral-600 dark:text-neutral-400 font-medium max-w-md">
                    Thank you for reaching out. I'll review your details and get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-5 sm:gap-6 flex-1">

                  {/* Name Input */}
                  <div className="flex flex-col gap-1 sm:gap-2 group">
                    <label className="text-xs sm:text-sm font-bold tracking-widest text-neutral-500 uppercase flex items-center gap-4">
                      <span>01</span>
                      <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-700 group-focus-within:bg-black dark:group-focus-within:bg-white transition-colors"></span>
                      <span>What's your name?</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tighter text-black dark:text-white pb-1 focus:outline-none transition-colors placeholder:text-black/10 dark:placeholder:text-white/10"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1 sm:gap-2 group">
                    <label className="text-xs sm:text-sm font-bold tracking-widest text-neutral-500 uppercase flex items-center gap-4">
                      <span>02</span>
                      <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-700 group-focus-within:bg-black dark:group-focus-within:bg-white transition-colors"></span>
                      <span>What's your email?</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tighter text-black dark:text-white pb-1 focus:outline-none transition-colors placeholder:text-black/10 dark:placeholder:text-white/10"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1 sm:gap-2 group">
                    <label className="text-xs sm:text-sm font-bold tracking-widest text-neutral-500 uppercase flex items-center gap-4">
                      <span>03</span>
                      <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-700 group-focus-within:bg-black dark:group-focus-within:bg-white transition-colors"></span>
                      <span>Tell me about your project</span>
                    </label>
                    <textarea
                      required
                      placeholder="Hello, I would like to..."
                      rows={1}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-black dark:text-white pb-1 focus:outline-none transition-colors placeholder:text-black/10 dark:placeholder:text-white/10 resize-none"
                    />
                  </div>

                  {formStatus === "error" && (
                    <p className="text-red-500 text-lg font-bold">Something went wrong. Please try again later.</p>
                  )}

                  <div className="pt-2 pb-4 mt-auto">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center gap-4 text-xl sm:text-2xl font-extrabold tracking-tighter text-black dark:text-white transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-8 h-8 animate-spin" />
                          SENDING...
                        </>
                      ) : (
                        <>
                          <div className="p-3 sm:p-4 bg-black dark:bg-white rounded-full transition-transform group-hover:scale-110">
                            <Send className="w-5 h-5 text-white dark:text-black ml-0.5" />
                          </div>
                          <span className="relative overflow-hidden">
                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">SEND MESSAGE</span>
                            <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-neutral-500">SEND MESSAGE</span>
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
