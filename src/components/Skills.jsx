"use client";

import { useState } from "react";

const skills = [
  { name: "HTML", category: "frontend", icon: "html.png" },
  { name: "JavaScript", category: "frontend", icon: "javascript.png" },
  { name: "React", category: "frontend", icon: "react.png" },
  { name: "TypeScript", category: "frontend", icon: "ts.png" },
  { name: "Tailwind CSS", category: "frontend", icon: "css.png" },
  { name: "Next.js", category: "frontend", icon: "next.webp" },
  { name: "Node.js", category: "backend", icon: "node.png" },
  { name: "Express", category: "backend", icon: "express.webp" },
  { name: "MongoDB", category: "backend", icon: "mongodb.png" },
  { name: "Redux", category: "frontend", icon: "redux.webp" },
  { name: "CSS", category: "frontend", icon: "css.png" },
  { name: "Git/GitHub", category: "tools", icon: "git.png" },
  { name: "VS Code", category: "tools", icon: "vscode.webp" },
  { name: "Firebase", category: "tools", icon: "firebase.png" },
];

const categories = ["all", "frontend", "backend", "tools"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getButtonClass = (category) =>
    `
    px-5 py-2 rounded-full transition-colors duration-300 capitalize
    ${
      activeCategory === category
        ? "bg-primary text-primary-foreground"
        : "bg-secondary text-foreground hover:bg-secondary/80"
    }
  `;

  return (
    <section id="skills" className="py-18 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={getButtonClass(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              onClick={() =>
                setZoomedIndex(zoomedIndex === index ? null : index)
              }
              className={`
                bg-card p-6 rounded-lg shadow-sm cursor-pointer text-center
                transition-transform duration-300
                ${zoomedIndex === index ? "scale-110 z-10" : "hover:scale-105"}
              `}
            >
              <img
                src={`/skills/${skill.icon}`}
                alt={skill.name}
                className="w-16 h-16 object-contain mx-auto mb-3"
              />
              <h3 className="text-md font-medium text-foreground">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
