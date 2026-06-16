"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Briefcase, Cloud, Terminal, Rocket } from "lucide-react";
import Link from "next/link";

const ServiceRow = ({ item, index }: { item: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-black/10 dark:border-white/10 py-10 sm:py-16 overflow-hidden cursor-pointer"
    >
      <div
        className={`absolute inset-0 bg-[#E50914] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}
      />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:px-4">
        <div className="flex items-center gap-8 sm:gap-12">
          <span className={`text-lg sm:text-xl font-bold transition-colors duration-500 ${isHovered ? 'text-white/80' : 'text-[#E50914]'}`}>
            {item.number}
          </span>
          <h3 className={`text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter transition-colors duration-500 ${isHovered ? 'text-white' : 'text-black dark:text-white'}`}>
            {item.title}
          </h3>
        </div>

        <p className={`text-sm sm:text-base font-medium max-w-sm transition-colors duration-500 lg:text-right pr-12 lg:pr-0 ${isHovered ? 'text-white' : 'text-neutral-500 dark:text-neutral-400'}`}>
          {item.desc}
        </p>

        <ArrowUpRight className={`absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 transition-all duration-500 ${isHovered ? 'opacity-100 text-white translate-x-0' : 'opacity-0 -translate-x-8 text-black dark:text-white'}`} />
      </div>
    </motion.div>
  );
};

export default function Home() {

  const row1Skills = [
    { name: "React.js", icon: "devicon-react-original" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    { name: "Figma", icon: "devicon-figma-plain" },
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" }
  ];

  const row2Skills = [
    { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
    { name: "Jenkins", icon: "devicon-jenkins-line" },
    { name: "GitHub Actions", icon: "devicon-github-plain" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "CI/CD", icon: "devicon-bash-plain" }
  ];

  const row3Skills = [
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Spring Boot", icon: "devicon-spring-plain" },
    { name: "REST APIs", icon: "devicon-express-original" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "VS Code", icon: "devicon-vscode-plain" },
    { name: "IntelliJ", icon: "devicon-intellij-plain" },
    { name: "Postman", icon: "devicon-postman-plain" }
  ];

  const services = [
    {
      title: "Full Stack",
      desc: "Building responsive and scalable web applications from frontend to backend.",
      hugeText: ["Full", "Stack"],
      number: "01"
    },
    {
      title: "DevOps",
      desc: "Automating deployments and managing cloud-native workflows flawlessly.",
      hugeText: ["DevOps", "& Cloud"],
      number: "02"
    },
    {
      title: "Solutions",
      desc: "Helping businesses establish and improve their digital presence globally.",
      hugeText: ["Client", "Solutions"],
      number: "03"
    }
  ];

  return (
    <main className="min-h-screen bg-[#E8EAE6] dark:bg-[#111111] font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 pt-40 pb-20">

        {/* Top Minimalist Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8 mt-10 md:mt-0">
          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mb-1">Latest Update</p>
            <p className="text-sm sm:text-base font-extrabold text-black dark:text-white tracking-tight">New Project Launched</p>
          </motion.div>

          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-left md:text-right max-w-sm"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-neutral-600 dark:text-neutral-400">
              Turning thoughts into <br /><span className="text-black dark:text-white italic">beautiful web stories.</span>
            </p>
          </motion.div>
        </div>

        {/* Main Massive Title */}
        <div className="flex flex-col gap-0 mb-16 md:mb-24 relative z-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-black tracking-tighter leading-[0.85] text-black dark:text-white uppercase"
            >
              NANI
            </motion.h1>
          </div>
          <div className="overflow-hidden flex flex-col items-start">
            <motion.h1
              initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-black tracking-tighter leading-[0.85] text-black dark:text-white uppercase"
            >
              REDDY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[10px] sm:text-xs md:text-sm font-medium tracking-tighter text-black dark:text-white mt-3 sm:mt-4 ml-2"
            >
              Devops & Python • Full stack developer @WebCros • AWS
            </motion.p>
          </div>

          {/* Right Side: Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-row flex-wrap gap-4 shrink-0 lg:absolute lg:right-0 lg:bottom-12"
          >
            {/* Static Let's Connect Button */}
            <Link
              href="mailto:naniatworkmail@gmail.com"
              className="relative flex items-center justify-between gap-4 px-5 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full overflow-hidden shadow-xl"
            >
              <span className="relative font-bold tracking-widest uppercase text-[10px] sm:text-xs z-10">Let's Connect</span>
              <div className="relative bg-white text-black dark:bg-black dark:text-white p-1.5 rounded-full z-10">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Static Email Button */}
            <Link
              href="mailto:naniatworkmail@gmail.com"
              className="flex items-center justify-center gap-2 px-5 py-3 border border-black/20 dark:border-white/20 rounded-full bg-transparent"
            >
              <span className="font-bold tracking-tight text-[10px] sm:text-xs text-black dark:text-white">naniatworkmail@gmail.com</span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 items-end border-t border-black/10 dark:border-white/10 pt-12">

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-2 lg:hidden"
          >
            <p className="text-xl font-bold text-black dark:text-white">DevOps & Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-start"
          >
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4">Let's Connect</p>
            <Link
              href="mailto:naniatworkmail@gmail.com"
              className="group flex flex-wrap items-center gap-3 sm:gap-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter text-black dark:text-white hover:opacity-70 transition-opacity"
            >
              <span className="break-words">naniatworkmail@gmail.com</span>
              <span className="p-2 sm:p-3 bg-black dark:bg-white rounded-full transition-transform group-hover:scale-110 group-hover:rotate-12 shrink-0">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-black" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-start md:justify-end order-last md:order-none"
          >
            <p className="text-sm font-medium text-neutral-500 max-w-xs text-left md:text-right">
              Freelance Developer @WebCros. Building scalable web solutions and delivering them for Global & Indian Clients.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Professional Snapshot Section - Minimalist Sticky Layout */}
      <section className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white border-t border-black/10 dark:border-white/10 relative z-20">
        <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-start relative">

          {/* Left Column (Sticky Text) */}
          <div className="w-full lg:w-1/3 sticky top-0 h-[100vh] px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col justify-center z-0">
            <div className="pt-20 lg:pt-0"> {/* Extra top padding specifically to push it below the navbar visually */}
              <h2 className="text-xs sm:text-sm lg:text-lg font-medium tracking-tight leading-snug mb-4 max-w-xs">
                Freelance Developer @WebCros. Building scalable web solutions and delivering them for Global & Indian Clients.
              </h2>
              <p className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400 max-w-xs mb-6">
                A quick look at my current roles, technical expertise, and global impact as a developer.
              </p>
              <div>
                <Link href="mailto:naniatworkmail@gmail.com" className="inline-block border-b border-black dark:border-white pb-1 text-[10px] font-bold hover:text-[#E50914] hover:border-[#E50914] transition-colors">
                  naniatworkmail@gmail.com
                </Link>
              </div>
            </div>

            {/* Red dot aesthetic from reference */}
            <div className="absolute right-6 sm:right-12 lg:right-8 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#E50914] rounded-full"></div>
          </div>

          {/* Right Column (Scrolling Grid) */}
          <div className="w-full lg:w-2/3 flex flex-col sm:flex-row border-l border-black/10 dark:border-white/10 relative z-10">

            {/* Col 1 */}
            <div className="w-full sm:w-1/2 flex flex-col border-r border-black/10 dark:border-white/10">

              {/* Card 1 */}
              <div className="border-b border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-[250px] sm:h-[300px] bg-white dark:bg-[#0a0a0a] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#E50914] tracking-tighter"
                >
                  WebCros
                </motion.h3>
                <p className="text-sm sm:text-base font-medium">Freelance Full Stack Developer</p>
              </div>

              {/* Card 2 */}
              <div className="border-b border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-[300px] sm:h-[350px] bg-white dark:bg-[#0a0a0a] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-serif text-[#E50914] tracking-tighter"
                >
                  +6000
                </motion.h3>
                <p className="text-sm sm:text-base font-medium">GitHub Commits</p>
              </div>

              {/* Card 3 */}
              <div className="border-b border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-[250px] sm:h-[300px] bg-white dark:bg-[#0a0a0a] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#E50914] tracking-tighter"
                >
                  Global
                </motion.h3>
                <p className="text-sm sm:text-base font-medium">Delivering Clients Projects</p>
              </div>

              {/* Card 7 */}
              <div className="border-b border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-[300px] sm:h-[350px] bg-white dark:bg-[#0a0a0a] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#E50914] tracking-tighter leading-none"
                >
                  React <br /> <span className="text-3xl sm:text-4xl lg:text-5xl"></span>
                </motion.h3>
                <p className="text-sm sm:text-base font-medium">Frontend Development</p>
              </div>

            </div>

            {/* Col 2 - Staggered margin top */}
            <div className="w-full sm:w-1/2 flex flex-col sm:mt-24">

              {/* Card 4 */}
              <div className="border-b border-t sm:border-t-0 border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-[300px] sm:h-[350px] bg-white dark:bg-[#0a0a0a] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#E50914] tracking-tighter"
                >
                  Wipro
                </motion.h3>
                <p className="text-sm sm:text-base font-medium">DevOps & Python Trainee</p>
              </div>

              {/* Card 5 */}
              <div className="border-b border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-[250px] sm:h-[300px] bg-white dark:bg-[#0a0a0a] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#E50914] tracking-tighter leading-none"
                >
                  AWS <br /> <span className="text-3xl sm:text-4xl lg:text-5xl">+ K8s</span>
                </motion.h3>
                <p className="text-sm sm:text-base font-medium">Core Tech Stack & CI/CD</p>
              </div>

              {/* Card 6 */}
              <div className="border-b border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-[300px] sm:h-[350px] bg-white dark:bg-[#0a0a0a] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-serif text-[#E50914] tracking-tighter"
                >
                  2024
                </motion.h3>
                <p className="text-sm sm:text-base font-medium">Current Year of Operation</p>
              </div>

              {/* Card 8 */}
              <div className="border-b border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between h-[250px] sm:h-[300px] bg-white dark:bg-[#0a0a0a] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#E50914] tracking-tighter leading-none"
                >
                  API <br /> <span className="text-3xl sm:text-4xl lg:text-5xl"></span>
                </motion.h3>
                <p className="text-sm sm:text-base font-medium">Backend Engineering</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Featured Client Work Section - Huge Typography Style */}
      <section className="bg-[#E8EAE6] dark:bg-[#111111] text-black dark:text-white px-6 sm:px-12 md:px-20 py-24 sm:py-32 border-t border-black/10 dark:border-white/10 relative z-20">
        <div className="max-w-[1800px] mx-auto flex flex-col">
          {/* Small label top left */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-sm sm:text-base font-semibold text-neutral-500 dark:text-neutral-400 mb-8 sm:mb-12 tracking-tight"
          >
            FEATURED CLIENT WORK
          </motion.h4>

          {/* Huge typography description */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] max-w-[1000px]"
          >
            Building <span className="text-neutral-500 dark:text-neutral-400">scalable</span> web solutions focusing on transforming your vision into a captivating digital experience.
          </motion.h2>
        </div>
      </section>

      {/* Sticky Projects Stack Section */}
      <section className="bg-[#E8EAE6] dark:bg-[#111111] px-4 sm:px-8 md:px-16 pb-32 relative z-20">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-12 sm:gap-24 relative">
          {[
            {
              title: ["Pragtech", "Steel Detailing"],
              tags: ["Next.js", "Tailwind CSS", "Framer Motion", "React"],
              desc: "Designed and developed a premium, globally-focused corporate website for Pragtech. Engineered with performance in mind to showcase complex engineering solutions and steel detailing expertise.",
              bg: "bg-[#111111] dark:bg-[#0a0a0a]",
              zIndex: "z-10",
              image: "/projects/pragtech.png"
            },
            {
              title: ["Peckers", "Good Chicken"],
              tags: ["Next.js", "Tailwind CSS", "Framer Motion", "React"],
              desc: "Developed a high-performance food ordering and brand experience website for Peckers. Integrated seamless click & collect functionality and an exclusive rewards system.",
              bg: "bg-[#1a1a1a] dark:bg-[#141414]",
              zIndex: "z-20",
              image: "/projects/peckers.png"
            },
            {
              title: ["Réveil", "Perfumes"],
              tags: ["Next.js", "Tailwind CSS", "Shopify API", "Framer Motion"],
              desc: "Crafted an elegant and immersive e-commerce experience for Réveil Perfumes. Featuring smooth transitions, luxury design aesthetics, and a seamless shopping journey.",
              bg: "bg-[#222222] dark:bg-[#1c1c1c]",
              zIndex: "z-30",
              image: "/projects/reveil.png"
            },
            {
              title: ["Packmax", "India"],
              tags: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
              desc: "Developed a comprehensive digital platform for Packmax India, a leading packaging manufacturer and wholesaler. Built to showcase products, handle B2B inquiries, and streamline the ordering process.",
              bg: "bg-[#2a2a2a] dark:bg-[#252525]",
              zIndex: "z-40",
              image: "/projects/packmax.png"
            }
          ].map((project, index) => (
            <div
              key={index}
              className={`sticky top-[10vh] sm:top-[12vh] ${project.zIndex} w-full rounded-[2rem] sm:rounded-[3rem] ${project.bg} text-white p-8 sm:p-12 md:p-16 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] transition-transform duration-500 border border-white/5 flex flex-col xl:flex-row gap-12 xl:gap-24 overflow-hidden`}
              style={{ minHeight: '65vh', maxHeight: '85vh' }}
            >

              {/* Content Side */}
              <div className={`flex flex-col justify-between h-full ${project.image ? 'xl:w-1/2' : 'w-full'}`}>

                {/* Title */}
                <h3 className={`font-medium tracking-tight leading-[0.95] max-w-5xl ${project.image ? 'text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem]' : 'text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem]'}`}>
                  {project.title.map((line, i) => (
                    <div key={i} className={i > 0 ? "text-white/60" : "text-white"}>{line}</div>
                  ))}
                </h3>

                {/* Bottom Content */}
                <div className="flex flex-col gap-6 sm:gap-8 mt-12 sm:mt-auto">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs sm:text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white cursor-default whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  {project.desc && (
                    <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
                      <div className="mt-1 sm:mt-1.5 flex-shrink-0">
                        {/* Cool asterisk icon from reference */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 w-6 h-6 sm:w-7 sm:h-7">
                          <path d="M12 2v20M17 5l-10 14M22 12H2M19 19L5 5" />
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg font-medium text-white/80 leading-relaxed sm:leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  )}
                </div>

              </div>

              {/* Image Side (if exists) */}
              {project.image && (
                <div className="w-full xl:w-1/2 h-64 sm:h-80 xl:h-auto rounded-[1.5rem] overflow-hidden relative border border-white/10 group mt-8 xl:mt-0 flex-shrink-0">
                  <img src={project.image} alt={project.title[0]} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Project Leadership Highlight Section - Minimal Text & Pills Style */}
      <section className="bg-[#E8EAE6] dark:bg-[#111111] px-4 sm:px-8 md:px-16 py-24 sm:py-32 relative z-20 border-t border-black/10 dark:border-white/10 flex flex-col items-center justify-center text-center">
        <div className="max-w-[1200px] mx-auto w-full">

          {/* Subtitle */}
          <h4 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-8 sm:mb-12 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-700" />
            Réveil Fragrances — Lead Developer
            <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-700" />
          </h4>

          {/* Large Hero Text */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-black dark:text-white leading-[1.1] mb-12 sm:mb-16">
            Architecting a dependable premium storefront that connects customers with luxury fragrances, ensuring seamless checkout and high-uptime reliable operations.
          </h2>

          {/* Premium Pill Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">

            {/* Pill 1 */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-[#1a1a1a]/50 hover:bg-white dark:hover:bg-[#222] transition-colors cursor-default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 dark:text-neutral-400"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span className="text-sm sm:text-base font-medium text-black dark:text-white">Full-Stack Next.js</span>
            </div>

            {/* Pill 2 */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-[#1a1a1a]/50 hover:bg-white dark:hover:bg-[#222] transition-colors cursor-default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 dark:text-neutral-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              <span className="text-sm sm:text-base font-medium text-black dark:text-white">Sub-200ms APIs</span>
            </div>

            {/* Pill 3 */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-[#1a1a1a]/50 hover:bg-white dark:hover:bg-[#222] transition-colors cursor-default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 dark:text-neutral-400"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
              <span className="text-sm sm:text-base font-medium text-black dark:text-white">Live Inventory</span>
            </div>

            {/* Pill 4 */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-[#1a1a1a]/50 hover:bg-white dark:hover:bg-[#222] transition-colors cursor-default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 dark:text-neutral-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span className="text-sm sm:text-base font-medium text-black dark:text-white">Secure Payments</span>
            </div>

            {/* Pill 5 */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-[#1a1a1a]/50 hover:bg-white dark:hover:bg-[#222] transition-colors cursor-default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 dark:text-neutral-400"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span className="text-sm sm:text-base font-medium text-black dark:text-white">Premium Markets</span>
            </div>

          </div>

        </div>
      </section>

      {/* What I Do - Premium Interactive List Section */}
      <section className="bg-[#E8EAE6] dark:bg-[#111111] border-t border-black/10 dark:border-white/10 relative z-20 py-24 sm:py-32">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20">

          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">

            {/* Header */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <motion.h2
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="text-6xl sm:text-7xl lg:text-[8rem] font-serif text-[#E50914] tracking-tighter leading-[0.9] mb-8"
              >
                What <br className="hidden lg:block" /> I Do
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-sm sm:text-base font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest leading-loose max-w-xs"
              >
                Core Competencies <br /> & Services
              </motion.p>
            </div>

            {/* Interactive Service List */}
            <div className="lg:w-2/3 flex flex-col w-full border-t border-black/10 dark:border-white/10">
              {services.map((item, index) => (
                <ServiceRow key={index} item={item} index={index} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Technical Arsenal - Infinite Marquee Ticker */}
      <section className="bg-white dark:bg-[#050505] border-t border-black/10 dark:border-white/10 relative z-20 py-24 sm:py-32 overflow-hidden">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-20 mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-black dark:text-white mb-6 leading-none"
          >
            Core Technologies
          </motion.h2>
        </div>

        {/* Marquee Rows Container */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full relative">

          {/* Fading Edges for the marquee */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Moves Left */}
          <div className="flex w-[200%] sm:w-full overflow-hidden relative">
            <motion.div
              className="flex gap-6 sm:gap-8 min-w-max px-3 sm:px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            >
              {[...row1Skills, ...row1Skills].map((skill, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-5 px-8 sm:px-10 py-5 sm:py-6 bg-[#F5F5F5] dark:bg-[#111111] rounded-full border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors group cursor-default">
                  <i className={`${skill.icon} text-3xl sm:text-4xl text-black dark:text-white group-hover:scale-110 transition-transform`} />
                  <span className="text-base sm:text-lg font-bold tracking-tight text-black dark:text-white">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Moves Right */}
          <div className="flex w-[200%] sm:w-full overflow-hidden relative">
            <motion.div
              className="flex gap-6 sm:gap-8 min-w-max px-3 sm:px-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 45, repeat: Infinity }}
            >
              {[...row2Skills, ...row2Skills].map((skill, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-5 px-8 sm:px-10 py-5 sm:py-6 bg-[#F5F5F5] dark:bg-[#111111] rounded-full border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors group cursor-default">
                  <i className={`${skill.icon} text-3xl sm:text-4xl text-black dark:text-white group-hover:scale-110 transition-transform`} />
                  <span className="text-base sm:text-lg font-bold tracking-tight text-black dark:text-white">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3: Moves Left */}
          <div className="flex w-[200%] sm:w-full overflow-hidden relative">
            <motion.div
              className="flex gap-6 sm:gap-8 min-w-max px-3 sm:px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              {[...row3Skills, ...row3Skills].map((skill, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-5 px-8 sm:px-10 py-5 sm:py-6 bg-[#F5F5F5] dark:bg-[#111111] rounded-full border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors group cursor-default">
                  <i className={`${skill.icon} text-3xl sm:text-4xl text-black dark:text-white group-hover:scale-110 transition-transform`} />
                  <span className="text-base sm:text-lg font-bold tracking-tight text-black dark:text-white">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* Triumphs Section - Clean Minimalist Table Layout */}
      <section className="bg-[#f3f3f3] dark:bg-[#0a0a0a] py-16 sm:py-20 px-6 sm:px-12 md:px-20 relative z-20 border-t border-black/10 dark:border-white/10">
        <div className="max-w-[1000px] mx-auto">

          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-black dark:text-white leading-none"
            >
              Triumphs
            </motion.h2>
          </div>

          {/* Table Container */}
          <div className="w-full">

            {/* Table Header - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-12 gap-4 sm:gap-6 pb-3 border-b border-black/20 dark:border-white/20 mb-4">
              <div className="col-span-5">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Role & Organization</span>
              </div>
              <div className="col-span-3">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Key Highlights</span>
              </div>
              <div className="col-span-4">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Details</span>
              </div>
            </div>

            {/* Row 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-8 border-b border-black/10 dark:border-white/10 group"
            >
              <div className="md:col-span-5 flex flex-col justify-start">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-black dark:text-white leading-[1.1] mb-1.5 group-hover:text-neutral-500 transition-colors duration-300">
                  Freelance Developer
                </h3>
                <span className="text-xs sm:text-sm text-neutral-500 font-medium">@WebCros</span>
              </div>
              <div className="md:col-span-3 flex flex-col gap-1.5">
                <span className="text-[10px] sm:text-xs font-medium text-black dark:text-white/80">Worked on real client projects</span>
                <span className="text-[10px] sm:text-xs font-medium text-black dark:text-white/80">Global business websites</span>
                <span className="text-[10px] sm:text-xs font-medium text-black dark:text-white/80">Delivered production-ready solutions</span>
              </div>
              <div className="md:col-span-4 flex flex-col justify-start">
                <p className="text-[10px] sm:text-xs font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Building and delivering scalable web solutions and premium digital experiences for clients worldwide. Focusing on modern architectures and highly optimized deployments.
                </p>
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-8 border-b border-black/10 dark:border-white/10 group"
            >
              <div className="md:col-span-5 flex flex-col justify-start">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-black dark:text-white leading-[1.1] mb-1.5 group-hover:text-neutral-500 transition-colors duration-300">
                  DevOps & Python<br />Enthusiast
                </h3>
                <span className="text-xs sm:text-sm text-neutral-500 font-medium">@Wipro</span>
              </div>
              <div className="md:col-span-3 flex flex-col gap-1.5">
                <span className="text-[10px] sm:text-xs font-medium text-black dark:text-white/80">AWS & Docker</span>
                <span className="text-[10px] sm:text-xs font-medium text-black dark:text-white/80">Kubernetes & Jenkins</span>
                <span className="text-[10px] sm:text-xs font-medium text-black dark:text-white/80">Linux OS</span>
                <span className="text-[10px] sm:text-xs font-medium text-black dark:text-white/80">CI/CD Pipelines</span>
              </div>
              <div className="md:col-span-4 flex flex-col justify-start">
                <p className="text-[10px] sm:text-xs font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Comprehensive training and hands-on experience in cloud infrastructure, containerization, and continuous integration/deployment automation.
                </p>
              </div>
            </motion.div>

            {/* Row 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-8 border-b border-black/10 dark:border-white/10 group"
            >
              <div className="md:col-span-5 flex flex-col justify-start">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-black dark:text-white leading-[1.1] mb-1.5 group-hover:text-neutral-500 transition-colors duration-300">
                  COE Graduate
                </h3>
                <span className="text-xs sm:text-sm text-neutral-500 font-medium">@Tech Mahindra</span>
              </div>
              <div className="md:col-span-3 flex flex-col gap-1.5">
                <span className="text-[10px] sm:text-xs font-medium text-black dark:text-white/80">Enterprise software</span>
                <span className="text-[10px] sm:text-xs font-medium text-black dark:text-white/80">Development training</span>
                <span className="text-[10px] sm:text-xs font-medium text-black dark:text-white/80">Industry-focused learning</span>
              </div>
              <div className="md:col-span-4 flex flex-col justify-start">
                <p className="text-[10px] sm:text-xs font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Intensive training program focused on enterprise-level software engineering practices, industry standards, and professional development.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Connect with WebCros Section */}
      <section className="bg-[#f2efe9] dark:bg-[#0a0a0a] py-16 sm:py-24 px-6 sm:px-12 md:px-20 relative z-20 border-t border-black/10 dark:border-white/10 overflow-hidden">

        {/* Leaf Shadow Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply dark:mix-blend-soft-light dark:opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1590082871875-0640ee071d87?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">

          {/* Left: Huge Text */}
          <div className="pr-0 lg:pr-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black dark:text-white leading-[1.05]"
            >
              Made to<br />last,<br />designed to<br />endure.
            </motion.h2>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-lg lg:ml-auto w-full"
          >
            <p className="text-base sm:text-lg font-medium text-black dark:text-white mb-6 leading-snug">
              Connect with WebCros. Reach out to discuss your next big project or partnership.
            </p>

            <form action="https://formsubmit.co/talaganarajesh@gmail.com" method="POST" className="flex flex-col gap-4">
              {/* FormSubmit Configurations */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New WebCros Connection Request!" />

              {/* Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email *"
                  required
                  className="w-full bg-transparent border border-black/20 dark:border-white/20 rounded-full px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform" aria-label="Submit Email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 mt-2 px-1">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input type="checkbox" required className="w-3.5 h-3.5 rounded-full border border-black/20 dark:border-white/20 appearance-none checked:bg-black dark:checked:bg-white cursor-pointer transition-colors shrink-0" />
                </div>
                <p className="text-[10px] sm:text-xs font-medium text-neutral-500 leading-tight">
                  By submitting your email you agree to connect with the WebCros team and accept our Privacy Policy.
                </p>
              </div>
            </form>
          </motion.div>

        </div>
      </section>
      {/* Final Contact & Footer Section - Premium Dark UI Structure */}
      <section className="bg-[#111111] dark:bg-[#050505] text-white pt-16 sm:pt-20 pb-8 px-6 sm:px-12 md:px-20 relative z-20 overflow-hidden rounded-t-[3rem] mt-12">

        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute bottom-0 left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#E50914]/5 blur-[120px]" />
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">

          {/* Grid of Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-20 sm:mb-32">

            {/* User Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 lg:max-w-sm"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">About Me</h4>
              <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-300">
                I'm Nani Reddy, a passionate DevOps engineer and Full-Stack Developer at WebCros.
                I specialize in robust cloud infrastructure, scalable systems, and elegant Python architectures.
              </p>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Socials</h4>
              <div className="flex flex-col gap-4">
                {[
                  { name: "LinkedIn", url: "https://linkedin.com/in/nanireddy" },
                  { name: "GitHub", url: "https://github.com/nanireddy" },
                  { name: "Twitter / X", url: "#" }
                ].map((social, idx) => (
                  <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-medium hover:text-neutral-400 transition-colors flex items-center gap-3 group w-fit">
                    {social.name}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#E50914]"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Navigation</h4>
              <div className="flex flex-col gap-4">
                {[
                  { name: "Home", url: "#" },
                  { name: "Projects", url: "#" },
                  { name: "Work", url: "#" },
                  { name: "Contact", url: "#" }
                ].map((link, idx) => (
                  <a key={idx} href={link.url} className="text-lg sm:text-xl font-medium hover:text-neutral-400 transition-colors flex items-center gap-3 group w-fit">
                    {link.name}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#E50914]"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Get in touch</h4>
              <a href="mailto:naniatworkmail@gmail.com" className="text-[15px] sm:text-base font-medium tracking-tight hover:text-neutral-400 transition-colors inline-block pb-4 border-b border-white/10 break-all w-fit">
                naniatworkmail@gmail.com
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <span className="text-sm font-medium text-neutral-400">Based in India.</span>
                <span className="text-sm font-medium text-neutral-400">Working Worldwide.</span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Branding & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center border-t border-white/10 pt-8"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 mt-2">
              <p className="text-xs sm:text-sm font-medium text-neutral-500 text-center sm:text-left">
                © {new Date().getFullYear()} Nani Reddy. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-xs sm:text-sm font-medium text-neutral-500 hover:text-white transition-colors cursor-pointer hidden sm:block">
                  Privacy Policy
                </span>
                <span
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white hover:text-[#E50914] transition-colors cursor-pointer flex items-center gap-2"
                >
                  Back to top <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
