import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projectPhotoOne from "@/public/projectPhotoOne.webp";
import projectPhotoTwo from "@/public/projectPhotoTwo.webp";
import projectPhotoThree from "@/public/projectPhotoThree.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation",
    location: "UMT Lahore",
    description: "I graduated with a Bachelor's degree in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "March 2023",
  },
  {
    title: "Training & Certification",
    location: "Coursera",
    description:
      "I have completed multiple certifications that have deepened my knowledge in React.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I started working as a React Frontend Developer at a remote software company.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer in a remote company based in USA. My stack includes React, React Native, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Application in React Native",
    description:
      "Developing a comprehensive E-Commerce application with React Native. ",
    tags: ["React Native", "Node.js", "MongoDB", "Redux", "Stripe"],
    imageUrl: projectPhotoOne,
  },
  {
    title: "Full-Stack AI SaaS Platform",
    description:
      "Building an AI-powered SaaS platform using Next.js 14, TypeScript, and Stripe. ",
    tags: ["Next.js 14", "TypeScript", "Stripe", "Cloudinary AI", "Clerk"],
    imageUrl: projectPhotoTwo,
  },
  {
    title: "Daily Life Turkish – React Native App",
    description:
      "A language-learning mobile app designed for English speakers to learn Turkish. ",
    tags: ["React Native", "Expo Go", "Firebase", "Text-to-Speech", "AsyncStorage"],
    imageUrl: projectPhotoThree,
  },
] as const;


export const skillsData = [
  "React Native",
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Redux",
  "Firebase",
  "Tailwind",
  "Stripe",
  "Parcel Tracking System",

  "Next.js",
  "TypeScript",
  "Cloudinary AI",
  "Clerk",
  "Stripe",
  "AI SaaS Development",

  "React Native",
  "Expo Go",
  "Text-to-Speech",
  "AsyncStorage",
  "Mobile App Development",
] as const;
