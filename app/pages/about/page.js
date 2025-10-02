// app/page.js

'use client'; // Bahut zaroori hai, kyunki hum hooks (useState) aur animations ka istemaal kar rahe hain

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Icons ko yahin import kar liya hai
import { CpuChipIcon, CodeBracketIcon, ServerStackIcon, CloudIcon } from '@heroicons/react/24/outline';


// Aapka saara skills data ek jagah par
const skillsData = [
    {
        id: 'gen_ai',
        label: 'Generative AI',
        icon: <CpuChipIcon className="w-6 h-6 mr-2" />,
        skills: [
            "LangChain", "LangGraph", "LCEL (Runnables)", "Prompt Engineering",
            "Vector Stores", "Retrievers", "Document Loaders", "Text Splitters",
            "Structured Output", "Chat Models", "Python", "FastAPI"
        ],
    },
    {
        id: 'full_stack',
        label: 'Full-Stack Development',
        icon: <CodeBracketIcon className="w-6 h-6 mr-2" />,
        skills: [
            "React.js", "Next.js", "React Native", "JavaScript", "HTML5", "CSS3",
            "Node.js", "Express.js", "WebSockets", "Rate Limiting", "JWT"
        ],
    },
    {
        id: 'cloud_devops',
        label: 'Cloud & DevOps',
        icon: <CloudIcon className="w-6 h-6 mr-2" />,
        skills: [
            "AWS", "IAM", "EC2", "EBS", "S3", "Lambda", "VPC", "Route 53",
            "ELB", "CloudFront", "CloudFormation", "CloudWatch", "SNS", "SQS", "AWS CLI"
        ],
    },
    {
        id: 'db_tools',
        label: 'Databases & Tools',
        icon: <ServerStackIcon className="w-6 h-6 mr-2" />,
        skills: [
            "MongoDB", "Redis", "DynamoDB", "VS Code", "Postman",
            "Vercel", "Netlify", "Render", "C++"
        ],
    },
];

// Poora page ab bas yeh ek component hai
export default function AboutPage() {
    // 'useState' se hum track karenge ki kaunsa tab active hai.
    const [activeTab, setActiveTab] = useState(skillsData[0].id);

    return (
        <main className="bg-neutral-950 min-h-screen text-white flex items-center justify-center">
            <div id="about" className="container mx-auto px-6 max-w-5xl py-20 md:py-32">

                {/* --- Introduction Text --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        My Technical Skills
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        I specialize in building intelligent, full-stack applications. My expertise lies in leveraging{' '}
                        <span className="text-cyan-400 font-semibold">Generative AI</span> with Python frameworks like LangChain & LangGraph, and creating robust systems on the{' '}
                        <span className="text-cyan-400 font-semibold">AWS cloud</span>.
                    </p>
                </motion.div>

                {/* --- Tabbed Skills Section --- */}
                <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    {/* Tab Buttons */}
                    <div className="flex flex-wrap justify-center border-b border-neutral-700 mb-8">
                        {skillsData.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${
                                    activeTab === tab.id ? 'text-cyan-400' : 'text-neutral-400 hover:text-white'
                                } relative flex items-center text-md md:text-lg font-medium py-3 px-5 transition-colors duration-300 focus:outline-none`}
                            >
                                {tab.icon}
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="active-tab-indicator"
                                        className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-cyan-400"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div>
                        {/* 'AnimatePresence' component ke enter aur exit animation ko handle karta hai. */}
                        <AnimatePresence mode="wait">
                            {skillsData.map((tab) =>
                                activeTab === tab.id && (
                                    <motion.div
                                        key={tab.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="flex flex-wrap justify-center gap-3 md:gap-4 text-center"
                                    >
                                        {tab.skills.map((skill) => (
                                            <div
                                                key={skill}
                                                className="bg-neutral-900/80 text-cyan-300 text-sm md:text-base font-mono py-2 px-4 rounded-lg border border-neutral-700 shadow-sm"
                                            >
                                                {skill}
                                            </div>
                                        ))}
                                    </motion.div>
                                )
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}