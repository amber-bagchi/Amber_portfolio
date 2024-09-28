import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    python,
    flask,
    huggingface,
    langchain,
    tensorflow,
    pytorch,
    c,
    panda,
    java,
    cplus
} from "../assets/icons";

export const skills = [

    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: panda,
        name: "Pandas",
        type: "Data Analysis Library",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: cplus,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: huggingface,
        name: "Hugging Face",
        type: "NLP Library",
    },
    {
        imageUrl: langchain,
        name: "LangChain",
        type: "Framework",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Deep Learning Framework",
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "Deep Learning Framework",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Web Framework",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "AI/ML Intern",
        company_name: "NarthCorp Inc",
        icon: meta, // Use an appropriate icon for NarthCorp
        iconBg: "#f5f5f5",
        date: "July 2024 - September 2024",
        points: [
            "Developed and fine-tuned AI/ML models using Hugging Face.",
            "Contributed to the Medical AI Assistant project.",
            "Optimized NLP tasks for better model performance.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Surusha Technology Pvt Ltd",
        icon: shopify, // Use an appropriate icon for Surusha
        iconBg: "#b7e4c7",
        date: "[December 2023] - [June 2024]",
        points: [
            "Developed a user-friendly chatbot for an eCommerce platform.",
            "Implemented product search functionality using Neo4j.",
            "Created seamless integration with Pinecone vector database.",
            "Built 'Add to Cart' functionality from the chatbot.",
        ],
    },
    // Add more experiences as necessary
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/amber-bagchi', // Update with your GitHub URL
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/amber-bagchi-1031a9288/', // Update with your LinkedIn URL
    }
];

export const projects = [
    
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'MCQ Generator Chatbot',
        description: 'Chatbot that generates multiple-choice questions (MCQs) from uploaded documents using advanced language models.',
        link: 'https://github.com/amber-bagchi/mcqgen',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Zomato Chatbot',
        description: 'Chatbot designed to enhance food ordering experiences through conversational interaction and restaurant recommendations.',
        link: 'https://github.com/amber-bagchi/ChatBot-Chainlit',
    },

    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Kidney Disease Classification',
        description: 'Developed a machine learning pipeline for kidney disease classification using VGG16 and MLflow.',
        link: 'https://github.com/amber-bagchi/Kidney_Tumor_Prediction', // Update with the actual link
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Medical Chatbot',
        description: 'Developed a comprehensive medical chatbot for handling patient queries and appointment bookings.',
        link: 'https://github.com/amber-bagchi/Medical-Chatbot', // Update with the actual link
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Shredder Machine Workers Safety Project',
        description: 'Created a safety system for workers operating paper shredders using Computer Vision.',
        link: 'https://github.com/amber-bagchi/Shredder-Machine-Workers-Safety-Project', // Update with the actual link
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Credit Card Fraud Detection',
        description: 'Built a web-based fraud detection system using multiple machine learning algorithms.',
        link: 'https://github.com/amber-bagchi/Credit-Card', // Update with the actual link
    },
];